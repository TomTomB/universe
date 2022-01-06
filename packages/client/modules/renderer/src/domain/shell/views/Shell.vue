<script setup lang="ts">
import { TitleBar } from '../components';
import { ThemedLevelRing } from '@/uikit/summoner/components';
import { ref } from 'vue';

const progress = ref(52);

setTimeout(() => {
  progress.value = 100;
}, 2500);
</script>

<template>
  <div class="shell">
    <TitleBar />

    <ThemedLevelRing ring-type="solid" :summoner-level="99999" :progress="80">
      <img
        style="width: 100%; height: 100%; border-radius: 100%"
        src="/103.png"
        alt="Noise"
      />
    </ThemedLevelRing>
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
  overflow: auto;
  contain: content;
}
</style>
