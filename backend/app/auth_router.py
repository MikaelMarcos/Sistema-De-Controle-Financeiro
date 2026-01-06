from fastapi import APIRouter, Depends, HTTPException, status, Form
from fastapi.security import OAuth2PasswordRequestForm
from sqlmodel import Session, select
from .database import get_session
from .models import User, UserCreate
from .auth import (
    get_password_hash, 
    verify_password, 
    create_access_token,
    create_access_token,
    get_current_user,
    ACCESS_TOKEN_EXPIRE_MINUTES,
    LONG_ACCESS_TOKEN_EXPIRE_MINUTES,
)
from datetime import timedelta

router_auth = APIRouter(prefix="/auth", tags=["Authentication"])

@router_auth.post("/register")
def register_user(
    *, 
    session: Session = Depends(get_session), 
    user_in: UserCreate
):
    """Cria um novo usuário."""
    # Verifica se o usuário já existe
    existing_user = session.exec(select(User).where(User.email == user_in.email)).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Um usuário com este email já existe."
        )
        
    hashed_password = get_password_hash(user_in.password)
    
    db_user = User(
        email=user_in.email,
        hashed_password=hashed_password
        # Adicione outros campos como 'name' se desejar
    )
    
    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    
    return {"message": "Usuário criado com sucesso. Por favor, faça o login."}

@router_auth.post("/token")
def login_for_access_token(
    *,
    session: Session = Depends(get_session),
    form_data: OAuth2PasswordRequestForm = Depends(),
    remember_me: bool = Form(False)
):
    """Gira o login (email vai no campo 'username') e retorna um token."""
    
    user = session.exec(select(User).where(User.email == form_data.username)).first()
    
    if not user:
         raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, # Ou 401 se preferir não revelar
            detail="Usuário não encontrado.",
            headers={"WWW-Authenticate": "Bearer"},
        )
        
    if not verify_password(form_data.password, user.hashed_password):
         raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Senha incorreta", # Mensagem específica pedida
            headers={"WWW-Authenticate": "Bearer"},
        )
        
    access_token_expires = timedelta(minutes=LONG_ACCESS_TOKEN_EXPIRE_MINUTES if remember_me else ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}

@router_auth.get("/me", response_model=User)
def read_users_me(current_user: User = Depends(get_current_user)):
    """Rota para o frontend verificar quem é o usuário logado."""
    return current_user