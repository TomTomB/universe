<script lang="ts" setup>
import { onUnmounted, ref, watchEffect } from 'vue';
import {
  BannerContext,
  bannerAnimationConfig,
  type BannerAssets,
} from './util';
import solidBannerAnimatable from './assets/images/background/solidbanner_animatable.png';
import pattern00 from './assets/images/pattern/rankpattern_00.png';
import patternBlank from './assets/images/pattern/blank.png';
import bannerTrimBronze from './assets/images/trim/trim_bronze.png';
import bannerTrimChallenger from './assets/images/trim/trim_challenger.png';
import bannerTrimDefault from './assets/images/trim/defaulttrim.png';
import bannerTrimDiamond from './assets/images/trim/trim_diamond.png';
import bannerTrimGold from './assets/images/trim/trim_gold.png';
import bannerTrimGrandmaster from './assets/images/trim/trim_grandmaster.png';
import bannerTrimIron from './assets/images/trim/trim_iron.png';
import bannerTrimMaster from './assets/images/trim/trim_master.png';
import bannerTrimPlat from './assets/images/trim/trim_plat.png';
import bannerTrimSilver from './assets/images/trim/trim_silver.png';
import type { Rank } from '@/types';

const props = defineProps<{ showPattern?: boolean; rank: Rank }>();

const bannerCanvas = ref<HTMLCanvasElement | null>(null);
let bannerCtx: BannerContext | null;

watchEffect(() => {
  if (!bannerCanvas.value) {
    return;
  }

  if (bannerCtx) {
    bannerCtx.destroy();
  }

  const bannerAssets: BannerAssets = {
    background: solidBannerAnimatable,
    overlay: props.showPattern ? pattern00 : patternBlank,
    rank: getRankTrim(props.rank),
  };

  bannerCtx = new BannerContext(
    bannerAssets,
    bannerCanvas.value,
    bannerAnimationConfig,
  );

  bannerCtx.on('loaded', () => bannerCtx?.play());
});

onUnmounted(() => {
  bannerCtx?.destroy();
  bannerCtx = null;
});

const getRankTrim = (rank: Rank) => {
  switch (rank) {
    case 'unranked':
      return bannerTrimDefault;

    case 'iron':
      return bannerTrimIron;

    case 'bronze':
      return bannerTrimBronze;

    case 'silver':
      return bannerTrimSilver;

    case 'gold':
      return bannerTrimGold;

    case 'platinum':
      return bannerTrimPlat;

    case 'diamond':
      return bannerTrimDiamond;

    case 'master':
      return bannerTrimMaster;

    case 'grandmaster':
      return bannerTrimGrandmaster;

    case 'challenger':
      return bannerTrimChallenger;
  }
};
</script>

<template>
  <canvas ref="bannerCanvas" />
</template>
