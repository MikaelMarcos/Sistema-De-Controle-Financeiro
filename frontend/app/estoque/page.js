'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Search, Trash2, Edit2, Package, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export default function InventoryPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState({ name: '', quantity: 0, category: '', location: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/inventory/items`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    
    try {
      if (isEditing) {
        await axios.put(`${API_URL}/inventory/items/${currentItem.id}`, currentItem, {
           headers: { Authorization: `Bearer ${token}` }
        });
      } else {
        await axios.post(`${API_URL}/inventory/items`, currentItem, {
           headers: { Authorization: `Bearer ${token}` }
        });
      }
      setIsModalOpen(false);
      fetchItems();
      resetForm();
    } catch (error) {
      console.error("Error saving item", error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Tem certeza que deseja excluir este item?')) return;
    try {
       const token = localStorage.getItem('token');
       await axios.delete(`${API_URL}/inventory/items/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
       });
       fetchItems();
    } catch (error) {
       console.error("Error deleting item", error);
    }
  };

  const resetForm = () => {
    setCurrentItem({ name: '', quantity: 0, category: '', location: '', description: '' });
    setIsEditing(false);
  };

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.category && item.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-fin-dark p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
           <div>
             <Link href="/systems" className="text-gray-400 hover:text-white flex items-center mb-2 transition-colors">
               <ArrowLeft size={16} className="mr-2" /> Voltar
             </Link>
             <h1 className="text-3xl font-bold text-white flex items-center">
               <Package className="mr-3 text-emerald-500" /> Gestão de Estoque
             </h1>
           </div>
           
           <div className="flex gap-4">
             <Link 
               href="/estoque/projetos" 
               className="bg-fin-card border border-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-colors"
             >
               Meus Projetos
             </Link>
             <button 
               onClick={() => { resetForm(); setIsModalOpen(true); }}
               className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors shadow-lg shadow-emerald-900/20"
             >
               <Plus size={20} className="mr-2" /> Novo Item
             </button>
           </div>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Buscar componentes, filamentos..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-fin-card border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-emerald-500 transition-colors"
          />
        </div>

        {/* Grid */}
        {loading ? (
             <div className="text-white text-center">Carregando estoque...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-fin-card border border-white/5 rounded-xl p-6 hover:border-emerald-500/30 transition-all shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-400">{item.category || 'Sem categoria'}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${item.quantity > 0 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                    Qtd: {item.quantity}
                  </span>
                </div>
                
                <div className="text-gray-400 text-sm mb-4 space-y-1">
                  {item.location && <p>Local: <span className="text-gray-300">{item.location}</span></p>}
                  {item.description && <p className="italic opacity-80">{item.description}</p>}
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t border-white/5">
                   <button 
                     onClick={() => { setCurrentItem(item); setIsEditing(true); setIsModalOpen(true); }}
                     className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                   >
                     <Edit2 size={16} />
                   </button>
                   <button 
                     onClick={() => handleDelete(item.id)}
                     className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                   >
                     <Trash2 size={16} />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
             <div className="bg-fin-card border border-white/10 w-full max-w-md rounded-2xl p-6 shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {isEditing ? 'Editar Item' : 'Novo Item'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm mb-1 block">Nome</label>
                    <input 
                      type="text" required
                      value={currentItem.name}
                      onChange={e => setCurrentItem({...currentItem, name: e.target.value})}
                      className="w-full bg-fin-dark border border-white/10 rounded-lg p-3 text-white focus:border-emerald-500 outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-gray-400 text-sm mb-1 block">Quantidade</label>
                      <input 
                        type="number" required
                        value={currentItem.quantity}
                        onChange={e => setCurrentItem({...currentItem, quantity: parseInt(e.target.value)})}
                        className="w-full bg-fin-dark border border-white/10 rounded-lg p-3 text-white focus:border-emerald-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm mb-1 block">Categoria</label>
                      <input 
                        type="text"
                        value={currentItem.category}
                        onChange={e => setCurrentItem({...currentItem, category: e.target.value})}
                        className="w-full bg-fin-dark border border-white/10 rounded-lg p-3 text-white focus:border-emerald-500 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-1 block">Localização</label>
                    <input 
                      type="text"
                      value={currentItem.location}
                      onChange={e => setCurrentItem({...currentItem, location: e.target.value})}
                      className="w-full bg-fin-dark border border-white/10 rounded-lg p-3 text-white focus:border-emerald-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-1 block">Descrição</label>
                    <textarea 
                      value={currentItem.description}
                      onChange={e => setCurrentItem({...currentItem, description: e.target.value})}
                      className="w-full bg-fin-dark border border-white/10 rounded-lg p-3 text-white focus:border-emerald-500 outline-none h-24"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button 
                      type="button" 
                      onClick={() => setIsModalOpen(false)}
                      className="flex-1 py-3 border border-gray-600 text-gray-400 rounded-lg hover:text-white hover:border-white transition-colors"
                    >
                      Cancelar
                    </button>
                    <button 
                      type="submit" 
                      className="flex-1 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 font-bold shadow-lg shadow-emerald-900/20 transition-colors"
                    >
                      Salvar
                    </button>
                  </div>
                </form>
             </div>
          </div>
        )}

      </div>
    </div>
  );
}
