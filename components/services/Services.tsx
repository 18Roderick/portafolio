"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    n: "01",
    title: "Desarrollo a medida",
    text: "Aplicaciones web y herramientas internas hechas para el problema concreto de cada cliente.",
  },
  {
    n: "02",
    title: "Automatización",
    text: "Procesos manuales convertidos en flujos que se ejecutan solos y se pueden revisar.",
  },
  {
    n: "03",
    title: "Integración y datos",
    text: "Conectar sistemas, APIs y fuentes de datos para que trabajen juntos.",
  },
] as const;

export function Services() {
  return (
    <section
      id="servicios"
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
          Qué hago
        </span>
      </motion.div>
      <motion.h2
        className="text-4xl md:text-5xl font-bold tracking-tight mb-16 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        De la idea al sistema funcionando.
      </motion.h2>

      <ol className="grid gap-5 md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <motion.li
            key={s.n}
            className="p-7 rounded-xl border border-white/10 bg-[#11131a] hover:border-white/25 hover:-translate-y-1 transition"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <span className="font-mono text-xs text-primary">{s.n}</span>
            <h3 className="text-2xl font-bold mt-3 mb-3 leading-tight">
              {s.title}
            </h3>
            <p className="text-slate-400 leading-relaxed">{s.text}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
