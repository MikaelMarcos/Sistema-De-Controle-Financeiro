from typing import Optional, List
from sqlmodel import SQLModel, Field, Relationship

# --- Modelo de Item de Estoque ---
class InventoryItem(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    quantity: int = Field(default=0)
    category: Optional[str] = Field(default=None) # Ex: Eletrônicos, Filamentos
    location: Optional[str] = Field(default=None) # Ex: Caixa 1, Gaveta A
    description: Optional[str] = Field(default=None)

    # Relacionamento com ProjectItem (um item pode estar em vários projetos)
    project_usages: List["ProjectItem"] = Relationship(back_populates="item")


# --- Modelo de Projeto ---
class Project(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str = Field(index=True)
    description: Optional[str] = Field(default=None)
    status: str = Field(default="Em Andamento") # Planejado, Em Andamento, Concluído

    # Relacionamento com itens usados
    items: List["ProjectItem"] = Relationship(back_populates="project")


# --- Modelo de Associação (Item usado no Projeto) ---
class ProjectItem(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    
    project_id: int = Field(foreign_key="project.id")
    item_id: int = Field(foreign_key="inventoryitem.id")
    
    quantity_used: int = Field(default=1) # Quanto foi usado deste item no projeto

    project: Optional[Project] = Relationship(back_populates="items")
    item: Optional[InventoryItem] = Relationship(back_populates="project_usages")
