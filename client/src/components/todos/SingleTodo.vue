<template lang="pug">
.todo
    .todo__checkbox
        BaseCheckbox(:is-checked="isDone" @clicked="$emit('change:isDone')")
    .todo__content
        p.description(:class="{'description--done': isDone}") 
          slot(name="content")
          span.description__date - 5 minutes ago
    button.todo__button(@click="$emit('delete')")
        img.img--xl(:src="require('@/assets/svgs/remove.svg')")
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import BaseCheckbox from '@/components/base/BaseCheckbox.vue';

export default defineComponent({
  components: {
    BaseCheckbox
  },
  props: {
    isDone: {
      type: Boolean,
      default: false
    }
  },
  emits: ['change:isDone', 'delete']
});
</script>
<style lang="scss" scoped>
@import 'src/styles/index';
.todo {
  padding: 1rem 1.5rem 1rem 1.5rem;
  border-top: 0.15rem solid rgba(0, 0, 0, 0.17);
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 1rem;

  $this: &;

  &:hover {
    #{$this}__button {
      visibility: visible;
    }
  }

  &__content {
    flex-grow: 1;
    display: flex;
    align-content: center;
    @extend .font--light;
  }
  &__button {
    background-color: transparent;
    visibility: hidden;
    border: 0;
    cursor: pointer;
  }
}

.description {
  @extend .font--lighter;
  font-size: 1.5rem;
  margin: auto 0 auto 0;

  &--done {
    text-decoration: line-through;
    color: $secondary-gray;
  }
  &__date {
    margin-left: 0.5rem;
    text-decoration: none;
    font-size: 1rem;
  }
}
</style>
