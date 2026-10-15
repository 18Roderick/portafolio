import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  IBM_Plex_Mono,
  Instrument_Sans,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/ui";

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const heading = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portafolio | Analista Programador & FullStack Developer",
  description:
    "Software que resuelve problemas reales. Arquitectura limpia, rendimiento e IA aplicada. Especialista en JavaScript, Node.js, React, .NET y PostgreSQL. Soluciones bien pensadas desde la arquitectura hasta la experiencia final.",
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
    <html lang="es" className={`${body.variable} ${heading.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background-dark font-display text-slate-100 selection:bg-primary selection:text-background-dark overflow-x-hidden">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 noise-texture" />
        </div>
        <MotionProvider>
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
