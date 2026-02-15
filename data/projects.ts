import type { Project } from "@/lib/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Governor Service Marine",
    description:
      "Sitio web corporativo para servicios marinos. Experiencia multidioma (ES), estructura clara y diseño alineado con el sector.",
    tags: ["React", "Next.js", "TypeScript"],
    imageUrl: null,
    liveUrl: "https://www.governorservicemarine.com/es",
  },
  {
    id: "2",
    title: "Bankos App",
    description:
      "Aplicación web de servicios financieros. Enfoque en usabilidad y experiencia de usuario para gestión y operaciones.",
    tags: ["React", "Node.js", "TypeScript"],
    imageUrl: null,
    liveUrl: "https://bankosapp.com/",
  },
  {
    id: "3",
    title: "Playpoint",
    description:
      "Plataforma de reservas deportivas en Panamá. Conecta jugadores y dueños de canchas con disponibilidad en tiempo real, pagos con Yappy y confirmaciones automáticas. MVP activo.",
    tags: ["React", "TanStack Start", "TypeScript", "Cloudflare Workers"],
    imageUrl: null,
    liveUrl: "https://playpoint-web.roderickromero4.workers.dev/",
    inConstruction: true,
  },
];
