<script setup lang="ts">
import { TitleBar } from '../components';
import {
  AnimatedArrowOverlay,
  AnimatedBorderOverlay,
  FilterFader,
  FramedIcon,
  Thumbnail,
  InfoIcon,
  LoadingSpinner,
  TabNavigation,
  TabNavigationItem,
  ParallaxBackground,
  ParallaxLayer,
  DEFAULT_PARALLAX_ASSETS,
  RadialProgress,
  RADIAL_PROGRESS_TOP_GAP,
  Scrollable,
} from '@/uikit/common/components';
import { ref } from 'vue';

const progress = ref(52);

setTimeout(() => {
  progress.value = 100;
}, 2500);
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

    <button class="parent">
      <FramedIcon style="width: 100px; height: 100px">
        <img src="/103.png" alt="Noise" />
      </FramedIcon>
    </button>

    <button class="parent">
      <Thumbnail style="width: 100px; height: 100px">
        <img src="/103.png" alt="Noise" />
      </Thumbnail>
    </button>

    <InfoIcon :size="40" />

    <LoadingSpinner />

    <TabNavigation>
      <TabNavigationItem :is-active="true">First tab</TabNavigationItem>
      <TabNavigationItem :has-alert="true">The second tab</TabNavigationItem>
    </TabNavigation>

    <Scrollable
      direction="vertical"
      overflow="overlay"
      :hide-scrollbar="false"
      style="width: 200px; height: 200px"
    >
      <div
        style="
          background-color: red;
          width: 200px;
          height: 2000px;
          min-height: 2000px;
        "
      ></div>
    </Scrollable>

    <ParallaxBackground style="width: 100px; height: 100px">
      <ParallaxLayer
        :img-src="DEFAULT_PARALLAX_ASSETS.background"
        :is-background-layer="true"
      />

      <ParallaxLayer
        :img-src="DEFAULT_PARALLAX_ASSETS.smoke01"
        :duration="30"
      />
      <ParallaxLayer
        :img-src="DEFAULT_PARALLAX_ASSETS.smoke02"
        :duration="20"
        :delay="5000"
      />
      <ParallaxLayer
        :img-src="DEFAULT_PARALLAX_ASSETS.smoke03"
        :duration="25"
        :delay="7500"
      />
      <ParallaxLayer
        :img-src="DEFAULT_PARALLAX_ASSETS.smoke04"
        :duration="28"
        :delay="1500"
      />
      <ParallaxLayer
        :img-src="DEFAULT_PARALLAX_ASSETS.foreground"
        :is-background-layer="true"
      />
    </ParallaxBackground>

    <RadialProgress
      style="width: 100px; height: 100px"
      :polygon-config="RADIAL_PROGRESS_TOP_GAP"
      progress-type="champion"
      :progress="progress"
    />
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
