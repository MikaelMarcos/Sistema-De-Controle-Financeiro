'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, ArrowLeft, Archive, CheckCircle, Search } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [items, setItems] = useState([]); // All inventory items for selection
  const [loading, setLoading] = useState(true);
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({ name: '', description: '', status: 'Em Andamento' });
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [itemToAdd, setItemToAdd] = useState({ item_id: '', quantity: 1, deduct: true });

  useEffect(() => {
    fetchProjects();
    fetchItems();
  }, []);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/inventory/projects`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchItems = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/inventory/items`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items", error);
    }
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(`${API_URL}/inventory/projects`, currentProject, {
         headers: { Authorization: `Bearer ${token}` }
      });
      setIsModalOpen(false);
      fetchProjects();
      setCurrentProject({ name: '', description: '', status: 'Em Andamento' });
    } catch (error) {
       console.error("Error creating project", error);
    }
  };

  const handleAddItemToProject = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
       await axios.post(`${API_URL}/inventory/projects/${selectedProjectId}/add_item`, {
         project_id: selectedProjectId,
         item_id: itemToAdd.item_id,
         quantity: parseInt(itemToAdd.quantity),
         deduct_from_stock: itemToAdd.deduct
       }, {
         params: { 
             project_id: selectedProjectId, 
             item_id: itemToAdd.item_id, 
             quantity: parseInt(itemToAdd.quantity), 
             deduct_from_stock: itemToAdd.deduct 
         },
         headers: { Authorization: `Bearer ${token}` }
       });
       alert("Componentes adicionados e estoque atualizado!");
       setIsItemModalOpen(false);
       // Poderia recarregar itens se quisesse ver estoque atualizado na lista, mas ok.
       fetchItems(); 
    } catch (error) {
       console.error("Error adding item to project", error);
       alert("Erro ao adicionar item. Verifique o estoque.");
    }
  };

  return (
    <div className="min-h-screen bg-fin-dark p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
           <div>
             <Link href="/estoque" className="text-gray-400 hover:text-white flex items-center mb-2 transition-colors">
               <ArrowLeft size={16} className="mr-2" /> Voltar para Estoque
             </Link>
             <h1 className="text-3xl font-bold text-white flex items-center">
               <Archive className="mr-3 text-purple-500" /> Meus Projetos
             </h1>
           </div>
           
           <button 
             onClick={() => setIsModalOpen(true)}
             className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors shadow-lg shadow-purple-900/20"
           >
             <Plus size={20} className="mr-2" /> Novo Projeto
           </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-fin-card border border-white/5 rounded-xl p-6 hover:border-purple-500/30 transition-all shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">{project.name}</h3>
                  <span className="bg-purple-500/10 text-purple-300 text-xs px-2 py-1 rounded-full border border-purple-500/20">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{project.description || 'Sem descrição.'}</p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <button 
                  onClick={() => { setSelectedProjectId(project.id); setIsItemModalOpen(true); }}
                  className="w-full py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors flex items-center justify-center text-sm font-medium"
                >
                  <Plus size={16} className="mr-2" /> Adicionar Componentes
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Create Project Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
             <div className="bg-fin-card border border-white/10 w-full max-w-md rounded-2xl p-6 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Novo Projeto</h2>
                <form onSubmit={handleCreateProject} className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-1 block">Nome do Projeto</label>
                    <input 
                      type="text" required
                      value={currentProject.name}
                      onChange={e => setCurrentProject({...currentProject, name: e.target.value})}
                      className="w-full bg-fin-dark border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-1 block">Descrição</label>
                    <textarea 
                      value={currentProject.description}
                      onChange={e => setCurrentProject({...currentProject, description: e.target.value})}
                      className="w-full bg-fin-dark border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none h-24"
                    />
                  </div>
                  <div className="flex gap-3 pt-4">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 py-3 border border-gray-600 text-gray-400 rounded-lg hover:text-white hover:border-white transition-colors">Cancelar</button>
                    <button type="submit" className="flex-1 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-bold transition-colors">Criar</button>
                  </div>
                </form>
             </div>
          </div>
        )}

        {/* Add Item Modal */}
        {isItemModalOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
             <div className="bg-fin-card border border-white/10 w-full max-w-md rounded-2xl p-6 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Adicionar Componente ao Projeto</h2>
                <form onSubmit={handleAddItemToProject} className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-1 block">Selecione o Componente</label>
                    <select 
                       required
                       onChange={e => setItemToAdd({...itemToAdd, item_id: e.target.value})}
                       className="w-full bg-fin-dark border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none appearance-none"
                    >
                        <option value="">Selecione...</option>
                        {items.map(item => (
                            <option key={item.id} value={item.id}>
                                {item.name} (Disponível: {item.quantity})
                            </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-1 block">Quantidade Necessária</label>
                    <input 
                      type="number" required
                      min="1"
                      value={itemToAdd.quantity}
                      onChange={e => setItemToAdd({...itemToAdd, quantity: e.target.value})}
                      className="w-full bg-fin-dark border border-white/10 rounded-lg p-3 text-white focus:border-purple-500 outline-none"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                     <input 
                       type="checkbox" 
                       checked={itemToAdd.deduct}
                       onChange={e => setItemToAdd({...itemToAdd, deduct: e.target.checked})}
                       className="w-4 h-4 accent-purple-500"
                     />
                     <label className="text-gray-300 text-sm">Remover do Estoque Automaticamente</label>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <button type="button" onClick={() => setIsItemModalOpen(false)} className="flex-1 py-3 border border-gray-600 text-gray-400 rounded-lg hover:text-white hover:border-white transition-colors">Cancelar</button>
                    <button type="submit" className="flex-1 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-bold transition-colors">Adicionar</button>
                  </div>
                </form>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
