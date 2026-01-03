'use client'; 

import { useState, useEffect, Fragment, useRef } from 'react';
import axios from 'axios';
import { Listbox, Transition } from '@headlessui/react';
import AuthGuard from '@/components/AuthGuard';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const formatCurrency = (v) => Number(v ?? 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// --- Ícones ---
const SelectorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" /></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-800"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>;
const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>;
const DeleteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>;

// --- Seletor de Mês ---
function MonthSelector({ currentDate, onDateChange }) {
  const handlePreviousMonth = () => { const newDate = new Date(currentDate); newDate.setMonth(newDate.getMonth() - 1); onDateChange(newDate); };
  const handleNextMonth = () => { const newDate = new Date(currentDate); newDate.setMonth(newDate.getMonth() + 1); onDateChange(newDate); };
  const formattedDate = `${currentDate.toLocaleString('pt-BR', { month: 'long' })} ${currentDate.getFullYear()}`.replace(/^\w/, (c) => c.toUpperCase());

  return (
    <div className="flex justify-between items-center mb-8 p-4 bg-gradient-to-r from-fin-dark/80 to-fin-card/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-xl">
      <button onClick={handlePreviousMonth} className="p-3 text-fin-gold hover:bg-fin-gold/10 rounded-xl transition-all duration-300 hover:scale-105 border border-fin-gold/20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
      </button>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white tracking-wide">{formattedDate}</h2>
        <p className="text-xs text-gray-400 mt-1">Extrato Mensal</p>
      </div>
      <button onClick={handleNextMonth} className="p-3 text-fin-gold hover:bg-fin-gold/10 rounded-xl transition-all duration-300 hover:scale-105 border border-fin-gold/20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
      </button>
    </div>
  );
}

// --- Componente de Seletor ---
function CustomSelect({ label, value, onChange, options, placeholder, required = false, textClass = "text-white" }) {
  const selectedOption = options.find(option => option.id === value) || null;
  return (
    <div>
      {label && <label className="block text-sm font-medium text-white/80 mb-2">{label} {required && '*'}</label>}
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <div className="relative">
            <Listbox.Button className={`relative w-full p-4 pr-10 text-left bg-fin-dark/60 rounded-xl border-2 transition-all text-white ${textClass} ${open ? 'border-fin-gold focus:ring-2 focus:ring-fin-gold/20' : 'border-white/10 focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/20'}`} style={label.includes("Grupo") ? {background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))', borderColor: 'rgba(59, 130, 246, 0.3)'} : {}}>
              <span className="block truncate">{selectedOption ? selectedOption.name : <span className="text-white/40">{placeholder}</span>}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"><SelectorIcon /></span>
            </Listbox.Button>
            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-xl py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-fin-gold/50" style={{ backgroundColor: '#A7C7E7' }}>
                {options.length === 0 ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">Nenhuma opção.</div>
                ) : (
                  options.map((option) => (
                    <Listbox.Option key={option.id} className={({ active }) => `relative cursor-pointer select-none py-2 pl-10 pr-4 ${ active ? 'bg-blue-200 text-blue-900' : 'text-gray-800' }`} value={option.id}>
                      {({ selected }) => (<><span className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}>{option.name}</span>{selected ? (<span className="absolute inset-y-0 left-0 flex items-center pl-3"><CheckIcon /></span>) : null}</>)}
                    </Listbox.Option>
                  ))
                )}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
}

