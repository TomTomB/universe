<script setup lang="ts">
import { TitleBar } from '../components';
import {
  AnimatedArrowOverlay,
  AnimatedBorderOverlay,
  FilterFader,
  FramedIcon,
} from '@/uikit/common/components';
</script>

<template>
  <div class="shell">
    <TitleBar />

    <h1>Hello there!</h1>
    <a href="#" class="external">Go somewhere</a>
    <br />

    <button class="parent" style="color: white; position: relative">
      <AnimatedArrowOverlay />Some text
    </button>

    <button class="parent" style="color: white; position: relative">
      <AnimatedBorderOverlay />Some text
    </button>

    <FilterFader filter="blur(10px)" :opacity="0.75">
      <h1>Hello test!</h1>
    </FilterFader>

    <button class="parent" disabled>
      <FramedIcon style="width: 100px; height: 100px">
        <img src="/103.png" alt="Noise" />
      </FramedIcon>
    </button>
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
