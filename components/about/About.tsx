"use client";

import Image from "next/image";
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
      className="scroll-mt-24 py-32 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          className="lg:col-span-7 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          <motion.div variants={block} className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-primary" />
            <h2 className="text-2xl font-bold uppercase tracking-widest text-primary">
              Sobre mí
            </h2>
          </motion.div>

          <motion.p
            variants={block}
            className="text-2xl md:text-3xl font-light leading-relaxed"
          >
            Soy{" "}
            <strong className="font-bold text-primary">
              Analista Programador
            </strong>{" "}
            y{" "}
            <strong className="font-bold text-primary">
              FullStack Developer
            </strong>{" "}
            con enfoque en arquitectura limpia, rendimiento y escalabilidad. Me
            especializo en diseñar y construir sistemas bien estructurados,
            mantenibles y alineados con objetivos de negocio.
          </motion.p>

          <motion.p
            variants={block}
            className="text-xl text-slate-400 leading-relaxed"
          >
            Trabajo principalmente con{" "}
            <span className="text-white font-semibold">JavaScript</span>,{" "}
            <span className="text-white font-semibold">Node.js</span>,{" "}
            <span className="text-white font-semibold">React</span>,{" "}
            <span className="text-white font-semibold">.NET</span> y{" "}
            <span className="text-white font-semibold">PostgreSQL</span>,
            aplicando buenas prácticas, patrones de diseño y principios de
            ingeniería de software que priorizan claridad, eficiencia y
            evolución a largo plazo.
          </motion.p>

          <motion.p
            variants={block}
            className="text-xl text-slate-400 leading-relaxed"
          >
            No me enfoco solo en desarrollar funcionalidades, sino en{" "}
            <strong className="text-white font-semibold">
              construir soluciones bien pensadas
            </strong>{" "}
            desde la arquitectura hasta la experiencia final.
          </motion.p>
        </motion.div>

        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative z-10 aspect-square bg-slate-800 rounded-3xl overflow-hidden border border-white/5 group">
            <div className="absolute inset-0 z-10 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
            <Image
              src="/portrait.webp"
              alt="Retrato profesional"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-3xl -z-10 transform rotate-3" />
        </motion.div>
      </div>
    </section>
  );
}
