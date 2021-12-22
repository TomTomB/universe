<script lang="ts" setup>
import { computed } from 'vue';
import controlClose from './assets/images/control-close.png';
import controlHelp from './assets/images/control-help.png';
import controlHide from './assets/images/control-hide.png';
import controlSettings from './assets/images/control-settings.png';

const { title, type } = defineProps<{
  title: string;
  type: 'hide' | 'settings' | 'close' | 'help';
}>();

defineEmits<{ (event: 'click'): void }>();

const controlIcon = computed(() => {
  switch (type) {
    case 'close':
      return controlClose;
    case 'help':
      return controlHelp;
    case 'hide':
      return controlHide;
    case 'settings':
      return controlSettings;
  }
});
</script>

<template>
  <button
    :aria-label="title"
    :style="{ WebkitMaskImage: `url(${controlIcon})` }"
    @click="$emit('click')"
  ></button>
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
}
</style>
