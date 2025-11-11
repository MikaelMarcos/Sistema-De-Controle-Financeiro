'use client';

import { useState, useEffect, Fragment } from 'react'; // Importar Fragment
import axios from 'axios';
import { Listbox, Transition } from '@headlessui/react'; // Usar o mesmo seletor bonito

// --- Ícones ---
const SelectorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" /></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-fin-gold"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>;

const API_URL = 'http://localhost:8000';

// Função para formatar moeda
const formatCurrency = (value) => {
  if (value === null || value === undefined) value = 0;
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// --- Componente: Modal de Edição (Sem alteração, apenas colado) ---
function EditGoalModal({ goal, onClose, onGoalUpdated }) {
  const [name, setName] = useState(goal.name);
  const [targetAmount, setTargetAmount] = useState(goal.target_amount);
  const [deadline, setDeadline] = useState(goal.deadline ? goal.deadline.split('T')[0] : '');
  const [notes, setNotes] = useState(goal.notes || '');
  const [adjustmentAmount, setAdjustmentAmount] = useState('');

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedGoalData = {
      name,
      target_amount: parseFloat(targetAmount),
      deadline: deadline ? new Date(deadline).toISOString() : null,
      notes,
    };
    axios.put(`${API_URL}/goals/${goal.id}`, updatedGoalData)
      .then(response => {
        onGoalUpdated(response.data);
        onClose();
      })
      .catch(error => console.error("Erro ao atualizar meta:", error));
  };

  const handleAdjustmentSubmit = (e, type) => {
    e.preventDefault();
    const amount = parseFloat(adjustmentAmount);
    if (!amount || amount <= 0) return alert("Insira um valor positivo.");
    axios.post(`${API_URL}/goals/${goal.id}/${type}`, { amount })
      .then(response => {
        onGoalUpdated(response.data);
        setAdjustmentAmount('');
      })
      .catch(error => alert(`Erro: ${error.response?.data?.detail || 'Operação falhou'}`));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-fin-dark/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-lg border border-fin-gold/30" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-fin-gold">Gerenciar Meta</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl">&times;</button>
        </div>
        <form onSubmit={handleEditSubmit} className="space-y-4">
          <h3 className="text-lg font-semibold text-white border-b border-white/20 pb-2">Editar Detalhes</h3>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome da Meta" className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
          <input type="number" value={targetAmount} onChange={e => setTargetAmount(e.target.value)} placeholder="Valor Estimado" className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
          <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
          <input type="text" value={notes} onChange={e => setNotes(e.target.value)} placeholder="Observações" className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all">Salvar Alterações</button>
        </form>
        <hr className="my-6 border-white/20" />
        <form className="space-y-4" onSubmit={(e) => handleAdjustmentSubmit(e, 'deposit')}>
          <h3 className="text-lg font-semibold text-white border-b border-white/20 pb-2">Ajuste Manual</h3>
          <input type="number" value={adjustmentAmount} onChange={e => setAdjustmentAmount(e.target.value)} placeholder="Valor do Ajuste" className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
          <div className="flex space-x-4">
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl transition-all">Depositar</button>
            <button type="button" onClick={(e) => handleAdjustmentSubmit(e, 'withdraw')} className="w-full bg-fin-red hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl transition-all">Retirar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// --- Componente: Formulário de Criação (Sem alteração) ---
function GoalCreateForm({ onGoalAdded }) {
  const [name, setName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [currentAmount, setCurrentAmount] = useState('');
  const [deadline, setDeadline] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !targetAmount) return alert("Preencha Nome e Valor Estimado.");
    const newGoal = {
      name,
      target_amount: parseFloat(targetAmount),
      current_amount: parseFloat(currentAmount) || 0.0,
      deadline: deadline ? new Date(deadline).toISOString() : null,
      notes
    };
    axios.post(`${API_URL}/goals/`, newGoal)
      .then(response => {
        onGoalAdded(response.data);
        setName(''); setTargetAmount(''); setCurrentAmount(''); setDeadline(''); setNotes('');
      })
      .catch(error => console.error("Erro ao criar meta:", error));
  };

  return (
    <div className="bg-gradient-to-br from-fin-card to-fin-dark/80 p-8 rounded-3xl shadow-2xl mb-8 border border-fin-gold/20 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-white mb-6">Criar Nova Meta</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome da Meta (ex: Casamento)" className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
          <input type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} placeholder="Valor Estimado (ex: 20000)" className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
          <input type="number" value={currentAmount} onChange={(e) => setCurrentAmount(e.target.value)} placeholder="Valor Inicial (opcional)" className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
          <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white" title="Prazo final"/>
        </div>
        <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Observações (opcional)" className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
        <button type="submit" className="w-full bg-gradient-to-r from-fin-highlight to-fin-gold hover:opacity-90 text-fin-dark font-bold py-3 px-4 rounded-xl transition-all shadow-lg">Salvar Meta</button>
      </form>
    </div>
  );
}

