'use client';
import Link from 'next/link';
import { Wallet, Package, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function SystemsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-fin-dark p-6">
      <div className="max-w-4xl w-full">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-16 tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Selecione o Sistema
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CARTO: GESTÃO FINANCEIRA */}
          <Link href="/dashboard" className="group">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-fin-card border border-white/5 rounded-2xl p-8 h-full hover:border-fin-highlight/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-fin-highlight/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-fin-highlight/20" />
              
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-fin-highlight to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-fin-highlight/20">
                <Wallet className="text-white w-8 h-8" />
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-fin-highlight transition-colors">
                Gestão Financeira
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Controle de receitas, despesas, cartões de crédito e metas financeiras.
              </p>

              <div className="flex items-center text-fin-highlight font-medium">
                Acessar <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>

          {/* CARTO: GESTÃO DE ESTOQUE */}
          <Link href="/estoque" className="group">
             <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-fin-card border border-white/5 rounded-2xl p-8 h-full hover:border-emerald-500/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-emerald-500/20" />
              
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                <Package className="text-white w-8 h-8" />
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                Gestão de Estoque
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Controle de componentes eletrônicos, filamentos e projetos do laboratório.
              </p>

              <div className="flex items-center text-emerald-400 font-medium">
                Acessar <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          </Link>

        </div>
      </div>
    </div>
  );
}
