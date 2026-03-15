import os
import httpx
from dotenv import load_dotenv

load_dotenv()

TINYFISH_API_KEY = os.getenv("TINYFISH_API_KEY")

TINYFISH_URL = "https://agent.tinyfish.ai/v1/automation/run-sse"


async def run_tinyfish_agent(task):

    payload = {
        "task": task,
        "max_steps": 5
    }

    headers = {
        "Authorization": f"Bearer {TINYFISH_API_KEY}",
        "Content-Type": "application/json"
    }

    async with httpx.AsyncClient(timeout=60) as client:

        response = await client.post(
            TINYFISH_URL,
            json=payload,
            headers=headers
        )

        if response.status_code != 200:
            return {
                "error": "TinyFish request failed",
                "details": response.text
            }

        return response.json()