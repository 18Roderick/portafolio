import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portafolio | Analista Programador & FullStack Developer",
  description:
    "Arquitectura limpia, rendimiento y escalabilidad. Especialista en JavaScript, Node.js, React, .NET y PostgreSQL. Soluciones bien pensadas desde la arquitectura hasta la experiencia final.",
  keywords: [
    "FullStack Developer",
    "Analista Programador",
    "JavaScript",
    "React",
    "Node.js",
    ".NET",
    "PostgreSQL",
    "Arquitectura de software",
  ],
  authors: [{ name: "Portfolio" }],
  openGraph: {
    title: "Portafolio | Analista Programador & FullStack Developer",
    description:
      "Arquitectura limpia, rendimiento y escalabilidad. Soluciones bien pensadas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background-dark font-display text-slate-100 selection:bg-primary selection:text-white overflow-x-hidden">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 noise-texture" />
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
        </div>
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
