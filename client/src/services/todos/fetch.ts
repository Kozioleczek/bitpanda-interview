import { AxiosResponse } from 'axios';

import useHTTP from '@/http';
import { TodosResponse } from '@/types/todos/TodosResponse';

async function fetchTodos(
  searchQuery = '',
  limit = 10,
  offset = 0
): Promise<AxiosResponse<TodosResponse>> {
  try {
    const pagination = `limit=${limit}&offset=${offset}`;
    const query =
      searchQuery === ''
        ? `?${pagination}`
        : `?description=${searchQuery}&${pagination}`;
    const response = await useHTTP().get<TodosResponse>(`/todo${query}`);

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default fetchTodos;
