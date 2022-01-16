<script lang="ts" setup>
const props = defineProps<{ isLarge?: boolean }>();
</script>

<template>
  <div :class="[{ 'is-large': props.isLarge }, 'loading-spinner']" />
</template>

<style lang="scss" scoped>
.loading-spinner {
  background-image: url(./assets/images/spinner.png);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  animation: spinAnimation 4s linear infinite;

  &.is-large {
    background-image: url(./assets/images/spinner-large.png);
    width: 60px;
    height: 60px;
  }
}

@keyframes spinAnimation {
  100% {
    transform: rotate(360deg);
  }
}
</style>
