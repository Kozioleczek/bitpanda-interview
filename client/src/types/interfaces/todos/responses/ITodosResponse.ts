import IMeta from '@/types/interfaces/todos/responses/IMeta';
import ISingleTodo from '@/types/interfaces/todos/responses/ISingleTodo';

interface ITodosResponse {
  items: ISingleTodo[];
  meta: IMeta;
}

export default ITodosResponse;
