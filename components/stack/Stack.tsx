"use client";

import { motion } from "framer-motion";
import { STACK_ITEMS } from "@/lib/constants";
import { StackCard } from "./StackCard";

export function Stack() {
  return (
    <section
      id="stack"
      className="scroll-mt-24 py-32 bg-primary/5 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-5xl font-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Stack Tecnológico
          </motion.h2>
          <motion.p
            className="text-slate-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Herramientas y tecnologías que domino para dar vida a proyectos de
            ingeniería de software de alto nivel.
          </motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {STACK_ITEMS.map((stackItem, index) => (
            <StackCard
              key={stackItem.name}
              name={stackItem.name}
              category={stackItem.category}
              icon={stackItem.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
