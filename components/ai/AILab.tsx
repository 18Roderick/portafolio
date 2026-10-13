"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SOLUTIONS = [
  {
    icon: "forum",
    title: "Asistentes con contexto",
    text: "Chatbots anclados a datos reales de la empresa, que dicen «no sé» en vez de inventar.",
  },
  {
    icon: "automation",
    title: "Automatización de procesos",
    text: "Clasificar, extraer y resumir información de documentos y correos para quitar trabajo manual.",
  },
  {
    icon: "integration_instructions",
    title: "IA dentro de sistemas existentes",
    text: "Integrar modelos vía API en aplicaciones .NET o Node con límites, validación y costes controlados.",
  },
] as const;

const EXAMPLES = [
  "¿Con qué tecnologías trabajas?",
  "¿Qué has construido?",
  "¿Cuál es tu experiencia en .NET?",
];

type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "done"; answer: string }
  | { status: "error"; message: string };

export function AILab() {
  const [question, setQuestion] = useState("");
  const [state, setState] = useState<State>({ status: "idle" });

  async function ask(q: string) {
    if (state.status === "loading") return;
    setState({ status: "loading" });
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
      });
      const data = await res.json();
      setState(
        data.success
          ? { status: "done", answer: data.answer }
          : { status: "error", message: data.message ?? "Error inesperado." }
      );
    } catch {
      setState({ status: "error", message: "No se pudo conectar." });
    }
  }

  return (
    <section
      id="ia"
      className="scroll-mt-24 py-32 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        className="flex items-center gap-4 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="h-px w-12 bg-primary" />
        <span className="text-sm font-bold uppercase tracking-widest text-primary">
          Laboratorio IA
        </span>
      </motion.div>
      <h2 className="text-4xl md:text-5xl font-black mb-4">
        IA aplicada a problemas reales
      </h2>
      <p className="text-slate-400 max-w-xl mb-16">
        Integro modelos de lenguaje donde aportan valor medible. Pruébalo: este
        asistente responde solo con la información de este portafolio.
      </p>

      <div className="grid gap-10 lg:grid-cols-2">
        <ul className="space-y-4">
          {SOLUTIONS.map((s) => (
            <li
              key={s.title}
              className="flex gap-4 p-5 rounded-2xl border border-primary/10 bg-background-dark/50"
            >
              <span className="material-symbols-outlined text-primary">
                {s.icon}
              </span>
              <div>
                <h3 className="font-bold mb-1">{s.title}</h3>
                <p className="text-sm text-slate-400">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="rounded-2xl border border-primary/20 bg-black/40 p-6 font-mono text-sm">
          <p className="text-primary mb-4">$ preguntar --sobre portafolio</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                type="button"
                onClick={() => {
                  setQuestion(ex);
                  ask(ex);
                }}
                className="px-3 py-1 rounded-full border border-slate-700 text-xs text-slate-300 hover:border-primary/50 transition-colors"
              >
                {ex}
              </button>
            ))}
          </div>
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              ask(question);
            }}
          >
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              maxLength={300}
              placeholder="Escribe tu pregunta…"
              aria-label="Pregunta al asistente"
              className="flex-1 min-w-0 rounded-lg bg-background-dark border border-slate-700 px-3 py-2 text-slate-100 placeholder:text-slate-600 focus:border-primary"
            />
            <button
              type="submit"
              disabled={state.status === "loading" || question.trim().length < 5}
              className="px-4 py-2 rounded-lg bg-primary font-bold text-white disabled:opacity-50"
            >
              Enviar
            </button>
          </form>

          <div className="mt-5 min-h-16 leading-relaxed" aria-live="polite">
            {state.status === "loading" && (
              <span className="text-slate-500">pensando…</span>
            )}
            {state.status === "done" && (
              <p className="text-slate-200 whitespace-pre-wrap">
                {state.answer}
              </p>
            )}
            {state.status === "error" && (
              <p className="text-red-400">{state.message}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
