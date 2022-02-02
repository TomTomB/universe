<script lang="ts">
  import { teleport, popper } from '@/uikit/common/actions';
  import { TOOLTIP_PORTAL } from '@/uikit/common/constants';
  import type { Placement } from '@popperjs/core';
  import { onDestroy } from 'svelte';
  import { popOverlay, pushOverlay, useOverlay } from '../../util';

  export let attachTo: HTMLElement | undefined | null = null;
  export let type: 'default' | 'system' = 'default';
  export let delay = 0;
  export let placement: Placement = 'auto';
  export let forceVisible = false;

  $: if (attachTo) {
    attachTo.addEventListener('mouseenter', attachedElementMouseEnter);
    attachTo.addEventListener('mouseleave', attachedElementMouseLeave);
  }

  $: if (!forceVisible && !show) {
    popOverlay(overlayId);
  }

  let show = false;
  let delayTimeout: number | null = null;

  const { currentOpenOverlay, overlayId } = useOverlay(
    () => {
      if (overlayId === $currentOpenOverlay) {
        hideTooltip();
        return true;
      }
    },
    {
      ignoreOnMount: true,
      prioritize: true,
    },
  );

  const showTooltip = () => {
    if (show) return;

    if (!forceVisible) {
      pushOverlay(overlayId);
    }

    show = true;
  };

  const hideTooltip = () => {
    if (!show) return;

    if (!forceVisible) {
      popOverlay(overlayId);
    }

    show = false;
  };

  const attachedElementMouseEnter = () => {
    if (delay) {
      delayTimeout = window.setTimeout(() => {
        showTooltip();
      }, delay);
    } else {
      showTooltip();
    }
  };

  const attachedElementMouseLeave = () => {
    if (delayTimeout !== null) {
      window.clearTimeout(delayTimeout);
      delayTimeout = null;
    }

    hideTooltip();
  };

  onDestroy(() => {
    if (attachTo) {
      attachTo.removeEventListener('mouseenter', attachedElementMouseEnter);
      attachTo.removeEventListener('mouseleave', attachedElementMouseLeave);
    }
  });
</script>

