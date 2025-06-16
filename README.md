# AI-Powered Documentation Assistant

This project provides a "smart prompts" UI and a robust backend that leverages Google's Gemini models to create a custom AI assistant trained on Roomle documentation. It uses a Retrieval-Augmented Generation (RAG) architecture to provide accurate, context-aware answers based on a corpus of Markdown files.

---

## Features

- **Custom Knowledge Base**: Ingests a directory of Markdown files (including subdirectories) to create a specialized knowledge base.
- **Intelligent Search**: Uses a sophisticated RAG pipeline with **Query Transformation**. User questions are first rewritten by an AI model into an optimized search query, leading to more relevant document retrieval.
- **High-Quality Answers**: Leverages Google's `gemini-1.5-flash-latest` model to synthesize comprehensive answers based on the retrieved document context.
- **Interactive Web UI**: A clean, responsive chat interface allows users to ask questions and receive answers in real-time.
- **Syntax Highlighting**: Code blocks in the AI's answers (JavaScript, JSON, etc.) are automatically formatted and highlighted for readability.
- **Source Context Display**: Shows the specific document snippets used by the AI to generate its answer, providing transparency and allowing for verification.
- **Simple Deployment Model**: The Node.js backend is configured to serve both the API and the static frontend, simplifying the deployment process.

---

## Architecture Overview

The project is divided into three main components:

1.  **Vectorization Script (`vectorize.js`)**:

    - This is a one-time script that recursively scans the `docs/` directory for all Markdown files.
    - It uses a Markdown-aware text splitter to intelligently break the documents into coherent chunks.
    - It then uses Google's `embedding-001` model to convert these text chunks into vector embeddings.
    - Finally, it stores these embeddings in a local `faiss_index` directory for efficient similarity searching.

2.  **Node.js Backend (`server.js`)**:

    - An Express.js server that exposes a simple API.
    - On startup, it loads the `faiss_index` and initializes a sophisticated LangChain question-answering chain.
    - When a prompt is received, it uses the **Query Transformation** technique to refine the user's question into an optimal search query.
    - It retrieves the most relevant document chunks from the vector database based on the refined query.
    - It passes the user's original question and the retrieved context to the Gemini model to generate a final answer.
    - It also serves the static HTML, CSS, and JS files for the frontend UI.

3.  **Frontend UI (`public/index.html`)**:
    - A single-page application built with HTML, Tailwind CSS, and vanilla JavaScript.
    - Provides the chat interface for users to interact with the AI assistant.
    - Includes the `highlight.js` library to automatically format and render code blocks in the AI's responses.
    - Displays the source documents that the AI used to formulate its answer.

---

## Technical Deep Dive: How It Works

The application follows a modern Retrieval-Augmented Generation (RAG) workflow orchestrated by LangChain.js.

1. **User Interaction**: The user types a question into the frontend UI and hits "Send".

2. **API Request**: The frontend sends a `POST` request to the `/api/prompt` endpoint on the Node.js server.

3. **Query Transformation**: The `server.js` receives the request. The main `retrievalChain` begins its process. Its first step, the `historyAwareRetrieverChain`, sends the user's raw question to the Gemini model with a specific instruction: "generate a search query...". This transforms a conversational question (e.g., "how do I add a cube?") into a more effective, keyword-rich query for the vector database (e.g., "RoomleScript function to create cube geometry").

4. **Vector Search (Retrieval)**: The newly generated search query is used to perform a similarity search against the FAISS vector database. The system retrieves the top `k` (currently 8) most relevant document chunks based on semantic similarity.

5. **Context Stuffing**: The original user question and the retrieved document chunks are "stuffed" into the final prompt template (`qaPrompt`). This template instructs the main Gemini model on its role, how to behave, and provides it with the necessary context to answer the question accurately.

6. **Answer Generation (Generation)**: The fully formed prompt, rich with context, is sent to the `gemini-1.5-flash-latest` model. The model synthesizes the information from the context to generate a comprehensive answer.

7. **API Response**: The server sends a JSON object back to the frontend containing both the final `answer` and the `context` (the source documents used).

8. **Frontend Rendering**: The UI receives the JSON response.

   - It parses the `answer` string, identifies any Markdown code blocks (\`\`\`... \`\`\`), and uses `highlight.js` to render them with syntax highlighting.

   - It creates an expandable "Sources" section and populates it with the content of each document from the `context` array.

   ## Technology Stack

### Backend

- **[Node.js](https://nodejs.org/)**: The core JavaScript runtime for the server.

- **[Express.js](https://expressjs.com/)**: A minimal and flexible web application framework for Node.js, used to create the API and serve the frontend.

- **[LangChain.js](https://js.langchain.com/)**: The primary AI orchestration library. We use it to create complex chains that handle query transformation, document retrieval, and answer generation.

- **[Google Gemini Models](https://ai.google.dev/)**:

  - `gemini-1.5-flash-latest`: Used for the high-level reasoning tasks of query transformation and final answer synthesis.

  - `embedding-001`: A highly efficient model used to convert text documents into numerical vectors (embeddings).

- **[FAISS (Facebook AI Similarity Search)](https://faiss.ai/)**: A library for efficient similarity search in large datasets of vectors. `faiss-node` provides the Node.js bindings.

### Frontend

- **HTML5 & Vanilla JavaScript**: The foundation of the web application, keeping it lightweight and fast.

- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building a modern and responsive user interface.

- **[highlight.js](https://highlightjs.org/)**: A powerful syntax highlighter used to automatically format code snippets returned by the AI.

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0 or later recommended)

- A Google AI API Key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0 or later recommended)
- A Google AI API Key. You can get one from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Backend Setup

1.  **Clone the Project:**
    Clone this repository to your local machine.

2.  **Install Dependencies:**
    Navigate to the project's root directory (`doc-ai-backend/`) and run:

    ```bash
    npm install
    ```

3.  **Create `.env` File:**
    In the root of the project, create a file named `.env`. This file is for storing your secret API key locally and should **never** be committed to Git. Add your API key to it:

    ```
    GEMINI_API_KEY="YOUR_GOOGLE_AI_API_KEY"
    ```

4.  **Add Your Documentation:**
    Place all Roomle Markdown documentation files and folders into the `docs/` directory.

5.  **Vectorize Your Documents:**
    Run the vectorization script. This will read all files in the `docs/` folder, chunk them, and create a `faiss_index` directory containing the vector database.

    ```bash
    node vectorize.js
    ```

    **Note:** You only need to re-run this script when you add, remove, or update your documentation files.

6.  **Run the Server:**
    Start the backend server locally.
    ```bash
    node server.js
    ```
    Your application should now be running on `http://localhost:3001`.

---

## Deployment

This project is configured for a simple, single-server deployment on platforms like Render or Heroku.

1.  **Push to GitHub:**
    Ensure your entire project, **excluding** the `.env` and `node_modules` folders, is pushed to a GitHub repository. Your `.gitignore` file should prevent these from being committed.

2.  **Create a New Web Service on Render:**

    - Sign up or log in to [Render](https://render.com/).
    - Create a "New Web Service" and connect it to your GitHub repository.

3.  **Configure the Render Service:**

    - **Runtime:** `Node`
    - **Build Command:** `npm install && node vectorize.js` (This command is crucial as it builds the vector database on the server during deployment).
    - **Start Command:** `node server.js`

4.  **Add Environment Variable:**
    - In the Render dashboard under "Environment", add a secret key:
    - **Key:** `GEMINI_API_KEY`
    - **Value:** Paste your actual Google AI API key.

Render will automatically deploy your application. Once complete, you will have a public URL for your AI Docs Assistant.
