import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    print("ERRO: API Key não encontrada no .env")
    exit(1)

genai.configure(api_key=api_key)

candidates = [
    "gemini-1.5-flash",
    "gemini-2.0-flash-exp",
    "gemini-1.5-pro",
    "gemini-pro",
    "models/gemini-1.5-flash"
]

print(f"Testando API Key: {api_key[:5]}...")

success = False
for model_name in candidates:
    print(f"--- Testando modelo: {model_name} ---")
    try:
        model = genai.GenerativeModel(model_name)
        response = model.generate_content("Responda apenas 'OK'")
        print(f"SUCESSO ABSOLUTO: {model_name}")
        print(f"Resposta: {response.text}")
        success = True
        break
    except Exception as e:
        print(f"FALHA: {model_name}")
        print(f"Erro: {e}")

if not success:
    print("\nListando todos os modelos disponíveis para esta chave:")
    try:
        for m in genai.list_models():
            print(f"- {m.name}")
    except Exception as e:
        print(f"Erro ao listar modelos: {e}")
