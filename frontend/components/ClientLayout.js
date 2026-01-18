'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { PrivacyProvider, usePrivacy } from '@/context/PrivacyContext';

const linkClass = "block px-4 py-2 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300";
const activeLinkClass = "block px-4 py-2 rounded-xl text-sm font-bold text-fin-highlight bg-fin-highlight/10 shadow-[0_0_15px_rgba(56,189,248,0.1)] transition-all duration-300";

function Header() {
  const { logout } = useAuth();
  const { isPrivacyEnabled, togglePrivacy } = usePrivacy();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const getLinkClass = (path) => pathname === path ? activeLinkClass : linkClass;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl bg-fin-dark/50 border-b border-white/5">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
            <span className="bg-gradient-to-br from-fin-highlight to-fin-green w-8 h-8 rounded-lg flex items-center justify-center text-fin-dark text-lg shadow-lg">F</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Financeiro</span>
          </h1>

          <div className="flex items-center gap-2 md:hidden">
            <button onClick={togglePrivacy} className="text-gray-300 focus:outline-none hover:text-white transition-colors p-2">
              {isPrivacyEnabled ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </button>
            <button onClick={toggleMenu} className="text-gray-300 focus:outline-none hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="/" className={getLinkClass('/')}>Dashboard</a>
            <a href="/income" className={getLinkClass('/income')}>Entradas</a>
            <a href="/expenses" className={getLinkClass('/expenses')}>Despesas</a>
            <a href="/budget" className={getLinkClass('/budget')}>Orçamento</a>
            <a href="/cards" className={getLinkClass('/cards')}>Contas</a>
            <a href="/portfolio" className={getLinkClass('/portfolio')}>Invest.</a>
            <a href="/reports" className={getLinkClass('/reports')}>Relatórios</a>
            <a href="/metas" className={getLinkClass('/metas')}>Metas</a>
            
            <button onClick={togglePrivacy} className="ml-2 mr-2 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300" title={isPrivacyEnabled ? "Mostrar valores" : "Ocultar valores"}>
              {isPrivacyEnabled ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </button>

            <button onClick={logout} className="ml-2 px-5 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-fin-red to-rose-600 hover:shadow-lg hover:shadow-rose-500/20 transition-all transform hover:-translate-y-0.5">Sair</button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4 border-t border-white/5 pt-4 animate-fade-in-down bg-fin-dark/90 rounded-2xl p-4 shadow-xl border border-white/5">
            <a href="/" className={getLinkClass('/')}>Dashboard</a>
            <a href="/income" className={getLinkClass('/income')}>Entradas</a>
            <a href="/expenses" className={getLinkClass('/expenses')}>Despesas</a>
            <a href="/budget" className={getLinkClass('/budget')}>Orçamento</a>
            <a href="/cards" className={getLinkClass('/cards')}>Contas</a>
            <a href="/portfolio" className={getLinkClass('/portfolio')}>Investimentos</a>
            <a href="/reports" className={getLinkClass('/reports')}>Relatórios</a>
            <a href="/metas" className={getLinkClass('/metas')}>Metas</a>
            <button onClick={logout} className="w-full mt-4 py-3 rounded-xl text-sm font-bold text-white bg-fin-red/80 hover:bg-fin-red">Sair</button>
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
      <main className={showHeader ? "container mx-auto p-4 md:p-6 md:py-12 pt-24" : ""}>
        {children}
      </main>
    </>
  );
}

export default function ClientLayout({ children }) {
  return (
    <AuthProvider>
      <PrivacyProvider>
        <AppContent>{children}</AppContent>
      </PrivacyProvider>
    </AuthProvider>
  );
}