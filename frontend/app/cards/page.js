'use client'; 

import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Listbox, Transition } from '@headlessui/react'; // Importamos o Listbox

// --- Ícones (copiados de expenses/page.js) ---
const SelectorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" /></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-800"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>;

const API_URL = 'http://localhost:8000';

// --- Componente de Seletor (copiado de expenses/page.js) ---
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
      <h2 className="text-2xl font-bold text-white mb-6">Adicionar Novo Cartão de Crédito</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome (Ex: Nubank)" className="md:col-span-2 w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
        <input type="number" value={closingDay} onChange={(e) => setClosingDay(e.target.value)} placeholder="Dia do Fechamento (Ex: 20)" className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
        <input type="number" value={dueDay} onChange={(e) => setDueDay(e.target.value)} placeholder="Dia do Vencimento (Ex: 28)" className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
        <button type="submit" disabled={isSubmitting} className="md:col-span-4 w-full bg-gradient-to-r from-fin-gold to-fin-terra hover:opacity-90 text-fin-dark font-bold py-3 px-4 rounded-xl transition-all shadow-lg">
          {isSubmitting ? "Salvando..." : "Salvar Cartão"}
        </button>
      </form>
    </div>
  );
}

// --- 👇 NOVO MODAL: Pagar Fatura 👇 ---
function PayFaturaModal({ card, groups, onClose, onFaturaPaid }) {
  const [amount, setAmount] = useState('');
  const [budgetGroupId, setBudgetGroupId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!amount || !budgetGroupId) {
      alert("Por favor, informe o Valor Pago e o Grupo de Orçamento para este pagamento.");
      return;
    }
    setIsSubmitting(true);
    try {
      await axios.post(`${API_URL}/cards/${card.id}/pay`, {
        amount: parseFloat(amount),
        budget_group_id: parseInt(budgetGroupId)
      });
      onFaturaPaid(); // Avisa o componente pai
      onClose(); // Fecha o modal
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
          <h2 className="text-2xl font-bold text-fin-gold">Pagar Fatura: {card.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl">&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Valor Total Pago *</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-fin-gold font-bold">R$</span>
              <input type="number" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Ex: 1500.00" className="w-full p-4 pl-12 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
            </div>
          </div>
          <CustomSelect
            label="Categorizar Pagamento em: *"
            value={budgetGroupId}
            onChange={setBudgetGroupId}
            options={groups}
            placeholder="Selecione um Grupo (ex: Custo Fixo)"
            textClass="font-semibold"
          />
          <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg">
            {isSubmitting ? "Processando..." : "Confirmar Pagamento da Fatura"}
          </button>
        </form>
      </div>
    </div>
  );
}

// --- Lista de Cartões (ATUALIZADA com botão de pagar) ---
function CardList({ cards, setCards, budgetGroups, onFaturaPaid }) {
  const [payingCard, setPayingCard] = useState(null); // Controla o modal

  const handleDelete = async (id) => {
    if (confirm("Tem certeza? Isso irá desvincular este cartão de todas as despesas.")) {
      try {
        await axios.delete(`${API_URL}/cards/${id}`);
        setCards(prev => prev.filter(c => c.id !== id));
      } catch (error) {
        console.error("Erro ao deletar cartão:", error);
      }
    }
  };

  return (
    <>
      {/* O Modal de Pagamento */}
      {payingCard && (
        <PayFaturaModal
          card={payingCard}
          groups={budgetGroups}
          onClose={() => setPayingCard(null)}
          onFaturaPaid={onFaturaPaid}
        />
      )}
    
      <div className="bg-fin-card/30 p-8 rounded-3xl border border-white/5">
        <h2 className="text-2xl font-bold text-white mb-6">Meus Cartões</h2>
        {cards.length === 0 ? (
          <p className="text-white/60">Nenhum cartão cadastrado.</p>
        ) : (
          <div className="space-y-4">
            {cards.map(card => (
              <div key={card.id} className="flex justify-between items-center bg-fin-dark/50 p-5 rounded-2xl border border-white/10">
                <div>
                  <span className="text-xl font-semibold text-white">💳 {card.name}</span>
                  <span className="block text-sm text-gray-400">
                    Fecha dia {card.closing_day} | Vence dia {card.due_day}
                  </span>
                </div>
                <div className="flex gap-2">
                  {/* 👇 NOVO BOTÃO DE PAGAR 👇 */}
                  <button 
                    onClick={() => setPayingCard(card)}
                    className="p-3 rounded-xl bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-all" 
                    title="Pagar Fatura"
                  >
                    Pagar
                  </button>
                  <button 
                    onClick={() => handleDelete(card.id)} 
                    className="p-3 rounded-xl text-fin-red/50 hover:text-fin-red hover:bg-fin-red/10 transition-all"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// --- Componente Principal ---
export default function CardsPage() {
  const [cards, setCards] = useState([]);
  const [budgetGroups, setBudgetGroups] = useState([]);
  
  const fetchPageData = () => {
    // Agora busca os cartões E os grupos (para o modal)
    Promise.all([
      axios.get(`${API_URL}/cards/`),
      axios.get(`${API_URL}/budget/`)
    ])
    .then(([cardsRes, groupsRes]) => {
      setCards(cardsRes.data);
      setBudgetGroups(groupsRes.data);
    })
    .catch(e => console.error("Erro ao buscar dados:", e));
  };

  useEffect(() => {
    fetchPageData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <CardForm onCardAdded={fetchPageData} />
      <CardList 
        cards={cards} 
        setCards={setCards} 
        budgetGroups={budgetGroups}
        onFaturaPaid={fetchPageData} // Recarrega os dados após pagar
      />
    </div>
  );
}