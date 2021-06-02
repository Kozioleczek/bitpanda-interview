export interface Meta {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  itemCount: number;
  limit: number;
  nextPage: number | null;
  offset: number;
  page: number;
  pageCount: number;
  prevPage: number | null;
}
