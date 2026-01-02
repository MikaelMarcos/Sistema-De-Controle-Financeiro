'use client'; 

import { useState, useEffect } from 'react';
import axios from 'axios';
import AuthGuard from '@/components/AuthGuard';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const formatCurrency = (v) => (v ?? 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// --- Ícones ---
const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>;
const DeleteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>;

// --- Seletor de Mês ---
function MonthSelector({ currentDate, onDateChange }) {
  const handlePreviousMonth = () => { const newDate = new Date(currentDate); newDate.setMonth(newDate.getMonth() - 1); onDateChange(newDate); };
  const handleNextMonth = () => { const newDate = new Date(currentDate); newDate.setMonth(newDate.getMonth() + 1); onDateChange(newDate); };
  const formattedDate = currentDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' }).replace(/^\w/, (c) => c.toUpperCase());
  return (
    <div className="flex justify-between items-center mb-8 bg-fin-card/30 p-4 rounded-2xl border border-white/5 backdrop-blur-sm shadow-inner">
      <button onClick={handlePreviousMonth} className="px-3 py-2 text-fin-gold border border-fin-gold/40 rounded-lg hover:bg-fin-gold hover:text-black transition-all">&lt; Anterior</button>
      <h2 className="text-2xl font-light text-white tracking-wide">{formattedDate}</h2>
      <button onClick={handleNextMonth} className="px-3 py-2 text-fin-gold border border-fin-gold/40 rounded-lg hover:bg-fin-gold hover:text-black transition-all">Próximo &gt;</button>
    </div>
  );
}

// --- Componente: Modal de Edição de Entrada (NOVO) ---
function EditIncomeModal({ income, onClose, onIncomeUpdated }) {
  const [description, setDescription] = useState(income.description);
  const [amount, setAmount] = useState(income.amount);
  const [date, setDate] = useState(income.date ? income.date.split('T')[0] : '');
  const [received, setReceived] = useState(income.received);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = { 
        description, 
        amount: parseFloat(amount), 
        date: date ? new Date(date).toISOString() : new Date().toISOString(),
        received 
    };
    
    axios.put(`${API_URL}/income/${income.id}`, updatedData)
      .then(response => { onIncomeUpdated(response.data); onClose(); })
      .catch(error => { console.error("Erro:", error); alert("Erro ao editar."); });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="bg-fin-dark/90 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-lg border border-fin-gold/30" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-fin-gold">Editar Receita</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm text-white/80 mb-1">Descrição</label>
              <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="w-full p-3 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Valor</label>
              <input type="number" step="0.01" value={amount} onChange={e => setAmount(e.target.value)} className="w-full p-3 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                  <label className="block text-sm text-white/80 mb-1">Data</label>
                  <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full p-3 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
              </div>
              <div>
                  <label className="block text-sm text-white/80 mb-1">Status</label>
                  <div className={`w-full p-3 rounded-xl border-2 cursor-pointer flex items-center justify-center gap-2 ${received ? 'bg-green-500/20 border-green-500/50 text-green-400' : 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400'}`} onClick={() => setReceived(!received)}>
                      {received ? '✅ Recebido' : '⏳ A Receber'}
                  </div>
              </div>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all mt-4">Salvar Alterações</button>
        </form>
      </div>
    </div>
  );
}

