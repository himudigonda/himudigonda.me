const items = [
  {
    year: '2025',
    projects: [
      {
        title: 'CollabWrite',
        description:
          'A real-time AI-powered collaborative editor enabling multi-user editing with Yjs CRDTs and WebSockets; integrated context-aware RAG-based AI writing assistance using OpenAI GPT-4 and Meta Llama 4 Maverick for content generation and refinement, reducing ideation-to-prototype time by 45%.',
        url: '',
        active: true,
        icon: 'resend',
        stats:
          'Yjs, WebSockets, FastAPI, LangChain, Redis, PostgreSQL, Next.js, Tailwind CSS, Socket.IO, GPT-4, Llama 4 Maverick',
      },
      {
        title: '_AI (Underscore AI)',
        description:
          'An end-to-end AI assistant for the Apple ecosystem, built as a multi-agent framework focusing on data privacy; integrates MCP Servers with tool and function calling for secure analysis of Health, Calendar, Texts, Notes, and Reminders on-device.',
        url: '',
        active: true,
        icon: 'resend',
        stats:
          'PyTorch, LangChain, CoreML, ONNX Runtime, FastAPI, Swift, Docker, Kubernetes, Transformers, Accelerate, Optuna, Pydantic, PEFT/LoRA, Weights & Biases, HuggingFace',
      },
      {
        title: 'FaceDetectX',
        description:
          'A real-time fraud detection pipeline using PySpark, PostgresSQL/ML, EvaDB, and Velox for multi-source metadata and image data processing; integrated a CNN-transformer ensemble model within the Spark environment, achieving sub-50ms latency with ONNX optimizations.',
        url: 'https://github.com/himudigonda/FraudDetectX',
        active: true,
        icon: 'resend',
        stats:
          'PySpark, PostgresSQL/ML, EvaDB, Velox, CNN, Transformers, ONNX, Distributed Processing, Real-Time Inference',
      },
      {
        title: 'Doppelgangerify',
        description:
          'Fine-tuned FLUX.1-Schnell and FLUX.1-Dev diffusion models using a LoRA pipeline on a custom dataset of 28 images to enhance image quality and subject understanding; evaluated improvements with FID and perceptual similarity metrics.',
        url: '',
        active: true,
        icon: 'resend',
        stats:
          'LoRA, FLUX.1-Schnell, FLUX.1-Dev, PyTorch, Hugging Face Diffusers, ONNX, FID, Perceptual Similarity Metrics, Fine-Tuning',
      },
      {
        title: 'Gemma-3 Reasoning Training with GRPO',
        description:
          'Fine-tuned the Gemma-3 model using the GRPO (Generative Reward Policy Optimization) framework to enhance reasoning abilities, leveraging the GSM8k dataset for training. Optimized model performance with GPU acceleration and hyperparameter tuning.',
        url: 'https://github.com/himudigonda/reasoning-gemma3',
        active: true,
        icon: 'resend',
        stats:
          'Python, GRPO, Gemma-3, PyTorch, Transformers, CUDA, YAML, Dataset Library, CLI, Configurable Training',
      },
      {
        title: 'SayItOut',
        description:
          'A macOS application that adds a system-wide context menu for text-to-speech (TTS) functionality, allowing users to right-click on selected text and convert it to speech. Integrates a FastAPI backend for processing and seamless playback.',
        url: 'https://github.com/himudigonda/SayItOut',
        active: true,
        icon: 'resend',
        stats:
          'macOS, Swift, FastAPI, Uvicorn, Text-to-Speech, Audio Processing, Python, Soundfile, Context Menu Integration',
      },
      {
        title: 'SonicSherlock',
        description:
          'A high-performance audio recognition system inspired by Shazam, designed to identify songs from short audio snippets by generating unique audio fingerprints. Utilizes Librosa for spectrogram generation (STFT), SciPy for peak detection, and combinatorial hashing for robust fingerprinting.',
        url: 'https://github.com/himudigonda/SonicSherlock',
        active: true,
        icon: 'resend',
        stats:
          'Python, FastAPI, Gradio, Librosa, PostgreSQL, Audio Fingerprinting, Real-Time Matching, Signal Processing, API Development',
      },
      {
        title: 'Forkast - AI-Powered Nutrition Assistant',
        description:
          'An AI-driven tool for scanning food barcodes and retrieving nutritional data from Open Food Facts. Integrates a conversational AI powered by the Llama 3.2: 3B Instruct Q8_0 model to explain health impacts, offering personalized dietary insights.',
        url: 'https://github.com/himudigonda/Forkast',
        active: true,
        icon: 'resend',
        stats:
          'Python, FastAPI, Streamlit, Open Food Facts API, Ollama, Llama 3.2, Barcode Scanning, Nutrition Data, Conversational AI Integration',
      },
      {
        title: 'Beast Watch - AI-Powered Wildlife Detection and Emergency Response System',
        description:
          'An AI-driven system using Google Gemini AI and YOLO models to identify wild animals from images and provide real-time emergency guidance. Aims to mitigate human-animal conflict by detecting dangerous wildlife and issuing alerts to nearby individuals and authorities.',
        url: 'https://github.com/himudigonda/BeastWatch',
        active: true,
        icon: 'resend',
        stats:
          'Python, Google Gemini AI, YOLO, Computer Vision, FastAPI, Jupyter, SMS Alerts, Real-Time Monitoring, Emergency Response',
      },  
      {
        title: 'ChessAI',
        description:
          'An adaptive, intelligence-driven Chess AI built for mastery and personalization—trained on historical and modern games, dynamically analyzing moves, strategies, and player behavior to provide a deeply tailored and evolving challenge for every user.',
        url: 'https://github.com/himudigonda/ChessAI',
        active: true,
        icon: 'resend',
        stats:
          'Python, PyTorch, Flask, React, NumPy, Chess, Material-UI, Dnd-Kit, TensorBoard, Stockfish Engine, Chess Engine API',
      },
      {
        title: 'LLao1',
        description:
          'A transparent, multi-modal AI reasoning agent leveraging step-by-step logic, powerful tools, and Large Language Models (LLMs) via Ollama to tackle complex, iterative, and self-correcting tasks with explainable precision.',
        url: 'https://github.com/himudigonda/LLao1',
        active: true,
        icon: 'resend',
        stats:
          'Python, Streamlit, Ollama, Hugging Face, Transformers, Exa API, Accelerate, Torch, PIL, JSON, Exa-py, PhiData.',
      },
      {
        title: 'LogicMind',
        description:
          'A modular framework for fine-tuning and evaluating large language models with Chain-of-Thought reasoning, optimizing dataset utilization, training, and distributed inference for advanced, adaptive intelligence.',
        url: 'https://github.com/himudigonda/LogicMind',
        active: true,
        icon: 'resend',
        stats:
          'Python, Transformers, PyTorch, Accelerate, Hugging Face Hub, Pydantic, Datasets, PEFT/LoRA, Weights & Bias, CUDA, Shell Scripting',
      },
    ],
  },
  {
    year: '2024',
    projects: [
      {
        title: 'Ensemble-UQ-LLM',
        description:
          'Engineered a scalable framework for training ensemble models leveraging LLaMA architecture, incorporating Low-Rank Adaptation (LoRA) for efficient fine-tuning, and providing advanced uncertainty metrics including variance, entropy, and mutual information for binary classification tasks.',
        url: 'https://github.com/himudigonda/EnsembleUQLLM', // Replace with actual URL
        active: true,
        icon: 'resend',
        stats:
          'Python, LLaMA, LoRA, Hugging Face, YAML, PyTorch, CUDA, BoolQ, Uncertainty Metrics, Shell Scripting',
      },
      {
        title: 'MastoGraph - Mastodon',
        description:
          'Developed a scalable social media analysis framework to perform real-time data crawling, NLP-based toxicity classification, and network analysis, utilizing advanced graph algorithms like PageRank and modularity for community detection and influence mapping.',
        url: 'https://github.com/himudigonda/mastograph',
        active: true,
        icon: 'resend',
        stats:
          'Python, Mastodon API, Llama3-8B, LangChain, NetworkX, PyTorch, Matplotlib, Seaborn, Community-Louvain',
      },
      {
        title: 'TriPendulum Dynamics',
        description:
          'A modular simulation framework for visualizing the dynamics of a triple-pendulum system. Includes a user-friendly interface, real-time plotting, configurable parameters, and unit-tested core components for seamless scaling and integration.',
        url: 'https://github.com/himudigonda/TriPendulum-Dynamics',
        active: true,
        icon: 'resend',
        stats:
          'Python, PyQt5, NumPy, SciPy, pyqtgraph, PySide6, Matplotlib, Random, Simulation Engine, Unit Testing, Utility Functions',
      },
      {
        title: 'x-of-Thought Reasoning',
        description:
          'Designed an advanced reasoning visualization platform utilizing Chain of Thought (CoT) and Graph of Thought (GoT) models, featuring interactive visualizations, dynamic node exploration, and sentiment analysis, seamlessly integrated through a Streamlit-based web interface.',
        url: 'https://github.com/himudigonda/x-of-Thought',
        active: true,
        icon: 'resend',
        stats:
          'Python, Streamlit, NetworkX, LangChain, PyTorch, OpenCV, Pandas, Pytorch Audio, Scikit-Learn, Plotly, Sentiment Analysis, Dynamic Graphs',
      },
      {
        title: 'Fake-or-Real (FoR) Speech',
        description:
          'Developed models for detecting synthetic speech using deep learning techniques and fine-tuned state-of-the-art architectures for audio classification tasks.',
        url: 'https://github.com/himudigonda/FoR_Audio',
        active: true,
        icon: 'resend',
        stats:
          'Python, PyTorch, Pytorch Audio, OpenCV, Pandas, Scikit-Learn, Speech Recognition, Audio Classification, Deep Learning',
      },
      {
        title: 'OpenForensics-DeepFake',
        description:
          'Developed a deepfake detection system with 98.59% accuracy leveraging Microsoft’s Swin Transformer, featuring a robust evaluation pipeline and advanced data augmentation techniques for enhanced reliability in forensic applications.',
        url: 'https://github.com/himudigonda/OpenForensics-DeepFake-Challenge',
        active: true,
        icon: 'resend',
        stats:
          'Python, PyTorch, Transformers, Timm, HuggingFace, Lightning, Albumentations, OpenCV, Model Evaluation, Data Augmentation, Computer Vision',
      },
      {
        title: 'Llama-Bots',
        description:
          'Built Llama-based RAG chatbots leveraging Streamlit and LangChain for NLP tasks and information retrieval, integrating multiple data sources.',
        url: 'https://github.com/himudigonda/LLaMABots',
        active: true,
        icon: 'resend',
        stats:
          'Python, PyTorch, Transformers, Streamlit, LangChain, API, Ollama, NLP, GenAI, Retrieval-Augmented Generation',
      },
      {
        title: 'Parallel Computing Tutorials',
        description:
          'Benchmarked distributed training methods including single GPU, data parallel, and distributed data parallel.',
        url: 'https://github.com/himudigonda/Parallel-Computing-Pytorch',
        active: true,
        icon: 'resend',
        stats:
          'Python, PyTorch, Timm, Torchvision, Sklearn, Albumentations',
      },
    ],
  },

  {
    year: '2023',
    projects: [
      {
        title: 'Classification-Benchmarker',
        description:
          'An extensible framework for benchmarking classification models with custom metrics and datasets.',
        url: 'https://github.com/jlianglab/Thesis_mudigonda',
        active: true,
        icon: 'resend',
        stats:
          'Python, PyTorch, Timm, Torchvision, Sklearn, Albumentations',
      },
      {
        title: 'Localization-Benchmarker',
        description:
          'A localization benchmarking tool supporting multiple models and datasets for performance comparison.',
        url: 'https://github.com/jlianglab/Thesis_mudigonda',
        active: true,
        icon: 'resend',
        stats:
          'Python, PyTorch, Timm, Torchvision, mmDetection, Albumentations',
      },
      {
        title: 'Otsu-Thresholding',
        description:
          'Implemented Otsu’s Thresholding algorithm for image segmentation tasks in PyTorch.',
        url: 'https://github.com/himudigonda/Otsu-Thresholding',
        active: true,
        icon: 'resend',
        stats:
          'Python, Image Segmentation, Math, Matplotlib',
      },
      {
        title: 'arxiv.org_crawler',
        description:
          'Designed a web crawler to rank and analyze preprints from arxiv.org based on user-defined metrics.',
        url: 'https://github.com/himudigonda/arxiv.org_crawler',
        active: true,
        icon: 'resend',
        stats:
          'Python, NLTK, BeautifulSoup, Web Crawler, Sklearn',
      },
    ],
  },

  {
    year: '2022',
    projects: [
      {
        title: 'Attendancer',
        description:
          'A face recognition-based attendance system using OpenCV and Dlib.',
        url: 'https://github.com/himudigonda/attendancer',
        active: true,
        icon: 'resend',
        stats:
          'Python, TensorFlow, OpenCV, Dlib, Face Recognition',
      },
      {
        title: 'NeuroLearn',
        description:
          'A face recognition-based attendance system using OpenCV and Dlib.',
        url: 'https://github.com/himudigonda',
        active: true,
        icon: 'resend',
        stats:
          'Python, TensorFlow, PyTorch, Scikit-learn, GloVe Embeddings, NLTK / SpaCy, MNE-Python, SciPy, PostgreSQL, MongoDB, AWS ',
      },
    ],
  },

  {
    year: '2021',
    projects: [
      {
        title: 'PopOS! Shell',
        description:
          'Contributed to PopOS! Shell, a GNOME Shell extension for enhanced window management.',
        url: 'https://github.com/himudigonda/shell',
        active: true,
        icon: 'resend',
        stats:
          'Linux, GNOME, JavaScript, Open Source',
      },
      {
        title: 'Android 12 AOSP ROM',
        description:
          'Developed Android 12 AOSP ROM for Redmi Note 7 and OnePlus 4 devices.',
        url: 'https://github.com/himudigonda/shell',
        active: true,
        icon: 'resend',
        stats:
          'Linux, Android, Open Source',
      },
    ],
  },

  {
    year: '2020',
    projects: [
      {
        title: 'sCrAPTCHA',
        description:
          'Developed a Python-based CAPTCHA system with secure authentication mechanisms.',
        url: 'https://github.com/himudigonda/sCrAPTCHA',
        active: true,
        icon: 'resend',
        stats:
          'Python, Captcha, Hashing, Pillow',
      },
      {
        title: 'Archcraft Linux',
        description:
          'Contributed to the lightweight and minimal Linux distribution Archcraft.',
        url: 'https://github.com/himudigonda/archcraft',
        active: true,
        icon: 'resend',
        stats:
          'Linux, Archcraft, Open Source',
      },
    ],
  },

  {
    year: '2019',
    projects: [
      {
        title: 'Music Genre Classification',
        description:
          'Developed a CNN model to classify music genres using spectrogram and wavelet features.',
        url: 'https://github.com/himudigonda/cNN-Based-Music-Genre-Classification',
        active: true,
        icon: 'resend',
        stats:
          'Python, Keras, TensorFlow, Librosa',
      },
    ],
  },
];

export default items;
