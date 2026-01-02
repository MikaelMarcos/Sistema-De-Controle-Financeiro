'use client'; 

import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Listbox, Transition } from '@headlessui/react';
import AuthGuard from '@/components/AuthGuard';

// --- Ícones ---
const SelectorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" /></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-800"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>;

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// --- Componente de Seletor ---
function CustomSelect({ label, value, onChange, options, placeholder, required = false, textClass = "text-white" }) {
  const selectedOption = options.find(option => option.id === value) || null;
  return (
    <div>
      {label && <label className="block text-sm font-medium text-white/80 mb-2">{label} {required && '*'}</label>}
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <div className="relative">
            <Listbox.Button className={`relative w-full p-4 pr-10 text-left bg-fin-dark/60 rounded-xl border-2 transition-all text-white ${textClass} ${open ? 'border-fin-gold' : 'border-white/10'}`}>
              <span className="block truncate">{selectedOption ? selectedOption.name : <span className="text-white/40">{placeholder}</span>}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"><SelectorIcon /></span>
            </Listbox.Button>
            <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-fin-gold/50" style={{ backgroundColor: '#A7C7E7' }}>
                {options.map((option) => (
                  <Listbox.Option key={option.id} className={({ active }) => `relative cursor-pointer select-none py-2 pl-10 pr-4 ${ active ? 'bg-blue-200 text-blue-900' : 'text-gray-800' }`} value={option.id}>
                    {({ selected }) => (<><span className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}>{option.name}</span>{selected ? (<span className="absolute inset-y-0 left-0 flex items-center pl-3"><CheckIcon /></span>) : null}</>)}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
}

// --- Formulário de Criação de Cartão ---
function CardForm({ onCardAdded }) {
  const [name, setName] = useState('');
  const [closingDay, setClosingDay] = useState('');
  const [dueDay, setDueDay] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !closingDay || !dueDay) {
      alert("Preencha todos os campos.");
      return;
    }
    setIsSubmitting(true);
    try {
      await axios.post(`${API_URL}/cards/`, {
        name,
        closing_day: parseInt(closingDay),
        due_day: parseInt(dueDay)
      });
      setName(''); setClosingDay(''); setDueDay('');
      onCardAdded();
    } catch (error) {
      console.error("Erro ao criar cartão:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-fin-card to-fin-dark/80 p-8 rounded-3xl shadow-2xl mb-8 border border-fin-gold/20 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-white mb-6">Adicionar Novo Cartão</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome (Ex: Nubank)" className="md:col-span-2 w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
        <input type="number" value={closingDay} onChange={(e) => setClosingDay(e.target.value)} placeholder="Dia do Fechamento" className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
        <input type="number" value={dueDay} onChange={(e) => setDueDay(e.target.value)} placeholder="Dia do Vencimento" className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
        <button type="submit" disabled={isSubmitting} className="md:col-span-4 w-full bg-gradient-to-r from-fin-gold to-fin-terra hover:opacity-90 text-fin-dark font-bold py-3 px-4 rounded-xl transition-all shadow-lg">
          {isSubmitting ? "Salvando..." : "Salvar Cartão"}
        </button>
      </form>
    </div>
  );
}

// --- Modal: Pagar Fatura ---
function PayFaturaModal({ card, groups, onClose, onFaturaPaid, initialAmount }) {
  const [amount, setAmount] = useState(initialAmount || '');
  const [budgetGroupId, setBudgetGroupId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Seleciona o primeiro grupo automaticamente se existir
  useEffect(() => {
      if (groups && groups.length > 0) {
          setBudgetGroupId(groups[0].id);
      }
  }, [groups]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || !budgetGroupId) {
      alert("Informe o valor e o grupo de orçamento.");
      return;
    }
    setIsSubmitting(true);
    try {
      await axios.post(`${API_URL}/cards/${card.id}/pay`, {
        amount: parseFloat(amount),
        budget_group_id: parseInt(budgetGroupId)
      });
      onFaturaPaid();
      onClose();
    } catch (error) {
      alert(error.response?.data?.detail || "Erro ao pagar fatura.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-fin-dark/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-lg border border-fin-gold/30" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-fin-gold">Pagar {card.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl">&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Valor da Fatura *</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-fin-gold font-bold">R$</span>
              <input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-4 pl-12 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
            </div>
          </div>
          <CustomSelect
            label="Categorizar Pagamento em: *"
            value={budgetGroupId}
            onChange={setBudgetGroupId}
            options={groups}
            placeholder="Selecione um Grupo"
            textClass="font-semibold"
          />
          <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg">
            {isSubmitting ? "Processando..." : "Confirmar Pagamento"}
          </button>
        </form>
      </div>
    </div>
  );
}

// --- Lista de Cartões (Com Visual "Pago") ---
function CardList({ cards, setCards, budgetGroups, onFaturaPaid, expenses }) {
  const [payingCard, setPayingCard] = useState(null);
  const [amountToPay, setAmountToPay] = useState(0);

  const handleDelete = async (id) => {
    if (confirm("Tem certeza? Isso irá desvincular este cartão de todas as despesas.")) {
      try {
        await axios.delete(`${API_URL}/cards/${id}`);
        setCards(prev => prev.filter(c => c.id !== id));
      } catch (error) { console.error("Erro ao deletar cartão:", error); }
    }
  };

  const openPayModal = (card, totalAmount) => {
      setAmountToPay(totalAmount);
      setPayingCard(card);
  };

  return (
    <>
      {payingCard && (
        <PayFaturaModal
          card={payingCard}
          groups={budgetGroups}
          onClose={() => setPayingCard(null)}
          onFaturaPaid={onFaturaPaid}
          initialAmount={amountToPay}
        />
      )}
    
      <div className="bg-fin-card/30 p-8 rounded-3xl border border-white/5">
        <h2 className="text-2xl font-bold text-white mb-6">Meus Cartões</h2>
        {cards.length === 0 ? (
          <p className="text-white/60">Nenhum cartão cadastrado.</p>
        ) : (
          <div className="space-y-4">
            {cards.map(card => {
                // Filtra as despesas não pagas deste cartão para calcular a fatura
                const cardExpenses = expenses.filter(e => e.credit_card_id === card.id && !e.paid);
                const totalInvoice = cardExpenses.reduce((sum, e) => sum + e.amount, 0);
                const isPaid = totalInvoice === 0;

                return (
                  <div 
                    key={card.id} 
                    className={`flex flex-col md:flex-row justify-between items-center p-5 rounded-2xl border transition-all duration-300
                        ${isPaid 
                            ? 'bg-green-900/20 border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.1)]' // Estilo "Pago" (Verde)
                            : 'bg-fin-dark/50 border-white/10' // Estilo Padrão
                        }
                    `}
                  >
                    <div className="flex-1 mb-4 md:mb-0">
                      <div className="flex items-center gap-3">
                          <span className="text-2xl">💳</span>
                          <div>
                            <span className={`text-xl font-semibold ${isPaid ? 'text-green-400' : 'text-white'}`}>
                                {card.name}
                            </span>
                            <span className="block text-sm text-gray-400 mt-1">
                                Fecha dia {card.closing_day} | Vence dia {card.due_day}
                            </span>
                          </div>
                      </div>
                      <div className="mt-2 text-sm">
                          {isPaid ? (
                              <span className="text-green-400 font-bold flex items-center gap-1">
                                  ✅ Fatura Paga / Sem gastos
                              </span>
                          ) : (
                              <span className="text-white/70">
                                  Fatura atual: <strong className="text-white">{totalInvoice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                              </span>
                          )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* 👇 BOTÃO DE AÇÃO CONDICIONAL 👇 */}
                      {!isPaid && (
                          <button 
                            onClick={() => openPayModal(card, totalInvoice)}
                            className="px-6 py-3 rounded-xl bg-fin-gold hover:bg-yellow-500 text-fin-dark font-bold shadow-lg transition-all transform hover:scale-105" 
                          >
                            Marcar como pago
                          </button>
                      )}
                      
                      {isPaid && (
                          <div className="px-4 py-2 rounded-xl bg-green-500/20 text-green-400 font-bold border border-green-500/30">
                              Pago
                          </div>
                      )}

                      <button 
                        onClick={() => handleDelete(card.id)} 
                        className="p-3 rounded-xl text-fin-red/50 hover:text-fin-red hover:bg-fin-red/10 transition-all"
                        title="Excluir Cartão"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                );
            })}
          </div>
        )}
      </div>
    </>
  );
}

// --- Componente Principal ---
export default function CardsPage() {
  const [cards, setCards] = useState([]);
  const [expenses, setExpenses] = useState([]); // Adicionado estado de despesas
  const [budgetGroups, setBudgetGroups] = useState([]);
  
  const fetchPageData = () => {
    // Agora busca Cartões, Despesas (para calcular a fatura) e Grupos
    Promise.all([
      axios.get(`${API_URL}/cards/`),
      axios.get(`${API_URL}/expenses/`), // Pega todas as despesas
      axios.get(`${API_URL}/budget/`)
    ])
    .then(([cardsRes, expensesRes, groupsRes]) => {
      setCards(cardsRes.data);
      setExpenses(expensesRes.data);
      setBudgetGroups(groupsRes.data);
    })
    .catch(e => console.error("Erro ao buscar dados:", e));
  };

  useEffect(() => {
    fetchPageData();
  }, []);

  return (
    <AuthGuard>
        <div className="max-w-4xl mx-auto">
        <CardForm onCardAdded={fetchPageData} />
        <CardList 
            cards={cards} 
            expenses={expenses}
            setCards={setCards} 
            budgetGroups={budgetGroups}
            onFaturaPaid={fetchPageData} 
        />
        </div>
    </AuthGuard>
  );
}