// --- Formulário de Criação ---
function IncomeForm({ onIncomeAdded }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [received, setReceived] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description || !amount) {
      alert("Preencha os campos obrigatórios.");
      return;
    }
    setIsSubmitting(true);
    try {
      const newIncome = {
        description,
        amount: parseFloat(amount),
        date: date ? new Date(date).toISOString() : new Date().toISOString(),
        received: received
      };
      await axios.post(`${API_URL}/income/`, newIncome);
      setDescription(''); setAmount(''); setDate(''); setReceived(true);
      onIncomeAdded();
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar entrada.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-fin-card to-fin-dark/80 p-8 rounded-3xl shadow-2xl mb-8 border border-fin-gold/20 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-green-500/20 rounded-2xl"><span className="text-2xl">💸</span></div>
        <div>
          <h2 className="text-2xl font-bold text-white">Nova Receita</h2>
          <p className="text-fin-gold/70 text-sm">Registre ganhos ou agende recebimentos</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-fin-gold border-b border-fin-gold/30 pb-2">Detalhes da Receita</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Descrição *</label>
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ex: Salário, Freelance..." className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/20 transition-all text-white placeholder-white/40"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Valor *</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-400 font-bold">R$</span>
                <input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0,00" className="w-full p-4 pl-12 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 transition-all text-white"/>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Data Prevista</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold transition-all text-white"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Status</label>
              <div className={`w-full p-4 rounded-xl border-2 transition-all cursor-pointer ${received ? 'bg-green-500/20 border-green-500/50 text-green-400' : 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400'}`} onClick={() => setReceived(!received)}>
                <div className="flex items-center justify-between">
                  <span className="font-bold">{received ? '✅ RECEBIDO' : '⏳ A RECEBER'}</span>
                  <div className={`w-3 h-3 rounded-full ${received ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2">
          {isSubmitting ? 'Processando...' : (
            <><span>{received ? '💰' : '📅'}</span> {received ? 'Registrar Entrada' : 'Agendar Recebimento'}</>
          )}
        </button>
      </form>
    </div>
  );
}

// --- Lista de Receitas ---
function IncomeList({ incomes, setIncomes, onEditClick }) {
  const [filter, setFilter] = useState('all');

  const filteredIncomes = incomes.filter(income => {
    if (filter === 'received') return income.received;
    if (filter === 'pending') return !income.received;
    return true;
  });

  const handleDelete = async (id) => {
    if (!confirm("Excluir esta receita?")) return;
    try {
      await axios.delete(`${API_URL}/income/${id}`);
      setIncomes(incomes.filter(inc => inc.id !== id));
    } catch (error) { console.error("Erro:", error); }
  };

  const handleToggleStatus = async (income) => {
    try {
      const response = await axios.patch(`${API_URL}/income/${income.id}/toggle-status`);
      setIncomes(prev => prev.map(inc => inc.id === income.id ? response.data : inc));
    } catch (error) { console.error("Erro:", error); }
  };

  const formatDate = (d) => new Date(d).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
  const totalAmount = filteredIncomes.reduce((sum, inc) => sum + inc.amount, 0);

  return (
    <div className="bg-gradient-to-br from-fin-card to-fin-dark/80 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-green-500/20 rounded-2xl"><span className="text-2xl">📈</span></div>
          <div><h2 className="text-2xl font-bold text-white">Histórico de Receitas</h2><p className="text-white/60 text-sm">Ganhos registrados e previstos</p></div>
        </div>
        <div className="flex gap-2 bg-fin-dark/60 p-1 rounded-xl overflow-x-auto">
          {[
            { key: 'all', label: 'Todas', emoji: '📋' },
            { key: 'received', label: 'Recebidas', emoji: '✅' },
            { key: 'pending', label: 'A Receber', emoji: '⏳' }
          ].map(({ key, label, emoji }) => (
            <button key={key} onClick={() => setFilter(key)} className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${filter === key ? 'bg-green-500 text-fin-dark font-bold' : 'text-white/70 hover:text-white'}`}>
              <span>{emoji}</span>{label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20 mb-6 text-center">
        <div className="text-green-400 text-sm mb-1">Total no Mês</div>
        <div className="text-3xl font-bold text-green-400">{formatCurrency(totalAmount)}</div>
      </div>

      {filteredIncomes.length === 0 ? (
        <div className="text-center py-12 text-white/40"><div className="text-6xl mb-4">📭</div><p>Nenhuma receita encontrada</p></div>
      ) : (
        <div className="space-y-3">
          {filteredIncomes.map(income => (
            <div key={income.id} className={`flex flex-col md:flex-row md:justify-between md:items-center p-5 rounded-2xl border-2 transition-all ${income.received ? 'bg-fin-dark/30 border-white/5' : 'bg-yellow-500/10 border-yellow-500/20'}`}>
              <div className="flex-1 mb-4 md:mb-0">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${income.received ? 'text-green-400 bg-green-400/10' : 'text-yellow-400 bg-yellow-400/10'}`}>{formatDate(income.date)}</span>
                  {!income.received && <span className="text-xs text-yellow-400 font-bold uppercase tracking-wider bg-yellow-400/10 px-2 py-1 rounded">A Receber</span>}
                </div>
                <div className="font-semibold text-white text-lg">{income.description}</div>
              </div>
              
              <div className="flex items-center justify-between w-full md:w-auto gap-4 border-t md:border-t-0 border-white/5 pt-3 md:pt-0">
                <span className={`font-bold text-xl ${income.received ? 'text-green-400' : 'text-white/70'}`}>+ {formatCurrency(income.amount)}</span>
                
                <div className="flex gap-1">
                    {/* Botão de Toggle Status */}
                    <button onClick={() => handleToggleStatus(income)} className={`p-2 rounded-lg transition-all ${income.received ? 'text-gray-500 hover:text-yellow-400 bg-fin-dark/50' : 'text-green-400 bg-green-400/20 hover:bg-green-400/30'}`} title={income.received ? "Marcar como A Receber" : "Confirmar Recebimento"}>
                    {income.received ? '↩️' : '💰'}
                    </button>
                    
                    {/* 👇 BOTÃO DE EDITAR (NOVO) 👇 */}
                    <button onClick={() => onEditClick(income)} className="p-2 rounded-lg text-blue-400 hover:bg-blue-400/10 transition-all" title="Editar">
                        <EditIcon />
                    </button>

                    {/* Botão de Deletar */}
                    <button onClick={() => handleDelete(income.id)} className="p-2 rounded-lg text-red-400 hover:bg-red-400/10 transition-all" title="Excluir">
                        <DeleteIcon />
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// --- Componente Principal ---
function IncomePage() {
  const [incomes, setIncomes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(null);
  const [editingIncome, setEditingIncome] = useState(null); // 👈 Estado para o modal de edição

  // Inicializa data no cliente
  useEffect(() => { setCurrentDate(new Date()); }, []);

  const fetchIncomes = (date) => {
    if (!date) return;
    setIsLoading(true);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    axios.get(`${API_URL}/income/?year=${year}&month=${month}`)
      .then(res => setIncomes(res.data))
      .catch(error => console.error("Erro:", error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => { fetchIncomes(currentDate); }, [currentDate]);

  const handleIncomeUpdated = (updatedIncome) => {
      setIncomes(prev => prev.map(inc => inc.id === updatedIncome.id ? updatedIncome : inc));
      fetchIncomes(currentDate); // Recarrega para garantir totais atualizados
  };

  if (!currentDate) return <div className="min-h-screen bg-fin-dark"></div>;

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* 👇 Modal de Edição 👇 */}
        {editingIncome && (
            <EditIncomeModal 
                income={editingIncome} 
                onClose={() => setEditingIncome(null)} 
                onIncomeUpdated={handleIncomeUpdated} 
            />
        )}

        <IncomeForm onIncomeAdded={() => fetchIncomes(currentDate)} />
        
        <MonthSelector currentDate={currentDate} onDateChange={setCurrentDate} />

        {isLoading ? (
          <div className="bg-fin-card/30 p-12 rounded-3xl border border-white/5 text-center">
            <div className="w-12 h-12 border-4 border-fin-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white/60">Carregando...</p>
          </div>
        ) : (
          // Passamos a função para abrir o modal
          <IncomeList incomes={incomes} setIncomes={setIncomes} onEditClick={setEditingIncome} />
        )}
      </div>
    </div>
  );
}

// Wrapper com AuthGuard
export default function IncomePageWrapper() {
    return (
        <AuthGuard>
            <IncomePage />
        </AuthGuard>
    )
}