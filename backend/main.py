from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EnhanceRequest(BaseModel):
    section: str
    content: str

@app.post("/ai-enhance")
async def ai_enhance(request: EnhanceRequest):
    improved_content = f"💡 Improved version of: {request.content}"
    return {"improved_content": improved_content}

@app.post("/save-resume")
async def save_resume(resume: dict):
    with open("saved_resume.json", "w") as f:
        json.dump(resume, f, indent=2)
    return {"message": "Resume saved successfully"}
