export interface Job {
  id: number;
  title: string;
  slug: string;
  description: string;
  wage: string;
  address: string;
  date: string;
  group: string;
  type: string;
  content: JobContent[];
}

export interface JobContent {
  title: string;
  list: string[];
}
