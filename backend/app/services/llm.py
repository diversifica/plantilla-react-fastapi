from typing import Any
import httpx
from app.core.config import settings


async def generate_summary(topic: str) -> dict[str, Any]:
    if not settings.openai_api_key:
        return {"topic": topic, "summary": "OPENAI_API_KEY not configured"}

    headers = {"Authorization": f"Bearer {settings.openai_api_key}"}
    payload = {
        "model": "gpt-4o-mini",
        "messages": [
            {"role": "system", "content": "Eres un tutor"},
            {"role": "user", "content": f"Resume el tema {topic}"},
        ],
    }
    async with httpx.AsyncClient(timeout=30) as client:
        response = await client.post("https://api.openai.com/v1/chat/completions", json=payload, headers=headers)
        response.raise_for_status()
        data = response.json()
        return {"topic": topic, "summary": data["choices"][0]["message"]["content"]}