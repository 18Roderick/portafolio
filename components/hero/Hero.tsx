"use client";

import { motion, type Variants } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import { HeroNetwork } from "./HeroNetwork";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroBackground />
      <div className="relative min-h-[90vh] max-w-7xl mx-auto px-6 py-20 flex flex-wrap items-center gap-14">
        <motion.div
          className="flex-[1_1_460px] min-w-0"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8"
          >
            <span className="dot-blink size-2 rounded-full bg-primary" />
            Analista Programador &amp; FullStack Developer
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight mb-8 max-w-3xl"
          >
            Software que resuelve{" "}
            <span className="text-primary">problemas reales</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed mb-12"
          >
            Analista programador y solucionador de problemas. Diseño con
            arquitectura limpia, rendimiento y, cuando aporta valor, IA
            integrada.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="px-8 py-4 bg-primary text-background-dark font-bold rounded-md hover:-translate-y-0.5 hover:brightness-110 transition"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 border border-slate-700 hover:border-primary/50 font-bold rounded-md transition-colors text-slate-100"
            >
              Contactar
            </a>
            <a
              href="#ia"
              className="px-4 py-4 font-mono font-bold text-primary hover:underline"
            >
              &gt; probar el asistente IA
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-[1_1_380px] min-w-0"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <HeroNetwork />
        </motion.div>
      </div>
    </section>
  );
}
