import { AxiosResponse } from 'axios';

import useHTTP from '@/http';
import ISingleTodo from '@/types/interfaces/todos/responses/ISingleTodo';

async function changeTodo(
  id: string,
  isDone: boolean
): Promise<AxiosResponse<ISingleTodo>> {
  try {
    const response = await useHTTP().put<ISingleTodo>(`/todo/${id}`, {
      done: isDone
    });

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default changeTodo;
