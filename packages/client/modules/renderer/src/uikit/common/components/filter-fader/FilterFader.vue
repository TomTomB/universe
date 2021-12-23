<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{ filter: string; opacity: number }>();

const styleVars = computed(
  () =>
    ({
      '--filter-fader-filter': props.filter,
      '--filter-fader-opacity': props.opacity,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any),
);
</script>

<template>
  <div class="filter-fader">
    <slot />

    <div class="duplicate" :style="styleVars">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter-fader {
  position: relative;
}

.duplicate {
  position: absolute;
  top: 0;
  width: 100%;
  filter: var(--filter-fader-filter);
  opacity: var(--filter-fader-opacity);
}
</style>
