"use client";

import { motion } from "framer-motion";

type StackCardProps = {
  name: string;
  category: string;
  icon: string;
  index: number;
};

export function StackCard({ name, category, icon, index }: StackCardProps) {
  return (
    <motion.div
      className="p-6 bg-background-dark/50 border border-primary/10 rounded-2xl hover:border-primary/50 hover:-translate-y-2 transition-all cursor-default group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-primary font-bold">{name}</span>
        <span className="material-symbols-outlined text-primary/40 group-hover:text-primary transition-colors">
          {icon}
        </span>
      </div>
      <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">
        {category}
      </p>
    </motion.div>
  );
}
