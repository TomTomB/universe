<script lang="ts">
  import { generateShortId } from '@/core/util';
  import alphaTint from './assets/images/noise-tile-alpha-tint-large.png';

  export let isCarrot = false;

  let path: string;
  let width = 0;

  const pathDefsId = generateShortId('path-defs');
  const noiseMapId = generateShortId('noise-map');
  const noiseMapOffsetId = generateShortId('noise-map-offset');
  const scalablePathId = generateShortId('scalable-path');
  const maskDashedBorderId = generateShortId('mask-dashed-border');
  const maskDashedBorderOffsetId = generateShortId('mask-dashed-border-offset');

  $: widthMinusPadding = width - 31;

  $: if (isCarrot) {
    path = `M0, 0 h${widthMinusPadding} l15 16 l-15 16 H0 0,0 Z`;
  } else {
    path = `M0, 0 h${widthMinusPadding} l15 16 l-15 16 H0 a21.461 21.461,0,0,0,8.4 -16,21.461 21.461,0,0,0,-8.4 -16 Z`;
  }
</script>

<div
  bind:clientWidth={width}
  class="animated-arrow-overlay-container"
  aria-hidden="true"
>
  <div class="animated-arrow-overlay-wrapper">
    <svg
      id={pathDefsId}
      class="svg-container"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0"
      y="0"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id={noiseMapId}
          x="0"
          y="0"
          width="400"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <image xlink:href={alphaTint} x="0" y="0" width="400" height="40" />
          <animate
            dur="20s"
            repeatCount="indefinite"
            attributeName="y"
            values="0;20;0"
          />
          <animate
            dur="40s"
            repeatCount="indefinite"
            attributeName="x"
            values="0;50;0;-50;0"
          />
        </pattern>
        <pattern
          id={noiseMapOffsetId}
          x="25%"
          y="0"
          width="400"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <image xlink:href={alphaTint} x="0" y="0" width="400" height="40" />
          <animate
            dur="20s"
            repeatCount="indefinite"
            attributeName="y"
            values="0;20;0"
          />
          <animate
            dur="40s"
            repeatCount="indefinite"
            attributeName="x"
            values="25;75;25;-25;25"
          />
        </pattern>
        <path
          id={scalablePathId}
          class="scalable-path"
          d={path}
          fill="none"
          stroke="#fff"
          stroke-width="2"
        />
        <mask
          id={maskDashedBorderId}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="100%"
          height="100%"
        >
          <use
            xlink:href="#{scalablePathId}"
            stroke-width="4"
            class="dashed-border"
          />
        </mask>
        <mask
          id={maskDashedBorderOffsetId}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
        >
          <use
            xlink:href="#{scalablePathId}"
            stroke-width="4"
            class="dashed-border offset"
          />
        </mask>
      </defs>
    </svg>

    <div class="animated-magic-container">
      <svg
        class="svg-container animated-magic-low"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        width="100%"
        height="100%"
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          mask="url(#{maskDashedBorderId})"
          fill="url(#{noiseMapId})"
        />
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          mask="url(#{maskDashedBorderOffsetId})"
          fill="url(#{noiseMapOffsetId})"
        />
      </svg>
      <svg
        class="svg-container animated-magic-high"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0"
        y="0"
        width="100%"
        height="100%"
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          mask="url(#{maskDashedBorderId})"
          fill="url(#{noiseMapId})"
        />
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          mask="url(#{maskDashedBorderOffsetId})"
          fill="url(#{noiseMapOffsetId})"
        />
      </svg>
    </div>
  </div>
</div>

<style lang="scss" global>
  .parent:not(:disabled) {
    &:hover,
    &:focus-visible {
      .animated-arrow-overlay-wrapper {
        .dashed-border {
          animation-duration: 1500ms;
        }

        .animated-magic-container {
          opacity: 1;
        }
      }
    }

    &:active {
      .animated-arrow-overlay-wrapper {
        .dashed-border {
          animation-duration: 750ms;
        }

        .animated-magic-container {
          opacity: 1;
        }
      }
    }
  }

  .animated-arrow-overlay-container {
    width: calc(100% + 16px) !important;
    height: calc(100% + 16px) !important;
    left: -8px;
    top: -8px;
    position: absolute;
    cursor: default;
    pointer-events: none;
  }

  .animated-arrow-overlay-wrapper {
    width: 100%;
    height: 100%;
    position: relative;

    .animated-magic-low {
      filter: blur(2px) contrast(1.15);
      opacity: 0.75;
    }

    .animated-magic-high {
      filter: blur(4px) contrast(1.35) brightness(1.5);
      opacity: 0.85;
    }

    .svg-container {
      position: absolute;
      left: 0;
      top: 0;
    }

    .dashed-border {
      stroke: #fff;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-duration: 0ms;
      stroke-dasharray: 50;
      animation-name: dashStrokeAnimation;

      &.offset {
        stroke-dashoffset: -50;
        animation-name: dashStrokeOffsetAnimation;
      }
    }

    .scalable-path {
      transform: translate(8px, 8px);
    }

    .animated-magic-container {
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
      transition: opacity 300ms linear;
    }
  }

  @keyframes dashStrokeAnimation {
    to {
      stroke-dashoffset: -100;
    }
  }

  @keyframes dashStrokeOffsetAnimation {
    to {
      stroke-dashoffset: -150;
    }
  }
</style>
