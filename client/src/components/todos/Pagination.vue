<template lang="pug">
.pagination
    button.pagination__button.pagination__button--rotate
        img.img--md(:src="require('@/assets/svgs/caret-right.svg')")
    .pagination__divider
    button.pagination__button
        img.img--md(:src="require('@/assets/svgs/caret-right.svg')")
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
<style lang="scss" scoped>
@import 'src/styles/index';
.pagination {
  border: 0.15rem solid rgba(0, 0, 0, 0.17);
  border-radius: 1rem;
  background-color: $white;
  padding: 0.5rem 0.75rem 0.5rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  &__button {
    background-color: transparent;
    border: 0;
    display: flex;
    align-self: center;
    cursor: pointer;
    &--rotate {
      transform: rotate(180deg);
    }
  }
  &__divider {
    background-color: rgba(0, 0, 0, 0.17);
    width: 0.15rem;
    height: 100%;
  }
}
</style>
