"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    title: "Detecto",
    text: "Algo no cuadra o puede hacerse mejor. Defino el problema real antes de tocar código.",
  },
  {
    n: "02",
    title: "Descompongo",
    text: "Separo variables, mecanismos y alternativas. Un problema grande es un sistema de piezas pequeñas.",
  },
  {
    n: "03",
    title: "Cuestiono",
    text: "Compruebo que los números y los argumentos se sostienen. Una explicación convincente no es una demostrada.",
  },
  {
    n: "04",
    title: "Decido",
    text: "Construyo criterio propio y entrego una solución suficientemente buena, que se pueda mejorar.",
  },
] as const;

const PRINCIPLES = [
  "Entender el porqué antes de elegir la herramienta.",
  "Medir antes de optimizar; no todo lo importante se mide bien.",
  "Lo suficientemente bueno, hoy, supera a lo perfecto, nunca.",
] as const;

export function Process() {
  return (
    <section
      id="proceso"
      className="scroll-mt-24 py-32 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        className="flex items-center gap-4 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="h-px w-12 bg-primary" />
        <span className="text-sm font-bold uppercase tracking-widest text-primary">
          Método
        </span>
      </motion.div>
      <motion.h2
        className="text-4xl md:text-5xl font-black mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Cómo pienso
      </motion.h2>
      <p className="text-slate-400 max-w-xl mb-16">
        Convierto problemas en sistemas que se pueden entender y mejorar. Este
        es el proceso que sigo.
      </p>

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <motion.li
            key={step.n}
            className="relative p-6 rounded-2xl border border-primary/10 bg-background-dark/50 hover:border-primary/40 transition-colors"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <span className="font-mono text-xs text-primary">{step.n} /</span>
            <h3 className="text-xl font-bold mt-3 mb-2">{step.title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {step.text}
            </p>
          </motion.li>
        ))}
      </ol>

      <ul className="mt-12 space-y-3 font-mono text-sm text-slate-300 max-w-2xl">
        {PRINCIPLES.map((p) => (
          <li key={p} className="flex gap-3">
            <span className="text-primary">&gt;</span>
            {p}
          </li>
        ))}
      </ul>
    </section>
  );
}
