export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string | null;
  liveUrl?: string;
  repoUrl?: string;
}
