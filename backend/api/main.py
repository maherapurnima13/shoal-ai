from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from agent.planner import plan_task
from agent.tinyfish_runner import run_tinyfish_agent

# NEW: storage import
from storage.database import save_research, load_memory


app = FastAPI(
    title="Shoal AI",
    description="Autonomous Web Research Agent powered by TinyFish",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ResearchRequest(BaseModel):
    task: str


@app.get("/")
def root():
    return {"message": "Shoal AI backend is running"}


@app.post("/research")
async def run_research(request: ResearchRequest):

    # AI planning
    plan = plan_task(request.task)

    # Simulated agent activity timeline
    timeline = [
        "🔎 Searching competitors",
        "🌐 Visiting company websites",
        "📄 Extracting pricing pages",
        "📊 Collecting product features",
        "📁 Compiling research report",
        "✅ Research complete"
    ]

    # TinyFish execution
    tinyfish_result = await run_tinyfish_agent(request.task)

    # Example structured output (later replaced with real extraction)
    structured_results = [
        {
            "company": "Notion",
            "pricing": "$8/month",
            "website": "https://notion.so",
            "features": "Docs, AI assistant"
        },
        {
            "company": "ClickUp",
            "pricing": "$7/month",
            "website": "https://clickup.com",
            "features": "Tasks, productivity"
        },
        {
            "company": "Airtable",
            "pricing": "$10/month",
            "website": "https://airtable.com",
            "features": "Database workspace"
        }
    ]

    # NEW: Save research to memory database
    save_research(request.task, structured_results)

    return {
        "task": request.task,
        "plan": plan,
        "timeline": timeline,
        "results": structured_results
    }


# NEW: Memory endpoint
@app.get("/memory")
def get_memory():

    history = load_memory()

    return {
        "history": history
    }