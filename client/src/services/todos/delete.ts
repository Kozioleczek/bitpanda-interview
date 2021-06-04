import { AxiosResponse } from 'axios';

import useHTTP from '@/http';

async function deleteTodo(id: string): Promise<AxiosResponse> {
  try {
    const response = await useHTTP().delete(`/todo/${id}`);

    return response;
  } catch (error) {
    return Promise.reject(error);
  }
}

export default deleteTodo;
