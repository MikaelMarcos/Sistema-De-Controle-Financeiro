import requests
import sys

BASE_URL = "http://127.0.0.1:8000"

def check_health():
    try:
        resp = requests.get(f"{BASE_URL}/health")
        print(f"Health Check: {resp.status_code}")
        print(resp.text)
    except Exception as e:
        print(f"Health Check Failed: {e}")

def check_analysis():
    print("Checking Analysis Endpoint...")
    try:
        # Mocking an authenticated request might be hard without a token if auth is enforced.
        # But wait, routers.py usually uses Depends(get_current_user).
        # We need a token.
        
        # Let's try to login first (if standard auth flow exists) or just hit it and see if we get 401 (Connectivity OK) vs Connection Error.
        
        resp = requests.get(f"{BASE_URL}/budget/analysis?month=1&year=2026")
        print(f"Analysis Status: {resp.status_code}")
        print(resp.text)
        
    except Exception as e:
        print(f"Analysis Request Failed: {e}")

if __name__ == "__main__":
    check_health()
    check_analysis()
