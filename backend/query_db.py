import sqlite3

conn = sqlite3.connect('database.db')  # Or financeiro.db?
cursor = conn.cursor()

# Let's check which db the app uses. In main.py it comes from 'from .database import create_db_and_tables'.
# Let's check both databases.
def check_db(db_name):
    print(f"--- Checking {db_name} ---")
    try:
        conn = sqlite3.connect(db_name)
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM chathistory ORDER BY timestamp DESC LIMIT 5")
        rows = cursor.fetchall()
        for r in rows:
            print(r)
        
        cursor.execute("SELECT count(*) FROM chathistory")
        print(f"Total history entries: {cursor.fetchone()[0]}")
    except Exception as e:
        print(f"Error querying {db_name}: {e}")

check_db('database.db')
check_db('financeiro.db')
