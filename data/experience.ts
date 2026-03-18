import type { Experience } from "@/lib/types/experience";

export const experiences: Experience[] = [
  {
    id: "atasoft",
    company: "ATAsoft S.A",
    role: "Analista de programación",
    type: "Jornada completa",
    description:
      "Creación de funciones nuevas y mantenimiento del software NASH. Desarrollo de soluciones empresariales con enfoque en rendimiento y escalabilidad.",
    tags: ["C#", ".NET", "Razor", "SQL Server"],
    url: "https://devaico.com/contacto/",
    startDate: "May. 2021",
    endDate: null,
    duration: "4 años 11 meses",
    location: "Panamá",
    icon: "work",
  },
  {
    id: "clau",
    company: "CLAU.IO",
    role: "Analista de programación",
    type: "Jornada completa",
    description:
      "Creación de funciones nuevas y mantenimiento de software de fidelidad. Desarrollo de módulos backend y frontend para plataformas de retención de clientes.",
    tags: ["Node.js", "MySQL", "React"],
    url: "https://clau.io/",
    startDate: "Nov. 2019",
    endDate: "May. 2021",
    duration: "1 año 7 meses",
    location: "Panamá",
    icon: "loyalty",
  },
];
