'use client'; 

import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api-financeiro-vbsl.onrender.com';

// --- Seletor de Mês Corrigido ---
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
  
  // Formatação consistente entre server e client
  const formattedDate = `${currentDate.toLocaleString('pt-BR', { month: 'long' })} ${currentDate.getFullYear()}`.replace(/^\w/, (c) => c.toUpperCase());

  return (
    <div className="flex justify-between items-center mb-8 p-6 bg-gradient-to-r from-fin-dark/80 to-fin-card/80 backdrop-blur-lg rounded-3xl border border-white/10 shadow-xl">
      <button 
        onClick={handlePreviousMonth} 
        className="flex items-center gap-2 px-4 py-3 text-fin-gold border border-fin-gold/40 rounded-xl hover:bg-fin-gold/10 hover:border-fin-gold/60 transition-all duration-300 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Anterior
      </button>
      
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white tracking-wide">
          {formattedDate}
        </h2>
        <p className="text-xs text-gray-400 mt-1">Período do relatório</p>
      </div>
      
      <button 
        onClick={handleNextMonth} 
        className="flex items-center gap-2 px-4 py-3 text-fin-gold border border-fin-gold/40 rounded-xl hover:bg-fin-gold/10 hover:border-fin-gold/60 transition-all duration-300 group"
      >
        Próximo
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}

// --- Componente de Checkbox Corrigido ---
function Checkbox({ label, checked, onChange, id, icon }) {
  return (
    <label htmlFor={id} className={`flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 cursor-pointer group ${
      checked 
        ? 'bg-gradient-to-br from-fin-gold/10 to-fin-highlight/10 border-fin-gold/40 shadow-lg shadow-fin-gold/10' 
        : 'bg-fin-dark/50 border-white/10 hover:border-white/30 hover:bg-fin-dark/70'
    }`}>
      <div className="relative">
        <input 
          id={id} 
          type="checkbox" 
          checked={checked} 
          onChange={onChange} 
          name={id} 
          className="h-5 w-5 rounded-md bg-fin-dark/80 border-2 border-fin-gold/50 text-fin-gold focus:ring-fin-gold/50 focus:ring-2 focus:ring-offset-2 focus:ring-offset-fin-dark transition-all"
        />
      </div>
      
      <div className="flex items-center gap-3 flex-1">
        <span className="text-2xl">{icon}</span>
        <div>
          <span className="text-white font-semibold block">{label}</span>
          <span className={`text-xs transition-all duration-300 ${
            checked ? 'text-fin-gold' : 'text-gray-500'
          }`}>
            {checked ? 'Incluído no relatório' : 'Clique para incluir'}
          </span>
        </div>
      </div>
      
      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
        checked ? 'bg-fin-gold shadow-lg shadow-fin-gold/50' : 'bg-gray-600'
      }`}></div>
    </label>
  );
}

// --- Card de Estatísticas ---
function StatsCard({ title, value, subtitle, color = 'blue' }) {
  const colorClasses = {
    blue: 'from-blue-500/10 to-cyan-600/10 border-blue-500/30',
    green: 'from-green-500/10 to-emerald-600/10 border-green-500/30',
    purple: 'from-purple-500/10 to-indigo-600/10 border-purple-500/30',
    amber: 'from-amber-500/10 to-orange-600/10 border-amber-500/30'
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} p-4 rounded-2xl border backdrop-blur-sm`}>
      <div className="text-sm text-gray-300 mb-1">{title}</div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-xs text-gray-400">{subtitle}</div>
    </div>
  );
}

