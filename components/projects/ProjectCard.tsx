"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types/project";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240' fill='%2327272a'%3E%3Crect width='400' height='240' fill='%2318181b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2371717a' font-family='system-ui' font-size='14'%3EProyecto%3C/text%3E%3C/svg%3E";

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      <Link href={project.liveUrl ?? project.repoUrl ?? "#"} className="block">
        <div className="relative aspect-video w-full overflow-hidden bg-[var(--color-surface-muted)]">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div
              className="h-full w-full bg-[var(--color-surface-muted)]"
              style={{ backgroundImage: `url("${PLACEHOLDER_IMAGE}")`, backgroundSize: "cover" }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-[var(--color-text)]">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-[var(--color-text-muted)]">
            {project.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md bg-[var(--color-surface-muted)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-muted)]"
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