// --- Componente: Card de Meta (ATUALIZADO) ---
function GoalCard({ goal, onEditClick, onDeleteClick }) {
  const remainingAmount = goal.target_amount - goal.current_amount;
  const progressPercentage = goal.target_amount > 0 ? (goal.current_amount / goal.target_amount) * 100 : 100;
  const formatDate = (dateString) => dateString ? new Date(dateString).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) : "N/A";
  
  return (
    <div className="bg-gradient-to-br from-fin-dark/70 to-fin-card/40 p-6 rounded-2xl shadow-lg border border-white/10 hover:border-fin-gold/40 transition-all relative group">
      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button onClick={onEditClick} className="p-2 bg-fin-dark/50 rounded-lg hover:bg-fin-dark text-blue-400" title="Editar/Gerenciar Meta">&#9998;</button>
        <button onClick={onDeleteClick} className="p-2 bg-fin-dark/50 rounded-lg hover:bg-fin-dark text-fin-red" title="Deletar meta">&times;</button>
      </div>

      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-2xl text-fin-highlight">{goal.name}</h3>
        <span className="text-xl font-bold text-fin-highlight">{progressPercentage.toFixed(0)}%</span>
      </div>
      
      <div className="w-full bg-black/30 rounded-full h-4 p-0.5 border border-white/10 mb-4">
        <div className="bg-gradient-to-r from-fin-gold to-fin-highlight h-full rounded-full" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Guardado:</span>
          <span className="font-medium text-white">{formatCurrency(goal.current_amount)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Objetivo:</span>
          <span className="font-medium text-white">{formatCurrency(goal.target_amount)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Faltam:</span>
          <span className="font-medium text-fin-terra">{formatCurrency(remainingAmount > 0 ? remainingAmount : 0)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Prazo:</span>
          <span className="font-medium text-white">{formatDate(goal.deadline)}</span>
        </div>

        {/* 👇 NOVO BLOCO DE APORTE MENSAL 👇 */}
        {goal.monthly_contribution > 0 && (
          <div className="pt-3 mt-3 border-t border-white/10">
            <div className="flex justify-between items-center bg-fin-dark/50 p-3 rounded-lg border border-fin-gold/30">
              <span className="text-fin-gold font-medium text-base">Guarde por mês:</span>
              <span className="font-bold text-xl text-fin-highlight">
                {formatCurrency(goal.monthly_contribution)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// --- Componente Principal da Página ---
export default function MetasPage() {
  const [goals, setGoals] = useState([]);
  const [editingGoal, setEditingGoal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchGoals = () => {
    setIsLoading(true);
    axios.get(`${API_URL}/goals/`)
      .then(response => setGoals(response.data))
      .catch(error => console.error("Erro ao buscar metas:", error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => { fetchGoals(); }, []);

  const handleGoalAdded = (newGoal) => {
    setGoals(prevGoals => [newGoal, ...prevGoals]);
  };

  const handleGoalDeleted = (deletedGoalId) => {
    if (confirm(`Tem certeza que deseja deletar esta meta?`)) {
      axios.delete(`${API_URL}/goals/${deletedGoalId}`)
        .then(() => setGoals(prevGoals => prevGoals.filter(goal => goal.id !== deletedGoalId)))
        .catch(error => console.error("Erro ao deletar meta:", error));
    }
  };

  const handleGoalUpdated = (updatedGoal) => {
    setGoals(prevGoals => prevGoals.map(goal => goal.id === updatedGoal.id ? updatedGoal : goal));
    fetchGoals(); // Recarrega para garantir que o aporte mensal seja recalculado
  };

  return (
    <div className="max-w-6xl mx-auto">
      {editingGoal && (
        <EditGoalModal
          goal={editingGoal}
          onClose={() => setEditingGoal(null)}
          onGoalUpdated={handleGoalUpdated}
        />
      )}

      <GoalCreateForm onGoalAdded={handleGoalAdded} />
      
      <h2 className="text-3xl font-bold mb-6 text-white">Minhas Metas</h2>
      {isLoading ? (
        <div className="text-center text-white/60 py-12">Carregando metas...</div>
      ) : goals.length === 0 ? (
        <div className="text-center bg-fin-dark/50 p-12 rounded-2xl text-white/60">
          <div className="text-5xl mb-4">🧭</div>
          Nenhuma meta criada ainda. Comece a planejar seu futuro!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map(goal => (
            <GoalCard 
              key={goal.id} 
              goal={goal} 
              onEditClick={() => setEditingGoal(goal)}
              onDeleteClick={() => handleGoalDeleted(goal.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}