"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type MovingBorderButtonProps = {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "outline";
  className?: string;
};

export function MovingBorderButton({
  children,
  href,
  variant = "primary",
  className = "",
}: MovingBorderButtonProps) {
  const isPrimary = variant === "primary";

  const content = (
    <>
      {/* Animated gradient border */}
      <motion.span
        className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(90deg, var(--color-accent), var(--color-accent-muted), #60a5fa, var(--color-accent))",
          backgroundSize: "300% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <span
        className={`absolute inset-[2px] rounded-md ${isPrimary ? "bg-[var(--color-accent)]" : "bg-[var(--color-bg)]"}`}
      />
      <span className="relative z-10 px-6 py-3 text-sm font-medium">
        {children}
      </span>
    </>
  );

  return (
    <Link
      href={href}
      className={`group relative inline-flex rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg)] ${className}`}
    >
      {variant === "outline" ? (
        <>
          <motion.span
            className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(90deg, var(--color-accent), var(--color-accent-muted), #60a5fa, var(--color-accent))",
              backgroundSize: "300% 100%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <span className="absolute inset-[2px] rounded-md bg-[var(--color-bg)]" />
          <span className="relative z-10 px-6 py-3 text-sm font-medium text-[var(--color-text)]">
            {children}
          </span>
        </>
      ) : (
        content
      )}
    </Link>
  );
}
