<template lang="pug">
div.container
  header.header
    .header__search
      SearchBar(v-model="searchQuery" :is-loading="isLoading")
  main.main There will be content
  footer.footer There will be footer
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import SearchBar from '@/components/todos/SearchBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    SearchBar
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
  margin: 0 auto;
}

.header {
  padding-top: 3rem;
}
</style>
