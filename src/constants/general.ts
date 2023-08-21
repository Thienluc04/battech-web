interface SocialNetwork {
  image: string;
  alt: string;
  path: string;
}

export const listSocialNetwork: SocialNetwork[] = [
  {
    image: '/images/facebook-icon.png',
    alt: 'fb-icon',
    path: '/',
  },
  {
    image: '/images/linkin-icon.png',
    alt: 'linkin-icon',
    path: '/',
  },
  {
    image: '/images/discord-icon.png',
    alt: 'discord-icon',
    path: '/',
  },
];

export const listCategories: string[] = [
  'TIN NỘI BỘ',
  'METAVERSE',
  'BLOCKCHAIN',
  'GAME NFT',
  'PHÁT TRIỂN PHẦN MỀM',
];

export const jobGroup = {
  ALL: 'All',
  FRONTEND: 'Frontend',
  BACKEND: 'Backend',
  PRODUCT_DESIGN: 'Product Design',
  TESTER: 'Tester',
  HR: 'HR',
};

export const jobAddress = {
  ALL: 'All',
  HANOI: 'Hà Nội',
  HCM: 'Hồ Chí Minh',
};

export const jobType = {
  ALL: 'All',
  FULLTIME: 'Fulltime',
  PARTTIME: 'Parttime',
  INTERN: 'Intern',
};

export const linkApi = 'https://battech-server.onrender.com/api/';

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
