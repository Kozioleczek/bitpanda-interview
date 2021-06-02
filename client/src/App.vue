<template lang="pug">
div#app.container
  header.header
    .header__search
      SearchBar(v-model="searchQuery" :is-loading="isLoading")
  main.main
    CreateTodo
    transition-group(name="todo-transition")
      SingleTodo(v-for="i in 3" :key="i")
  footer.footer
    Pagination
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import CreateTodo from '@/components/todos/CreateTodo.vue';
import Pagination from '@/components/todos/Pagination.vue';
import SearchBar from '@/components/todos/SearchBar.vue';
import SingleTodo from '@/components/todos/SingleTodo.vue';

export default defineComponent({
  name: 'App',
  components: {
    SearchBar,
    CreateTodo,
    SingleTodo,
    Pagination
  },
  setup() {
    const searchQuery = ref<string | null>(null);
    const isLoading = ref(false);

    return {
      searchQuery,
      isLoading
    };
  }
});
</script>

<style lang="scss">
@import 'src/styles/index';
.container {
  max-width: 50rem;
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
  border: 0.15rem solid rgba(0, 0, 0, 0.17);
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
  }

  &-leave-to {
    opacity: 0;
    transform: scaleY(0);
    transform-origin: center top;
  }
}
</style>
