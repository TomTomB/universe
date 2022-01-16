<script lang="ts" setup>
const props = defineProps<{
  title: string;
  type: 'hide' | 'settings' | 'close' | 'help';
}>();

defineEmits<{ (event: 'click'): void }>();
</script>

<template>
  <button :aria-label="title" :class="props.type" @click="$emit('click')" />
</template>

<style lang="scss" scoped>
button {
  height: 18px;
  width: 18px;
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--color-grey1);
  transition: opacity 300ms ease;

  &:hover,
  &:focus-visible {
    background-color: var(--color-gold1);
  }
  &:active {
    background-color: var(--color-grey2);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &.hide {
    -webkit-mask-image: url(./assets/images/control-hide.png);
  }

  &.settings {
    -webkit-mask-image: url(./assets/images/control-settings.png);
  }

  &.close {
    -webkit-mask-image: url(./assets/images/control-close.png);
  }

  &.help {
    -webkit-mask-image: url(./assets/images/control-help.png);
  }
}
</style>
