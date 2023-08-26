export enum jobGroup {
  ALL = 'All',
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  PRODUCT_DESIGN = 'Product Design',
  TESTER = 'Tester',
  HR = 'HR',
}

export enum jobAddress {
  ALL = 'All',
  HANOI = 'Hà Nội',
  HCM = 'Hồ Chí Minh',
}

export enum jobType {
  ALL = 'All',
  FULLTIME = 'Fulltime',
  PARTTIME = 'Parttime',
  INTERN = 'Intern',
}

export const listGroup = [
  {
    text: 'Tất cả',
    group: jobGroup.ALL,
  },
  {
    text: 'Frontend',
    group: jobGroup.FRONTEND,
  },
  {
    text: 'Backend',
    group: jobGroup.BACKEND,
  },
  {
    text: 'Product Design',
    group: jobGroup.PRODUCT_DESIGN,
  },
  {
    text: 'Tester',
    group: jobGroup.TESTER,
  },
  {
    text: 'HR',
    group: jobGroup.HR,
  },
];

export const listAddress = [
  {
    text: 'Tất cả',
    address: jobAddress.ALL,
  },
  {
    text: 'Hà Nội',
    address: jobAddress.HANOI,
  },
  {
    text: 'Hồ Chí Minh',
    address: jobAddress.HCM,
  },
];

export const listType = [
  {
    text: 'Tất cả',
    type: jobType.ALL,
  },
  {
    text: 'Toàn thời gian',
    type: jobType.FULLTIME,
  },
  {
    text: 'Bán thời gian',
    type: jobType.PARTTIME,
  },
  {
    text: 'Thực tập sinh',
    type: jobType.INTERN,
  },
];
