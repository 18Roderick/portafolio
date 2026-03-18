"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { ExperienceCard } from "./ExperienceCard";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-24 py-32 px-6 max-w-7xl mx-auto"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              className="flex items-center gap-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-bold uppercase tracking-widest text-primary">
                Trayectoria
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-black"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              Experiencia Profesional
            </motion.h2>
          </div>
          <motion.p
            className="text-slate-400 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Empresas donde he contribuido diseñando y construyendo soluciones de
            software a escala.
          </motion.p>
        </div>

        <div>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
