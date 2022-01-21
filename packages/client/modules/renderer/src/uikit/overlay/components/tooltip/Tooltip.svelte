<script lang="ts">
  import { teleport, popper } from '@/uikit/common/actions';
  import { TOOLTIP_PORTAL } from '@/uikit/common/constants';
  import type { Placement } from '@popperjs/core';
  import { fade } from 'svelte/transition';
  import { circOut } from 'svelte/easing';
  import { onDestroy } from 'svelte';

  export let attachTo: HTMLElement | undefined | null = null;
  export let type: 'default' | 'system' = 'default';
  export let delay = 0;
  export let placement: Placement = 'auto';
  export let isEnabled = true;

  $: if (attachTo && isEnabled) {
    attachTo.addEventListener('mouseenter', attachedElementMouseEnter);
    attachTo.addEventListener('mouseleave', attachedElementMouseLeave);
  } else if (attachTo) {
    attachTo.removeEventListener('mouseenter', attachedElementMouseEnter);
    attachTo.removeEventListener('mouseleave', attachedElementMouseLeave);
  }

  let show = false;
  let delayTimeout: number | null = null;

  const attachedElementMouseEnter = () => {
    if (delay) {
      delayTimeout = window.setTimeout(() => {
        show = true;
      }, delay);
    } else if (isEnabled) {
      show = true;
    }
  };

  const attachedElementMouseLeave = () => {
    if (delayTimeout !== null) {
      window.clearTimeout(delayTimeout);
      delayTimeout = null;
    }

    show = false;
  };

  onDestroy(() => {
    if (attachTo) {
      attachTo.removeEventListener('mouseenter', attachedElementMouseEnter);
      attachTo.removeEventListener('mouseleave', attachedElementMouseLeave);
    }
  });
</script>

{#if show && isEnabled && attachTo}
  <div
    use:teleport={TOOLTIP_PORTAL}
    use:popper={{
      attachTo,
      placement,
      offset: [0, type === 'default' ? 15 : 10],
      arrowPadding: type === 'default' ? 20 : 10,
    }}
    transition:fade={{ duration: 300, easing: circOut }}
    class="tooltip {type}"
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
<div />

<style lang="scss" global>
  .tooltip {
    --frameColors: #614a1f 0, #463714 5px, #463714 100%;

    background-color: #010a13;
    box-shadow: 0 0 0 1px rgba(1, 10, 19, 0.48);
    min-width: 41px;
    border: 2px solid transparent;
    z-index: 100;
    pointer-events: none;
    will-change: opacity;

    &::before {
      content: '';
      position: absolute;
      width: calc(100% - 12px);
      height: calc(100% - 12px);
      top: 6px;
      left: 6px;
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);
      pointer-events: none;
    }

    .tooltip-content :global(p:only-child) {
      margin-bottom: 0;
      padding: 8px 6px;
      max-width: 250px;
      text-align: center;
    }

    .tooltip-arrow {
      width: 24px;
      height: 15px;

      &::after {
        content: '';
        position: absolute;
        background: url(./assets/images/tooltip-caret.png) center no-repeat;
        width: 24px;
        height: 15px;
      }
    }

    [data-popper-placement^='top'],
    [data-popper-placement^='bottom'] {
      .tooltip-arrow {
        &::after {
          transform-origin: center center;
        }
      }

      .tooltip-sub-border {
        left: 8px;
        right: 8px;

        &::before {
          left: 0;
          right: 0;
          height: 0;
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
        top: 8px;
        bottom: 8px;

        &::before {
          top: 0;
          bottom: 0;
          width: 0;
          border-image-source: url(./assets/images/tooltip-sub-border-vertical.png);
          border-width: 4px 4px 4px 0;
          border-image-width: 4px 4px 4px 0;
          border-image-slice: 4 4 4 0;
        }
      }
    }

    &[data-popper-placement^='top'] {
      border-image: linear-gradient(to top, var(--frameColors)) 1 stretch;

      .tooltip-arrow {
        bottom: 0;
        &::after {
          bottom: -15px;
          left: 0;
        }
      }

      .tooltip-sub-border {
        bottom: -2px;
      }
    }

    &[data-popper-placement^='bottom'] {
      border-image: linear-gradient(to bottom, var(--frameColors)) 1 stretch;

      .tooltip-arrow {
        top: 0;
        &::after {
          transform: rotate(180deg);
          top: -15px;
          left: 0;
        }
      }

      .tooltip-sub-border {
        top: -2px;
        transform: rotate(180deg);
      }
    }

    &[data-popper-placement^='left'] {
      border-image: linear-gradient(to left, var(--frameColors)) 1 stretch;

      .tooltip-arrow {
        right: 0;

        &::after {
          transform: rotate(-90deg) translateX(-19px);
          transform-origin: top left;
          right: -24px;
        }
      }

      .tooltip-sub-border {
        right: -6px;
        transform: rotate(180deg);
      }
    }

    &[data-popper-placement^='right'] {
      border-image: linear-gradient(to right, var(--frameColors)) 1 stretch;

      .tooltip-arrow {
        left: 0;

        &::after {
          transform: rotate(90deg) translateX(19px);
          transform-origin: top right;
          left: -24px;
        }
      }

      .tooltip-sub-border {
        left: -6px;
      }
    }

    &.system {
      .tooltip-arrow {
        width: 16px;
        height: 11px;

        &::after {
          background: url(./assets/images/tooltip-system-caret.png) center
            no-repeat;
          width: 16px;
          height: 11px;
        }
      }

      &[data-popper-placement^='top'] {
        .tooltip-arrow {
          bottom: 0;
          &::after {
            bottom: -11px;
            left: 0;
          }
        }
      }

      &[data-popper-placement^='bottom'] {
        .tooltip-arrow {
          top: 0;
          &::after {
            top: -11px;
            left: 0;
          }
        }
      }

      &[data-popper-placement^='left'] {
        .tooltip-arrow {
          right: 0;

          &::after {
            transform: rotate(-90deg);
            transform-origin: initial;
            right: -14px;
          }
        }
      }

      &[data-popper-placement^='right'] {
        .tooltip-arrow {
          left: 0;

          &::after {
            transform: rotate(90deg);
            left: -14px;
            transform-origin: initial;
          }
        }
      }
    }
  }
</style>
