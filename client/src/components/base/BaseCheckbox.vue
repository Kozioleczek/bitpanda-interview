<template lang="pug">
.checkbox(@click="$emit('clicked', true)" :class="{ 'checkbox--checked': isChecked}")
    img.checkbox__icon(:src="require('@/assets/svgs/check.svg')")
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  emits: ['clicked']
});
</script>

<style lang="scss" scoped>
@import 'src/styles/index';
.checkbox {
  $this: &;
  padding: 1rem;
  border: $layout-border-width solid $layout-border-color;
  border-radius: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  cursor: pointer;
  &--checked {
    border-color: $green;

    #{$this}__icon {
      visibility: visible;
    }
  }
  &__icon {
    visibility: hidden;
    @extend .img--lg;
  }
}
</style>
