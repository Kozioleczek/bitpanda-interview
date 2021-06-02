import { AxiosResponse } from 'axios';

import useHTTP from '@/http';
import { SingleTodo } from '@/types/todos/SingleTodo';

async function changeTodo(
  id: string,
  isDone: boolean
): Promise<AxiosResponse<SingleTodo>> {
  try {
    const response = await useHTTP().put<SingleTodo>(`/todo/${id}`, {
      data: {
        done: isDone
      }
    });

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default changeTodo;
