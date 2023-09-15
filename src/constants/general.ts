import { Category } from '@/models';

interface SocialNetwork {
  image: string;
  alt: string;
  path: string;
}

interface LinkAdmin {
  url: string;
  title: string;
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

export const listLinkAdmin: LinkAdmin[] = [
  {
    url: '/manage/posts',
    title: 'Bài viết',
  },
  {
    url: '/manage/topics',
    title: 'Chủ đề',
  },
  {
    url: '/manage/authors',
    title: 'Tác giả',
  },
  {
    url: '/manage/tags',
    title: 'Tag',
  },
];

export const listCategories: Category[] = [
  'TIN NỘI BỘ',
  'METAVERSE',
  'BLOCKCHAIN',
  'GAME NFT',
  'PHÁT TRIỂN PHẦN MỀM',
];

export const listImgPartners: string[] = [
  '/images/partner-1.png',
  '/images/partner-2.png',
  '/images/partner-3.png',
  '/images/partner-4.png',
  '/images/partner-1.png',
  '/images/partner-2.png',
  '/images/partner-3.png',
  '/images/partner-4.png',
];

export const linkApi = 'https://battech-server.onrender.com/api/';
export const linkAuth = 'http://localhost:3000/auth/';
export const linkApiSecond = 'http://localhost:3000/api/';
export const linkApiPass = 'http://localhost:3000/pass/';

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const modulesImageUpload = {
  toolbar: [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote'],
    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['link', 'image'],
  ],
  imageUploader: {
    upload: async (file: File | null) => {
      if (!file) return;
      console.log('upload: ~ file:', file);
    },
  },
};
