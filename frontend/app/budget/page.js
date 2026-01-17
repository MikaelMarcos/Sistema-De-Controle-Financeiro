'use client';

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import AuthGuard from '@/components/AuthGuard';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Registra os elementos do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const formatCurrency = (v) => (v ?? 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// --- Cores dos Grupos (CORRIGIDAS com os nomes exatos) ---
const groupColors = {
  'Custo Fixo': '#3B82F6',     // Azul
  'Metas': '#8B5CF6',          // Roxo
  'Investimentos': '#10B981',  // Verde
  'Conhecimento': '#EAB308',   // Amarelo
  'Prazer': '#F97316',         // Laranja
  'Conforto': '#EC4899',       // Rosa
  'default': '#6B7280'         // Cinza
};

// Mapeamento de nomes para garantir cores consistentes
const getGroupColor = (groupName) => {
  // Remove espaços extras e padroniza o nome
  const normalizedName = groupName?.trim();
  
  // Verifica cada possibilidade de nome
  if (normalizedName === 'Conhecimento' || normalizedName === 'conhecimento') {
    return groupColors['Conhecimento'];
  }
  if (normalizedName === 'Conforto' || normalizedName === 'conforto') {
    return groupColors['Conforto'];
  }
  if (normalizedName === 'Custo Fixo' || normalizedName === 'Custo fixo' || normalizedName === 'custo fixo') {
    return groupColors['Custo Fixo'];
  }
  if (normalizedName === 'Metas' || normalizedName === 'metas') {
    return groupColors['Metas'];
  }
  if (normalizedName === 'Investimentos' || normalizedName === 'investimentos') {
    return groupColors['Investimentos'];
  }
  if (normalizedName === 'Prazer' || normalizedName === 'prazer') {
    return groupColors['Prazer'];
  }
  
  return groupColors['default'];
};

// Ordem de exibição dos grupos
const groupOrder = ['Custo Fixo', 'Metas', 'Investimentos', 'Conhecimento', 'Prazer', 'Conforto'];

// --- Componente: Banner de Alerta ---
function AlertBanner({ overBudgetGroups }) {
  if (overBudgetGroups.length === 0) return null;
  return (
    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 mb-4">
      <div className="flex items-start gap-2">
        <div className="flex-shrink-0 mt-0.5">
          <svg className="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M4.93 19h14.14a2 2 0 001.73-3L13.73 4a2 2 0 00-3.46 0L3.2 16a2 2 0 001.73 3z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-xs font-semibold text-red-400 mb-1">Atenção ao Orçamento!</h3>
          <div className="flex flex-wrap gap-1.5">
            {overBudgetGroups.map(group => (
              <span 
                key={group.id} 
                className="px-2 py-0.5 bg-red-500/20 text-red-300 text-xs rounded-lg inline-flex items-center gap-1"
              >
                <div 
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: getGroupColor(group.name) }}
                ></div>
                {group.name} (+{formatCurrency(group.actual_spent - group.planned_amount)})
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Componente: Seletor de Mês e Display de Receita ---
function MonthSelector({ currentDate, onDateChange, totalIncome, titheAmount, netIncome }) {
  const handlePreviousMonth = () => { const newDate = new Date(currentDate); newDate.setMonth(newDate.getMonth() - 1); onDateChange(newDate); };
  const handleNextMonth = () => { const newDate = new Date(currentDate); newDate.setMonth(newDate.getMonth() + 1); onDateChange(newDate); };
  const formattedDate = currentDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' }).replace(/^\w/, (c) => c.toUpperCase());
  
  return (
    <div className="mb-4">
      {/* Card do Dízimo no Topo - Premium Gold Style */}
      <div className="relative overflow-hidden bg-gradient-to-br from-yellow-900/40 via-yellow-900/20 to-black/40 border border-yellow-600/30 rounded-2xl p-4 mb-6 shadow-lg backdrop-blur-sm group hover:border-yellow-500/50 transition-all duration-300">
        <div className="absolute top-0 right-0 -mt-2 -mr-2 w-24 h-24 bg-yellow-500/10 blur-3xl rounded-full"></div>
        
        <div className="relative flex justify-between items-center">
            <div className="flex items-center gap-4">
            <div className="p-3 bg-gradient-to-br from-yellow-500/20 to-yellow-700/10 rounded-xl text-yellow-400 shadow-inner border border-yellow-500/20">
                <span className="text-xl">🙏</span>
            </div>
            <div>
                <h3 className="text-base font-bold text-yellow-50 tracking-wide">Dízimo (10%)</h3>
                <p className="text-[11px] text-yellow-400/70 font-medium uppercase tracking-wider mt-0.5">Calculado sobre a Receita Bruta</p>
            </div>
            </div>
            <div className="text-right">
                <div className="text-2xl font-bold text-yellow-100 drop-shadow-sm">{formatCurrency(titheAmount)}</div>
                <div className="text-xs text-yellow-500/60 font-medium">de {formatCurrency(totalIncome)}</div>
            </div>
        </div>
      </div>

      <div className="flex justify-between items-center bg-gray-900/60 backdrop-blur-md p-1.5 rounded-2xl border border-gray-700/50 shadow-sm">
        <button onClick={handlePreviousMonth} className="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="flex flex-col items-center">
          <span className="text-base font-semibold text-white tracking-tight">{formattedDate}</span>
          <span className="text-[10px] text-gray-500 font-medium uppercase tracking-widest mt-0.5">Base: {formatCurrency(netIncome)}</span>
        </div>
        <button onClick={handleNextMonth} className="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}

// --- Componente: Gráfico de Orçamento ---
function BudgetChart({ groups }) {
  // Ordena os grupos conforme a ordem definida
  const orderedGroups = [...groups].sort((a, b) => {
    const indexA = groupOrder.indexOf(a.name);
    const indexB = groupOrder.indexOf(b.name);
    return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
  });

  const data = {
    labels: orderedGroups.map(g => g.name),
    datasets: [{
      data: orderedGroups.map(g => g.target_percentage),
      backgroundColor: orderedGroups.map(g => getGroupColor(g.name)),
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1.5,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        display: false
      },
      tooltip: { 
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        callbacks: { 
          label: (ctx) => `${ctx.label}: ${ctx.parsed}% (${formatCurrency((ctx.parsed / 100) * (groups.reduce((acc, g) => acc + (g.planned_amount || 0), 0) || 1))})` 
        } 
      }
    },
    cutout: '70%',
  };

  const totalPercentage = groups.reduce((sum, g) => sum + (g.target_percentage || 0), 0);

  return (
    <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white">Distribuição Planejada</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${totalPercentage === 100 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
          {totalPercentage}%
        </span>
      </div>
      
      <div className="relative h-40 mb-3">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-base font-bold text-white">{totalPercentage}%</span>
          <span className="text-[10px] text-gray-400">alocado</span>
        </div>
      </div>
      
      {/* Legenda vertical compacta com cores */}
      <div className="grid grid-cols-2 gap-1.5">
        {orderedGroups.map((group, index) => (
          <div key={group.id} className="flex items-center gap-1.5">
            <div 
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: getGroupColor(group.name) }}
            ></div>
            <span className="text-[10px] text-gray-300 truncate">{group.name}</span>
            <span className="text-[10px] font-medium text-white ml-auto">{group.target_percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Componente: Slider Premium ---
function RangeSlider({ label, value, onChange, actualSpent, plannedAmount }) {
  const sliderRef = useRef(null);
  const filledWidth = `${Math.min(Math.max(value, 0), 100)}%`;

  const handleMove = (e) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const trackWidth = rect.width;
    const thumbWidth = 16; // Larger thumb for better touch
    let relativeX = clientX - rect.left - (thumbWidth / 2);
    relativeX = Math.max(0, Math.min(relativeX, trackWidth - thumbWidth));
    const newValue = Math.round((relativeX / (trackWidth - thumbWidth)) * 100);
    onChange(newValue);
  };

  const handleStart = (e) => {
    handleMove(e);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('touchend', handleEnd);
  };

  const handleEnd = () => {
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleEnd);
    document.removeEventListener('touchmove', handleMove);
    document.removeEventListener('touchend', handleEnd);
  };

  const isOver = actualSpent > plannedAmount && plannedAmount > 0;
  const groupColor = getGroupColor(label);

  return (
    <div className="group mb-5">
      <div className="flex justify-between items-end mb-2.5">
        <div className="flex items-center gap-2">
          <div 
            className="w-2.5 h-2.5 rounded-full shadow-sm ring-2 ring-white/5"
            style={{ backgroundColor: groupColor }}
          ></div>
          <div>
            <label className="block text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-200">
                {label}
            </label>
            <span className={`text-[10px] font-medium tracking-tight ${isOver ? 'text-red-400' : 'text-gray-500'}`}>
                {formatCurrency(plannedAmount)}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-white tabular-nums tracking-tight">
            {value}%
          </div>
        </div>
      </div>
      
      <div 
        ref={sliderRef}
        className="relative w-full h-2.5 bg-gray-800 rounded-full cursor-pointer touch-none shadow-inner border border-gray-700/50"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
      >
        <div 
          className="absolute top-0 left-0 h-full rounded-full transition-all duration-75 ease-out shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          style={{ width: filledWidth, backgroundColor: groupColor, opacity: 0.9 }}
        ></div>
        <div 
          className="absolute top-1/2 w-4 h-4 bg-white rounded-full -translate-y-1/2 shadow-lg ring-2 ring-black/10 transform transition-transform hover:scale-110 active:scale-95"
          style={{ left: filledWidth }}
        ></div>
      </div>
    </div>
  );
}

// --- Gerenciador de Grupos Premium ---
function BudgetGroupManager({ groups, onGroupAdded }) {
  const [newGroupName, setNewGroupName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newGroupName.trim()) return;
    setIsSubmitting(true);
    try {
      await axios.post(`${API_URL}/budget/`, { name: newGroupName });
      setNewGroupName('');
      onGroupAdded();
    } catch (error) {
      console.error("Erro ao criar grupo:", error);
      alert(error.response?.data?.detail || "Erro ao criar grupo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 mb-6 transition-all hover:bg-gray-800/50">
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Gerenciar Grupos</h3>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input 
          type="text" 
          value={newGroupName} 
          onChange={(e) => setNewGroupName(e.target.value)} 
          placeholder="Nome do novo grupo..."
          className="flex-1 text-sm p-2.5 bg-gray-900/60 rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all outline-none"
        />
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-all disabled:opacity-50 border border-gray-600 hover:border-gray-500 shadow-sm"
        >
          {isSubmitting ? "..." : "+ Adicionar"}
        </button>
      </form>
    </div>
  );
}

// --- Card de Treinamento da IA Premium ---
function AITrainingCard() {
  const [status, setStatus] = useState({ trained: false, message: 'Verificando...' });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/ai/status`)
      .then(response => setStatus(response.data))
      .catch(() => setStatus({ trained: false, message: "Erro ao conectar." }));
  }, []);

  const handleTrain = () => {
    setIsLoading(true);
    setStatus({ trained: false, message: "Treinando..." });
    axios.post(`${API_URL}/ai/train`)
      .then(response => setStatus({ trained: true, message: response.data.message }))
      .catch(error => {
        const detail = error.response?.data?.detail || "Erro no treinamento.";
        setStatus({ trained: false, message: `Falha: ${detail}` });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-md p-4 rounded-xl border border-purple-500/10 mt-6 shadow-lg">
      <div className="flex items-center gap-4 mb-3">
        <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg text-purple-300 shadow-inner">
          <span className="text-xl">🤖</span>
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-bold text-white tracking-wide">Inteligência Artificial</h4>
          <p className="text-[11px] text-gray-400 leading-tight mt-0.5">Categorização automática de transações</p>
        </div>
        <button 
          onClick={handleTrain} 
          disabled={isLoading}
          className="text-xs px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-900/20 transition-all transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Processando..." : "Treinar Modelo"}
        </button>
      </div>
      <div className="flex items-center gap-2 pl-1">
        <div className={`w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] ${status.trained ? 'bg-emerald-400 text-emerald-400' : 'bg-amber-400 text-amber-400'}`}></div>
        <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500">
            Status: <span className={status.trained ? 'text-emerald-400' : 'text-amber-400'}>{status.message}</span>
        </span>
      </div>
    </div>
  );
}

// --- Componente Principal ---
function BudgetPage() {
  const [groups, setGroups] = useState([]); 
  const [currentDate, setCurrentDate] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);
  const [totalPercentage, setTotalPercentage] = useState(0);
  const debounceTimers = useRef({});
  const [isSaving, setIsSaving] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => { setCurrentDate(new Date()); }, []);

  const fetchData = async () => {
    if (!currentDate) return;
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    
    try {
      const res = await axios.get(`${API_URL}/budget/analysis?month=${month}&year=${year}`);
      
      // Ordena os grupos conforme a ordem definida
      const sorted = res.data.analysis.sort((a, b) => {
        const idxA = groupOrder.indexOf(a.name);
        const idxB = groupOrder.indexOf(b.name);
        return (idxA === -1 ? 999 : idxA) - (idxB === -1 ? 999 : idxB);
      });
      
      const mappedGroups = sorted.map(g => ({
        id: g.group_id, 
        name: g.name,
        target_percentage: g.target_percentage,
        actual_spent: g.actual_spent,
        planned_amount: g.planned_amount,
        is_over_budget: g.is_over_budget
      }));

      setGroups(mappedGroups);
      const totalPerc = mappedGroups.reduce((acc, group) => acc + group.target_percentage, 0);
      setTotalPercentage(totalPerc);
      setAnalysisData(res.data);
    } catch (error) { console.error("Erro ao buscar dados:", error); }
  };

  useEffect(() => { fetchData(); }, [currentDate]);

  const handlePercentageChange = (id, newPercentage) => {
    const val = parseInt(newPercentage) || 0;
    
    // CORREÇÃO: Usa net_income (Receita - Dízimo) para calcular o valor planejado
    const netIncome = analysisData?.net_income || 0;
    const newPlannedAmount = (netIncome * val) / 100;

    setGroups(prev => {
      const newGroups = prev.map(g => {
        if (g.id === id) {
            return { ...g, target_percentage: val, planned_amount: newPlannedAmount };
        }
        return g;
      });
      const newTotal = newGroups.reduce((acc, g) => acc + g.target_percentage, 0);
      setTotalPercentage(newTotal);
      return newGroups;
    });

    if (debounceTimers.current[id]) clearTimeout(debounceTimers.current[id]);
    debounceTimers.current[id] = setTimeout(() => {
        axios.put(`${API_URL}/budget/${id}?target_percentage=${val}`).catch(console.error);
    }, 800);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await Promise.all(
        groups.map(group => 
          axios.put(`${API_URL}/budget/${group.id}?target_percentage=${group.target_percentage}`)
        )
      );
      setNotification({ message: "✅ Orçamento salvo", type: "success" });
      setTimeout(() => setNotification(null), 2000);
    } catch (error) {
      setNotification({ message: "❌ Erro ao salvar", type: "error" });
      setTimeout(() => setNotification(null), 2000);
    } finally {
      setIsSaving(false);
    }
  };

  if (!analysisData || !currentDate) return <div className="text-white p-4 text-center">Carregando...</div>;
  
  // CORREÇÃO: Calcula grupos excedentes dinamicamente baseado no estado atual (sliders)
  // Isso garante que o alerta atualize assim que o usuário move o slider ou clica no Ajuste Automático.
  const overBudgetGroups = groups.filter(g => (g.actual_spent > g.planned_amount) && g.planned_amount > 0);

  const isTotalValid = totalPercentage === 100;

  const handleAutoAdjust = () => {
    if (totalPercentage === 0) return;

    // Calcula a proporção de cada grupo
    const newGroups = groups.map(g => {
        // Evita divisão por zero e garante proporção
        const rawShare = (g.target_percentage / totalPercentage) * 100;
        return { ...g, rawShare };
    });

    // Passo 1: Arredonda para baixo (floor)
    let sum = 0;
    const groupsWithFloor = newGroups.map(g => {
        const floorVal = Math.floor(g.rawShare);
        sum += floorVal;
        return { ...g, target_percentage: floorVal, remainder: g.rawShare - floorVal };
    });

    // Passo 2: Distribui o que falta (100 - sum) para os maiores restos
    let remainderToDistribute = 100 - sum;
    
    // Ordena por maior resto para priorizar quem perdeu mais no arredondamento
    const sortedIndices = groupsWithFloor
        .map((g, index) => ({ index, remainder: g.remainder }))
        .sort((a, b) => b.remainder - a.remainder);

    // Distribui 1% por vez
    for (let i = 0; i < remainderToDistribute; i++) {
        const targetIndex = sortedIndices[i % sortedIndices.length].index;
        groupsWithFloor[targetIndex].target_percentage += 1;
    }

    // Atualiza o estado e recalcula valores planejados
    const netIncome = analysisData?.net_income || 0;
    
    const finalGroups = groupsWithFloor.map(g => ({
        ...g,
        planned_amount: (netIncome * g.target_percentage) / 100,
        // Limpa props temporárias
        rawShare: undefined,
        remainder: undefined
    }));

    setGroups(finalGroups);
    setTotalPercentage(100);
  };

  return (
    <div className="text-white p-3 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-base font-semibold text-white">Meu Orçamento</h1>
        <div className="text-xs text-gray-400">
          {currentDate.toLocaleString('pt-BR', { month: 'short', year: 'numeric' })}
        </div>
      </div>
      
      <MonthSelector 
          currentDate={currentDate} 
          onDateChange={setCurrentDate} 
          totalIncome={analysisData.total_income}
          titheAmount={analysisData.tithe_amount}
          netIncome={analysisData.net_income}
      />
      
      <BudgetGroupManager groups={groups} onGroupAdded={() => fetchData()} />
      
      <AlertBanner overBudgetGroups={overBudgetGroups} />

      {notification && (
        <div className={`fixed top-3 right-3 px-3 py-1.5 rounded text-xs font-medium z-50 ${notification.type === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>
          {notification.message}
        </div>
      )}

      {/* Cartão de Resumo Compacto - Premium Glass */}
      <div className="bg-gray-800/40 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 mb-6 flex justify-between items-center shadow-lg">
        <div>
          <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1">Base para Orçamento (Receita Líq.)</div>
          <div className="text-xl font-bold text-white tracking-tight">{formatCurrency(analysisData.net_income)}</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-1">Planejamento Total</div>
          <div className={`text-2xl font-bold ${totalPercentage === 100 ? 'text-emerald-400' : 'text-rose-400'}`}>{totalPercentage}%</div>
          {totalPercentage !== 100 && (
            <div className="text-[10px] text-rose-400 font-medium mt-1 animate-pulse">Ajuste necessário</div>
          )}
        </div>
      </div>

      {/* Conteúdo Principal - Grid ajustado */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Gráfico mais compacto (1/3 da largura) */}
        <div className="lg:col-span-1">
          <BudgetChart groups={groups} />
        </div>
        
        {/* Sliders maiores (2/3 da largura) */}
        <div className="lg:col-span-2 bg-gray-900/40 backdrop-blur-md p-6 rounded-2xl border border-gray-800 shadow-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base font-semibold text-white tracking-tight">Ajuste de Percentuais</h3>
            <div className={`text-xs px-3 py-1.5 rounded-full font-medium ${isTotalValid ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
              Total Alocado: {totalPercentage}%
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {groups.map(group => (
              <RangeSlider
                key={group.id}
                label={group.name}
                value={group.target_percentage}
                actualSpent={group.actual_spent}
                plannedAmount={group.planned_amount} 
                onChange={(newValue) => handlePercentageChange(group.id, newValue)}
              />
            ))}
          </div>
          
          <button 
            onClick={isTotalValid ? handleSave : handleAutoAdjust} 
            disabled={isSaving}
            className={`w-full mt-8 py-3.5 text-sm rounded-xl font-bold tracking-wide transition-all duration-300 shadow-lg ${
                isSaving ? 'bg-gray-800 cursor-not-allowed text-gray-400' :
                isTotalValid ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-900/20 hover:shadow-blue-900/40 transform hover:-translate-y-0.5' : 
                'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white shadow-orange-900/20 hover:shadow-orange-900/40 transform hover:-translate-y-0.5'
            }`}
          >
            {isSaving ? 'Salvando...' : isTotalValid ? 'Salvar Alterações' : '✨ Ajustar Automaticamente para 100%'}
          </button>
        </div>
      </div>

      {/* IA Card no final */}
      <AITrainingCard />
      
      <style jsx global>{`
        body {
          background: #111827;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] {
          -moz-appearance: textfield;
        }
        .truncate {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}

export default function BudgetPageWrapper() {
  return <AuthGuard><BudgetPage /></AuthGuard>;
}