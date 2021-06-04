import { useDebounceFn } from '@vueuse/core';

import IUseTodos from '@/types/interfaces/todos/composables/IUseTodos';

function useSearch(searchQuery: string, callback: IUseTodos['fetch']): void {
  const debounced = useDebounceFn(() => callback(searchQuery), 1000);

  debounced();
}

export default useSearch;
