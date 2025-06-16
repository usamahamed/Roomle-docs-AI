const express = require('express');
const path = require('path');
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
const { MultiQueryRetriever } = require('langchain/retrievers/multi_query');

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

    // This chain now uses the multi-query retriever internally
    const result = await retrievalChain.invoke({ input: prompt });

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

app.get('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// --- SERVER INITIALIZATION ---
const initializeChain = async () => {
  try {
    console.log('Loading vector store...');
    const vectorStore = await FaissStore.load('faiss_index', embeddings);
    console.log('Vector store loaded successfully.');

    // 1. Create a base retriever
    const baseRetriever = vectorStore.asRetriever({ k: 10 });

    // 2. Create the Multi-Query Retriever from the base retriever
    const retriever = MultiQueryRetriever.fromLLM({
      llm: chatModel,
      retriever: baseRetriever,
      verbose: true, // Set to true to see the generated queries in your console
    });

    // 3. Define the final prompt for answering the question
    const qaPrompt = ChatPromptTemplate.fromTemplate(`
You are a helpful and expert AI assistant for our company. Your task is to answer the user's question using the provided documentation context.
Synthesize a clear and comprehensive answer from the context below.
If the user asks for an example, construct a complete, runnable code block by piecing together information from the context. Explain what each part of the example does.
If the exact answer isn't in the context, explain what you did find and suggest how the user might find their answer based on the available information.

Context:
{context}

Question:
{input}

Answer:`);

    // 4. Create the document chain for "stuffing" the context into the prompt
    const ragChain = await createStuffDocumentsChain({
      llm: chatModel,
      prompt: qaPrompt,
    });

    // 5. Create the final retrieval chain that combines the multi-query retriever and the doc chain
    retrievalChain = await createRetrievalChain({
      retriever,
      combineDocsChain: ragChain,
    });

    console.log('Advanced Multi-Query RAG chain initialized successfully.');
  } catch (error) {
    console.error('Fatal error during chain initialization:', error);
  }
};

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  initializeChain();
});
