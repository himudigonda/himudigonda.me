const items = [
  {
    year: '2024',
    projects: [
      {
        title: 'UnderScore AI',
        description:
          'A multi-agentic AI framework exclusively for the Apple ecosystem, seamlessly interlacing with Health, Calendar, Reminders, Notes, and other native apps to assist users with secure, private data analysis in everyday tasks.',
        url: '', // Replace with actual URL
        active: true,
        icon: 'resend',
        stats:
          'PyTorch, LangChain, CoreML, ONNX Runtime, FastAPI, Swift, Docker, Kubernetes, Transformers, Accelerate, Optuna, Pydantic, PEFT/LoRA, Weights & Biases, HuggingFace',
      },
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
