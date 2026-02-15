"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Aurora-style gradient orbs */}
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[80vmin] w-[80vmin] rounded-full bg-[var(--color-accent)]/20 blur-[100px]"
        animate={{ opacity: [0.5, 0.9, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/4 -right-1/4 h-[60vmin] w-[60vmin] rounded-full bg-[var(--color-accent-muted)]/15 blur-[80px]"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[40vmin] w-[40vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/10 blur-[60px]"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Animated beams (Background Beams style) */}
      <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M-200 400 Q 200 200 400 400 T 800 400 T 1200 400 T 1600 400"
          fill="none"
          stroke="url(#beam-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.path
          d="M-100 500 Q 300 300 500 500 T 900 500 T 1300 500"
          fill="none"
          stroke="url(#beam-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2.2, delay: 0.3, ease: "easeOut" }}
        />
        <motion.path
          d="M0 600 Q 400 400 600 600 T 1000 600"
          fill="none"
          stroke="url(#beam-gradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2.4, delay: 0.5, ease: "easeOut" }}
        />
      </svg>

      {/* Dot grid - more visible */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-text) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Line grid subtle */}
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
    </div>
  );
}
