export interface Post {
  _id: string;
  title: string;
  description: string;
  slug: string;
  content: string;
  image: string;
  topic: string;
  author: string;
  tags: string[];
  date: string;
}
