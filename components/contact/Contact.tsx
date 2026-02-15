"use client";

import { motion } from "framer-motion";
import { MovingBorderButton } from "@/components/ui";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 border-t border-[var(--color-border)] px-4 py-20 sm:px-6 md:py-28"
    >
      {/* Subtle gradient accent at bottom */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px opacity-30"
        style={{
          background: "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
        }}
      />
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Contacto
        </motion.h2>
        <motion.p
          className="mb-10 text-[var(--color-text-muted)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          ¿Tienes un proyecto en mente o quieres conectar? Escríbeme.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <MovingBorderButton href="mailto:hola@ejemplo.com" variant="primary" className="inline-flex">
            Enviar mensaje
          </MovingBorderButton>
        </motion.div>
        <p className="mt-6 text-sm text-[var(--color-text-muted)]">
          Preparado para futura integración con backend / envío de email.
        </p>
      </div>
    </section>
  );
}
