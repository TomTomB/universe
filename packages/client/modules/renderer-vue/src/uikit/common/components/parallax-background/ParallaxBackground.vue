<script lang="ts" setup></script>

<template>
  <div class="parallax-background" aria-hidden="true">
    <div class="parallax-container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.parallax-background {
  width: 100%;
  height: 100%;
  position: absolute;
}

.parallax-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>
