import os
from sqlmodel import Session, select, create_engine
from app.models import ChatHistory, User
from dotenv import load_dotenv

load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")
if DATABASE_URL and DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

engine = create_engine(DATABASE_URL, echo=False)

try:
    with Session(engine) as session:
        users = session.exec(select(User)).all()
        with open('history_out.txt', 'w', encoding='utf-8') as f:
            for u in users:
                f.write(f"User {u.id}: {u.email}\n")
                history = session.exec(select(ChatHistory).where(ChatHistory.user_id == u.id).order_by(ChatHistory.timestamp.desc()).limit(10)).all()
                f.write(f"  Total history rows retrieved: {len(history)}\n")
                for h in history:
                    f.write(f"  [{h.timestamp}] {h.role}: {h.content[:50]}\n")
except Exception as e:
    with open('history_out.txt', 'w', encoding='utf-8') as f:
        f.write(f"Error: {e}")
