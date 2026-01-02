import "./globals.css";
import { Inter } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Financeiro Premium",
  description: "Gestão Financeira Pessoal",
  icons: {
    icon: '/logo.png', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className={`${inter.className} antialiased`}>
        {/* O ClientLayout gerencia o Auth, o Menu e o CSS global */}
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}