{#if attachTo}
  <div
    use:teleport={TOOLTIP_PORTAL}
    use:popper={{
      attachTo,
      enabled: show || forceVisible,
      placement,
      offset: [0, type === 'default' ? 15 : 10],
      arrowPadding: 5,
    }}
    class="tooltip {type}"
    class:show={show || forceVisible}
    role="tooltip"
  >
    <div class="tooltip-content">
      <slot />
    </div>
    {#if type === 'default'}
      <div class="tooltip-sub-border" />
    {/if}
    <div class="tooltip-arrow" data-popper-arrow />
  </div>
{/if}

<style lang="scss" global>
  .tooltip-sub-border {
    position: absolute;
    z-index: -1;

    &::before {
      content: '';
      position: absolute;
      border-image-repeat: stretch;
      border-style: solid;
    }
  }

  .tooltip {
    --frame-colors: rgb(var(--color-gold-600)) 0, rgb(var(--color-gold-700)) 5px,
      rgb(var(--color-gold-700)) 100%;

    background-color: rgb(var(--color-almost-black));
    box-shadow: 0 0 0 1px rgb(var(--color-almost-black), 0.48);
    min-inline-size: 41px;
    border: 2px solid transparent;
    z-index: 100;
    pointer-events: none;
    will-change: opacity;
    opacity: 0;
    transition: opacity 0.3s var(--easing-circular-ease-out);

    &.show {
      opacity: 1;
    }

    &::before {
      content: '';
      position: absolute;
      inline-size: calc(100% - 12px);
      block-size: calc(100% - 12px);
      inset-block-start: 6px;
      inset-inline-start: 6px;
      box-shadow: 0 0 10px 1px rgb(var(--color-black), 0.5);
      pointer-events: none;
    }

    .tooltip-content p:only-child {
      margin-block-end: 0;
      padding-block: 8px;
      padding-inline: 6px;
      max-inline-size: 250px;
      text-align: center;
    }

    .tooltip-arrow {
      inline-size: 24px;
      block-size: 15px;

      &::after {
        content: '';
        position: absolute;
        background: url(./assets/images/tooltip-caret.png) center no-repeat;
        inline-size: 24px;
        block-size: 15px;
      }
    }

    &[data-popper-placement^='top'],
    &[data-popper-placement^='bottom'] {
      .tooltip-arrow {
        &::after {
          transform-origin: center center;
        }
      }

      .tooltip-sub-border {
        inset-inline-start: 8px;
        inset-inline-end: 8px;

        &::before {
          inset-inline-start: 0;
          inset-inline-end: 0;
          block-size: 0;
          border-image-source: url(./assets/images/tooltip-sub-border-horizontal.png);
          border-width: 4px 4px 0 4px;
          border-image-width: 4px 4px 0 4px;
          border-image-slice: 4 4 0 4;
        }
      }
    }

    &[data-popper-placement^='left'],
    &[data-popper-placement^='right'] {
      .tooltip-sub-border {
        inset-block-start: 8px;
        inset-block-end: 8px;

        &::before {
          inset-block-start: 0;
          inset-block-end: 0;
          inline-size: 0;
          border-image-source: url(./assets/images/tooltip-sub-border-vertical.png);
          border-width: 4px 4px 4px 0;
          border-image-width: 4px 4px 4px 0;
          border-image-slice: 4 4 4 0;
        }
      }
    }

    &[data-popper-placement^='top'] {
      border-image: linear-gradient(to top, var(--frame-colors)) 1 stretch;

      .tooltip-arrow {
        inset-block-end: 0;
        &::after {
          inset-block-end: -15px;
          inset-inline-start: 0;
        }
      }

      .tooltip-sub-border {
        inset-block-end: -2px;
      }
    }

    &[data-popper-placement^='bottom'] {
      border-image: linear-gradient(to bottom, var(--frame-colors)) 1 stretch;

      .tooltip-arrow {
        inset-block-start: 0;
        &::after {
          transform: rotate(180deg);
          inset-block-start: -15px;
          inset-inline-start: 0;
        }
      }

      .tooltip-sub-border {
        inset-block-start: -2px;
        transform: rotate(180deg);
      }
    }

    &[data-popper-placement^='left'] {
      border-image: linear-gradient(to left, var(--frame-colors)) 1 stretch;

      .tooltip-arrow {
        inset-inline-end: 0;

        &::after {
          transform: rotate(-90deg) translateX(-19px);
          transform-origin: top left;
          inset-inline-end: -24px;
        }
      }

      .tooltip-sub-border {
        inset-inline-end: -6px;
        transform: rotate(180deg);
      }
    }

    &[data-popper-placement^='right'] {
      border-image: linear-gradient(to right, var(--frame-colors)) 1 stretch;

      .tooltip-arrow {
        inset-inline-start: 0;

        &::after {
          transform: rotate(90deg) translateX(19px);
          transform-origin: top right;
          inset-inline-start: -24px;
        }
      }

      .tooltip-sub-border {
        inset-inline-start: -6px;
      }
    }

    &.system {
      .tooltip-arrow {
        inline-size: 16px;
        block-size: 11px;

        &::after {
          background: url(./assets/images/tooltip-system-caret.png) center
            no-repeat;
          inline-size: 16px;
          block-size: 11px;
        }
      }

      &[data-popper-placement^='top'] {
        .tooltip-arrow {
          inset-block-end: 0;
          &::after {
            inset-block-end: -11px;
            inset-inline-start: 0;
          }
        }
      }

      &[data-popper-placement^='bottom'] {
        .tooltip-arrow {
          inset-block-start: 0;
          &::after {
            inset-block-start: -11px;
            inset-inline-start: 0;
          }
        }
      }

      &[data-popper-placement^='left'] {
        .tooltip-arrow {
          inset-inline-end: 0;

          &::after {
            transform: rotate(-90deg);
            transform-origin: initial;
            inset-inline-end: -14px;
          }
        }
      }

      &[data-popper-placement^='right'] {
        .tooltip-arrow {
          inset-inline-start: 0;

          &::after {
            transform: rotate(90deg);
            inset-inline-start: -14px;
            transform-origin: initial;
          }
        }
      }
    }
  }
</style>
