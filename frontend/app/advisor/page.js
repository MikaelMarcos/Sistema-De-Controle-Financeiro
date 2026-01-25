'use client';

import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export default function AdvisorPage() {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const fetchHistory = async () => {
    try {
      const res = await axios.get(`${API_URL}/agent/history`);
      setMessages(res.data);
    } catch (error) {
      console.error("Erro ao carregar histórico:", error);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setLoading(true);

    // Optimistic update
    const tempUserMsg = { role: 'user', content: userMsg, timestamp: new Date().toISOString() };
    setMessages(prev => [...prev, tempUserMsg]);

    try {
      // POST para o backend
      // O backend retorna a mensagem da IA salva no banco
      const res = await axios.post(`${API_URL}/agent/chat`, null, {
        params: { message: userMsg }
      });
      
      const aiMsg = res.data;
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      // Opcional: mostrar erro na UI
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col max-w-4xl mx-auto">
        {/* Header da Página */}
        <div className="mb-6 flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-fin-highlight to-fin-purple rounded-xl shadow-lg shadow-fin-highlight/20">
                <Bot className="w-8 h-8 text-fin-dark" />
            </div>
            <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">Gestor</h1>
                <p className="text-gray-400">Seu assistente financeiro pessoal 24h.</p>
            </div>
        </div>

      {/* Área de Chat */}
      <div className="flex-1 overflow-y-auto mb-4 p-4 space-y-4 pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {messages.length === 0 && !loading && (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 space-y-4 opacity-50">
                <Bot className="w-24 h-24 mb-4" />
                <p className="text-xl">Olá, {user?.email}! Como posso ajudar com suas finanças hoje?</p>
                <p className="text-sm max-w-md">Pergunte sobre seus gastos, peça dicas de economia ou configure novas metas.</p>
            </div>
        )}

        <AnimatePresence initial={false}>
            {messages.map((msg, idx) => (
            <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
                <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center shrink-0
                    ${msg.role === 'user' ? 'bg-fin-highlight text-fin-dark' : 'bg-fin-purple/20 text-fin-purple border border-fin-purple/30'}
                `}>
                {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
                </div>

                <div className={`
                    rounded-2xl p-4 max-w-[85%] shadow-sm
                    ${msg.role === 'user' 
                        ? 'bg-fin-highlight text-fin-dark rounded-tr-none' 
                        : 'bg-white/5 text-gray-200 border border-white/5 rounded-tl-none backdrop-blur-sm'}
                `}>
                <div className={`prose prose-sm max-w-none break-words ${msg.role === 'user' ? 'text-fin-dark' : 'prose-invert'}`}>
                    <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                            table: ({node, ...props}) => <div className="overflow-x-auto my-2 rounded-lg border border-white/10"><table className="w-full text-left border-collapse" {...props} /></div>,
                            th: ({node, ...props}) => <th className="bg-white/10 p-2 font-semibold text-fin-highlight" {...props} />,
                            td: ({node, ...props}) => <td className="p-2 border-t border-white/5" {...props} />,
                            a: ({node, ...props}) => <a className="text-fin-highlight hover:underline" {...props} />
                        }}
                    >
                        {msg.content}
                    </ReactMarkdown>
                </div>
                <p className="text-[10px] opacity-50 mt-2 text-right">
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
                </div>
            </motion.div>
            ))}
        </AnimatePresence>
        
        {loading && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
                 <div className="w-10 h-10 rounded-full bg-fin-purple/20 flex items-center justify-center shrink-0 border border-fin-purple/30">
                    <Bot size={20} className="text-fin-purple" />
                 </div>
                 <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                    <span className="text-sm text-gray-400">Analisando suas finanças...</span>
                 </div>
             </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={sendMessage} className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua mensagem..."
          className="w-full bg-fin-dark/50 border border-white/10 rounded-2xl pl-4 pr-14 py-4 focus:outline-none focus:ring-2 focus:ring-fin-highlight/50 focus:border-transparent text-white placeholder-gray-500 shadow-xl backdrop-blur-xl transition-all"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="absolute right-2 top-2 p-2 bg-fin-highlight hover:bg-fin-highlight/90 text-fin-dark rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
}
