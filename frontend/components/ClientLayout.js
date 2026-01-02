'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AuthProvider, useAuth } from '@/context/AuthContext';

function Header() {
  const { logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const linkClass = "block px-4 py-2 rounded-lg text-gray-300 hover:text-fin-highlight hover:bg-fin-dark/30 transition-all duration-300";

  return (
    <header className="bg-gradient-to-r from-fin-dark to-fin-card shadow-2xl border-b border-fin-card/50 relative z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Fin<span className="text-fin-gold">anceiro</span>
          </h1>

          <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-1">
            <a href="/" className={linkClass}>Dashboard</a>
            <a href="/income" className={linkClass}>Entradas</a>
            <a href="/expenses" className={linkClass}>Despesas</a>
            <a href="/budget" className={linkClass}>Orçamento</a>
            <a href="/cards" className={linkClass}>Cartões</a>
            <a href="/portfolio" className={linkClass}>Investimentos</a>
            <a href="/reports" className={linkClass}>Relatórios</a>
            <a href="/metas" className={linkClass}>Metas</a>
            <button onClick={logout} className="px-4 py-2 rounded-lg text-fin-red hover:bg-fin-red/10 font-medium">Sair</button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4 border-t border-white/10 pt-4 animate-fadeIn">
            <a href="/" className={linkClass}>Dashboard</a>
            <a href="/income" className={linkClass}>Entradas</a>
            <a href="/expenses" className={linkClass}>Despesas</a>
            <a href="/budget" className={linkClass}>Orçamento</a>
            <a href="/cards" className={linkClass}>Cartões</a>
            <a href="/portfolio" className={linkClass}>Investimentos</a>
            <a href="/reports" className={linkClass}>Relatórios</a>
            <a href="/metas" className={linkClass}>Metas</a>
            <button onClick={logout} className="w-full text-left px-4 py-2 rounded-lg text-fin-red hover:bg-fin-red/10 font-medium">Sair</button>
          </div>
        )}
      </nav>
    </header>
  );
}

function AppContent({ children }) {
  const pathname = usePathname();
  const showHeader = pathname !== '/login';
  
  return (
    <>
      {showHeader && <Header />}
      <main className={showHeader ? "container mx-auto p-4 md:p-6 md:py-12" : ""}>
        {children}
      </main>
    </>
  );
}

export default function ClientLayout({ children }) {
  return (
    <AuthProvider>
      <AppContent>{children}</AppContent>
    </AuthProvider>
  );
}