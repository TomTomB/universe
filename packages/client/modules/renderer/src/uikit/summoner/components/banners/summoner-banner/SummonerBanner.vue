<script lang="ts" setup>
import type { Rank } from '@/types';
import { onUnmounted, ref, watchEffect } from 'vue';
import bannerAlly from './assets/videos/banner_ally.webm';
import bannerPrimary from './assets/videos/banner_primary.webm';
import { AnimatedBanner } from '../animated-banner';

const props = defineProps<{
  bannerType: 'ally' | 'primary';
  rank: Rank;
  showPattern?: boolean;
  playIntro?: boolean;
}>();

const bannerIntroRef = ref<HTMLVideoElement | null>(null);
const introTimeElapsed = ref(false);
const introTimeElapsedTimeout = ref<number | null>(null);
const introState = ref<'LOADING' | 'LOADED' | 'PLAYING' | 'ENDED'>('LOADING');

watchEffect(() => {
  if (!bannerIntroRef.value) {
    return;
  }

  if (introState.value === 'LOADED') {
    if (props.playIntro) {
      bannerIntroRef.value.currentTime = 0;
      bannerIntroRef.value.play();
      const timeout = window.setTimeout(() => {
        introTimeElapsed.value = true;
        introTimeElapsedTimeout.value = null;
      }, 400);
      introTimeElapsedTimeout.value = timeout;
      introState.value = 'PLAYING';
    } else if (!introTimeElapsedTimeout.value) {
      const timeout = window.setTimeout(() => {
        introTimeElapsed.value = true;
        introTimeElapsedTimeout.value = null;
      }, 100);
      introTimeElapsedTimeout.value = timeout;
    }
  } else if (introState.value === 'ENDED') {
    bannerIntroRef.value.currentTime = 0;
  }
});

onUnmounted(() => {
  if (introTimeElapsedTimeout.value) {
    clearTimeout(introTimeElapsedTimeout.value);
  }
});
</script>

<template>
  <div class="summoner-banner">
    <div :class="[{ show: introTimeElapsed || !playIntro }, 'fade-condition']">
      <AnimatedBanner :rank="rank" :show-pattern="showPattern" />
    </div>
    <div
      :class="[
        { show: !!playIntro && introState !== 'ENDED' },
        'fade-condition',
      ]"
    >
      <video
        ref="bannerIntroRef"
        :src="bannerType === 'primary' ? bannerPrimary : bannerAlly"
        muted
        @loadeddata="introState = 'LOADED'"
        @ended="introState = 'ENDED'"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.summoner-banner {
  width: 275px;
  min-width: 100%;
  display: grid;

  &.ally {
    width: 240px;

    video {
      margin-top: -68px;
    }
  }

  .fade-condition {
    grid-column: 1;
    grid-row: 1;
  }

  video {
    margin-top: -60px;
  }

  canvas {
    margin-top: -100px;
  }
}

.fade-condition {
  transition: opacity 300ms ease-in-out;
  opacity: 0;

  &.show {
    opacity: 1;
  }

  display: flex;
  justify-content: center;
}
</style>
