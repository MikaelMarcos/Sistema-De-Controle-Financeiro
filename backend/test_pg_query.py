import sys
from sqlmodel import Session, select
from app.database import engine
from app.models import ChatHistory, User

def test():
    try:
        with Session(engine) as session:
            users = session.exec(select(User)).all()
            for u in users:
                print(f"User {u.id}: {u.email}")
                history = session.exec(select(ChatHistory).where(ChatHistory.user_id == u.id).order_by(ChatHistory.timestamp.desc()).limit(10)).all()
                print(f"  Total history rows retrieved: {len(history)}")
                for h in history:
                    print(f"  [{h.timestamp}] {h.role}: {h.content[:50]}...")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test()
