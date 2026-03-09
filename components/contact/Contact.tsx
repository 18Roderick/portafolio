"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 py-32 px-6 max-w-4xl mx-auto text-center"
    >
      <motion.div
        className="relative p-12 md:p-20 bg-primary/10 border border-primary/20 rounded-[40px] overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-[200px]">mail</span>
        </div>

        <motion.h2
          className="text-4xl md:text-5xl font-black mb-6"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="mailto:hola@ejemplo.com"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-12 py-5 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-primary/20 hover:scale-105"
          >
            Enviar mensaje
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
