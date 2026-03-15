# 🚀 Shoal AI

### Autonomous Web Research Agent powered by TinyFish

> **Shoal AI turns hours of manual web research into minutes using autonomous AI agents.**

Shoal AI is an autonomous web research agent that uses the **TinyFish Web Agent API** to navigate real websites, extract structured information, and generate actionable research reports automatically.

Instead of manually visiting dozens of websites to gather information, users can simply describe a research task in natural language. Shoal AI will plan the task, interact with live websites, extract relevant data, and compile a structured report.

---

## 🌐 Why Shoal AI Exists

Modern knowledge work often requires gathering information from many websites.

Examples include:

* Competitor analysis
* Market research
* Lead generation
* Product intelligence
* Hiring market insights

These workflows typically require:

• searching multiple websites
• navigating dynamic pages
• extracting information manually
• compiling research reports

This process can take **hours of manual work**.

At the same time, while LLMs are powerful at generating text, most AI tools **cannot actually perform real work on the web**.

They summarize data — but they don’t **interact with websites**.

Shoal AI solves this by combining:

**AI reasoning + autonomous web execution using TinyFish.**

---

## What Shoal AI Does

Shoal AI is an **Autonomous Web Research Agent**.

Users simply enter a natural language request like:

```
Find the top 10 competitors of Notion and extract their pricing and features.
```

Shoal AI will automatically:

1️⃣ Understand the research task
2️⃣ Plan a multi-step workflow
3️⃣ Navigate real websites using TinyFish
4️⃣ Extract relevant information
5️⃣ Compile a structured research report

The result is delivered as a **structured dataset** ready for analysis.

---

## ⚡ Key Features

### Autonomous Research Agent

Shoal AI can understand natural language research tasks and convert them into multi-step workflows.

### 🌐 Live Web Interaction

Using the **TinyFish Web Agent API**, the system can:

* navigate real websites
* interact with dynamic pages
* handle multi-step browsing workflows

### AI Task Planning

An AI reasoning module breaks down user instructions into executable steps.

Example:

```
User task:
Find competitors of Notion and extract pricing
```

Generated execution plan:

```
1. Identify competing products
2. Visit official company websites
3. Locate pricing pages
4. Extract pricing and product information
5. Compile structured report
```

### 📊 Structured Research Output

Results are compiled into a structured dataset:

| Company  | Pricing | Website      | Features  |
| -------- | ------- | ------------ | --------- |
| Notion   | $8/mo   | notion.so    | Docs, AI  |
| ClickUp  | $7/mo   | clickup.com  | Tasks     |
| Airtable | $10/mo  | airtable.com | Databases |

### 📈 Agent Activity Timeline

Shoal AI shows the agent’s execution steps in real time:

```
🔎 Searching competitors
🌐 Visiting company websites
📄 Extracting pricing pages
📊 Collecting product features
📁 Compiling research report
✅ Research complete
```

### 💾 Agent Memory

Shoal AI remembers previous research tasks and builds a knowledge history.

Example:

```
Previous Research
• Find competitors of Notion
• AI startups in India
• AI productivity tools
```

### 📁 Exportable Reports

Research results can be exported as:

* CSV
* JSON

This makes Shoal AI useful for analysts and researchers.

---

## System Architecture

```
User Input (Research Task)
          │
          ▼
Frontend (Next.js + Tailwind)
          │
          ▼
Backend API (FastAPI)
          │
          ▼
AI Reasoning Planner
          │
          ▼
TinyFish Web Agent API
          │
          ▼
Live Website Navigation
          │
          ▼
Structured Data Extraction
          │
          ▼
Research Report Generation
```

---

## Technology Stack

### Frontend

* Next.js
* React
* Tailwind CSS

### Backend

* Python
* FastAPI

### AI & Agents

* OpenAI API
* TinyFish Web Agent API

### Data Processing

* BeautifulSoup
* JSON / CSV export

### Development Environment

* GitHub Codespaces

---

## 🔍 Example Use Cases

### Competitor Research

```
Find competitors of Airtable
Extract pricing and features
```

### Market Intelligence

```
Find AI productivity tools launched in 2024
Extract product descriptions and pricing
```

### Lead Generation

```
Find AI startups in India
Extract founders and websites
```

### Job Market Insights

```
Find companies hiring AI engineers
Extract job listings and salary ranges
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```
git clone https://github.com/maherapurnima13/shoal-ai
cd shoal-ai
```

---

### 2. Setup Backend

```
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Create `.env` file:

```
OPENAI_API_KEY=your_key
TINYFISH_API_KEY=your_key
```

Run server:

```
uvicorn api.main:app --reload
```

---

### 3. Setup Frontend

```
cd frontend
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🎬 Demo Workflow

1️⃣ User enters a research task
2️⃣ Shoal AI generates an execution plan
3️⃣ TinyFish navigates real websites
4️⃣ Data is extracted and structured
5️⃣ Results appear in a research table
6️⃣ User exports report

---

## 🌍 Impact

Shoal AI demonstrates how **autonomous web agents can transform knowledge work.**

Instead of manually navigating dozens of websites, professionals can delegate research tasks to AI agents.

This technology could significantly improve productivity for:

* Startup founders
* Venture capital analysts
* Product managers
* Market researchers
* Sales teams

---

## 🐟 Why TinyFish Matters

TinyFish enables AI agents to interact with the **live web**.

Without TinyFish, Shoal AI would not be able to:

* navigate real websites
* execute multi-step workflows
* extract live web data

TinyFish effectively transforms the web into an **executable environment for autonomous AI agents.**

---

## 🔮 Future Improvements

* Parallel multi-agent research
* Real-time browsing visualization
* Scheduled market monitoring
* Automated competitive intelligence dashboards
* SaaS deployment for teams

---

# 👨‍💻 Author

**Purnima Mahera**

AI Builder

---
