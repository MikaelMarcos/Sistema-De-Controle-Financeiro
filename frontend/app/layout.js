import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Financeiro Premium",
  description: "Gestão Financeira Pessoal",
};

function Header() {
  return (
    // Usando fin-card com um leve degradê e sombra
    <header className="bg-gradient-to-r from-fin-dark to-fin-card shadow-2xl border-b border-fin-card/50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-tight">
          Fin<span className="text-fin-gold">anceiro</span>
        </h1>
        <div className="flex space-x-1">
          {/* Links com efeito de hover mais suave */}
          <a href="/" className="px-4 py-2 rounded-lg text-gray-300 hover:text-fin-highlight hover:bg-fin-dark/30 transition-all duration-300">Dashboard</a>
          <a href="/income" className="px-4 py-2 rounded-lg text-gray-300 hover:text-fin-gold hover:bg-fin-dark/30 transition-all duration-300">Entradas</a>
          <a href="/expenses" className="px-4 py-2 rounded-lg text-gray-300 hover:text-fin-terra hover:bg-fin-dark/30 transition-all duration-300">Despesas</a>
          <a href="/budget" className="px-4 py-2 rounded-lg text-gray-300 hover:text-blue-300 hover:bg-fin-dark/30 transition-all duration-300">Orçamento</a>
          <a href="/metas" className="px-4 py-2 rounded-lg text-gray-300 hover:text-fin-highlight hover:bg-fin-dark/30 transition-all duration-300">Metas</a>
        </div>
      </nav>
    </header>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="container mx-auto p-6 md:py-12">
          {children}
        </main>
      </body>
    </html>
  );
}