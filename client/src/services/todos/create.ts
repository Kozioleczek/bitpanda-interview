import { AxiosResponse } from 'axios';

import useHTTP from '@/http';
import { SingleTodo } from '@/types/todos/SingleTodo';

async function createTodo(
  description: string
): Promise<AxiosResponse<SingleTodo>> {
  try {
    const response = await useHTTP().post<SingleTodo>('/todo', {
      data: {
        description
      }
    });

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default createTodo;
