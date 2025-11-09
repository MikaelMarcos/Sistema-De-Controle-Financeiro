import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meu Controle Financeiro",
  description: "Gerenciado por FastAPI e Next.js",
};

function Header() {
  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          Financeiro - <span className="text-green-400">Mikael Marcos</span>
        </h1>
        <div className="flex space-x-4">
          {/* Use Link do Next.js para navegação mais rápida */}
          <Link href="/" className="px-3 py-2 text-gray-300 hover:text-white transition duration-200">
            Dashboard
          </Link>
          <Link href="/income" className="px-3 py-2 text-gray-300 hover:text-white transition duration-200">
            Entradas
          </Link>
          <Link href="/expenses" className="px-3 py-2 text-gray-300 hover:text-white transition duration-200">
            Despesas
          </Link>
          <Link href="/metas" className="px-3 py-2 text-gray-300 hover:text-white transition duration-200">
            Metas
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-gray-900 min-h-screen`}>
        <Header />
        <main className="container mx-auto px-6 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}