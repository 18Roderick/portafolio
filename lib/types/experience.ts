export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  description: string;
  tags: string[];
  url?: string;
  startDate: string;
  endDate: string | null;
  duration: string;
  location: string;
  icon: string;
}
