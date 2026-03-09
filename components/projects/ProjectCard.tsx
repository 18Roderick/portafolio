"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types/project";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const GRADIENT_CLASSES: Record<string, string> = {
  "bg-gradient-to-br": "bg-gradient-to-br from-slate-800 to-primary/20",
  "bg-gradient-to-tr": "bg-gradient-to-tr from-primary/30 to-slate-800",
  "bg-gradient-to-b": "bg-gradient-to-b from-slate-800 to-primary/10",
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const gradientClass =
    GRADIENT_CLASSES[project.gradientDirection ?? "bg-gradient-to-br"] ??
    GRADIENT_CLASSES["bg-gradient-to-br"];

  const href = project.liveUrl ?? project.repoUrl ?? "#";
  const isLocked = project.inConstruction && !project.liveUrl;

  return (
    <motion.article
      className="group relative bg-slate-900 border border-white/5 rounded-3xl overflow-hidden hover:border-primary/30 transition-all flex flex-col h-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <Link
        href={href}
        className="flex flex-col h-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={`aspect-video ${gradientClass} relative overflow-hidden`}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:scale-110 transition-transform duration-500">
            <span className="material-symbols-outlined text-8xl">
              {project.icon ?? "code"}
            </span>
          </div>
          {project.inConstruction && (
            <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-primary/40 z-20">
              En construcción
            </div>
          )}
          <div className="absolute inset-0 bg-background-dark/40" />
        </div>

        <div className="p-8 flex flex-col flex-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-slate-100">
              {project.title}
            </h3>
            <span className="material-symbols-outlined text-primary">
              {isLocked ? "lock" : "arrow_outward"}
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
            {project.description}
          </p>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="text-[10px] font-bold px-2 py-1 bg-primary/10 text-primary rounded border border-primary/20 uppercase"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.article>
  );
}
