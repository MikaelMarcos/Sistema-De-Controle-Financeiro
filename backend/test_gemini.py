import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
KEY = os.getenv("GEMINI_API_KEY")
print(f"Key loaded: {KEY[:5]}...{KEY[-3:] if KEY else 'None'}")
genai.configure(api_key=KEY)

print("Testing generation with gemini-1.5-flash...")
try:
    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content("Responda apenas com: OK")
    print(f"Response: {response.text}")
except Exception as e:
    print(f"Error: {e}")
