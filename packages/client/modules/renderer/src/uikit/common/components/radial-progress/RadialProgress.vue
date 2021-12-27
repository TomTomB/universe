<script lang="ts" setup>
import { PolygonGenerator } from '@/uikit/core/utils';
import { computed, watchEffect } from 'vue';

const props = defineProps<{
  progressType?: 'summoner' | 'champion' | 'blue' | 'pink';
  progress: number;
  polygonConfig: {
    startAngle: number;
    endAngle: number;
  };
}>();

const polygonGenerator = new PolygonGenerator(
  props.polygonConfig.startAngle,
  props.polygonConfig.endAngle,
);

const styleVars = computed(
  () =>
    ({
      '--radial-progress-clip-path': polygonGenerator.generatePolygon(
        props.progress,
      ),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any),
);

watchEffect(() => {
  polygonGenerator.setStartAngle(props.polygonConfig.startAngle);
  polygonGenerator.setEndAngle(props.polygonConfig.endAngle);
});
</script>

<template>
  <div :class="[props.progressType, 'radial-progress']">
    <div class="layer bottom"><slot name="bottom" /></div>
    <div class="layer middle" :style="styleVars"><slot name="middle" /></div>
    <div class="layer top"><slot name="top" /></div>
  </div>
</template>

<style lang="scss" scoped>
.radial-progress {
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 10px;
  min-height: 10px;
  margin: 0;
  padding: 0;
  border: 0;

  &.blue {
    .layer {
      &.middle {
        background-image: url(./assets/images/full-meter-blue.png);
      }
      &.bottom {
        background-image: url(./assets/images/empty-meter-blue.png);
      }
    }
  }

  &.champion {
    .layer {
      &.middle {
        background-image: url(./assets/images/full-meter-champion.png);
      }
      &.bottom {
        background-image: url(./assets/images/empty-meter-champion.png);
      }
    }
  }

  &.pink {
    .layer {
      &.middle {
        background-image: url(./assets/images/full-meter-pink.png);
      }
      &.bottom {
        background-image: url(./assets/images/empty-meter-pink.png);
      }
    }
  }

  &.summoner {
    .layer {
      &.middle {
        background-image: url(./assets/images/full-meter-summoner.png);
      }
      &.bottom {
        background-image: url(./assets/images/empty-meter-summoner.png);
      }
    }
  }
}

.layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  transition: clip-path 300ms var(--easing-circular-ease-out);

  &.middle,
  &.bottom {
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: contain;
  }

  &.middle {
    clip-path: var(--radial-progress-clip-path);
  }
}
</style>
