"use client";

import { motion } from "framer-motion";
import { HeroBackground } from "./HeroBackground";
import { MovingBorderButton } from "@/components/ui";

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
      {/* Subtle spotlight behind content */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <div
          className="h-[50vh] w-[min(100%,500px)] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, var(--color-accent) 0%, transparent 70%)",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center"
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
          className="relative mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Arquitectura limpia,
          <br />
          <span
            className="bg-gradient-to-r from-[var(--color-accent)] via-[#60a5fa] to-[var(--color-accent-muted)] bg-clip-text text-transparent"
            style={{ backgroundSize: "200% auto" }}
          >
            rendimiento
          </span>{" "}
          y escalabilidad
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
          className="relative flex flex-wrap items-center justify-center gap-4"
        >
          <MovingBorderButton href="#proyectos" variant="primary">
            Ver proyectos
          </MovingBorderButton>
          <MovingBorderButton href="#contacto" variant="outline">
            Contactar
          </MovingBorderButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
