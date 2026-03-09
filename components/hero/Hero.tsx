"use client";

import { motion } from "framer-motion";

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
    <section className="min-h-[90vh] flex flex-col justify-center px-6 max-w-7xl mx-auto py-20">
      <div className="relative">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Analista Programador &amp; FullStack Developer
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tight mb-8 max-w-5xl"
          >
            Arquitectura limpia,{" "}
            <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent glow-text">
              rendimiento
            </span>{" "}
            y escalabilidad
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12"
          >
            Diseño y construyo sistemas bien estructurados, mantenibles y
            alineados con objetivos de negocio. No solo funcionalidades:
            soluciones pensadas de principio a fin.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-5">
            <a
              href="#proyectos"
              className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-xl shadow-primary/25"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="px-8 py-4 border border-slate-700 hover:border-primary/50 font-bold rounded-xl transition-all text-slate-100"
            >
              Contactar
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative circle element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block w-1/3 aspect-square border border-primary/10 rounded-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 border border-primary/20 rounded-full animate-spin-slow flex items-center justify-center">
              <div className="w-1/2 h-1/2 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center opacity-20 text-[200px] select-none font-black text-primary">
            JS
          </div>
        </div>
      </div>
    </section>
  );
}
