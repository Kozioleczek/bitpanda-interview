<template lang="pug">
.create-todo
    input.create-todo__input(placeholder="Take o note")
    .create-todo__icon
        img.img--xl(:src="require('@/assets/svgs/plus.svg')")
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
<style lang="scss" scoped>
@import 'src/styles/index';
.create-todo {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem 1rem 1.5rem;
  &__input {
    background: transparent;
    border: none;
    flex-grow: 1;
    font-size: 1.5rem;
    @extend .font--light;
  }
  &__icon {
    height: auto;
    width: 1.5rem;
    display: flex;
    align-self: center;
  }
}
</style>
