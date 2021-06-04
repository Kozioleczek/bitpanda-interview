import { ref, reactive, onMounted } from 'vue';

import {
  fetchTodos,
  changeTodo,
  deleteTodo,
  createTodo
} from '@/services/todos';
import IUseTodos from '@/types/interfaces/todos/composables/IUseTodos';
import IMeta from '@/types/interfaces/todos/responses/IMeta';
import ISingleTodo from '@/types/interfaces/todos/responses/ISingleTodo';

function useTodos(): IUseTodos {
  const todos = ref<ISingleTodo[]>([]);

  const meta = reactive<IMeta>({
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

      Object.entries(response.data.meta).forEach(([key, value]) => {
        meta[key] = value;
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  // Fetch on initial first set of todos
  onMounted(() => fetch());

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
        await fetch();
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

      todos.value.push(response.data);
    } catch (error) {
      throw new Error(error);
    }
  };

  return { todos, meta, fetch, changeTaskStatus, deleteTask, createTask };
}

export default useTodos;
