from fastapi import APIRouter, Depends
from sqlmodel import Session

from app.core.database import get_session
from app.schemas.user import UserRead
from app.models.user import User
from app.services.llm import generate_summary

router = APIRouter()


@router.get("/health")
def health_check():
    return {"status": "ok"}


@router.get("/users", response_model=list[UserRead])
def list_users(session: Session = Depends(get_session)):
    return session.query(User).all()


@router.get("/llm/summary")
async def llm_summary(topic: str):
    return await generate_summary(topic)