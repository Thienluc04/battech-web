export interface News {
  id: number;
  title: string;
  slug: string;
  description: string;
  authorName: string;
  datePublished: string;
  category: string;
  image: string;
  isNewest: boolean;
  isEvent: boolean;
}

export type Category =
  | 'TIN NỘI BỘ'
  | 'METAVERSE'
  | 'BLOCKCHAIN'
  | 'GAME NFT'
  | 'PHÁT TRIỂN PHẦN MỀM'
  | '';
