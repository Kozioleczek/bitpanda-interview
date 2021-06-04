import { Ref } from 'vue';

import IMeta from '@/types/interfaces/todos/responses/IMeta';
import ISingleTodo from '@/types/interfaces/todos/responses/ISingleTodo';

interface IUseTodos {
  todos: Ref<ISingleTodo[]>;
  meta: IMeta;
  errorMessage: Ref<string>;
  fetch: (
    searchQuery?: string,
    limit?: number,
    offset?: number
  ) => Promise<void>;
  changeTaskStatus: (taskID: string, isDone: boolean) => Promise<void>;
  deleteTask: (taskID: string) => Promise<void>;
  createTask: (description: string) => Promise<void>;
}

export default IUseTodos;
