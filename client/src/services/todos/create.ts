import { AxiosResponse } from 'axios';

import useHTTP from '@/http';
import ISingleTodo from '@/types/interfaces/todos/responses/ISingleTodo';

async function createTodo(
  description: string
): Promise<AxiosResponse<ISingleTodo>> {
  try {
    const response = await useHTTP().post<ISingleTodo>('/todo', {
      description
    });

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default createTodo;
