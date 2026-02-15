"use client";

import { motion } from "framer-motion";

const block = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export function About() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-24 border-t border-[var(--color-border)] bg-[var(--color-surface)]/50 px-4 py-20 sm:px-6 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={block}
        >
          Sobre mí
        </motion.h2>
        <motion.div
          className="space-y-6 text-[var(--color-text-muted)] leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          <motion.p variants={block}>
            Soy <strong className="text-[var(--color-text)]">Analista Programador</strong> y{" "}
            <strong className="text-[var(--color-text)]">FullStack Developer</strong> con enfoque
            en arquitectura limpia, rendimiento y escalabilidad. Me especializo en diseñar y
            construir sistemas bien estructurados, mantenibles y alineados con objetivos de
            negocio.
          </motion.p>
          <motion.p variants={block}>
            Trabajo principalmente con{" "}
            <strong className="text-[var(--color-text)]">JavaScript</strong>,{" "}
            <strong className="text-[var(--color-text)]">Node.js</strong>,{" "}
            <strong className="text-[var(--color-text)]">React</strong>,{" "}
            <strong className="text-[var(--color-text)]">.NET</strong> y{" "}
            <strong className="text-[var(--color-text)]">PostgreSQL</strong>, aplicando buenas
            prácticas, patrones de diseño y principios de ingeniería de software que priorizan
            claridad, eficiencia y evolución a largo plazo.
          </motion.p>
          <motion.p variants={block}>
            No me enfoco solo en desarrollar funcionalidades, sino en{" "}
            <strong className="text-[var(--color-text)]">construir soluciones bien pensadas</strong>{" "}
            desde la arquitectura hasta la experiencia final.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
