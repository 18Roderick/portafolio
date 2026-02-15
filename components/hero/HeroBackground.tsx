"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient blob */}
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[80vmin] w-[80vmin] rounded-full bg-[var(--color-accent)]/15 blur-3xl"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute -bottom-1/4 -right-1/4 h-[60vmin] w-[60vmin] rounded-full bg-[var(--color-accent-muted)]/10 blur-3xl" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-text) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-text) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, var(--color-accent) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
        animate={{ opacity: [0.02, 0.04, 0.02] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
