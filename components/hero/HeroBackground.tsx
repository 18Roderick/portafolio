"use client";

import { useEffect, useRef } from "react";

export function HeroBackground() {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glow.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    function onMove(e: PointerEvent) {
      const rect = parent!.getBoundingClientRect();
      el!.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el!.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }

    parent.addEventListener("pointermove", onMove);
    return () => parent.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <div
        aria-hidden="true"
        className="hero-grid absolute inset-0 pointer-events-none"
      />
      <div
        ref={glow}
        aria-hidden="true"
        className="hero-glow absolute inset-0 pointer-events-none"
      />
    </>
  );
}
