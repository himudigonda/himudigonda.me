---
title: "GroqRAG: Implementing advanced RAG models with Groq"
description: "This guide details the implementation of an advanced and robust RAG pipeline using the Groq API in Python. The pipeline includes multi-step document retrieval, verification, response generation, and a state-of-the-art ranking algorithm to identify the most relevant documents. It is designed to handle multiple documents stored in a data/ folder and maintain conversational context across messages."
slug: GroqRAG
date: "2024-08-06"
---


## GroqRAG: Implementing advanced RAG models with Groq
Read on [Medium](https://medium.com/@himudigonda/groqrag-implementing-advanced-rag-models-with-groq-1bcaa2f2e290)

Retrieval-Augmented Generation (RAG) enhances generative models by integrating information retrieved from relevant documents into the generation process. This guide details the implementation of an advanced and robust RAG pipeline using the Groq API in Python. The pipeline includes multi-step document retrieval, verification, response generation, and a state-of-the-art ranking algorithm to identify the most relevant documents. It is designed to handle multiple documents stored in a `data/` folder and maintain conversational context across messages.

### Step 1: Install Dependencies

    pip install groq requests PyPDF2 scikit-learn

### Step 2: Obtain API Key

    export GROQ_API_KEY=<your-api-key-here>

### Step 3: Implement Advanced RAG Pipeline with Groq API

**Environment Setup:**
Import the necessary libraries and set up the API key and base URL:

    import os
    from groq import Groq
    from PyPDF2 import PdfReader
    from sklearn.feature_extraction.text import TfidfVectorizer
    from sklearn.metrics.pairwise import cosine_similarity
    import numpy as np
    import glob
    from collections import deque
    # Set up your API key and base URL
    API_KEY = os.getenv("GROQ_API_KEY")
    BASE_URL = 'https://api.groq.com/openai/v1'
    client = Groq(api_key=API_KEY)

**Function to Extract Text from PDF:**
Define a function to extract text from a local PDF file:

    def extract_text_from_pdf(pdf_path):
        reader = PdfReader(pdf_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() or ""
        return text

### Function to Load and Extract Text from Multiple PDFs:

Define a function to load and extract text from all PDF files in the `data/` folder:

    def load_and_extract_texts_from_pdfs(data_folder="data/"):
        texts = []
        file_paths = glob.glob(os.path.join(data_folder, "*.pdf"))
        for file_path in file_paths:
            try:
                text = extract_text_from_pdf(file_path)
                texts.append({"text": text, "file_path": file_path})
            except Exception as e:
                print(f"Error processing {file_path}: {e}")
                return texts

**Function to Split Text into Chunks:**
Split the extracted text into manageable chunks for processing:

    def split_text_into_chunks(text, chunk_size=512):
        chunks = []
        for i in range(0, len(text), chunk_size):
            chunks.append(text[i:i+chunk_size])
        return chunks

**Advanced Ranking and Retrieval with TF-IDF and Cosine Similarity:**
Use TF-IDF and cosine similarity to identify the most relevant chunks based on the input query and apply additional ranking criteria for better performance:

    def retrieve_relevant_chunks(texts, query, top_k=5):
        corpus = [query] + [text["text"] for text in texts]
        vectorizer = TfidfVectorizer().fit_transform(corpus)
        vectors = vectorizer.toarray()
        cosine_matrix = cosine_similarity(vectors)
        similarity_scores = cosine_matrix[0][1:]  # Exclude query itself
        ranked_indices = np.argsort(similarity_scores)[-top_k:]
        relevant_texts = [texts[idx] for idx in ranked_indices]
        return relevant_texts

**Function to Generate a Response Based on Verified Chunks:**
Define a function that uses the verified chunks as context to generate a response using the Groq API:

    def generate_response(chunks, query, context_history=None, model="llama3–8b-8192"):
        context = " ".join([chunk["text"] for chunk in chunks])
        if context_history:
            context = " ".join(context_history) + " " + context
        response = client.chat.completions.create(
            messages=[{"role": "user", "content": f"Context: {context} Query: {query}"}],
            model=model,
            stream=False,
        )
        return response.choices[0].message.content

**Maintaining Conversational Context:**
Implement a function to maintain conversational context using a deque for efficient context management:

    def maintain_conversational_context(response, context_history, max_context_length=10):
        if len(context_history) >= max_context_length:
            context_history.popleft()
        context_history.append(response)
        return context_history

**Multi-Step RAG Function:**
Implement the main RAG function that orchestrates the extraction, retrieval, verification, and generation steps:

    def rag_pipeline(data_folder, query, context_history):
        # Step 1: Load and extract texts from PDFs
        texts = load_and_extract_texts_from_pdfs(data_folder)
        print(f"Loaded and Extracted Texts from {len(texts)} PDFs")

        # Step 2: Retrieve relevant chunks
        relevant_texts = retrieve_relevant_chunks(texts, query)
        print(f"Relevant Texts: {[text['file_path'] for text in relevant_texts]}")

        # Step 3: Split relevant texts into chunks
        chunks = []
        for text in relevant_texts:
            chunks.extend(split_text_into_chunks(text["text"]))

        # Step 4: Generate response
        response = generate_response(chunks, query, context_history)
        return response

**Interactive Command Line Interface:**
Implement an interactive CLI to allow users to input queries and receive responses while maintaining conversational context:

    def interactive_cli(data_folder="data/"):
        context_history = deque()
        print("Welcome to the RAG-powered conversational assistant! Type /bye to exit.")

        while True:
            user_input = input(">> user: ")
            if user_input.lower() == "/bye":
                print("Goodbye!")
                break

            response = rag_pipeline(data_folder, user_input, context_history)
            context_history = maintain_conversational_context(response, context_history)

            print(f">> groq: {response}")

**Run the Interactive CLI:
**Start the interactive CLI to begin the conversation:

    if __name__ == "__main__":
        interactive_cli()

### Explanation:

* **Environment Setup: **The necessary libraries are imported, and the API key is set up as an environment variable. The Groq client is initialized using the API key.

* **Text Extraction:** The `extract_text_from_pdf` function reads a PDF file and extracts its text content. The `load_and_extract_texts_from_pdfs` function loads all PDFs from the `data/` folder and extracts text from each.

* **Text Splitting:** The `split_text_into_chunks` function divides the extracted text into smaller, manageable chunks.

* **Advanced Ranking and Retrieval: **The `retrieve_relevant_chunks` function uses TF-IDF vectorization and cosine similarity to rank the documents based on their relevance to the query. It identifies the top-k most relevant documents. Additional ranking criteria can be added for improved performance.

* **Response Generation: **The `generate_response` function uses the verified chunks as context to generate a response using the Groq API. It also incorporates historical context if available.

* **Maintaining Conversational Context:** The `maintain_conversational_context` function maintains a history of previous responses to ensure continuity in the conversation.

* **Multi-Step RAG Pipeline:** The `rag_pipeline` function integrates extraction, splitting, retrieval, verification, and generation into a coherent workflow. It prints the number of loaded texts, the relevant texts’ file paths, and then generates the final response.

* **Interactive Command Line Interface:** An interactive CLI allows users to input queries and receive responses while maintaining conversational context. The conversation continues until the user types `/bye`.

## Make It More Innovative:

### **Feedback Mechanism:**

    def get_user_feedback():
        feedback = input(">> user: Please rate this response (1-5): ")
        try:
            rating = int(feedback)
            if 1 <= rating <= 5:
                return rating
            else:
                print("Invalid rating. Please enter a number between 1 and 5.")
                return get_user_feedback()
        except ValueError:
            print("Invalid input. Please enter a number between 1 and 5.")
            return get_user_feedback()

### Updating the Main Loop with Feedback:

    def interactive_cli(data_folder="data/"):
        context_history = deque()
        print("Welcome to the RAG-powered conversational assistant! Type /bye to exit.")

        while True:
            user_input = input(">> user: ")
            if user_input.lower() == "/bye":
                print("Goodbye!")
                break

            response = rag_pipeline(data_folder, user_input, context_history)
            context_history = maintain_conversational_context(response, context_history)

            print(f">> groq: {response}")

            # Get feedback from the user
            rating = get_user_feedback()
            print(f">> user: Rated the response as {rating}/5")

## Implementation of Visual and Interactive Responses:

### Generating Visual Summaries:

    import matplotlib.pyplot as plt

    def generate_visual_summary(texts):
        # Example: Generate a bar chart showing the length of each document
        lengths = [len(text["text"]) for text in texts]
        file_names = [os.path.basename(text["file_path"]) for text in texts]

        plt.figure(figsize=(10, 5))
        plt.bar(file_names, lengths, color='blue')
        plt.xlabel('Document')
        plt.ylabel('Length')
        plt.title('Length of Documents')
        plt.xticks(rotation=45)
        plt.tight_layout()
        plt.show()

**Updating the Main Loop to Include Visual Summaries:**

    def interactive_cli(data_folder="data/"):
        context_history = deque()
        print("Welcome to the RAG-powered conversational assistant! Type /bye to exit.")

        while True:
            user_input = input(">> user: ")
            if user_input.lower() == "/bye":
                print("Goodbye!")
                break

            response = rag_pipeline(data_folder, user_input, context_history)
            context_history = maintain_conversational_context(response, context_history)

            print(f">> groq: {response}")

            # Get feedback from the user
            rating = get_user_feedback()
            print(f">> user: Rated the response as {rating}/5")

            # Generate and display a visual summary
            texts = load_and_extract_texts_from_pdfs(data_folder)
            generate_visual_summary(texts)

By incorporating these innovative features, you can create a more engaging and advanced RAG pipeline that responds accurately, learns and adapts over time, provides visual insights, and maintains a seamless conversational experience.
