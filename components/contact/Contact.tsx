"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 border-t border-[var(--color-border)] px-4 py-20 sm:px-6 md:py-28"
    >
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
        >
          <Link
            href="mailto:hola@ejemplo.com"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-8 py-4 text-base font-medium text-white transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]"
          >
            Enviar mensaje
          </Link>
        </motion.div>
        <p className="mt-6 text-sm text-[var(--color-text-muted)]">
          Preparado para futura integración con backend / envío de email.
        </p>
      </div>
    </section>
  );
}
