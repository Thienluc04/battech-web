import { CredoItem } from '@/models';

import { vn } from './languages';

export const listCredoItems: CredoItem[] = [
  {
    image: '/images/support-icon.png',
    alt: 'support-icon',
    name: 'Teamwork',
    description: vn.introduce.CREDO_LIST[0],
  },
  {
    image: '/images/trust-icon.png',
    alt: 'trust-icon',
    name: 'Trust',
    description: vn.introduce.CREDO_LIST[1],
  },
  {
    image: '/images/innovation-icon.png',
    alt: 'innovation-icon',
    name: 'Innovation',
    description: vn.introduce.CREDO_LIST[2],
  },
  {
    image: '/images/ethics-icon.png',
    alt: 'ethics-icon',
    name: 'Ethics',
    description: vn.introduce.CREDO_LIST[3],
  },
  {
    image: '/images/community-icon.png',
    alt: 'community-icon',
    name: 'Customers',
    description: vn.introduce.CREDO_LIST[4],
  },
  {
    image: '/images/archery-icon.png',
    alt: 'archery-icon',
    name: 'Goals',
    description: vn.introduce.CREDO_LIST[5],
  },
];
