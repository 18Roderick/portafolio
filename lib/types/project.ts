export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string | null;
  liveUrl?: string;
  repoUrl?: string;
  /** Si está en construcción o el dominio no es el definitivo */
  inConstruction?: boolean;
}
