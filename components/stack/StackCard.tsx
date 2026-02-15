"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

type StackCardProps = {
  name: string;
  category: string;
  index: number;
};

export function StackCard({ name, category, index }: StackCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);
    setRotateY(percentX * 8);
    setRotateX(-percentY * 8);
  };
  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:shadow-[0_0_28px_rgba(59,130,246,0.18)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-xs font-medium uppercase tracking-wider text-[var(--color-accent)]">
        {category}
      </span>
      <p className="mt-2 text-lg font-semibold text-[var(--color-text)]">{name}</p>
    </motion.div>
  );
}
