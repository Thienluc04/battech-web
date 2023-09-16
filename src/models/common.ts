export interface PaginationParams {
  limit: number;
  page: number;
  totalRows: number;
}

export interface ListResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListParams {
  page?: number;
  limit?: number;
  sort?: 'asc' | 'desc';
  search?: string;
  topic?: string;
}

export interface jobKind {
  text: string;
  value: string;
}
