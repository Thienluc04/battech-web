export interface Post {
  _id: string;
  title: string;
  description: string;
  slug: string;
  content: string;
  image: string;
  category: string;
  author: string;
  tag: string[];
  date: string;
}
