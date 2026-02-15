import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Portfolio | Analista Programador & FullStack Developer",
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
    title: "Portfolio | Analista Programador & FullStack Developer",
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
    <html
      lang="es"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans antialiased bg-[var(--color-bg)] text-[var(--color-text)]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
