interface IMeta {
  [index: string]: boolean | number | null;
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

export default IMeta;
