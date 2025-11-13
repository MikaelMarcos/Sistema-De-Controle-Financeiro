import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Financeiro Premium",
  description: "Gestão Financeira Pessoal com Estilo e Clareza",
};

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-fin-dark/80 border-b border-fin-card/30 shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_6px_rgba(255,215,0,0.4)]">
          Fin<span className="text-fin-gold">anceiro</span>
        </h1>

        <div className="flex space-x-1">
          {[
            { href: "/", label: "Dashboard", color: "text-fin-highlight" },
            { href: "/income", label: "Entradas", color: "text-fin-gold" },
            { href: "/expenses", label: "Despesas", color: "text-fin-terra" },
            { href: "/budget", label: "Orçamento", color: "text-blue-300" },
            // 👇 NOVO LINK ADICIONADO AQUI 👇
            { href: "/cards", label: "Cartões", color: "text-fin-terra" },
            { href: "/portfolio", label: "Investimentos", color: "text-fin-highlight" },
            { href: "/metas", label: "Metas", color: "text-fin-highlight" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-lg text-gray-300 hover:${item.color} hover:bg-fin-card/40 transition-all duration-300`}
            >
              {item.label}
            </a>
          ))}
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
        <main className="container mx-auto p-6 md:py-24 pt-28 space-y-8">
          {children}
        </main>
      </body>
    </html>
  );
}