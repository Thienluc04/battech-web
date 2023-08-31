import { IntroItem } from '@/models';

import { vn } from './languages';

export const introListItem: IntroItem[] = [
  {
    image: '/images/clock-icon.png',
    alt: 'clock-icon',
    title: vn.home.ABOUT_ITEMS[0],
  },
  {
    image: '/images/dev-icon.png',
    alt: 'dev-icon',
    title: vn.home.ABOUT_ITEMS[1],
  },
  {
    image: '/images/padlock-icon.png',
    alt: 'padlock-icon',
    title: vn.home.ABOUT_ITEMS[2],
  },
  {
    image: '/images/secure-shield-icon.png',
    alt: 'secure-shield-icon',
    title: vn.home.ABOUT_ITEMS[3],
  },
];
