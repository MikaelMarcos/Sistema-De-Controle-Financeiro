'use client';

import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Listbox, Transition } from '@headlessui/react';
// 👇 NOVAS IMPORTAÇÕES PARA O GRÁFICO
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Registra os componentes necessários do Chart.js
Chart.register(ArcElement, Tooltip, Legend);

// --- Ícones (sem alteração) ---
const SelectorIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" /></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-fin-gold"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>;

const API_URL = 'https://api-financeiro-vbsl.onrender.com';
const formatCurrency = (v) => (v ?? 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// --- Componente de Seletor (sem alteração) ---
function CustomSelect({ label, value, onChange, options, placeholder }) {
  const selectedOption = options.find(o => o.id === value);
  return (
    <div>
      {label && <label className="block text-sm font-medium text-white/80 mb-2">{label}</label>}
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <Listbox.Button className="relative w-full p-4 pr-10 text-left bg-[#0d1b2a]/70 rounded-xl border border-white/10 focus:ring-2 focus:ring-fin-gold/30 hover:bg-[#1b263b]/80 transition text-white backdrop-blur-md">
            <span className="block truncate">{selectedOption ? selectedOption.name : <span className="text-white/40">{placeholder}</span>}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"><SelectorIcon /></span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-xl bg-[#1b263b]/95 py-1 shadow-xl ring-1 ring-fin-gold/40 focus:outline-none sm:text-sm border border-fin-gold/20 backdrop-blur-md">
              {options.map((option) => (
                <Listbox.Option key={option.id} value={option.id} className={({ active }) => `relative cursor-pointer select-none py-2 pl-10 pr-4 rounded-lg ${active ? 'bg-fin-gold/20 text-fin-gold' : 'text-white'}`}>
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-bold text-fin-gold' : 'font-normal'}`}>{option.name}</span>
                      {selected && (<span className="absolute inset-y-0 left-0 flex items-center pl-3"><CheckIcon /></span>)}
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

// --- 👇 NOVO COMPONENTE: GRÁFICO DE ALOCAÇÃO 👇 ---
function AssetAllocationCard({ monthlyInvestmentAmount }) {
  // Perfil Arrojado (baseado na sua imagem)
  const allocationProfile = {
    labels: ['Renda Fixa', 'Ações', 'Internacional', 'FIIs', 'Criptomoedas'],
    percentages: [0.45, 0.30, 0.15, 0.05, 0.05],
  };

  // Calcula os valores em R$
  const investmentValues = allocationProfile.percentages.map(
    (perc) => monthlyInvestmentAmount * perc
  );

  const chartData = {
    labels: allocationProfile.labels.map((label, i) => 
      `${label} (${(allocationProfile.percentages[i] * 100).toFixed(0)}%)`
    ),
    datasets: [
      {
        data: investmentValues,
        // Usando sua paleta de cores
        backgroundColor: [
          '#025E73', // Renda Fixa (fin-card)
          '#024059', // Ações (fin-dark)
          '#D9896C', // Internacional (fin-terra)
          '#8C5346', // FIIs (fin-red)
          '#F2AB6D', // Cripto (fin-gold)
        ],
        borderColor: '#0a192f', // Cor de fundo da página
        borderWidth: 3,
        hoverOffset: 12,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#E2E8F0', // Texto (branco-gelo)
          font: { size: 14 },
          boxWidth: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += formatCurrency(context.parsed);
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="bg-gradient-to-br from-[#1b263b] to-[#0d1b2a] p-8 rounded-3xl border border-fin-gold/10 shadow-xl backdrop-blur-md mb-10">
      <h2 className="text-3xl font-semibold text-fin-gold mb-2 tracking-tight">Alocação do Aporte Mensal</h2>
      <p className="text-white/70 mb-1">Valor total a investir este mês:</p>
      <p className="text-4xl font-extrabold text-fin-highlight mb-6">
        {formatCurrency(monthlyInvestmentAmount)}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center" style={{ height: '300px' }}>
        {/* Lado do Gráfico */}
        <div className="h-full relative">
          <Pie data={chartData} options={chartOptions} />
        </div>
        
        {/* Lado dos Valores Detalhados */}
        <div className="space-y-3">
          {allocationProfile.labels.map((label, i) => (
            <div key={label} className="flex justify-between items-center bg-fin-dark/50 p-3 rounded-lg border border-white/10">
              <span className="text-white/90">{label}</span>
              <span className="font-bold text-white">{formatCurrency(investmentValues[i])}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// --- Formulário (sem alteração) ---
function AddHoldingForm({ onHoldingAdded }) {
  const [ticker, setTicker] = useState('');
  const [name, setName] = useState('');
  const [assetType, setAssetType] = useState('Ação');
  const [quantity, setQuantity] = useState('');
  const [averagePrice, setAveragePrice] = useState('');
  const [quote, setQuote] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteLoading, setQuoteLoading] = useState(false);

  const assetTypes = [
    { id: 'Ação', name: 'Ação (BR)' },
    { id: 'FII', name: 'FII (BR)' },
    { id: 'Cripto', name: 'Criptomoeda' },
    { id: 'Ação (EUA)', name: 'Ação (EUA)' },
  ];

  const fetchQuote = async () => {
    if (!ticker) return;
    setQuoteLoading(true);
    try {
      const { data } = await axios.get(`${API_URL}/portfolio/quote/${ticker}`);
      setQuote(data.price);
    } catch {
      setQuote('Não encontrado');
    } finally {
      setQuoteLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ticker || !name || !assetType || !quantity || !averagePrice)
      return alert('Preencha todos os campos.');
    setIsSubmitting(true);
    try {
      await axios.post(`${API_URL}/portfolio/`, {
        ticker: ticker.toUpperCase(), name, asset_type: assetType,
        quantity: parseFloat(quantity), average_price: parseFloat(averagePrice),
      });
      setTicker(''); setName(''); setAssetType('Ação'); setQuantity(''); setAveragePrice(''); setQuote(null);
      onHoldingAdded();
    } catch {
      alert('Erro ao salvar ativo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#1b263b] to-[#0d1b2a] p-8 rounded-3xl border border-fin-gold/10 shadow-xl backdrop-blur-md mb-10 transition-all">
      <h2 className="text-3xl font-semibold text-fin-gold mb-6 tracking-tight">Adicionar Ativo 💼</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm text-white/80 mb-2">Ticker *</label>
            <div className="flex gap-2">
              <input value={ticker} onChange={(e) => setTicker(e.target.value)} placeholder="Ex: ITUB4"
                className="w-full p-4 bg-[#0d1b2a]/80 rounded-xl border border-white/10 focus:border-fin-gold text-white uppercase transition" />
              <button type="button" onClick={fetchQuote} disabled={quoteLoading}
                className="px-4 bg-gradient-to-r from-fin-gold to-yellow-400 text-fin-dark font-semibold rounded-xl shadow hover:opacity-90 transition">
                {quoteLoading ? '...' : '🔍'}
              </button>
            </div>
            {quote && (
              <div className="text-sm mt-2 text-fin-gold/80">
                Preço Atual: {typeof quote === 'number' ? formatCurrency(quote) : quote}
              </div>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm text-white/80 mb-2">Nome *</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex: Itaú Unibanco"
              className="w-full p-4 bg-[#0d1b2a]/80 rounded-xl border border-white/10 focus:border-fin-gold text-white transition" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CustomSelect label="Tipo de Ativo *" value={assetType} onChange={setAssetType} options={assetTypes} placeholder="Selecione" />
          <div>
            <label className="block text-sm text-white/80 mb-2">Quantidade *</label>
            <input type="number" step="any" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Ex: 100"
              className="w-full p-4 bg-[#0d1b2a]/80 rounded-xl border border-white/10 focus:border-fin-gold text-white transition" />
          </div>
          <div>
            <label className="block text-sm text-white/80 mb-2">Preço Médio *</label>
            <input type="number" step="any" value={averagePrice} onChange={(e) => setAveragePrice(e.target.value)} placeholder="Ex: 28.50"
              className="w-full p-4 bg-[#0d1b2a]/80 rounded-xl border border-white/10 focus:border-fin-gold text-white transition" />
          </div>
        </div>
        <button type="submit" disabled={isSubmitting}
          className="w-full py-4 bg-gradient-to-r from-fin-gold to-yellow-400 hover:opacity-90 text-[#0d1b2a] font-bold rounded-xl shadow-xl transition-all transform hover:scale-[1.01]">
          {isSubmitting ? 'Salvando...' : '💾 Salvar Ativo'}
        </button>
      </form>
    </div>
  );
}

// --- Visualização (sem alteração) ---
function PortfolioView({ holdings, setHoldings }) {
  const [marketPrices, setMarketPrices] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (holdings.length === 0) return;
    const fetchPricesSequentially = async () => {
      setIsLoading(true);
      const newPrices = { ...marketPrices };
      const uniqueTickers = [...new Set(holdings.map(h => h.asset.ticker))];
      for (const ticker of uniqueTickers) {
        if (newPrices[ticker]) continue;
        try {
          const res = await axios.get(`${API_URL}/portfolio/quote/${ticker}`);
          newPrices[ticker] = res.data.price;
        } catch (e) { newPrices[ticker] = 0; }
        setMarketPrices({ ...newPrices });
        await new Promise(resolve => setTimeout(resolve, 15000));
      }
      setIsLoading(false);
    };
    fetchPricesSequentially();
  }, [holdings]);

  const handleDelete = async (id) => {
    if (!confirm('Remover ativo?')) return;
    try {
      await axios.delete(`${API_URL}/portfolio/${id}`);
      setHoldings((p) => p.filter(h => h.id !== id));
    } catch { alert('Erro ao deletar ativo.'); }
  };

  let totalInvested = 0, totalCurrent = 0;
  holdings.forEach(h => {
    const price = marketPrices[h.asset.ticker] || h.average_price;
    totalInvested += h.quantity * h.average_price;
    totalCurrent += h.quantity * price;
  });
  const profit = totalCurrent - totalInvested;
  const pct = totalInvested ? (profit / totalInvested) * 100 : 0;

  return (
    <div className="bg-[#0d1b2a]/80 p-8 rounded-3xl border border-white/10 backdrop-blur-lg shadow-xl">
      <h2 className="text-3xl font-semibold text-fin-gold mb-6">💰 Meu Portfólio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#1b263b]/80 p-6 rounded-2xl text-center border border-white/10 shadow-inner"><div className="text-sm text-white/60 mb-1">Patrimônio Atual</div><div className="text-3xl font-bold text-white">{formatCurrency(totalCurrent)}</div></div>
        <div className="bg-[#1b263b]/80 p-6 rounded-2xl text-center border border-white/10"><div className="text-sm text-white/60 mb-1">Total Investido</div><div className="text-3xl font-bold text-gray-300">{formatCurrency(totalInvested)}</div></div>
        <div className={`p-6 rounded-2xl text-center ${profit >= 0 ? 'bg-green-600/20 border-green-500/30' : 'bg-red-600/20 border-red-500/30'} border`}><div className={`text-sm ${profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>Lucro/Prejuízo</div><div className={`text-3xl font-bold ${profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>{formatCurrency(profit)} ({pct.toFixed(1)}%)</div></div>
      </div>
      {isLoading && <div className="text-center text-fin-gold animate-pulse mb-4">🔄 Atualizando cotações (delay de 15s por ativo)...</div>}
      <div className="space-y-4">
        {holdings.map(h => {
          const cp = marketPrices[h.asset.ticker] || 0;
          const invested = h.quantity * h.average_price;
          const curr = h.quantity * cp;
          const p = curr - invested;
          const pPct = invested ? (p / invested) * 100 : 0;
          return (
            <div key={h.id} className="bg-[#1b263b]/70 p-5 rounded-2xl border border-white/10 hover:border-fin-gold/30 transition-all shadow-lg">
              <div className="flex justify-between items-center mb-3">
                <div><h3 className="text-xl font-bold text-white">{h.asset.ticker}</h3><p className="text-sm text-gray-400">{h.asset.name} ({h.asset.asset_type})</p></div>
                <button onClick={() => handleDelete(h.id)} className="text-red-400 hover:text-red-300 transition">🗑️</button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div><p className="text-xs text-gray-400">Valor Atual</p><p className="text-lg font-semibold text-white">{formatCurrency(curr)}</p><p className={`text-sm ${p >= 0 ? 'text-green-400' : 'text-red-400'}`}>{pPct.toFixed(1)}%</p></div>
                <div><p className="text-xs text-gray-400">Preço Atual</p><p className="text-lg font-semibold text-white">{cp ? formatCurrency(cp) : '---'}</p></div>
                <div><p className="text-xs text-gray-400">Quantidade</p><p className="text-lg font-semibold text-white">{h.quantity}</p></div>
                <div><p className="text-xs text-gray-400">Preço Médio</p><p className="text-lg font-semibold text-white">{formatCurrency(h.average_price)}</p></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Página principal ---
export default function PortfolioPage() {
  const [holdings, setHoldings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [monthlyInvestment, setMonthlyInvestment] = useState(0); // 👈 NOVO ESTADO

  const fetchHoldings = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${API_URL}/portfolio/`);
      setHoldings(data);
    } catch (e) {
      console.error('Erro ao buscar portfólio:', e);
    } finally {
      setIsLoading(false);
    }
  };

  // 👇 ATUALIZADO useEffect
  useEffect(() => {
    // 1. Busca os ativos
    fetchHoldings();
    
    // 2. Busca os dados do orçamento para o gráfico
    const fetchBudgetData = async () => {
      const date = new Date();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      try {
        const res = await axios.get(`${API_URL}/budget/analysis?month=${month}&year=${year}`);
        const analysis = res.data.analysis;
        // Encontra o grupo "Investimentos"
        const investmentGroup = analysis.find(g => g.name.toLowerCase().includes('investimentos'));
        if (investmentGroup) {
          setMonthlyInvestment(investmentGroup.planned_amount);
        }
      } catch (e) {
        console.error("Erro ao buscar dados do orçamento:", e);
      }
    };
    fetchBudgetData();
    
  }, []); // Roda apenas uma vez ao carregar a página

  return (
    // Usei o seu fundo da página
    <div className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#000814] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* 👇 NOVO CARD DO GRÁFICO INSERIDO AQUI 👇 */}
        <AssetAllocationCard monthlyInvestmentAmount={monthlyInvestment} />

        <AddHoldingForm onHoldingAdded={fetchHoldings} />
        {isLoading
          ? <div className="text-center text-white/60 py-12">Carregando portfólio...</div>
          : <PortfolioView holdings={holdings} setHoldings={setHoldings} />}
      </div>
    </div>
  );
}