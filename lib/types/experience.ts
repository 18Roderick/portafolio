export interface Experience {
  id: string;
  company: string;
  role: string;
  description: string;
  tags: string[];
  url?: string;
  startDate: string;
  endDate: string | null;
  icon: string;
}
