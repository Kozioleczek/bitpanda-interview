import IUseCreatePaginationOffset from '@/types/interfaces/IUseCreatePaginationOffset';

function useCreatePaginationOffset(args: IUseCreatePaginationOffset): number {
  if (args.moveDirection === 1 && !args.hasNextPage) {
    throw new Error('Next page does not exist. Invalid offset');
  }

  if (args.moveDirection === -1 && !args.hasPrevPage) {
    throw new Error('Next page does not exist. Invalid offset');
  }

  return args.moveDirection === 1
    ? args.offset + args.limit
    : args.offset - args.limit;
}

export default useCreatePaginationOffset;
