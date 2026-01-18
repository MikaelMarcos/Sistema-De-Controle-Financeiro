'use client'; 

import { useState, useEffect } from 'react';
import axios from 'axios';
import AuthGuard from '@/components/AuthGuard'; 

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

// --- Seletor de Mês ---
function MonthSelector({ currentDate, onDateChange }) {
  const handlePreviousMonth = () => { const newDate = new Date(currentDate); newDate.setMonth(newDate.getMonth() - 1); onDateChange(newDate); };
  const handleNextMonth = () => { const newDate = new Date(currentDate); newDate.setMonth(newDate.getMonth() + 1); onDateChange(newDate); };
  const formattedDate = currentDate.toLocaleString('pt-BR', { month: 'long', year: 'numeric' }).replace(/^\w/, (c) => c.toUpperCase());
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-fin-card/30 p-4 rounded-2xl border border-white/5 backdrop-blur-sm shadow-inner gap-4 md:gap-2">
      <button onClick={handlePreviousMonth} className="w-full md:w-auto px-3 py-2 text-fin-gold border border-fin-gold/40 rounded-lg hover:bg-fin-gold hover:text-black transition-all">&lt; Anterior</button>
      <h2 className="text-xl md:text-2xl font-light text-white tracking-wide order-first md:order-none">
        {formattedDate}
      </h2>
      <button onClick={handleNextMonth} className="w-full md:w-auto px-3 py-2 text-fin-gold border border-fin-gold/40 rounded-lg hover:bg-fin-gold hover:text-black transition-all">Próximo &gt;</button>
    </div>
  );
}

// --- Componente de Checkbox ---
function Checkbox({ label, checked, onChange, id }) {
  return (
    <label htmlFor={id} className="flex items-center gap-3 p-4 bg-fin-dark/50 rounded-xl border border-white/10 cursor-pointer hover:bg-fin-dark transition-all">
      <input id={id} type="checkbox" checked={checked} onChange={onChange} name={id} className="h-5 w-5 rounded-md bg-fin-dark/80 border-2 border-fin-gold/50 text-fin-gold focus:ring-fin-gold/50"/>
      <span className="text-white font-medium text-sm md:text-base">{label}</span>
    </label>
  );
}

// --- Componente Principal ---
function ReportsPage() {
  const [currentDate, setCurrentDate] = useState(null);
  
  // 👇 CORREÇÃO: Estados de loading separados
  const [isLoadingPDF, setIsLoadingPDF] = useState(false);
  const [isLoadingExcel, setIsLoadingExcel] = useState(false);
  
  const [exportOptions, setExportOptions] = useState({
    include_income: true,
    include_expenses: true,
    include_goals: true,
    include_credit_cards: true,
    include_budget: true,
    include_balance: true,
  });

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setExportOptions(prev => ({ ...prev, [name]: checked }));
  };

  // 👇 CORREÇÃO: Função de download agora sabe qual loader ativar
  const handleDownload = async (format) => {
    if (!currentDate) return; 
    
    // Ativa o loader específico
    if (format === 'pdf') setIsLoadingPDF(true);
    if (format === 'excel') setIsLoadingExcel(true);
    
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    
    const params = new URLSearchParams({ month, year, ...exportOptions });
    const endpoint = format === 'pdf' ? '/pdf' : '/excel';
    const url = `${API_URL}/reports${endpoint}?${params.toString()}`;

    try {
      const response = await axios.get(url, {
        responseType: 'blob',
        headers: {
           Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      const mimeType = format === 'pdf' 
        ? 'application/pdf' 
        : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        
      const blob = new Blob([response.data], { type: mimeType });
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;

      if (format === 'pdf') {
        window.open(blobUrl, '_blank');
      } else {
        link.setAttribute('download', `relatorio_${year}_${month.toString().padStart(2, '0')}.xlsx`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      setTimeout(() => window.URL.revokeObjectURL(blobUrl), 100);

    } catch (error) {
      console.error("Erro no download:", error);
      alert("Erro ao gerar relatório. Tente novamente.");
    } finally {
      // Desativa o loader específico
      if (format === 'pdf') setIsLoadingPDF(false);
      if (format === 'excel') setIsLoadingExcel(false);
    }
  };
  
  if (!currentDate) {
     return (
       <div className="min-h-screen flex items-center justify-center">
         <div className="w-12 h-12 border-4 border-fin-gold border-t-transparent rounded-full animate-spin"></div>
       </div>
     );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-fin-card to-fin-dark/80 p-6 md:p-8 rounded-3xl shadow-2xl mb-8 border border-fin-gold/20 backdrop-blur-sm">
        
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-fin-gold/20 rounded-2xl">
            <span className="text-2xl">📄</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Exportar Relatórios</h2>
            <p className="text-fin-gold/70 text-sm">Gere um arquivo com os dados do período</p>
          </div>
        </div>

        <MonthSelector currentDate={currentDate} onDateChange={setCurrentDate} />

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Selecione os dados para incluir:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Checkbox label="Entradas (Receitas)" id="include_income" checked={exportOptions.include_income} onChange={handleCheckboxChange} />
            <Checkbox label="Saídas (Despesas)" id="include_expenses" checked={exportOptions.include_expenses} onChange={handleCheckboxChange} />
            <Checkbox label="Status das Metas" id="include_goals" checked={exportOptions.include_goals} onChange={handleCheckboxChange} />
            <Checkbox label="Gastos no Cartão" id="include_credit_cards" checked={exportOptions.include_credit_cards} onChange={handleCheckboxChange} />
            <Checkbox label="Resumo do Orçamento" id="include_budget" checked={exportOptions.include_budget} onChange={handleCheckboxChange} />
            <Checkbox label="Balanço de Caixa" id="include_balance" checked={exportOptions.include_balance} onChange={handleCheckboxChange} />
          </div>
        </div>

        {/* 👇 CORREÇÃO: Botões agora usam 'isLoadingPDF' e 'isLoadingExcel' 👇 */}
        <div className="flex flex-col md:flex-row gap-4">
          <button 
            onClick={() => handleDownload('pdf')}
            disabled={isLoadingPDF || isLoadingExcel} // Desativa se qualquer um estiver carregando
            className="w-full bg-gradient-to-r from-fin-red to-rose-700 hover:opacity-90 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg disabled:opacity-50 flex justify-center items-center gap-2"
          >
            {isLoadingPDF ? (
              <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>Gerando PDF...</>
            ) : "Gerar Relatório PDF"}
          </button>
          <button 
            onClick={() => handleDownload('excel')}
            disabled={isLoadingPDF || isLoadingExcel} // Desativa se qualquer um estiver carregando
            className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:opacity-90 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg disabled:opacity-50 flex justify-center items-center gap-2"
          >
            {isLoadingExcel ? (
              <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>Gerando Excel...</>
            ) : "Exportar para Excel (.xlsx)"}
          </button>
        </div>

      </div>
    </div>
  );
}

// Wrapper de Autenticação
export default function ReportsPageWrapper() {
  return (
    <AuthGuard>
      <ReportsPage />
    </AuthGuard>
  );
}