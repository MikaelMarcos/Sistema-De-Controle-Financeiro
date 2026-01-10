import "./globals.css";
import { Inter } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gestão Financeira",
  description: "Controle suas finanças",
  manifest: "/manifest.json",
  icons: {
    icon: '/logo.png',
    apple: "/icons/icon-512x512.png",
  },
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, 
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