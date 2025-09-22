from fastapi import APIRouter

from src.schemas.message import Message
from src.services.chat import chat

router = APIRouter()


@router.post("/chat")
async def chat_route(message: Message) -> Message:
    return chat(message.content)
