import json
import os

MEMORY_FILE = "memory.json"


def save_research(task, results):

    data = []

    if os.path.exists(MEMORY_FILE):
        with open(MEMORY_FILE, "r") as f:
            data = json.load(f)

    data.append({
        "task": task,
        "results": results
    })

    with open(MEMORY_FILE, "w") as f:
        json.dump(data, f, indent=2)


def load_memory():

    if not os.path.exists(MEMORY_FILE):
        return []

    with open(MEMORY_FILE, "r") as f:
        return json.load(f)