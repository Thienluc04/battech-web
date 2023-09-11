export interface PaginationParams {
  _limit: number;
  _page: number;
  _totalRows: number;
}
export interface PaginationParamsSecond {
  limit: number;
  page: number;
  totalRows: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListResponseSecond<T> {
  data: T[];
  pagination: PaginationParamsSecond;
}

export interface ListParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: 'asc' | 'desc';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface ListParamsSecond {
  page?: number;
  limit?: number;
  sort?: 'asc' | 'desc';
  search?: string;
  category?: string;
}

export interface jobKind {
  text: string;
  value: string;
}
