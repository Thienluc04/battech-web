import { vn } from './languages';

interface ListLink {
  path: string;
  name: string;
}

export const listLink: ListLink[] = [
  {
    path: '/',
    name: vn.header.HOME,
  },
  {
    path: '/introduce',
    name: vn.header.ABOUT,
  },
  {
    path: '/news',
    name: vn.header.NEWS,
  },
  {
    path: '/jobs',
    name: vn.header.JOB,
  },
  {
    path: '/contact',
    name: vn.header.CONTACT,
  },
];