// --- Componente Principal CORRIGIDO ---
export default function ReportsPage() {
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [downloadType, setDownloadType] = useState(null);
  const [isClient, setIsClient] = useState(false);
  
  const [exportOptions, setExportOptions] = useState({
    include_income: true,
    include_expenses: true,
    include_goals: true,
    include_portfolio: true,
    include_credit_cards: true,
    include_budget: true,
    include_balance: true,
  });

  // Corrige o erro de hidratação
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setExportOptions(prev => ({ ...prev, [name]: checked }));
  };

  const handleDownload = async (format) => {
    if (!isClient) return;
    
    setIsLoading(true);
    setDownloadType(format);
    
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const params = new URLSearchParams({ month, year, ...exportOptions });
    
    try {
      const endpoint = format === 'pdf' ? '/pdf' : '/excel';
      const downloadUrl = `${API_URL}/reports${endpoint}?${params.toString()}`;

      if (format === 'pdf') {
        window.open(downloadUrl, '_blank');
      } else {
        const response = await axios({
          url: downloadUrl,
          method: 'GET',
          responseType: 'blob',
        });
        
        const href = URL.createObjectURL(response.data);
        const link = document.createElement('a');
        link.href = href;
        link.setAttribute('download', `relatorio_financeiro_${year}_${month}.xlsx`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
      }
    } catch (error) {
      console.error("Erro no download:", error);
      alert('Erro ao gerar relatório. Tente novamente.');
    } finally {
      setIsLoading(false);
      setDownloadType(null);
    }
  };

  const selectedCount = Object.values(exportOptions).filter(Boolean).length;
  const totalOptions = Object.keys(exportOptions).length;

  // Renderização do servidor - evita diferenças
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-fin-dark via-fin-card to-fin-dark py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-br from-fin-card/90 to-fin-dark/90 p-8 rounded-3xl shadow-2xl mb-8 border border-fin-gold/20 backdrop-blur-sm animate-pulse">
            {/* Skeleton loading */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gray-700 rounded-2xl w-16 h-16"></div>
              <div>
                <div className="h-8 bg-gray-700 rounded w-48 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-64"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-20 bg-gray-700 rounded-2xl"></div>
              ))}
            </div>
            
            <div className="h-24 bg-gray-700 rounded-3xl mb-8"></div>
            
            <div className="h-8 bg-gray-700 rounded w-1/3 mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="h-16 bg-gray-700 rounded-2xl"></div>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="h-14 bg-gray-700 rounded-xl flex-1"></div>
              <div className="h-14 bg-gray-700 rounded-xl flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-fin-dark via-fin-card to-fin-dark py-8">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header Premium */}
        <div className="bg-gradient-to-br from-fin-card/90 to-fin-dark/90 p-8 rounded-3xl shadow-2xl mb-8 border border-fin-gold/20 backdrop-blur-sm relative overflow-hidden">
          {/* Efeitos de fundo - removidos do server render */}
          {isClient && (
            <>
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-40 h-40 bg-fin-gold/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-40 h-40 bg-fin-highlight/10 rounded-full blur-3xl"></div>
            </>
          )}
          
          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="p-4 bg-gradient-to-r from-fin-gold to-fin-highlight rounded-2xl shadow-lg">
              <span className="text-3xl">📊</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Relatórios Financeiros</h1>
              <p className="text-fin-gold/80 text-lg">Exporte dados completos do seu controle financeiro</p>
            </div>
          </div>

          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <StatsCard 
              title="Seções Selecionadas" 
              value={`${selectedCount}/${totalOptions}`} 
              subtitle="Itens no relatório"
              color="blue"
            />
            <StatsCard 
              title="Período" 
              value={currentDate.toLocaleDateString('pt-BR', { month: 'short' })} 
              subtitle={currentDate.getFullYear().toString()}
              color="green"
            />
            <StatsCard 
              title="Status" 
              value={isLoading ? "Gerando..." : "Pronto"} 
              subtitle={isLoading ? "Aguarde..." : "Para exportar"}
              color="purple"
            />
            <StatsCard 
              title="Formatos" 
              value="2" 
              subtitle="PDF e Excel"
              color="amber"
            />
          </div>

          <MonthSelector currentDate={currentDate} onDateChange={setCurrentDate} />

          {/* Seção de Opções */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">
                Seções do Relatório
              </h3>
              <div className="text-sm text-gray-400 bg-black/30 px-4 py-2 rounded-full border border-white/10">
                {selectedCount} de {totalOptions} selecionados
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Checkbox 
                label="Entradas (Receitas)" 
                id="include_income" 
                checked={exportOptions.include_income} 
                onChange={handleCheckboxChange}
                icon="💰"
              />
              <Checkbox 
                label="Saídas (Despesas)" 
                id="include_expenses" 
                checked={exportOptions.include_expenses} 
                onChange={handleCheckboxChange}
                icon="💸"
              />
              <Checkbox 
                label="Status das Metas" 
                id="include_goals" 
                checked={exportOptions.include_goals} 
                onChange={handleCheckboxChange}
                icon="🎯"
              />
              <Checkbox 
                label="Resumo do Portfólio" 
                id="include_portfolio" 
                checked={exportOptions.include_portfolio} 
                onChange={handleCheckboxChange}
                icon="📈"
              />
              <Checkbox 
                label="Gastos no Cartão" 
                id="include_credit_cards" 
                checked={exportOptions.include_credit_cards} 
                onChange={handleCheckboxChange}
                icon="💳"
              />
              <Checkbox 
                label="Resumo do Orçamento" 
                id="include_budget" 
                checked={exportOptions.include_budget} 
                onChange={handleCheckboxChange}
                icon="📋"
              />
              <Checkbox 
                label="Balanço de Caixa" 
                id="include_balance" 
                checked={exportOptions.include_balance} 
                onChange={handleCheckboxChange}
                icon="⚖️"
              />
            </div>
          </div>

          {/* Botões de Ação Premium */}
          <div className="flex flex-col md:flex-row gap-4">
            <button 
              onClick={() => handleDownload('pdf')}
              disabled={isLoading}
              className={`flex-1 bg-gradient-to-r from-fin-red to-rose-700 hover:from-rose-700 hover:to-fin-red text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none disabled:hover:shadow-2xl group ${
                downloadType === 'pdf' && isLoading ? 'animate-pulse' : ''
              }`}
            >
              <div className="flex items-center justify-center gap-3">
                {isLoading && downloadType === 'pdf' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:scale-110 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                )}
                {isLoading && downloadType === 'pdf' ? 'Gerando PDF...' : 'Gerar Relatório PDF'}
              </div>
            </button>
            
            <button 
              onClick={() => handleDownload('excel')}
              disabled={isLoading}
              className={`flex-1 bg-gradient-to-r from-green-600 to-emerald-700 hover:from-emerald-700 hover:to-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none disabled:hover:shadow-2xl group ${
                downloadType === 'excel' && isLoading ? 'animate-pulse' : ''
              }`}
            >
              <div className="flex items-center justify-center gap-3">
                {isLoading && downloadType === 'excel' ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-hover:scale-110 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                )}
                {isLoading && downloadType === 'excel' ? 'Gerando Excel...' : 'Exportar para Excel'}
              </div>
            </button>
          </div>

          {/* Informações Adicionais */}
          <div className="mt-6 p-4 bg-fin-dark/50 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-fin-gold">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              <span>Os relatórios incluem dados detalhados do período selecionado. PDF para visualização e Excel para análise de dados.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}