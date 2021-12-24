<script lang="ts" setup>
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    delay?: number;
    duration?: number;
    imgSrc: string;
    isBackgroundLayer?: boolean;
  }>(),
  { delay: 0, duration: 30 },
);

const styleVars = computed(
  () =>
    ({
      '--parallax-layer-delay': `${props.delay}ms`,
      '--parallax-layer-duration': `${props.duration}s`,
      '--parallax-layer-img-src': `url(${props.imgSrc})`,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any),
);
</script>

<template>
  <div
    :class="[
      { 'is-background-layer': props.isBackgroundLayer },
      'parallax-layer',
    ]"
    :style="styleVars"
  ></div>
</template>

<style lang="scss" scoped>
.parallax-layer {
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: contain;
  backface-visibility: hidden;
  background-image: var(--parallax-layer-img-src);
  background-repeat: no-repeat;

  animation: flowAnimation var(--parallax-layer-duration) linear
    var(--parallax-layer-delay) infinite;
  opacity: 0;

  &.is-background-layer {
    background-repeat: no-repeat;
    background-size: cover;
    animation: none;
    opacity: 1;
  }
}

@keyframes flowAnimation {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  45% {
    opacity: 1;
  }
  65% {
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>
