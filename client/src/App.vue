<template lang="pug">
#app.todo-app
  div {{ message }}

.test-div
  h1.test-h1 Okey it works fine
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    return {
      message: 'Todo list should be here'
    };
  }
});
</script>

<style lang="scss">
.todo-app {
  text-align: center;
}
</style>
