"use client";

import { motion } from "framer-motion";
import { STACK_ITEMS } from "@/lib/constants";
import { StackCard } from "./StackCard";

export function Stack() {
  return (
    <section
      id="stack"
      className="scroll-mt-24 border-t border-[var(--color-border)] px-4 py-20 sm:px-6 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Stack / Tecnologías
        </motion.h2>
        <motion.p
          className="mb-12 text-[var(--color-text-muted)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Herramientas y lenguajes con los que diseño y construyo soluciones.
        </motion.p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STACK_ITEMS.map((item, index) => (
            <StackCard
              key={item.name}
              name={item.name}
              category={item.category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
