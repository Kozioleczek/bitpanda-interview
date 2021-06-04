import { AxiosResponse } from 'axios';

import useHTTP from '@/http';
import ITodosResponse from '@/types/interfaces/todos/responses/ITodosResponse';

async function fetchTodos(
  searchQuery = '',
  limit = 10,
  offset = 0
): Promise<AxiosResponse<ITodosResponse>> {
  try {
    const pagination = `limit=${limit}&offset=${offset}`;
    const query =
      searchQuery === ''
        ? `?${pagination}`
        : `?description=${searchQuery}&${pagination}`;
    const response = await useHTTP().get<ITodosResponse>(`/todo${query}`);

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default fetchTodos;
