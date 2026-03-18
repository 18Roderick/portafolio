"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Experience } from "@/lib/types/experience";

type ExperienceCardProps = {
  experience: Experience;
  index: number;
};

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const isCurrent = experience.endDate === null;

  return (
    <motion.div
      className="relative flex gap-6 md:gap-10"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Timeline line & dot */}
      <div className="flex flex-col items-center">
        <div
          className={`relative z-10 flex size-12 shrink-0 items-center justify-center rounded-xl border-2 ${
            isCurrent
              ? "border-primary bg-primary/20"
              : "border-primary/30 bg-background-dark/80"
          }`}
        >
          <span
            className={`material-symbols-outlined text-xl ${
              isCurrent ? "text-primary" : "text-primary/60"
            }`}
          >
            {experience.icon}
          </span>
          {isCurrent && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
            </span>
          )}
        </div>
        <div className="w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent" />
      </div>

      {/* Card content */}
      <div className="pb-12 flex-1">
        <div className="group rounded-2xl border border-primary/10 bg-background-dark/50 p-6 md:p-8 transition-all hover:border-primary/30 hover:shadow-[0_0_32px_rgba(131,60,246,0.1)]">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider ${
                isCurrent
                  ? "bg-green-500/10 text-green-400 border border-green-500/20"
                  : "bg-slate-800 text-slate-400 border border-slate-700"
              }`}
            >
              {isCurrent && (
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
              )}
              {isCurrent ? "Actualmente" : experience.startDate}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold text-slate-100">
                {experience.role}
              </h3>
              {experience.url ? (
                <Link
                  href={experience.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary font-semibold hover:underline"
                >
                  {experience.company}
                  <span className="material-symbols-outlined text-sm">
                    arrow_outward
                  </span>
                </Link>
              ) : (
                <p className="text-primary font-semibold">
                  {experience.company}
                </p>
              )}
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            {experience.description}
          </p>

          <ul className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <li
                key={tag}
                className="text-[10px] font-bold px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20 uppercase"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
