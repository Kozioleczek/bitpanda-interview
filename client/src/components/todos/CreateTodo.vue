<template lang="pug">
.create-todo
    input.create-todo__input(placeholder="Take o note" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @keyup.enter="$emit('createTask')")
    button.create-todo__button(@click="$emit('createTask')")
        img.img--xl(:src="require('@/assets/svgs/plus.svg')")
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['createTask', 'update:modelValue']
});
</script>
<style lang="scss" scoped>
@import 'src/styles/index';
.create-todo {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  &__input {
    background: transparent;
    border: none;
    flex-grow: 1;
    font-size: 1.5rem;
    @extend .font--light;
  }
  &__button {
    height: auto;
    background: transparent;
    cursor: pointer;
    border: none;
    width: 1.5rem;
    display: flex;
    align-self: center;
  }
}
</style>
