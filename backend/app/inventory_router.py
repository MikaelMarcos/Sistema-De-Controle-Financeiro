from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from typing import List

from .inventory_database import get_inventory_session, create_inventory_db_and_tables
from .inventory_models import InventoryItem, Project, ProjectItem

router_inventory = APIRouter(prefix="/inventory", tags=["Inventory"])

# Garantir que o banco existe ao rodar (pode ser chamado no main, mas deixo aqui acessível)
# create_inventory_db_and_tables() será chamado no startup do main.py se quisermos, 
# ou podemos chamar manualmente/auto na execução.
# Vou adicionar um endpoint de "init" caso precise, ou chamar no main.

# --- Itens de Estoque ---

@router_inventory.get("/items", response_model=List[InventoryItem])
def read_items(session: Session = Depends(get_inventory_session)):
    items = session.exec(select(InventoryItem)).all()
    return items

@router_inventory.post("/items", response_model=InventoryItem)
def create_item(item: InventoryItem, session: Session = Depends(get_inventory_session)):
    session.add(item)
    session.commit()
    session.refresh(item)
    return item

@router_inventory.put("/items/{item_id}", response_model=InventoryItem)
def update_item(item_id: int, item_data: InventoryItem, session: Session = Depends(get_inventory_session)):
    item_db = session.get(InventoryItem, item_id)
    if not item_db:
        raise HTTPException(status_code=404, detail="Item not found")
    
    item_data_dict = item_data.dict(exclude_unset=True)
    for key, value in item_data_dict.items():
        setattr(item_db, key, value)
    
    session.add(item_db)
    session.commit()
    session.refresh(item_db)
    return item_db

@router_inventory.delete("/items/{item_id}")
def delete_item(item_id: int, session: Session = Depends(get_inventory_session)):
    item_db = session.get(InventoryItem, item_id)
    if not item_db:
        raise HTTPException(status_code=404, detail="Item not found")
    session.delete(item_db)
    session.commit()
    return {"message": "Item deleted"}

# --- Projetos ---

@router_inventory.get("/projects", response_model=List[Project])
def read_projects(session: Session = Depends(get_inventory_session)):
    # Usando select com preloading se necessário, aqui simples
    projects = session.exec(select(Project)).all()
    return projects

@router_inventory.post("/projects", response_model=Project)
def create_project(project: Project, session: Session = Depends(get_inventory_session)):
    session.add(project)
    session.commit()
    session.refresh(project)
    return project

@router_inventory.post("/projects/{project_id}/add_item")
def add_item_to_project(
    project_id: int, 
    item_id: int, 
    quantity: int, 
    deduct_from_stock: bool = True,
    session: Session = Depends(get_inventory_session)
):
    """
    Adiciona um item a um projeto e opcionalmente remove do estoque.
    """
    project = session.get(Project, project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    
    item = session.get(InventoryItem, item_id)
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")

    # Verifica estoque se for para deduzir
    if deduct_from_stock:
        if item.quantity < quantity:
            raise HTTPException(status_code=400, detail=f"Estoque insuficiente. Disponível: {item.quantity}")
        item.quantity -= quantity
        session.add(item)

    # Cria a relação ProjectItem
    # Verifica se já existe relação desse item no projeto para somar ou cria novo?
    # Por simplicidade, assumo que cria nova entrada ou soma. Vamos criar nova para histórico simples.
    # Mas o ideal seria somar se já existe. Vamos simplificar criando novo registro.
    
    project_item = ProjectItem(project_id=project_id, item_id=item_id, quantity_used=quantity)
    session.add(project_item)
    
    session.commit()
    return {"message": "Item adicionado ao projeto e estoque atualizado", "current_stock": item.quantity}

@router_inventory.get("/projects/{project_id}/items", response_model=List[ProjectItem])
def read_project_items(project_id: int, session: Session = Depends(get_inventory_session)):
    items = session.exec(select(ProjectItem).where(ProjectItem.project_id == project_id)).all()
    return items
