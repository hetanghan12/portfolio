export const projects = [
    {
        id: 1,
        title: "CloudSpace – Secure Cloud Storage Platform",
        category: "Cloud Storage / SaaS",
        description:
            "Secure cloud storage platform with file upload, sharing, AI document assistant, and real-time storage insights.",
        stack: ["Angular", "Node.js", "Firebase","Aws s3"],
        repo: "https://github.com/hetanghan12/major-projecct",
    },
    {
        id: 2,
        title: "RAG Document Assistant",
        category: "AI / NLP",
        description:
            "Retrieval-Augmented Generation system that answers user queries using uploaded documents and vector search.",
        stack: ["Python", "Pinecone", "OpenAI", "n8n", "Embeddings"],
        repo: "https://github.com/hetanghan12/rag-agent",
    },
    {
        id: 3,
        title: "AI Email Labeling Automation",
        category: "Automation / AI",
        description: "Automated email classification system that labels incoming messages using NLP and workflow automation.",
        stack: ["Python", "IMAP", "n8n", "NLP", "Automation"],
        repo: "https://github.com/hetanghan12/automatic-mail-labeling",
        live: null,
    },
    {
        id: 4,
        title: "Whisper LLM Retraining Pipeline",
        category: "Machine Learning",
        description:
            "Pipeline for fine-tuning Whisper models on custom datasets to improve speech recognition accuracy.",
        stack: ["Python", "Whisper", "PyTorch", "Audio Processing"],
        repo: "https://github.com/hetanghan12/llm-retrain",
        live: null,
    },
];

export const categories = [
    "All",
    ...new Set(projects.map((p) => p.category)),
];
