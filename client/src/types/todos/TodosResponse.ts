import { Meta } from '@/types/todos/Meta';
import { SingleTodo } from '@/types/todos/SingleTodo';

export interface TodosResponse {
  items: SingleTodo[];
  meta: Meta;
}
