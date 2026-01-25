from app.database import engine
from sqlalchemy import text

print("Dropping table chathistory...")
with engine.connect() as conn:
    conn.execute(text("DROP TABLE IF EXISTS chathistory CASCADE"))
    conn.commit()
print("Table dropped. Restart the backend to recreate it correctly.")
