// vectorize.js
// This script reads markdown files from a directory and all its subdirectories,
// splits them into chunks using a Markdown-aware splitter with improved settings,
// creates vector embeddings, and saves them to a local FAISS index.

const { promises: fs } = require('fs');
const path = require('path');
const { FaissStore } = require('@langchain/community/vectorstores/faiss');
const { GoogleGenerativeAIEmbeddings } = require('@langchain/google-genai');
const { MarkdownTextSplitter } = require('langchain/text_splitter');
require('dotenv/config');

// --- CONFIGURATION ---
const DOCS_PATH = path.resolve('./docs'); // Path to your markdown files
const FAISS_INDEX_PATH = 'faiss_index'; // Path to save the FAISS index

/**
 * Main function to execute the vectorization process.
 */
async function main() {
  console.log('Starting vectorization process...');
  console.log(
    'IMPORTANT: This will create a new vector database. If you have an existing `faiss_index` directory, please delete it first.',
  );

  try {
    // 1. Load documents from the specified directory and all subdirectories
    console.log(`Scanning for documents in '${DOCS_PATH}'...`);
    const documents = await loadDocumentsRecursively(DOCS_PATH);
    if (documents.length === 0) {
      console.log('No documents found in the ./docs directory. Aborting.');
      return;
    }
    console.log(
      `Loaded ${documents.length} document(s) from all subdirectories.`,
    );

    // 2. Split documents into smaller chunks using the Markdown splitter with improved settings
    // Increasing chunkSize and chunkOverlap to keep more context together, especially for tables.
    const splitter = new MarkdownTextSplitter({
      chunkSize: 2000,
      chunkOverlap: 200,
    });
    const chunks = await splitter.splitDocuments(documents);
    console.log(`Split documents into ${chunks.length} chunks.`);

    // Log an example chunk to verify the quality
    if (chunks.length > 0) {
      console.log('\n--- Example Chunk ---');
      console.log(chunks[0].pageContent);
      console.log('---------------------\n');
    }

    // 3. Create embeddings for the chunks
    console.log('Creating embeddings and building FAISS index...');
    const embeddingsModel = new GoogleGenerativeAIEmbeddings({
      apiKey: process.env.GEMINI_API_KEY,
      modelName: 'embedding-001',
    });

    // This creates the vector store from the document chunks
    const vectorStore = await FaissStore.fromDocuments(chunks, embeddingsModel);

    // 4. Save the FAISS index to the disk
    await vectorStore.save(FAISS_INDEX_PATH);
    console.log(`FAISS index created and saved to '${FAISS_INDEX_PATH}'.`);
    console.log(
      'Vectorization complete! Please restart your server to use the new database.',
    );
  } catch (error) {
    console.error('An error occurred during vectorization:', error);
  }
}

/**
 * Recursively loads all .md files from a directory and its subdirectories.
 * @param {string} directoryPath - The path to the directory to scan.
 * @returns {Promise<Array<{pageContent: string, metadata: {source: string}}>>}
 */
async function loadDocumentsRecursively(directoryPath) {
  let documents = [];
  const entries = await fs.readdir(directoryPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(directoryPath, entry.name);
    if (entry.isDirectory()) {
      const subDirDocs = await loadDocumentsRecursively(fullPath);
      documents = documents.concat(subDirDocs);
    } else if (path.extname(entry.name) === '.md') {
      const content = await fs.readFile(fullPath, 'utf8');
      documents.push({
        pageContent: content,
        metadata: { source: fullPath },
      });
    }
  }
  return documents;
}

// Execute the main function
main();
