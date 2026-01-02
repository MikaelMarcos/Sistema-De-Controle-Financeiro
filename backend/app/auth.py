from datetime import datetime, timedelta, timezone
from typing import Optional
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from passlib.context import CryptContext
from sqlmodel import Session, select
from .database import get_session
from .models import User

import os

# --- Configuração de Segurança ---
SECRET_KEY = os.getenv("SECRET_KEY", "fallback_secret_key_if_env_missing") 
ALGORITHM = os.getenv("ALGORITHM", "HS256")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", 60 * 24 * 7))

# --- Contexto de Senha ---
# 👇 MUDANÇA CRÍTICA: Trocamos 'argon2' por 'bcrypt' para compatibilidade
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# --- Esquema OAuth2 ---
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/token")

# --- Funções de Segurança ---

def verify_password(plain_password, hashed_password):
    """Verifica se a senha em texto puro bate com a senha criptografada."""
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    """Gera o hash de uma senha."""
    # O bcrypt tem um limite de 72 caracteres. 
    # Se a senha for maior, pegamos apenas os primeiros 72 para evitar o erro 500.
    return pwd_context.hash(password[:72])

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    """Cria um novo Token JWT."""
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(
    token: str = Depends(oauth2_scheme), 
    session: Session = Depends(get_session)
):
    """
    A Dependência de Segurança.
    """
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Não foi possível validar as credenciais",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    
    user = session.exec(select(User).where(User.email == email)).first()
    if user is None:
        raise credentials_exception
    return user