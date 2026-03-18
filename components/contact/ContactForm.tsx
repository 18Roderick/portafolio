"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { contactSchema, type ContactFormData } from "@/lib/validations/contact";

type FormStatus = "idle" | "submitting" | "success" | "error";

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const validateField = useCallback(
    (field: keyof ContactFormData, value: string) => {
      const partial = { ...formData, [field]: value };
      const result = contactSchema.safeParse(partial);

      if (result.success) {
        setFieldErrors((prev) => {
          const next = { ...prev };
          delete next[field];
          return next;
        });
      } else {
        const fieldIssue = result.error.issues.find(
          (issue) => issue.path[0] === field
        );
        if (fieldIssue) {
          setFieldErrors((prev) => ({ ...prev, [field]: fieldIssue.message }));
        } else {
          setFieldErrors((prev) => {
            const next = { ...prev };
            delete next[field];
            return next;
          });
        }
      }
    },
    [formData]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (fieldErrors[name as keyof ContactFormData]) {
      validateField(name as keyof ContactFormData, value);
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (value.trim()) {
      validateField(name as keyof ContactFormData, value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const errors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormData;
        if (!errors[field]) errors[field] = issue.message;
      }
      setFieldErrors(errors);
      return;
    }

    setStatus("submitting");
    setFieldErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setStatusMessage(data.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.message ?? "Error al enviar el mensaje.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Error de conexión. Verifica tu internet e intenta de nuevo.");
    }
  };

  const inputBaseClass =
    "w-full rounded-xl border bg-slate-900/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 outline-none transition-all focus:ring-2 focus:ring-primary/50";
  const inputBorderClass = (field: keyof ContactFormData) =>
    fieldErrors[field]
      ? "border-red-500/50 focus:border-red-500"
      : "border-primary/10 focus:border-primary/40";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left" noValidate>
      <div>
        <label
          htmlFor="contact-name"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Nombre
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={status === "submitting"}
          className={`${inputBaseClass} ${inputBorderClass("name")}`}
        />
        <AnimatePresence>
          {fieldErrors.name && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="mt-1.5 text-xs text-red-400"
            >
              {fieldErrors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={status === "submitting"}
          className={`${inputBaseClass} ${inputBorderClass("email")}`}
        />
        <AnimatePresence>
          {fieldErrors.email && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="mt-1.5 text-xs text-red-400"
            >
              {fieldErrors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm font-medium text-slate-300"
        >
          Mensaje
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Cuéntame sobre tu proyecto..."
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={status === "submitting"}
          className={`${inputBaseClass} ${inputBorderClass("message")} resize-none`}
        />
        <AnimatePresence>
          {fieldErrors.message && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="mt-1.5 text-xs text-red-400"
            >
              {fieldErrors.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Enviando...
          </>
        ) : (
          <>
            <span className="material-symbols-outlined text-xl">send</span>
            Enviar mensaje
          </>
        )}
      </button>

      <AnimatePresence>
        {(status === "success" || status === "error") && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`rounded-xl border px-4 py-3 text-sm flex items-center gap-2 ${
              status === "success"
                ? "bg-green-500/10 border-green-500/20 text-green-400"
                : "bg-red-500/10 border-red-500/20 text-red-400"
            }`}
          >
            <span className="material-symbols-outlined text-lg">
              {status === "success" ? "check_circle" : "error"}
            </span>
            {statusMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
