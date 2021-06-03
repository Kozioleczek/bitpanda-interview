import { ref, reactive } from 'vue';

import {
  fetchTodos,
  changeTodo,
  deleteTodo,
  createTodo
} from '@/services/todos';
import IUseTodos from '@/types/interfaces/IUseTodos';
import { Meta } from '@/types/todos/Meta';
import { SingleTodo } from '@/types/todos/SingleTodo';

function useTodos(): IUseTodos {
  const todos = ref<SingleTodo[]>([]);

  let meta = reactive<Meta>({
    hasNextPage: false,
    hasPrevPage: false,
    itemCount: 0,
    limit: 0,
    nextPage: null,
    offset: 0,
    page: 0,
    pageCount: 0,
    prevPage: null
  });

  const fetch: IUseTodos['fetch'] = async (searchQuery, limit, offset) => {
    try {
      const response = await fetchTodos(searchQuery, limit, offset);

      todos.value = [...response.data.items];
      meta = { ...response.data.meta };
    } catch (error) {
      throw new Error(error);
    }
  };

  const changeTaskStatus: IUseTodos['changeTaskStatus'] = async (
    taskID,
    isDone
  ) => {
    try {
      // local update of todo
      const modifiedTodoIndex = todos.value.findIndex(
        todo => todo._id === taskID
      );

      if (modifiedTodoIndex !== -1) {
        todos.value[modifiedTodoIndex].done = isDone;
        await changeTodo(taskID, isDone);
      } else {
        throw new Error('Provided task ID does not exist');
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const deleteTask: IUseTodos['deleteTask'] = async taskID => {
    try {
      const modifiedTodoIndex = todos.value.findIndex(
        todo => todo._id === taskID
      );

      if (modifiedTodoIndex !== -1) {
        todos.value.splice(modifiedTodoIndex, 1);
        await deleteTodo(taskID);
      } else {
        throw new Error('Provided task ID does not exist');
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const createTask: IUseTodos['createTask'] = async description => {
    try {
      const response = await createTodo(description);

      todos.value.unshift(response.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return { todos, meta, fetch, changeTaskStatus, deleteTask, createTask };
}

export default useTodos;