// --- MODAL DE EDIÇÃO DE DESPESA (NOVO) ---
function EditExpenseModal({ expense, onClose, onUpdated }) {
  const [description, setDescription] = useState(expense.description);
  const [amount, setAmount] = useState(expense.amount);
  const [date, setDate] = useState(expense.date ? expense.date.split('T')[0] : '');
  const [groupId, setGroupId] = useState(expense.budget_group_id);
  const [subcategoryId, setSubcategoryId] = useState(expense.category_id);
  const [paid, setPaid] = useState(expense.paid);
  
  // Dados para os selects (precisa buscar de novo ou passar via props - vou buscar aqui para isolar)
  const [groups, setGroups] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get(`${API_URL}/budget/`),
      axios.get(`${API_URL}/categories/`)
    ]).then(([gRes, cRes]) => {
      setGroups(gRes.data);
      setCategories(cRes.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedExpense = {
        description,
        total_amount: parseFloat(amount), // Backend espera total_amount no schema de Create/Update
        date: date ? new Date(date).toISOString() : new Date().toISOString(),
        paid,
        budget_group_id: groupId,
        category_id: subcategoryId,
        // Manter outros campos como estavam ou null se não usar na edição simples
        goal_id: expense.goal_id,
        credit_card_id: expense.credit_card_id,
        installments_total: expense.installments_total
      };

      const res = await axios.put(`${API_URL}/expenses/${expense.id}`, updatedExpense);
      onUpdated(res.data);
      onClose();
    } catch (error) {
      alert("Erro ao editar despesa. Verifique os campos.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="bg-fin-dark/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl w-full max-w-lg border border-fin-gold/30 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-fin-gold">Editar Despesa</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Descrição</label>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="w-full p-3 bg-black/40 border border-white/10 rounded-xl text-white focus:border-fin-gold outline-none"/>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1">Valor (R$)</label>
              <input type="number" step="0.01" value={amount} onChange={e => setAmount(e.target.value)} className="w-full p-3 bg-black/40 border border-white/10 rounded-xl text-white focus:border-fin-gold outline-none"/>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">Data</label>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full p-3 bg-black/40 border border-white/10 rounded-xl text-white focus:border-fin-gold outline-none"/>
            </div>
          </div>

          <CustomSelect label="Grupo" value={groupId} onChange={setGroupId} options={groups} placeholder="Selecione..." />
          <CustomSelect label="Subcategoria" value={subcategoryId} onChange={setSubcategoryId} options={categories} placeholder="Opcional" />

          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5 cursor-pointer" onClick={() => setPaid(!paid)}>
            <div className={`w-5 h-5 rounded border flex items-center justify-center ${paid ? 'bg-green-500 border-green-500' : 'border-gray-500'}`}>
              {paid && '✓'}
            </div>
            <span className={paid ? 'text-green-400 font-bold' : 'text-gray-400'}>{paid ? 'Pago' : 'Pendente'}</span>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg mt-2">
            Salvar Alterações
          </button>
        </form>
      </div>
    </div>
  );
}

// --- FORMULÁRIO DE CRIAÇÃO ---
function ExpenseForm({ onExpenseAdded }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [paid, setPaid] = useState(true); 
  const [groupId, setGroupId] = useState(null);
  const [subcategoryId, setSubcategoryId] = useState(null);
  const [newSubcategoryName, setNewSubcategoryName] = useState('');
  const [creditCardId, setCreditCardId] = useState(null);
  const [installments, setInstallments] = useState(1);
  const [budgetGroups, setBudgetGroups] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [goals, setGoals] = useState([]);
  const [creditCards, setCreditCards] = useState([]);
  const [selectedGoalId, setSelectedGoalId] = useState(null);
  const [metaGroupId, setMetaGroupId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [suggestionApplied, setSuggestionApplied] = useState(false);
  const debounceTimer = useRef(null);

  useEffect(() => {
    Promise.all([
      axios.get(`${API_URL}/budget/`),
      axios.get(`${API_URL}/categories/`),
      axios.get(`${API_URL}/goals/`),
      axios.get(`${API_URL}/cards/`)
    ]).then(([groupsRes, catsRes, goalsRes, cardsRes]) => {
      setBudgetGroups(groupsRes.data);
      setSubcategories(catsRes.data);
      setGoals(goalsRes.data);
      setCreditCards(cardsRes.data);
      const metaGroup = groupsRes.data.find(g => g.name.toLowerCase().includes("metas"));
      if (metaGroup) setMetaGroupId(metaGroup.id);
    });
  }, []);

  useEffect(() => {
    setSuggestionApplied(false);
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    if (description.trim() === '') return;
    debounceTimer.current = setTimeout(() => {
      axios.get(`${API_URL}/ai/suggest?description=${description}`) 
        .then(response => {
          const rule = response.data;
          setGroupId(rule.budget_group_id);
          setSubcategoryId(rule.category_id);
          setSuggestionApplied(true);
        })
        .catch(async (error) => {
          // Auto-healing: Se modelo não encontrado (404), tentar treinar
          if (error.response && error.response.status === 404) {
             try {
               console.log("IA: Modelo não encontrado. Tentando treinar automaticamente...");
               await axios.post(`${API_URL}/ai/train`);
               // Tentar novamente a sugestão
               const retryRes = await axios.get(`${API_URL}/ai/suggest?description=${description}`);
               const rule = retryRes.data;
               setGroupId(rule.budget_group_id);
               setSubcategoryId(rule.category_id);
               setSuggestionApplied(true);
             } catch (trainError) {
               console.warn("IA: Auto-trebamento falhou (provavelmente dados insuficientes).", trainError);
             }
          }
        });
    }, 800); 
    return () => { if (debounceTimer.current) clearTimeout(debounceTimer.current) };
  }, [description]);

  useEffect(() => {
    if (creditCardId) {
      setPaid(false);
    } else {
      setPaid(true);
      setInstallments(1);
    }
  }, [creditCardId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description || !amount || !groupId) {
      alert("Preencha Descrição, Valor Total e Grupo.");
      return;
    }
    setIsSubmitting(true);
    try {
      let finalSubcategoryId = subcategoryId;
      if (newSubcategoryName) {
        const catRes = await axios.post(`${API_URL}/categories/`, { name: newSubcategoryName });
        finalSubcategoryId = catRes.data.id;
        setSubcategories(prev => [...prev, catRes.data]);
      }
      
      const newExpense = {
        description,
        total_amount: parseFloat(amount),
        date: date ? new Date(date).toISOString() : new Date().toISOString(),
        paid: paid,
        budget_group_id: parseInt(groupId),
        category_id: finalSubcategoryId ? parseInt(finalSubcategoryId) : null,
        goal_id: (parseInt(groupId) === metaGroupId && selectedGoalId) ? parseInt(selectedGoalId) : null,
        credit_card_id: creditCardId ? parseInt(creditCardId) : null,
        installments_total: parseInt(installments) || 1
      };
      
      await axios.post(`${API_URL}/expenses/`, newExpense);
      
      setDescription(''); setAmount(''); setDate(''); setPaid(true);
      setGroupId(null); setSubcategoryId(null); setNewSubcategoryName(''); setSelectedGoalId(null);
      setCreditCardId(null); setInstallments(1);
      
      onExpenseAdded();
    } catch (error) {
      console.error("Erro:", error);
      alert(error.response?.data?.detail || "Erro ao cadastrar despesa.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubcategoryChange = (value) => {
    setSubcategoryId(value);
    if (value) setNewSubcategoryName('');
  };
  const handleNewSubcategoryChange = (e) => {
    setNewSubcategoryName(e.target.value);
    if (e.target.value) setSubcategoryId(null);
  };
  
  return (
    <div className="bg-gradient-to-br from-fin-card to-fin-dark/80 p-6 md:p-8 rounded-3xl shadow-2xl mb-8 border border-fin-gold/20 backdrop-blur-sm">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-fin-gold/20 rounded-2xl"><span className="text-2xl">💰</span></div>
        <div>
          <h2 className="text-2xl font-bold text-white">Nova Transação</h2>
          <p className="text-fin-gold/70 text-sm">Registre despesas ou agendamentos</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-fin-gold border-b border-fin-gold/30 pb-2">Informações Básicas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Descrição *</label>
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ex: Conta de Luz..." className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Valor Total *</label>
              <div className="relative"><span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-fin-gold font-bold">R$</span><input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0,00" className="w-full p-4 pl-12 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div><label className="block text-sm font-medium text-white/80 mb-2">Data</label><input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/></div>
            <div className="relative">
              <CustomSelect label="Grupo *" required value={groupId} onChange={setGroupId} options={budgetGroups} placeholder="Selecione um grupo" textClass="font-semibold"/>
              {suggestionApplied && <span className="absolute -top-2 -right-2 text-xs bg-fin-highlight text-fin-dark font-bold px-2 py-0.5 rounded-full animate-pulse">💡</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Status</label>
              <div className={`w-full p-4 rounded-xl border-2 transition-all ${creditCardId ? 'bg-gray-700/50 border-gray-600 text-gray-500 cursor-not-allowed' : (paid ? 'bg-green-500/20 border-green-500/50 text-green-400 cursor-pointer' : 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400 cursor-pointer')}`} onClick={() => !creditCardId && setPaid(!paid)}>
                <div className="flex items-center justify-between"><span className="font-bold">{paid ? '✅ PAGO' : '⏳ PENDENTE'}</span><div className={`w-3 h-3 rounded-full ${paid ? 'bg-green-400' : 'bg-yellow-400'}`}></div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-fin-gold border-b border-fin-gold/30 pb-2">Detalhes (Opcional)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <CustomSelect label="Subcategoria" value={subcategoryId} onChange={handleSubcategoryChange} options={subcategories} placeholder="Selecionar existente"/>
              {suggestionApplied && <span className="absolute -top-2 -right-2 text-xs bg-fin-highlight text-fin-dark font-bold px-2 py-0.5 rounded-full animate-pulse">💡</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Nova Subcategoria</label>
              <input type="text" value={newSubcategoryName} onChange={handleNewSubcategoryChange} placeholder="Criar nova..." className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomSelect label="Cartão de Crédito (Opcional)" value={creditCardId} onChange={setCreditCardId} options={creditCards} placeholder="Foi no crédito?" textClass="text-fin-terra"/>
            {creditCardId && (
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Nº de Parcelas</label>
                <input type="number" min="1" value={installments} onChange={(e) => setInstallments(Number(e.target.value) || 1)} className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
              </div>
            )}
          </div>
          {parseInt(groupId) === metaGroupId && (
            <CustomSelect label="Vincular à Meta" value={selectedGoalId} onChange={setSelectedGoalId} options={goals} placeholder="Selecionar meta..." textClass="text-fin-highlight"/>
          )}
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
          style={{ boxShadow: '0 4px 20px rgba(220, 38, 38, 0.4)' }}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processando...
            </>
          ) : (
            <>
              <span>{paid ? '💾' : '📅'}</span>
              {paid ? 'Registrar Pagamento' : 'Agendar Despesa'}
            </>
          )}
        </button>
      </form>
    </div>
  );
}

// --- LISTA DE DESPESAS ---
function ExpenseList({ expenses, setExpenses, onEditClick }) {
  const [filter, setFilter] = useState('all'); 

  const filteredExpenses = expenses.filter(expense => {
    if (filter === 'paid') return expense.paid;
    if (filter === 'pending') return !expense.paid;
    return true;
  });

  const handleDelete = async (id) => { if (!confirm("Excluir?")) return; try { await axios.delete(`${API_URL}/expenses/${id}`); setExpenses(expenses.filter(e => e.id !== id)); } catch (error) { console.error("Erro:", error); alert("Erro ao excluir."); } };
  const handleToggleStatus = async (expense) => { try { const response = await axios.patch(`${API_URL}/expenses/${expense.id}/toggle-status`); setExpenses(prev => prev.map(e => e.id === expense.id ? response.data : e)); } catch (error) { console.error("Erro:", error); } };
  const formatDate = (d) => new Date(d).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
  const totalAmount = filteredExpenses.reduce((sum, expense) => sum + Number(expense.amount), 0);
  const paidAmount = filteredExpenses.filter(e => e.paid).reduce((sum, expense) => sum + Number(expense.amount), 0);
  const pendingAmount = filteredExpenses.filter(e => !e.paid).reduce((sum, expense) => sum + Number(expense.amount), 0);

  return (
    <div className="bg-gradient-to-br from-fin-card to-fin-dark/80 p-6 md:p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-500/20 rounded-2xl"><span className="text-2xl">📊</span></div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white">Extrato do Mês</h2>
            <p className="text-white/60 text-xs md:text-sm">Transações registradas e agendadas</p>
          </div>
        </div>
        <div className="flex gap-2 bg-fin-dark/60 p-1 rounded-xl overflow-x-auto">
          {[
            { key: 'all', label: 'Todos', emoji: '📋' },
            { key: 'paid', label: 'Pagas', emoji: '✅' },
            { key: 'pending', label: 'Pendentes', emoji: '⏳' }
          ].map(({ key, label, emoji }) => (<button key={key} onClick={() => setFilter(key)} className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${ filter === key ? 'bg-fin-gold text-fin-dark font-bold' : 'text-white/70 hover:text-white' }`}><span>{emoji}</span>{label}</button>))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-fin-dark/40 p-4 rounded-xl border border-white/5"><div className="text-white/60 text-sm">Total no Mês</div><div className="text-2xl font-bold text-white">{formatCurrency(totalAmount)}</div></div>
        <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20"><div className="text-green-400 text-sm">Pagas</div><div className="text-2xl font-bold text-green-400">{formatCurrency(paidAmount)}</div></div>
        <div className="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20"><div className="text-yellow-400 text-sm">Pendentes</div><div className="text-2xl font-bold text-yellow-400">{formatCurrency(pendingAmount)}</div></div>
      </div>
      
      {filteredExpenses.length === 0 ? (
        <div className="text-center py-12 text-white/40"><div className="text-6xl mb-4">📭</div><p>Nenhuma transação encontrada para este mês</p></div>
      ) : (
        <div className="space-y-3">
          {filteredExpenses.map(expense => (
            <div key={expense.id} className={`flex flex-col md:flex-row md:justify-between md:items-center p-5 rounded-2xl border-2 ${ expense.paid ? 'bg-fin-dark/30 border-white/5' : 'bg-yellow-500/10 border-yellow-500/20'}`}>
              <div className="flex items-start gap-4 flex-1 mb-4 md:mb-0">
                <div className={`p-3 rounded-xl ${expense.paid ? 'bg-green-500/20' : 'bg-yellow-500/20'}`}><span className="text-lg">{expense.paid ? '✅' : '⏳'}</span></div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${expense.paid ? 'text-green-400 bg-green-400/10' : 'text-yellow-400 bg-yellow-400/10'}`}>{formatDate(expense.date)}</span>
                    {!expense.paid && (<span className="text-xs text-yellow-400 font-bold uppercase tracking-wider bg-yellow-400/10 px-2 py-1 rounded">Pendente</span>)}
                    {expense.credit_card && (<span className="text-xs text-fin-terra font-bold uppercase tracking-wider bg-fin-terra/10 px-2 py-1 rounded">💳 {expense.credit_card.name}</span>)}
                    {expense.installments_total > 1 && (<span className="text-xs text-blue-300 font-bold bg-blue-900/30 px-2 py-1 rounded">({expense.installment_current}/{expense.installments_total})</span>)}
                  </div>
                  <div className="font-semibold text-white text-lg mb-1">{expense.description}</div>
                  <div className="text-sm text-white/60">
                    <span className="text-fin-gold/80">{expense.budget_group?.name}</span>
                    {expense.category && ` • ${expense.category.name}`}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-3 border-t md:border-t-0 border-white/5 pt-3 md:pt-0">
                <span className={`text-xl font-bold ${expense.paid ? 'text-fin-red' : 'text-white/70'}`}>{formatCurrency(expense.amount)}</span>
                <div className="flex gap-1">
                  <button onClick={() => handleToggleStatus(expense)} className={`p-3 rounded-xl ${expense.paid ? 'text-gray-500 hover:text-yellow-400' : 'text-green-400 hover:bg-green-400/20'}`} title={expense.paid ? "Pendente" : "Pago"}>{expense.paid ? '↩️' : '✅'}</button>
                  
                  {/* 👇 BOTÃO DE EDITAR ADICIONADO 👇 */}
                  <button onClick={() => onEditClick(expense)} className="p-3 rounded-xl text-blue-400 hover:bg-blue-400/10" title="Editar">
                    <EditIcon />
                  </button>

                  <button onClick={() => handleDelete(expense.id)} className="p-3 rounded-xl text-fin-red/50 hover:text-fin-red" title="Excluir">
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

// --- COMPONENTE PRINCIPAL (Wrapper) ---
export default function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(null);
  
  // 👇 ESTADO PARA EDIÇÃO
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  const fetchExpenses = (date) => {
    if (!date) return;
    setIsLoading(true);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    
    axios.get(`${API_URL}/expenses/?year=${year}&month=${month}`)
      .then(res => setExpenses(res.data))
      .catch(error => console.error("Erro:", error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => { 
    fetchExpenses(currentDate); 
  }, [currentDate]);

  const handleUpdated = (updated) => {
    // Atualiza a lista localmente
    setExpenses(prev => prev.map(e => e.id === updated.id ? updated : e));
    // Opcional: recarregar tudo para garantir consistência
    fetchExpenses(currentDate); 
  };

  if (!currentDate) return <div className="min-h-screen bg-fin-dark"></div>;

  return (
    <AuthGuard>
      <div className="min-h-screen">
        <div className="max-w-6xl mx-auto p-4 md:p-6">
          
          {/* 👇 RENDERIZA O MODAL SE HOUVER DESPESA SENDO EDITADA 👇 */}
          {editingExpense && (
            <EditExpenseModal 
              expense={editingExpense} 
              onClose={() => setEditingExpense(null)} 
              onUpdated={handleUpdated} 
            />
          )}

          <ExpenseForm onExpenseAdded={() => fetchExpenses(currentDate)} />
          
          <MonthSelector currentDate={currentDate} onDateChange={setCurrentDate} />

          {isLoading ? (
            <div className="bg-fin-card/30 p-12 rounded-3xl border border-white/5 text-center">
              <div className="w-12 h-12 border-4 border-fin-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white/60">Carregando...</p>
            </div>
          ) : (
            <ExpenseList 
              expenses={expenses} 
              setExpenses={setExpenses} 
              onEditClick={setEditingExpense} // Passa a função para abrir o modal
            />
          )}
        </div>
      </div>
    </AuthGuard>
  );
}