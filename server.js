const express = require('express');
const cors = require('cors');
const { FaissStore } = require('@langchain/community/vectorstores/faiss');
const {
  ChatGoogleGenerativeAI,
  GoogleGenerativeAIEmbeddings,
} = require('@langchain/google-genai');
const { ChatPromptTemplate } = require('@langchain/core/prompts');
const {
  createStuffDocumentsChain,
} = require('langchain/chains/combine_documents');
const { createRetrievalChain } = require('langchain/chains/retrieval');
const {
  createHistoryAwareRetriever,
} = require('langchain/chains/history_aware_retriever');
const { MessagesPlaceholder } = require('@langchain/core/prompts');

require('dotenv/config');

// --- CONFIGURATION ---
const PORT = process.env.PORT || 3001;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

// --- INITIALIZE MODELS AND EMBEDDINGS ---
const chatModel = new ChatGoogleGenerativeAI({
  apiKey: GEMINI_API_KEY,
  model: 'gemini-1.5-flash-latest',
});
const embeddings = new GoogleGenerativeAIEmbeddings({
  apiKey: GEMINI_API_KEY,
  modelName: 'embedding-001',
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let retrievalChain; // This will hold our main Q&A chain

// --- API ENDPOINTS ---

app.get('/api/status', (req, res) => {
  res.json({ status: 'ready', chainInitialized: !!retrievalChain });
});

app.post('/api/prompt', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  if (!retrievalChain) {
    return res.status(503).json({
      error: 'Chain is not initialized. Please wait or check server logs.',
    });
  }

  try {
    console.log(`\n--- New Prompt Received: "${prompt}" ---`);

    // We don't have chat history in this simple app, so we pass an empty array.
    const chatHistory = [];

    // The retrieval chain now internally handles query rewriting and document fetching.
    const result = await retrievalChain.invoke({
      chat_history: chatHistory,
      input: prompt,
    });

    console.log('[DEBUG] LLM Answer:', result.answer);
    console.log(`[DEBUG] Found ${result.context.length} context documents.`);

    res.json({
      answer: result.answer,
      context: result.context,
    });
  } catch (error) {
    console.error('Error processing prompt:', error);
    res.status(500).json({ error: 'Failed to process prompt.' });
  }
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// --- SERVER INITIALIZATION ---

/**
 * Loads the vector store and builds the question-answering chain.
 */
const initializeChain = async () => {
  try {
    console.log('Loading vector store...');
    const vectorStore = await FaissStore.load('faiss_index', embeddings);
    console.log('Vector store loaded successfully.');

    const retriever = vectorStore.asRetriever({ k: 8 }); // Increase k for more comprehensive context

    // This prompt is for the first step: rewriting the user's query.
    // It takes the user's question and a (currently empty) chat history
    // to produce a better standalone search query.
    const historyAwarePrompt = ChatPromptTemplate.fromMessages([
      new MessagesPlaceholder('chat_history'),
      ['user', '{input}'],
      [
        'user',
        'Given the above conversation, generate a search query to look up in order to get information relevant to the conversation. Only return the query and nothing else.',
      ],
    ]);

    // This chain creates the smarter, rewritten query.
    const historyAwareRetrieverChain = await createHistoryAwareRetriever({
      llm: chatModel,
      retriever,
      rephrasePrompt: historyAwarePrompt,
    });

    // This is the prompt for the second step: answering the question.
    // It uses the retrieved documents as context.
    const qaPrompt = ChatPromptTemplate.fromMessages([
      [
        'system',
        `You are a helpful and expert AI assistant for our company. Your task is to answer the user's question using the provided documentation context. Synthesize a clear and comprehensive answer from the context below. If the context contains relevant functions, parameters, or code snippets, be sure to include them in your answer. If the exact answer isn't in the context, explain what you did find and suggest how the user might find their answer based on the available information. Do not invent information that is not present in the context.\n\nContext:\n{context}`,
      ],
      new MessagesPlaceholder('chat_history'),
      ['user', '{input}'],
    ]);

    // This chain "stuffs" the documents into the final prompt.
    const ragChain = await createStuffDocumentsChain({
      llm: chatModel,
      prompt: qaPrompt,
    });

    // This is the final, complete chain that orchestrates the whole process.
    retrievalChain = await createRetrievalChain({
      retriever: historyAwareRetrieverChain,
      combineDocsChain: ragChain,
    });

    console.log('Smarter Question-Answering chain initialized successfully.');
  } catch (error) {
    console.error('Fatal error during chain initialization:', error);
  }
};

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  initializeChain();
});
