from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

hash_to_check = "$2b$12$ttgK71Z.4TWwGCGUDCy5mupSSm.yWKupqRNvcj/Pbzd734bQD0yyS"
candidates = [
    "convidado",
    "guest",
    "123456",
    "123",
    "sistema",
    "admin",
    "password",
    "senha",
    "financas",
    "financeiro",
    "teste",
    "mikael",
    "rafa"
]

print(f"Checking hash: {hash_to_check}")
for password in candidates:
    if pwd_context.verify(password, hash_to_check):
        print(f"MATCH FOUND! Password is: {password}")
        break
else:
    print("No match found in candidates.")
