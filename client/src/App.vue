<template lang="pug">
div#app.container
  header.header
    .header__search
      SearchBar(v-model="searchQuery")
  main.main
    CreateTodo(v-model="newTodoDescription" @createTask="createTask(newTodoDescription)")
    transition-group(v-if="todos.length > 0" name="todo-transition")
      SingleTodo(v-for="(todo, index) in todos" :key="todo._id" :is-done="todo.done" :date-created="todo.createdAt" @delete="deleteTask(todo._id)" @change:isDone="changeTaskStatus(todo._id, !todo.done)")
        template(#content) {{todo.description}}
    .error(v-else-if="errorMessage !== ''")
      p.error__content {{errorMessage}}
    .error(v-else)
        p.error__content {{searchQuery === '' ? 'There is no todos available. Please create new one.' : `There is no results for phrase: ${searchQuery}`}}
  footer.footer
    Pagination(:is-next-page-reachable="meta.hasNextPage" :is-prev-page-reachable="meta.hasPrevPage" @nextPage="handlePagination(1)" @prevPage="handlePagination(-1)")
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

import CreateTodo from '@/components/todos/CreateTodo.vue';
import Pagination from '@/components/todos/Pagination.vue';
import SearchBar from '@/components/todos/SearchBar.vue';
import SingleTodo from '@/components/todos/SingleTodo.vue';
import useSearch from '@/composables/useSearch';
import useTodos from '@/composables/useTodos';
import useCreatePaginationOffset from '@/helpers/useCreatePaginationOffset';
import IUseCreatePaginationOffset from '@/types/interfaces/pagination/helpers/IUseCreatePaginationOffset';

export default defineComponent({
  name: 'App',
  components: {
    SearchBar,
    CreateTodo,
    SingleTodo,
    Pagination
  },
  setup() {
    const {
      todos,
      meta,
      fetch,
      errorMessage,
      deleteTask,
      createTask,
      changeTaskStatus
    } = useTodos();

    // on query change call debounced search
    const searchQuery = ref<string>('');

    watch(searchQuery, query => {
      useSearch(query, fetch);
    });

    // creating new todo
    const newTodoDescription = ref('');

    // handle pagination
    const todosPerPage = ref(20);

    // When movePagesDirection -1 -> prevPage, 1 -> nextPage
    const handlePagination = async (
      movePagesDirection: -1 | 1
    ): Promise<void> => {
      const offsetSetup: IUseCreatePaginationOffset = {
        moveDirection: movePagesDirection,
        offset: meta.offset,
        limit: todosPerPage.value,
        hasNextPage: meta.hasNextPage,
        hasPrevPage: meta.hasPrevPage
      };

      try {
        await fetch(
          searchQuery.value,
          todosPerPage.value,
          useCreatePaginationOffset(offsetSetup)
        );
      } catch (error) {
        throw new Error(error);
      }
    };

    return {
      searchQuery,
      todos,
      meta,
      deleteTask,
      changeTaskStatus,
      createTask,
      handlePagination,
      newTodoDescription,
      errorMessage
    };
  }
});
</script>

<style lang="scss">
@import 'src/styles/index';
.container {
  max-width: 50rem;
  padding: 2rem;
  width: 100%;
  margin: 0 auto;
}

.header {
  padding-top: 3rem;
  margin-bottom: 1rem;
}

.main {
  background-color: $white;
  border-radius: 1rem;
  border: $layout-border-width solid $layout-border-color;
  position: relative;
}

.error {
  padding: 1rem 1.5rem 1rem 1.5rem;
  &__content {
    text-align: center;
    margin: 0;
  }
}

.footer {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}

.todo-transition {
  &-enter-active,
  &-leave-active,
  &-move {
    transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
    transition-property: opacity, transform;
  }

  &-enter {
    opacity: 0;
    transform: translateX(50px) scaleY(0.5);
  }

  &-enter-to {
    opacity: 1;
    transform: translateX(0) scaleY(1);
  }

  &-leave-active {
    position: absolute;
    width: 100%;
  }

  &-leave-to {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: center top;
  }
}
</style>
