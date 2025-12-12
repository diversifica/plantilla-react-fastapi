import json
from pathlib import Path

from sqlmodel import Session
from app.core.database import engine
from app.models.user import User

DATA_DIR = Path(__file__).resolve().parents[1] / "data" / "json"


def seed_users():
    with Session(engine) as session:
        payload = json.loads((DATA_DIR / "users.json").read_text())
        for row in payload:
            session.add(User(**row))
        session.commit()


if __name__ == "__main__":
    seed_users()
    print("Seed data cargada ✅")