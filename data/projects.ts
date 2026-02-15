import type { Project } from "@/lib/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Sistema de gestión empresarial",
    description:
      "Plataforma fullstack para gestión de procesos, reportes y dashboards. Arquitectura modular con API REST y frontend en React.",
    tags: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    imageUrl: null,
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "2",
    title: "API de servicios integrados",
    description:
      "API escalable con autenticación, rate limiting y documentación OpenAPI. Desplegado en contenedores con CI/CD.",
    tags: [".NET", "Docker", "PostgreSQL", "Redis"],
    imageUrl: null,
    repoUrl: "#",
  },
  {
    id: "3",
    title: "Panel de administración",
    description:
      "Interfaz de administración con tablas dinámicas, filtros y exportación. Enfoque en UX y rendimiento.",
    tags: ["React", "Next.js", "TailwindCSS"],
    imageUrl: null,
    liveUrl: "#",
  },
];
