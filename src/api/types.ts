export interface PaginateQuery<T> {
  results: T[];
  count: number;
  next: string | null;
  previous: string | null;
}

export interface Meta {
  current_page: number;
  next_page: number;
  per_page: number;
}
