# 🤖 Multi-Model GenAI Application with LangChain
This project demonstrates how to build a multi-model Generative AI application using LangChain, Flask, and IBM watsonx.ai.
Users can submit the same prompt to different foundation models—including 
IBM Granite, Meta Llama, and Mistral—and compare response style and latency through a common application interface.
## 📑 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [🏗️ Architecture](#️-architecture)
- [✨ Features](#-features)
- [🧠 Models Compared](#-models-compared)
- [⚙️ Tech Stack](#️-tech-stack)
- [🔗 LangChain Workflow](#-langchain-workflow)
- [📊 Model Comparison](#-model-comparison)
- [📸 Application Screenshots](#-application-screenshots)
- [📂 Project Structure](#-project-structure)
- [🚀 Running the Application](#-running-the-application)
- [💡 Key Learnings](#-key-learnings)
 ##  Project Overview

This project explores how different Large Language Models (LLMs) respond to the same user prompts when integrated through a common application framework.

The application was built using **Python, LangChain, Flask, and IBM watsonx.ai** and provides a simple web interface where users can select and interact with multiple foundation models.

### Models evaluated
- **Meta Llama 4 Maverick**
- **IBM Granite 4 H Small**
- **Mistral Small 3.1**

The project demonstrates how LangChain can provide a reusable abstraction layer for working with different LLMs while supporting model-specific prompt templates and structured JSON responses.

The application also records response latency, allowing model outputs and response times to be compared during testing.
