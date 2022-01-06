<script lang="ts" setup>
import { computed } from 'vue';
import { RadialProgress } from '@/uikit/common/components';
import {
  progressBorders,
  progressRings,
  simplifiedBorders,
  socialBorders,
  solidBorders,
  unfilledRing,
  unfilledRingLeft,
  unfilledRingRight,
} from './assets/images';

const props = defineProps<{
  ringType: 'progress' | 'solid' | 'social' | 'simplified';
  progress?: number;
  summonerLevel: number;
}>();

const themeLevel = computed(() => Math.floor(props.summonerLevel / 25) + 1);
const assetIndex = computed(() =>
  themeLevel.value
    ? themeLevel.value - 1 < 0
      ? 0
      : themeLevel.value - 1 > 20
      ? 20
      : themeLevel.value - 1
    : 0,
);

const filledXpRingAsset = computed(() =>
  props.ringType === 'solid' || props.ringType === 'social'
    ? null
    : progressRings[assetIndex.value],
);

const levelRingBorderAsset = computed(() => {
  switch (props.ringType) {
    case 'progress':
      return progressBorders[assetIndex.value];
    case 'simplified':
      return simplifiedBorders[assetIndex.value];
    case 'social':
      return socialBorders[assetIndex.value];
    case 'solid':
      return solidBorders[assetIndex.value];
    default:
      return null;
  }
});
</script>

<template>
  <RadialProgress
    :class="[ringType, 'themed-level-ring']"
    :polygon-config="{ startAngle: 247, endAngle: -67 }"
    :progress="progress ?? 0"
  >
    <template #bottom>
      <img
        v-if="ringType === 'progress' || ringType === 'simplified'"
        :src="unfilledRing"
        alt="Unfilled ring"
      />
    </template>
    <template #middle>
      <div class="mask mask-left">
        <img :src="unfilledRingLeft" alt="Unfilled ring" />
      </div>
      <div class="mask mask-right">
        <img :src="unfilledRingRight" alt="Unfilled ring" />
      </div>
      <img
        v-if="filledXpRingAsset"
        :src="filledXpRingAsset"
        alt="Filled xp ring"
      />
    </template>
    <template #top>
      <slot />

      <img
        v-if="levelRingBorderAsset"
        :src="levelRingBorderAsset"
        alt="Level ring border"
      />
      <span v-if="ringType !== 'simplified'" class="summoner-level">
        {{ summonerLevel }}
      </span>
    </template>
  </RadialProgress>
</template>

<style lang="scss" scoped>
.themed-level-ring {
  display: block;
  width: 150px;
  height: 150px;
  margin-left: 5rem;
  margin-top: 5rem;

  img {
    height: 140%;
    min-width: 140%;
    position: absolute;
    top: -20%;
    left: -20%;
  }

  &.social {
    img {
      height: 160%;
      min-width: 160%;
      top: -30%;
      left: -30%;
    }

    .summoner-level {
      bottom: -3px;
    }
  }
}

.summoner-level {
  font-family: LoL Display;
  font-kerning: normal;
  -webkit-font-feature-settings: 'kern' 1;
  -webkit-font-smoothing: antialiased;
  text-transform: uppercase;
  letter-spacing: 0.075em;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  bottom: 2px;
  color: #f0e6d2;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
}

.mask {
  height: 100%;
  width: 50%;
  position: absolute;
  top: 0;

  &.mask-left {
    left: 0;

    img {
      transform-origin: center right;
      transform: rotate(180deg);
      left: initial;
      right: 0;
      display: block;
    }
  }

  &.mask-right {
    right: 0;

    img {
      transform-origin: center left;
      transform: rotate(180deg);
      left: 0;
      display: block;
    }
  }
}
</style>
