'use client'; 

import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Listbox, Transition } from '@headlessui/react';

// --- Ícones ---
const SelectorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" /></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-fin-gold"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>;

const API_URL = 'http://localhost:8000';

// --- Função Auxiliar de Formatação ---
const formatCurrency = (value) => {
  if (value === null || value === undefined || typeof value !== 'number') value = 0;
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

// --- Componente de Seletor ---
function CustomSelect({ label, value, onChange, options, placeholder }) {
  const selectedOption = options.find(option => option.id === value) || null;
  return (
    <div>
      {label && <label className="block text-sm font-medium text-white/80 mb-2">{label}</label>}
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button className="relative w-full p-4 pr-10 text-left bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold focus:ring-2 focus:ring-fin-gold/20 transition-all text-white">
            <span className="block truncate">{selectedOption ? selectedOption.name : <span className="text-white/40">{placeholder}</span>}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"><SelectorIcon /></span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-fin-dark py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-fin-gold/50">
              {options.map((option) => (
                <Listbox.Option key={option.id} className={({ active }) => `relative cursor-pointer select-none py-2 pl-10 pr-4 ${ active ? 'bg-fin-card/80 text-fin-gold' : 'text-white' }`} value={option.id}>
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}>{option.name}</span>
                      {selected ? (<span className="absolute inset-y-0 left-0 flex items-center pl-3"><CheckIcon /></span>) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

// --- Formulário para Adicionar Ativos ---
function AddHoldingForm({ onHoldingAdded }) {
  const [ticker, setTicker] = useState('');
  const [name, setName] = useState('');
  const [assetType, setAssetType] = useState('Ação');
  const [quantity, setQuantity] = useState('');
  const [averagePrice, setAveragePrice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quote, setQuote] = useState(null);
  const [quoteLoading, setQuoteLoading] = useState(false);

  const assetTypes = [
    { id: 'Ação', name: 'Ação (BR)' },
    { id: 'FII', name: 'FII (BR)' },
    { id: 'Cripto', name: 'Criptomoeda' },
    { id: 'Ação (EUA)', name: 'Ação (EUA)' },
  ];

  const fetchQuote = () => {
    if (!ticker) return;
    setQuoteLoading(true);
    setQuote(null);
    axios.get(`${API_URL}/portfolio/quote/${ticker}`)
      .then(response => setQuote(response.data.price))
      .catch(error => {
        console.error("Erro:", error);
        setQuote('Não encontrado');
      })
      .finally(() => setQuoteLoading(false));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ticker || !name || !assetType || !quantity || !averagePrice) {
      alert("Preencha todos os campos.");
      return;
    }
    setIsSubmitting(true);
    try {
      const holdingData = {
        ticker: ticker.toUpperCase(),
        name,
        asset_type: assetType,
        quantity: parseFloat(quantity),
        average_price: parseFloat(averagePrice)
      };
      await axios.post(`${API_URL}/portfolio/`, holdingData);
      setTicker(''); setName(''); setAssetType('Ação');
      setQuantity(''); setAveragePrice(''); setQuote(null);
      onHoldingAdded();
    } catch (error) {
      alert("Erro ao salvar ativo.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-fin-card to-fin-dark/80 p-8 rounded-3xl shadow-2xl mb-8 border border-fin-gold/20 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-white mb-6">Adicionar Ativo ao Portfólio</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Ticker *</label>
            <div className="flex gap-2">
              <input type="text" value={ticker} onChange={(e) => setTicker(e.target.value)} placeholder="Ex: ITUB4" className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white uppercase"/>
              <button type="button" onClick={fetchQuote} disabled={quoteLoading} className="p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 text-fin-gold hover:border-fin-gold transition">
                {quoteLoading ? '...' : 'Buscar'}
              </button>
            </div>
            {quote && (
              <div className="text-sm mt-2 text-fin-highlight">
                Preço Atual: {typeof quote === 'number' ? formatCurrency(quote) : quote}
              </div>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-white/80 mb-2">Nome do Ativo *</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex: Itaú Unibanco" className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CustomSelect label="Tipo de Ativo *" value={assetType} onChange={setAssetType} options={assetTypes} placeholder="Selecione o tipo"/>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Quantidade *</label>
            <input type="number" step="any" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Ex: 100" className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Preço Médio de Compra *</label>
            <input type="number" step="any" value={averagePrice} onChange={(e) => setAveragePrice(e.target.value)} placeholder="Ex: 28.50" className="w-full p-4 bg-fin-dark/60 rounded-xl border-2 border-white/10 focus:border-fin-gold text-white"/>
          </div>
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-fin-highlight to-fin-gold hover:opacity-90 text-fin-dark font-bold py-4 rounded-xl transition shadow-lg">
          {isSubmitting ? 'Salvando...' : '💾 Salvar Ativo'}
        </button>
      </form>
    </div>
  );
}

// --- Componente para Mostrar o Portfólio ---
function PortfolioView({ holdings, setHoldings }) {
  const [marketPrices, setMarketPrices] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // 👇 MUDANÇA AQUI: Esta função agora é chamada manualmente
  const fetchPricesSequentially = async () => {
    if (holdings.length === 0) return;
    setIsLoading(true);
    
    const uniqueTickers = [...new Set(holdings.map(h => h.asset.ticker))];
    const newPrices = { ...marketPrices };

    for (const ticker of uniqueTickers) {
      try {
        const res = await axios.get(`${API_URL}/portfolio/quote/${ticker}`);
        newPrices[ticker] = res.data.price;
        setMarketPrices({ ...newPrices });
        // Delay de 15s para a API gratuita
        await new Promise(resolve => setTimeout(resolve, 15000));
      } catch (e) {
        console.error(`Falha ao buscar ${ticker}`);
        newPrices[ticker] = 0; // Marca como falha
      }
    }
    setIsLoading(false);
  };

  const handleDelete = async (holdingId) => {
    if (confirm("Remover este ativo do portfólio?")) {
      try {
        await axios.delete(`${API_URL}/portfolio/${holdingId}`);
        setHoldings(prev => prev.filter(h => h.id !== holdingId));
      } catch (e) {
        alert("Erro ao deletar ativo.");
      }
    }
  };
  
  let totalInvested = 0;
  let totalCurrent = 0;
  holdings.forEach(h => {
    // Usa o preço de mercado se já foi buscado, senão usa o preço médio
    const currentPrice = marketPrices[h.asset.ticker] || h.average_price; 
    totalInvested += h.quantity * h.average_price;
    totalCurrent += h.quantity * currentPrice;
  });
  const totalProfit = totalCurrent - totalInvested;
  const totalProfitPercent = (totalInvested > 0) ? (totalProfit / totalInvested) * 100 : 0;

  return (
    <div className="bg-gradient-to-br from-fin-card to-fin-dark/80 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Meu Patrimônio</h2>
        {/* 👇 BOTÃO DE ATUALIZAÇÃO MANUAL 👇 */}
        <button
          onClick={fetchPricesSequentially}
          disabled={isLoading}
          className="px-4 py-2 bg-fin-dark/70 text-fin-gold border border-fin-gold/50 rounded-xl hover:bg-fin-gold hover:text-fin-dark transition disabled:opacity-50 disabled:animate-pulse"
        >
          {isLoading ? 'Atualizando...' : '🔄 Atualizar Cotações'}
        </button>
      </div>
      
      {/* ... (Cards de Resumo - sem alteração) ... */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-fin-dark/50 p-6 rounded-2xl border border-white/5 text-center">
          <div className="text-gray-400 text-sm mb-1">Patrimônio Atual</div>
          <div className="text-3xl font-bold text-white">{formatCurrency(totalCurrent)}</div>
        </div>
        <div className="bg-fin-dark/50 p-6 rounded-2xl border border-white/5 text-center">
          <div className="text-gray-400 text-sm mb-1">Total Investido</div>
          <div className="text-3xl font-bold text-gray-300">{formatCurrency(totalInvested)}</div>
        </div>
        <div className={`p-6 rounded-2xl border ${totalProfit >= 0 ? 'bg-green-500/10 border-green-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
          <div className={`text-sm mb-1 ${totalProfit >= 0 ? 'text-green-400' : 'text-fin-red'}`}>Lucro/Prejuízo</div>
          <div className={`text-3xl font-bold ${totalProfit >= 0 ? 'text-green-400' : 'text-fin-red'}`}>
            {formatCurrency(totalProfit)} ({totalProfitPercent.toFixed(1)}%)
          </div>
        </div>
      </div>
      
      {isLoading && <div className="text-center text-fin-gold animate-pulse mb-4">Atualizando cotações... (15s por ativo)</div>}

      {/* Lista de Ativos */}
      <div className="space-y-4">
        {holdings.map(h => {
          const currentPrice = marketPrices[h.asset.ticker] || 0;
          const invested = h.quantity * h.average_price;
          const currentVal = h.quantity * currentPrice;
          const profit = currentVal - invested;
          const profitPercent = (invested > 0) ? (profit / invested) * 100 : 0;
          // Mostra '...' se o preço ainda não foi buscado
          const isPriceFound = marketPrices[h.asset.ticker] !== undefined; 

          return (
            <div key={h.id} className="bg-fin-dark/50 p-5 rounded-2xl border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{h.asset.ticker}</h3>
                  <p className="text-sm text-gray-400">{h.asset.name} ({h.asset.asset_type})</p>
                </div>
                <button onClick={() => handleDelete(h.id)} className="p-2 text-fin-red/50 hover:text-fin-red hover:bg-fin-red/10 rounded-full">🗑️</button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-xs text-gray-400">Posição Atual</div>
                  <div className="text-lg font-semibold text-white">{formatCurrency(currentVal)}</div>
                  {isPriceFound && <div className={`text-sm ${profit >= 0 ? 'text-green-400' : 'text-fin-red'}`}>{profitPercent.toFixed(1)}%</div>}
                </div>
                <div>
                  <div className="text-xs text-gray-400">Preço Atual</div>
                  <div className="text-lg font-semibold text-white">{isPriceFound ? formatCurrency(currentPrice) : '...'}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Quantidade</div>
                  <div className="text-lg font-semibold text-white">{h.quantity}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Preço Médio</div>
                  <div className="text-lg font-semibold text-white">{formatCurrency(h.average_price)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Componente Principal da Página ---
export default function PortfolioPage() {
  const [holdings, setHoldings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchHoldings = () => {
    setIsLoading(true);
    axios.get(`${API_URL}/portfolio/`)
      .then(res => setHoldings(res.data))
      .catch(e => console.error("Erro ao buscar portfólio:", e))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchHoldings();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        <AddHoldingForm onHoldingAdded={fetchHoldings} />
        {isLoading ? (
          <div className="text-center text-white/60 py-12">Carregando portfólio...</div>
        ) : (
          <PortfolioView holdings={holdings} setHoldings={setHoldings} />
        )}
      </div>
    </div>
  );
}