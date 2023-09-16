export interface PaginationParams {
  limit: number;
  page: number;
  totalRows: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface PaginationParamsJob {
  _limit: number;
  _page: number;
  _totalRows: number;
}

export interface ListResponseJob<T> {
  data: T[];
  pagination: PaginationParamsJob;
}

export interface ListParams {
  page?: number;
  limit?: number;
  sort?: 'asc' | 'desc';
  search?: string;
  topic?: string;
}

export interface ListParamsJob {
  _page?: number;
  _limit?: number;
  _totalRows?: number;
  category?: string;
  address?: string;
  type?: string;
  title_like?: string;
}

export interface jobKind {
  text: string;
  value: string;
}
