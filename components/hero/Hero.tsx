"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center px-4 pt-24 pb-16 sm:px-6 sm:pt-28">
      <HeroBackground />

      <motion.div
        className="mx-auto max-w-3xl text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={item}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-[var(--color-accent)]"
        >
          Analista Programador & FullStack Developer
        </motion.p>
        <motion.h1
          variants={item}
          className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Arquitectura limpia,
          <br />
          <span className="text-[var(--color-accent)]">rendimiento</span> y
          escalabilidad
        </motion.h1>
        <motion.p
          variants={item}
          className="mb-10 text-lg text-[var(--color-text-muted)] sm:text-xl"
        >
          Diseño y construyo sistemas bien estructurados, mantenibles y alineados
          con objetivos de negocio. No solo funcionalidades: soluciones pensadas
          de principio a fin.
        </motion.p>
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#proyectos"
            className="rounded-lg bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]"
          >
            Ver proyectos
          </Link>
          <Link
            href="#contacto"
            className="rounded-lg border border-[var(--color-border)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]"
          >
            Contactar
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
