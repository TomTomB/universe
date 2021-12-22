<script setup lang="ts">
import { TitleBar } from '../components';
</script>

<template>
  <div class="shell">
    <h1>Hello there!</h1>
    <a href="#" class="external">Go somewhere</a>
    <TitleBar />
  </div>
</template>

<style lang="scss" scoped>
.shell {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: var(--color-almost-black);
  border: 1px solid var(--color-frame-grey);
  border-top: 2px solid var(--color-gold5);
  overflow: hidden;
  contain: content;
}
</style>
