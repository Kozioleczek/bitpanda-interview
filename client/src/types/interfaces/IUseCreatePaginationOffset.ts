interface IUseCreatePaginationOffset {
  moveDirection: -1 | 1;
  offset: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export default IUseCreatePaginationOffset;
