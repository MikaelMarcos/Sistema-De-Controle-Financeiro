'use client'; 

import { useState, useEffect } from 'react';
import axios from 'axios';
import AuthGuard from '@/components/AuthGuard';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const formatCurrency = (v) => Number(v ?? 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// --- Ícones ---
const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>;
const DeleteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>;

// --- Seletor de Mês ---
// --- Seletor de Mês (Estilo Pill) ---
function MonthSelector({ currentDate, onDateChange }) {
  const handlePreviousMonth = () => { 
    const newDate = new Date(currentDate); 
    newDate.setMonth(newDate.getMonth() - 1); 
    onDateChange(newDate); 
  };
  
  const handleNextMonth = () => { 
    const newDate = new Date(currentDate); 
    newDate.setMonth(newDate.getMonth() + 1); 
    onDateChange(newDate); 
  };
  
  const formattedDate = `${currentDate.toLocaleString('pt-BR', { month: 'long' })} ${currentDate.getFullYear()}`.replace(/^\w/, (c) => c.toUpperCase());

  return (
    <div className="flex justify-center mb-8 animate-fade-in-down">
      <div className="glass p-1.5 rounded-full inline-flex items-center gap-4 shadow-glass">
        <button 
          onClick={handlePreviousMonth} 
          className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <div className="text-center px-4 w-48">
          <h2 className="text-lg font-bold text-white tracking-wide capitalize">
            {formattedDate}
          </h2>
        </div>
        
        <button 
          onClick={handleNextMonth} 
          className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
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

// --- Componente de Card de Entrada (Design Premium) ---
function IncomeCard({ income, onEdit, onDelete }) {
  const formatDate = (d) => new Date(d).toLocaleDateString('pt-BR', { timeZone: 'UTC', day: '2-digit', month: '2-digit' });

  return (
    <div className="group relative overflow-hidden bg-fin-dark/40 p-5 rounded-2xl border border-white/5 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-900/10">
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-900/40 to-emerald-900/20 border border-green-500/20 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
            <span className="text-xl">💰</span>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${income.received ? 'text-green-400 bg-green-400/10 border-green-400/10' : 'text-yellow-400 bg-yellow-400/10 border-yellow-400/10'}`}>
                {formatDate(income.date)}
              </span>
              {income.is_fixed && (
                <span className="text-[10px] font-bold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full border border-blue-400/10">Fixa</span>
              )}
            </div>
            <h3 className="font-bold text-white group-hover:text-green-300 transition-colors">{income.description}</h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className={`text-lg font-bold ${income.received ? 'text-green-400' : 'text-yellow-400'}`}>
             {formatCurrency(income.amount)}
          </span>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
             <button 
                onClick={() => onEdit(income)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-blue-400 hover:bg-blue-400/10 transition-all"
                title="Editar"
              >
                <EditIcon />
              </button>
              <button 
                onClick={() => onDelete(income.id)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-400/10 transition-all"
                title="Excluir"
              >
                <DeleteIcon />
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Lista de Entradas ---
function IncomeList({ incomes, setIncomes, onEditClick }) {
  const [filter, setFilter] = useState('all');

  const filteredIncomes = incomes.filter(income => {
    if (filter === 'received') return income.received;
    if (filter === 'pending') return !income.received;
    return true;
  });

  const handleDelete = async (id) => {
    if (!confirm('Tem certeza que deseja excluir esta entrada?')) return;
    try {
        await axios.delete(`${API_URL}/income/${id}`);
        setIncomes(prev => prev.filter(inc => inc.id !== id));
    } catch (err) { console.error("Erro ao deletar:", err); }
  };

  const totalAmount = filteredIncomes.reduce((acc, inc) => acc + Number(inc.amount), 0);

  return (
    <div className="glass rounded-3xl p-6 md:p-8 animate-fade-in-down h-full flex flex-col">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Histórico</h2>
          <p className="text-sm text-gray-400">Registros do mês atual</p>
        </div>
        
        <div className="flex gap-2 bg-fin-dark/60 p-1 rounded-xl">
           {[
             { key: 'all', label: 'Todas', emoji: '📋' },
             { key: 'received', label: 'Recebidas', emoji: '✅' },
             { key: 'pending', label: 'A Receber', emoji: '⏳' }
           ].map(({ key, label, emoji }) => (
             <button key={key} onClick={() => setFilter(key)} className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 text-sm font-bold ${filter === key ? 'bg-green-500 text-fin-dark shadow-lg' : 'text-gray-400 hover:text-white'}`}>
               <span>{emoji}</span> {label}
             </button>
           ))}
        </div>

        <div className="text-right">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Filtrado</p>
          <p className="text-2xl font-bold text-green-400 drop-shadow-sm">{formatCurrency(totalAmount)}</p>
        </div>
      </div>

      {filteredIncomes.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center py-12 border border-white/5 rounded-2xl border-dashed">
          <div className="text-5xl mb-4 opacity-30 grayscale">💰</div>
          <p className="text-gray-400 font-light text-lg">Nenhuma entrada encontrada.</p>
        </div>
      ) : (
        <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar flex-1 max-h-[500px]">
          {filteredIncomes.map(income => (
            <IncomeCard key={income.id} income={income} onEdit={onEditClick} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

// --- Formulário de Nova Entrada ---
function IncomeForm({ onIncomeAdded }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [isFixed, setIsFixed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description || !amount) return alert("Preencha descrição e valor!");
    
    setLoading(true);
    try {
      await axios.post(`${API_URL}/income/`, {
        description,
        amount: parseFloat(amount),
        date: new Date(date).toISOString(),
        is_fixed: isFixed
      });
      setDescription('');
      setAmount('');
      setIsFixed(false);
      onIncomeAdded();
    } catch (error) {
      console.error("Erro ao adicionar entrada:", error);
      alert("Erro ao salvar entrada.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass rounded-3xl p-6 md:p-8 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="bg-gradient-to-br from-green-400 to-emerald-600 w-8 h-8 rounded-lg flex items-center justify-center text-fin-dark text-lg shadow-lg">＋</span>
          Nova Entrada
        </h2>
        <p className="text-sm text-gray-400 mt-1">Registre seus ganhos</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Descrição</label>
          <input 
            type="text" 
            placeholder="Ex: Salário, Freela..." 
            className="w-full bg-fin-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Valor (R$)</label>
            <input 
              type="number" 
              step="0.01" 
              placeholder="0,00" 
              className="w-full bg-fin-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all font-mono"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Data</label>
            <input 
              type="date" 
              className="w-full bg-fin-dark/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all [color-scheme:dark]"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-3 bg-fin-dark/30 p-3 rounded-xl border border-white/5 cursor-pointer hover:bg-fin-dark/50 transition-colors" onClick={() => setIsFixed(!isFixed)}>
          <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${isFixed ? 'bg-green-500 border-green-500' : 'border-gray-500'}`}>
            {isFixed && <svg className="w-3.5 h-3.5 text-fin-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
          </div>
          <span className="text-sm text-gray-300 font-medium">Entrada Fixa (Mensal)</span>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-green-900/20 transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              Salvando...
            </>
          ) : (
            'Adicionar Receita'
          )}
        </button>
      </form>
    </div>
  );
}

// --- Lista de Receitas ---


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