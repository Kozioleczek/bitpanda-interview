<template lang="pug">
.todo(:class="{'todo--done': isDone}")
    .todo__checkbox
        BaseCheckbox(:is-checked="isDone" @clicked="isDone = !isDone")
    .todo__content
        p.text--xl {{content}}
    button.todo__button
        img.img--xl(:src="require('@/assets/svgs/remove.svg')")
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

import BaseCheckbox from '@/components/base/BaseCheckbox.vue';

export default defineComponent({
  components: {
    BaseCheckbox
  },
  props: {
    content: {
      type: String,
      default: 'Think real hard about whats for lunch'
    }
  },
  setup() {
    const isDone = ref(false);

    return {
      isDone
    };
  }
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

  &--done {
    #{$this}__content {
      text-decoration: line-through;
      color: $secondary-gray;
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

.text--xl {
  font-size: 1.5rem;
  margin: 0;
  @extend .font--lighter;
}
</style>
