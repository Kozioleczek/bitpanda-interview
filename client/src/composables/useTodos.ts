import { ref, Ref, reactive } from 'vue';

import { fetchTodos } from '@/services/todos';
import { Meta } from '@/types/todos/Meta';
import { SingleTodo } from '@/types/todos/SingleTodo';

interface UseTodos {
  todos: Ref<SingleTodo[]>;
  meta: Meta;
  fetch: (description: string, limit: number, offset: number) => Promise<void>;
}

function useTodos(): UseTodos {
  const todos = ref<SingleTodo[]>([]);

  let meta = reactive<Meta>({
    hasNextPage: false,
    hasPrevPage: false,
    itemCount: 0,
    limit: 0,
    nextPage: null,
    offset: 0,
    page: 0,
    pageCount: 0,
    prevPage: null
  });

  const fetch = async (description: string, limit: number, offset: number) => {
    try {
      const response = await fetchTodos(description, limit, offset);

      todos.value = [...response.data.items];
      meta = { ...response.data.meta };
    } catch (error) {
      throw new Error(error);
    }
  };

  return { todos, meta, fetch };
}

export default useTodos;
