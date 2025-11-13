'use client'; 

import { useState, useEffect, Fragment, useRef } from 'react';
import axios from 'axios';
import { Listbox, Transition } from '@headlessui/react';

// --- Ícones ---
const SelectorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
  </svg>
);
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-800">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const API_URL = 'http://localhost:8000';

// --- COMPONENTE DE SELEÇÃO (Com sua cor personalizada) ---
function CustomSelect({ label, value, onChange, options, placeholder, required = false, textClass = "text-white" }) {
  const selectedOption = options.find(option => option.id === value) || null;

  return (
    <div>
      {label && <label className="block text-sm font-medium text-white/80 mb-2">{label} {required && '*'}</label>}
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <div className="relative">
            <Listbox.Button 
              className={`relative w-full p-4 pr-10 text-left bg-fin-dark/60 rounded-xl border-2 transition-all text-white ${textClass} ${
                open 
                  ? 'border-fin-gold focus:ring-2 focus:ring-fin-gold/20' 
                  : 'border-white/10 focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/20'
              }`}
              style={label === "Grupo *" ? {background: 'linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))', borderColor: 'rgba(59, 130, 246, 0.3)'} : {}}
            >
              <span className="block truncate">
                {selectedOption ? selectedOption.name : <span className="text-white/40">{placeholder}</span>}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <SelectorIcon />
              </span>
            </Listbox.Button>
            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Listbox.Options 
                className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-fin-gold/50"
                style={{
                  backgroundColor: '#A7C7E7' // azul pastel sólido
                }}
              >
                {options.length === 0 ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">Nenhuma opção.</div>
                ) : (
                  options.map((option) => (
                    <Listbox.Option
                      key={option.id}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-blue-200 text-blue-900' : 'text-gray-800'
                        }`
                      }
                      value={option.id}
                    >
                      {({ selected }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}>
                            {option.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                              <CheckIcon />
                            </span>
                          ) : null}
                        </>
                      )}
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

// --- FORMULÁRIO (ATUALIZADO COM LÓGICA DE SUGESTÃO DA IA) ---
function ExpenseForm({ onExpenseAdded }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [paid, setPaid] = useState(true); 
  const [groupId, setGroupId] = useState(null);
  const [subcategoryId, setSubcategoryId] = useState(null);
  const [newSubcategoryName, setNewSubcategoryName] = useState('');
  const [budgetGroups, setBudgetGroups] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [goals, setGoals] = useState([]);
  const [selectedGoalId, setSelectedGoalId] = useState(null);
  const [metaGroupId, setMetaGroupId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [suggestionApplied, setSuggestionApplied] = useState(false);
  const debounceTimer = useRef(null);

  useEffect(() => {
    Promise.all([
      axios.get(`${API_URL}/budget/`),
      axios.get(`${API_URL}/categories/`),
      axios.get(`${API_URL}/goals/`)
    ]).then(([groupsRes, catsRes, goalsRes]) => {
      setBudgetGroups(groupsRes.data);
      setSubcategories(catsRes.data);
      setGoals(goalsRes.data);
      const metaGroup = groupsRes.data.find(g => g.name.toLowerCase().includes("metas"));
      if (metaGroup) setMetaGroupId(metaGroup.id);
    });
  }, []);

  // --- 👇 LÓGICA DE SUGESTÃO AUTOMÁTICA (AGORA USA A IA) 👇 ---
  useEffect(() => {
    setSuggestionApplied(false);
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    if (description.trim() === '') return;

    debounceTimer.current = setTimeout(() => {
      // 👇 ROTA ATUALIZADA
      axios.get(`${API_URL}/ai/suggest?description=${description}`) 
        .then(response => {
          const rule = response.data;
          setGroupId(rule.budget_group_id);
          setSubcategoryId(rule.category_id);
          setSuggestionApplied(true);
        })
        .catch(error => {
          // A IA não encontrou sugestão (ou não está treinada)
          // console.log("Nenhuma sugestão da IA.");
        });
    }, 800); 

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [description]);
  // ------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description || !amount || !groupId) {
      alert("Preencha os campos obrigatórios.");
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
        amount: parseFloat(amount),
        date: date ? new Date(date).toISOString() : new Date().toISOString(),
        paid: paid,
        budget_group_id: parseInt(groupId),
        category_id: finalSubcategoryId ? parseInt(finalSubcategoryId) : null,
        goal_id: (parseInt(groupId) === metaGroupId && selectedGoalId) ? parseInt(selectedGoalId) : null
      };
      await axios.post(`${API_URL}/expenses/`, newExpense);
      setDescription(''); setAmount(''); setDate(''); setPaid(true);
      setGroupId(null); setSubcategoryId(null); setNewSubcategoryName(''); setSelectedGoalId(null);
      onExpenseAdded();
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao cadastrar despesa.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-gradient-to-br from-fin-card to-fin-dark/80 p-8 rounded-3xl shadow-2xl mb-8 border border-fin-gold/20 backdrop-blur-sm">
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
              <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Ex: Conta de Luz, Supermercado..." className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/20 transition-all text-white placeholder-white/40"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Valor *</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-fin-gold font-bold">R$</span>
                <input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0,00" className="w-full p-4 pl-12 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/20 transition-all text-white"/>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Data</label>
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/20 transition-all text-white"/>
            </div>
            <div className="relative">
              <CustomSelect label="Grupo *" required value={groupId} onChange={setGroupId} options={budgetGroups} placeholder="Selecione um grupo" textClass="font-semibold"/>
              {suggestionApplied && <span className="absolute -top-2 -right-2 text-xs bg-fin-highlight text-fin-dark font-bold px-2 py-0.5 rounded-full animate-pulse">💡</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Status</label>
              <div className={`w-full p-4 rounded-xl border-2 transition-all cursor-pointer ${paid ? 'bg-green-500/20 border-green-500/50 text-green-400' : 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400'}`} onClick={() => setPaid(!paid)}>
                <div className="flex items-center justify-between">
                  <span className="font-bold">{paid ? '✅ PAGO' : '⏳ PENDENTE'}</span>
                  <div className={`w-3 h-3 rounded-full ${paid ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-fin-gold border-b border-fin-gold/30 pb-2">Categorização (Opcional)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <CustomSelect label="Subcategoria" value={subcategoryId} onChange={setSubcategoryId} options={subcategories} placeholder="Selecionar existente"/>
              {suggestionApplied && <span className="absolute -top-2 -right-2 text-xs bg-fin-highlight text-fin-dark font-bold px-2 py-0.5 rounded-full animate-pulse">💡</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Nova Subcategoria</label>
              <input type="text" value={newSubcategoryName} onChange={(e) => setNewSubcategoryName(e.target.value)} disabled={!!subcategoryId} placeholder="Criar nova..." className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold transition-all text-white placeholder-white/40 disabled:opacity-50"/>
            </div>
          </div>
          {parseInt(groupId) === metaGroupId && (
            <CustomSelect label="Vincular à Meta" value={selectedGoalId} onChange={setSelectedGoalId} options={goals} placeholder="Selecionar meta..." textClass="text-fin-highlight"/>
          )}
        </div>

        {/* 👇 Seu botão com gradiente avermelhado (MANTIDO) 👇 */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-rose-500 to-fin-red hover:from-rose-600 hover:to-red-700 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
          style={{
            boxShadow: '0 4px 20px rgba(244, 63, 94, 0.25)'
          }}
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

// --- LISTA DE DESPESAS (Corrigida) ---
function ExpenseList({ expenses, setExpenses }) {
  const [filter, setFilter] = useState('all'); 
  const filteredExpenses = expenses.filter(expense => {
    if (filter === 'paid') return expense.paid;
    if (filter === 'pending') return !expense.paid;
    return true;
  });

  const handleDelete = async (id) => {
    if (!confirm("Tem certeza que deseja excluir esta transação?")) return;
    try {
      await axios.delete(`${API_URL}/expenses/${id}`);
      setExpenses(expenses.filter(e => e.id !== id));
    } catch (error) { console.error("Erro:", error); alert("Erro ao excluir transação."); }
  };

  const handleToggleStatus = async (expense) => {
    try {
      const response = await axios.patch(`${API_URL}/expenses/${expense.id}/toggle-status`);
      setExpenses(prev => prev.map(e => e.id === expense.id ? response.data : e));
    } catch (error) { console.error("Erro:", error); }
  };

  const formatDate = (d) => new Date(d).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
  const totalAmount = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  const paidAmount = filteredExpenses.filter(e => e.paid).reduce((sum, expense) => sum + expense.amount, 0);
  const pendingAmount = filteredExpenses.filter(e => !e.paid).reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="bg-gradient-to-br from-fin-card to-fin-dark/80 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-500/20 rounded-2xl"><span className="text-2xl">📊</span></div>
          <div>
            <h2 className="text-2xl font-bold text-white">Histórico Financeiro</h2>
            <p className="text-white/60 text-sm">Transações registradas e agendadas</p>
          </div>
        </div>
        <div className="flex gap-2 bg-fin-dark/60 p-1 rounded-xl">
          {[
            { key: 'all', label: 'Todos', emoji: '📋' },
            { key: 'paid', label: 'Pagas', emoji: '✅' },
            { key: 'pending', label: 'Pendentes', emoji: '⏳' }
          ].map(({ key, label, emoji }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                filter === key 
                  ? 'bg-fin-gold text-fin-dark font-bold' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <span>{emoji}</span>
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-fin-dark/40 p-4 rounded-xl border border-white/5">
          <div className="text-white/60 text-sm">Total</div>
          <div className="text-2xl font-bold text-white">R$ {totalAmount.toFixed(2)}</div>
        </div>
        <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20">
          <div className="text-green-400 text-sm">Pagas</div>
          <div className="text-2xl font-bold text-green-400">R$ {paidAmount.toFixed(2)}</div>
        </div>
        <div className="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20">
          <div className="text-yellow-400 text-sm">Pendentes</div>
          <div className="text-2xl font-bold text-yellow-400">R$ {pendingAmount.toFixed(2)}</div>
        </div>
      </div>
      {filteredExpenses.length === 0 ? (
        <div className="text-center py-12 text-white/40">
          <div className="text-6xl mb-4">📭</div>
          <p>Nenhuma transação encontrada</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredExpenses.map(expense => (
            <div 
              key={expense.id} 
              className={`flex justify-between items-center p-5 rounded-2xl border-2 transition-all hover:scale-[1.01] ${
                expense.paid 
                  ? 'bg-fin-dark/30 border-white/5 hover:border-white/10' 
                  : 'bg-yellow-500/10 border-yellow-500/20 hover:border-yellow-500/30'
              }`}
            >
              <div className="flex items-start gap-4 flex-1">
                <div className={`p-3 rounded-xl ${expense.paid ? 'bg-green-500/20' : 'bg-yellow-500/20'}`}>
                  <span className="text-lg">{expense.paid ? '✅' : '⏳'}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${expense.paid ? 'text-green-400 bg-green-400/10' : 'text-yellow-400 bg-yellow-400/10'}`}>
                      {formatDate(expense.date)}
                    </span>
                    {!expense.paid && (
                      <span className="text-xs text-yellow-400 font-bold uppercase tracking-wider bg-yellow-400/10 px-2 py-1 rounded">
                        Pendente
                      </span>
                    )}
                  </div>
                  <div className="font-semibold text-white text-lg mb-1">{expense.description}</div>
                  <div className="text-sm text-white/60">
                    {/* 👇 CORREÇÃO DO BUG OCULTO APLICADA AQUI 👇 */}
                    <span className="text-fin-gold/80">{expense.budget_group?.name || 'Sem grupo'}</span>
                    {expense.category && ` • ${expense.category.name}`}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xl font-bold ${expense.paid ? 'text-fin-red' : 'text-white/70'}`}>
                  R$ {expense.amount.toFixed(2)}
                </span>
                <div className="flex gap-1">
                  <button onClick={() => handleToggleStatus(expense)} className={`p-3 rounded-xl transition-all hover:scale-110 ${expense.paid ? 'text-gray-500 hover:text-yellow-400 hover:bg-yellow-400/10' : 'text-green-400 hover:bg-green-400/20'}`} title={expense.paid ? "Marcar como Pendente" : "Marcar como Pago"}>
                    {expense.paid ? '↩️' : '✅'}
                  </button>
                  <button onClick={() => handleDelete(expense.id)} className="p-3 rounded-xl text-fin-red/50 hover:text-fin-red hover:bg-fin-red/10 transition-all" title="Excluir transação">
                    🗑️
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

  const fetchExpenses = () => {
    setIsLoading(true);
    axios.get(`${API_URL}/expenses/`)
      .then(res => setExpenses(res.data))
      .catch(error => console.error("Erro ao carregar despesas:", error))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => { 
    fetchExpenses(); 
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        <ExpenseForm onExpenseAdded={fetchExpenses} />
        {isLoading ? (
          <div className="bg-fin-card/30 p-12 rounded-3xl border border-white/5 text-center">
            <div className="w-12 h-12 border-4 border-fin-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white/60">Carregando transações...</p>
          </div>
        ) : (
          <ExpenseList expenses={expenses} setExpenses={setExpenses} />
        )}
      </div>
    </div>
  );
}