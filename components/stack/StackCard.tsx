"use client";

import { motion } from "framer-motion";

type StackCardProps = {
  name: string;
  category: string;
  index: number;
};

export function StackCard({ name, category, index }: StackCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-colors hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-surface-muted)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -2 }}
    >
      <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-accent)]">
        {category}
      </span>
      <p className="mt-2 text-lg font-semibold text-[var(--color-text)]">{name}</p>
    </motion.div>
  );
}
