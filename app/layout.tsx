import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LeoBatista",
  description: "Meu portifólio",
  icons: {
    icon: [
      {
        url: '/apple-icon.png', 
        href: '/apple-icon.png',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">
          <Header/>
          
          {children}

          <footer className="py-10 text-center text-xs text-gray-600 border-t border-white/5">
            Copyright © Leonardo Batista | Todos os direitos reservados.
          </footer>
        </div>
      </body>
    </html>
  );
}
