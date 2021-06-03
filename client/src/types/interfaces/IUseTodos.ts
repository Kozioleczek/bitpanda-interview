import { Ref } from 'vue';

import { Meta } from '@/types/todos/Meta';
import { SingleTodo } from '@/types/todos/SingleTodo';

interface IUseTodos {
  todos: Ref<SingleTodo[]>;
  meta: Meta;
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
