'use client'; 

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

function IncomeForm({ onIncomeAdded }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [received, setReceived] = useState(true); // 👈 Status de Recebimento
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
        received: received // 👈 Envia o status
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
        <div className="p-3 bg-green-500/20 rounded-2xl">
          <span className="text-2xl">💸</span>
        </div>
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

function IncomeList({ incomes, setIncomes }) {
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
        <div className="flex gap-2 bg-fin-dark/60 p-1 rounded-xl">
          {[
            { key: 'all', label: 'Todas', emoji: '📋' },
            { key: 'received', label: 'Recebidas', emoji: '✅' },
            { key: 'pending', label: 'A Receber', emoji: '⏳' }
          ].map(({ key, label, emoji }) => (
            <button key={key} onClick={() => setFilter(key)} className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${filter === key ? 'bg-green-500 text-fin-dark font-bold' : 'text-white/70 hover:text-white'}`}>
              <span>{emoji}</span>{label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20 mb-6 text-center">
        <div className="text-green-400 text-sm mb-1">Total no Filtro Atual</div>
        <div className="text-3xl font-bold text-green-400">R$ {totalAmount.toFixed(2)}</div>
      </div>

      {filteredIncomes.length === 0 ? (
        <div className="text-center py-12 text-white/40"><div className="text-6xl mb-4">📭</div><p>Nenhuma receita encontrada</p></div>
      ) : (
        <div className="space-y-3">
          {filteredIncomes.map(income => (
            <div key={income.id} className={`flex justify-between items-center p-5 rounded-2xl border-2 transition-all hover:scale-[1.01] ${income.received ? 'bg-fin-dark/30 border-white/5' : 'bg-yellow-500/10 border-yellow-500/20'}`}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${income.received ? 'text-green-400 bg-green-400/10' : 'text-yellow-400 bg-yellow-400/10'}`}>{formatDate(income.date)}</span>
                  {!income.received && <span className="text-xs text-yellow-400 font-bold uppercase tracking-wider bg-yellow-400/10 px-2 py-1 rounded">A Receber</span>}
                </div>
                <div className="font-semibold text-white text-lg">{income.description}</div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`font-bold text-xl ${income.received ? 'text-green-400' : 'text-white/70'}`}>+ R$ {income.amount.toFixed(2)}</span>
                <button onClick={() => handleToggleStatus(income)} className={`p-3 rounded-xl transition-all hover:scale-110 ${income.received ? 'text-gray-500 hover:text-yellow-400 bg-fin-dark/50' : 'text-green-400 bg-green-400/20 hover:bg-green-400/30'}`} title={income.received ? "Marcar como A Receber" : "Confirmar Recebimento"}>
                  {income.received ? '↩️' : '💰'}
                </button>
                <button onClick={() => handleDelete(income.id)} className="p-3 rounded-xl text-red-400/50 hover:text-red-400 hover:bg-red-400/10 transition-all">🗑️</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function IncomePage() {
  const [incomes, setIncomes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchIncomes = () => {
    setIsLoading(true);
    axios.get(`${API_URL}/income/`)
      .then(res => setIncomes(res.data))
      .catch(error => console.error("Erro:", error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => { fetchIncomes(); }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-fin-dark to-fin-darker py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <IncomeForm onIncomeAdded={fetchIncomes} />
        {isLoading ? <div className="text-center text-white/60 py-12">Carregando...</div> : <IncomeList incomes={incomes} setIncomes={setIncomes} />}
      </div>
    </div>
  );
}