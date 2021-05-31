<template lang="pug">
.search-input
    div.search-input__icon
        img.img--fluid(:src="require('@/assets/svgs/loupe.svg')")
    input.search-input__form(placeholder="Search")
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue']
});
</script>
<style lang="scss" scoped>
@import 'src/styles/index';
.search-input {
  background-color: $gray;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.75rem 1rem 0.75rem 1rem;
  &__icon {
    height: auto;
    width: 1.5rem;
    display: flex;
    align-self: center;
  }
  &__form {
    background: transparent;
    border: none;
    padding-left: 1rem;
    font-size: 1.25rem;
    flex-grow: 1;
    @extend .font--light;
  }
}
</style>
