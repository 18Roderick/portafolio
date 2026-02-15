"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/types/project";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const PLACEHOLDER_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240' fill='%2327272a'%3E%3Crect width='400' height='240' fill='%2318181b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%2371717a' font-family='system-ui' font-size='14'%3EProyecto%3C/text%3E%3C/svg%3E";

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );
  const handleMouseLeave = useCallback(() => setMousePosition(null), []);

  return (
    <motion.article
      ref={cardRef}
      className="group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] transition-shadow duration-300 hover:border-[var(--color-accent)]/30 hover:shadow-[0_0_32px_rgba(59,130,246,0.15)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight that follows mouse (Card Spotlight style) */}
      {mousePosition && (
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 40%)`,
          }}
        />
      )}

      <Link
        href={project.liveUrl ?? project.repoUrl ?? "#"}
        className="relative z-10 block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-[var(--color-surface-muted)]">
          {project.inConstruction && (
            <span className="absolute right-3 top-3 z-20 rounded-md bg-amber-500/90 px-2 py-1 text-xs font-medium text-black">
              En construcción
            </span>
          )}
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
              style={{
                backgroundImage: `url("${PLACEHOLDER_IMAGE}")`,
                backgroundSize: "cover",
              }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="relative z-10 p-5">
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
