<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(defineProps<{ size: number }>(), { size: 18 });

const styleVars = computed(
  () =>
    ({
      '--info-icon-size': `${props.size}px`,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any),
);
</script>

<template>
  <div :style="styleVars" class="info-icon" />
</template>

<style lang="scss" scoped>
.info-icon {
  position: relative;
  width: var(--info-icon-size);
  height: var(--info-icon-size);
  background-image: url(./assets/images/info-icon.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
