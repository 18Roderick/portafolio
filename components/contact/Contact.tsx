"use client";

import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 py-32 px-6 max-w-4xl mx-auto text-center"
    >
      <motion.div
        className="relative p-8 md:p-16 bg-primary/10 border border-primary/20 rounded-[40px] overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-[200px]">mail</span>
        </div>

        <motion.h2
          className="text-3xl md:text-5xl font-black mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          ¿Listo para escalar tu proyecto?
        </motion.h2>

        <motion.p
          className="text-slate-400 text-lg mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          ¿Tienes un proyecto en mente o quieres conectar? Escríbeme.
        </motion.p>

        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </section>
  );
}
