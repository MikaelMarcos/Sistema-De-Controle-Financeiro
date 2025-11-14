'use client';
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider, useAuth } from '@/context/AuthContext'; // 👈 Importa
import { usePathname } from "next/navigation"; // 👈 Para esconder o header no login

const inter = Inter({ subsets: ["latin"] });

function Header() {
  const { logout, user } = useAuth();
  
  return (
    <header className="bg-gradient-to-r from-fin-dark to-fin-card shadow-2xl border-b border-fin-card/50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Fin<span className="text-fin-gold">anceiro</span>
        </h1>
        <div className="flex items-center space-x-1">
          <a href="/" className="px-4 py-2 rounded-lg text-gray-300 hover:text-fin-highlight hover:bg-fin-dark/30">Dashboard</a>
          <a href="/income" className="px-4 py-2 rounded-lg text-gray-300 hover:text-fin-gold hover:bg-fin-dark/30">Entradas</a>
          <a href="/expenses" className="px-4 py-2 rounded-lg text-gray-300 hover:text-fin-terra hover:bg-fin-dark/30">Despesas</a>
          <a href="/budget" className="px-4 py-2 rounded-lg text-gray-300 hover:text-blue-300 hover:bg-fin-dark/30">Orçamento</a>
          <a href="/cards" className="px-4 py-2 rounded-lg text-gray-300 hover:text-fin-terra hover:bg-fin-dark/30">Cartões</a>
          <a href="/portfolio" className="px-4 py-2 rounded-lg text-gray-300 hover:text-fin-highlight hover:bg-fin-dark/30">Investimentos</a>
          <a href="/reports" className="px-4 py-2 rounded-lg text-gray-300 hover:text-fin-gold hover:bg-fin-dark/30">Relatórios</a>
          <a href="/metas" className="px-4 py-2 rounded-lg text-gray-300 hover:text-fin-highlight hover:bg-fin-dark/30">Metas</a>
          
          {/* 👇 Botão de Sair 👇 */}
          <button
            onClick={logout}
            className="px-4 py-2 rounded-lg text-fin-red hover:bg-fin-red/10 font-medium"
          >
            Sair
          </button>
        </div>
      </nav>
    </header>
  );
}

// Componente wrapper para o layout
function AppLayout({ children }) {
  const pathname = usePathname();
  // Não mostra o header se estiver na página de login
  const showHeader = pathname !== '/login'; 
  
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className={`${inter.className} antialiased`}>
        {showHeader && <Header />}
        <main className={showHeader ? "container mx-auto p-6 md:py-12" : ""}>
          {children}
        </main>
      </body>
    </html>
  );
}

// Exportação principal do layout
export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <AppLayout>
        {children}
      </AppLayout>
    </AuthProvider>
  );
}