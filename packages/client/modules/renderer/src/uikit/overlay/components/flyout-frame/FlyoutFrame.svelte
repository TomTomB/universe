<script lang="ts">
  import type { BasePlacement, Placement } from '@popperjs/core';
  import { createEventDispatcher } from 'svelte';
  import { clickOutside, popper, teleport } from '@/uikit/common/actions';
  import { TOOLTIP_PORTAL } from '@/uikit/common/constants';
  import { fade } from 'svelte/transition';
  import { circOut, linear } from 'svelte/easing';
  import { useOverlay } from '../../util';
  import { transform } from '@/uikit/common/animations';

  export let showCloseButton = false;
  export let attachTo: HTMLElement | undefined | null = null;
  export let placement: BasePlacement;

  let flyoutFrameElement: HTMLDivElement | null = null;
  let popperPlacement: Placement = placement;

  $: scale =
    popperPlacement === 'top' || popperPlacement === 'bottom'
      ? { x: 0.5 }
      : { y: 0.5 };

  $: maskSize =
    popperPlacement === 'top' || popperPlacement === 'bottom'
      ? ({ x: 50, unit: '%' } as const)
      : ({ y: 50, unit: '%' } as const);

  const dispatch = createEventDispatcher<{
    'close-click': void;
    'click-outside': void;
    'escape-key-up': void;
  }>();

  const { currentOpenOverlay, overlayId } = useOverlay(() => {
    if (overlayId === $currentOpenOverlay) {
      dispatch('escape-key-up');
      return true;
    }
  });
  const onCloseClick = () => {
    dispatch('close-click');
  };

  const onClickOutside = () => {
    dispatch('click-outside');
  };

  const onTransitionEnter = () => {
    flyoutFrameElement?.classList.remove('caret-outro');
    flyoutFrameElement?.classList.add('caret-intro');
  };

  const onTransitionLeave = () => {
    flyoutFrameElement?.classList.remove('caret-intro');
    flyoutFrameElement?.classList.add('caret-outro');
  };

  const onPopperPlacement = (newPlacement: CustomEvent<Placement>) => {
    popperPlacement = newPlacement.detail;
  };
</script>

{#if attachTo}
  <div
    bind:this={flyoutFrameElement}
    class="flyout-frame"
    use:clickOutside={{ exclude: [attachTo] }}
    use:teleport={TOOLTIP_PORTAL}
    use:popper={{
      attachTo,
      placement,
      offset: [0, 18],
      arrowPadding: showCloseButton ? 30 : 17,
    }}
    transition:fade={{ easing: linear, duration: 200 }}
    on:click-outside={onClickOutside}
    on:introstart={onTransitionEnter}
    on:outrostart={onTransitionLeave}
    on:popper-placement-change={onPopperPlacement}
  >
    <div class="flyout-frame-inner">
      <div
        class="border"
        transition:transform={{
          scale: scale,
          easing: circOut,
          duration: 200,
        }}
      />
      <div
        class="sub-border"
        transition:transform={{
          scale: scale,
          easing: circOut,
          duration: 200,
        }}
      />
      <div class="caret" data-popper-arrow />

      <div
        class="flyout-frame-content"
        transition:transform={{
          maskSize: maskSize,
          easing: circOut,
          duration: 200,
        }}
      >
        <slot />
      </div>
      {#if showCloseButton}
        <div class="close-button-container">
          <!-- TODO(TRB): Add correct button -->
          <button class="close-button" on:click={onCloseClick}>X</button>
        </div>
      {/if}
    </div>
  </div>
{/if}

<style lang="scss" global>
  .caret-intro {
    .caret::before {
      animation: caretIn 433ms steps(13, end) forwards;
    }
  }

  .caret-outro {
    .caret::before {
      background-image: url(./assets/images/pointer-outro-01.png);
      animation: caretOut 133ms steps(4, end) forwards;
    }
  }

  @keyframes caretIn {
    from {
      background-position: 0;
    }
    to {
      background-position: -312px;
    }
  }

  @keyframes caretOut {
    from {
      background-position: 0;
    }
    to {
      background-position: -96px;
    }
  }

  .flyout-frame-inner {
    will-change: transform;
  }

  .flyout-frame {
    --frame-colors: rgb(var(--color-gold-600)) 0, rgb(var(--color-gold-700)) 5px,
      rgb(var(--color-gold-700)) 100%;

    will-change: opacity;
    &[data-popper-placement^='top'],
    &[data-popper-placement^='bottom'] {
      .border {
        inline-size: 100%;
        block-size: 100%;
      }

      .sub-border {
        inset-inline-start: 8px;
        inline-size: calc(100% - 16px);
        block-size: 0;

        &::before {
          inline-size: 100%;
          block-size: 0;
          border-image-source: url(./assets/images/sub-border-primary-horizontal.png);
          border-width: 4px 4px 0 4px;
          border-image-width: 4px 4px 0 4px;
          border-image-slice: 4 4 0 4;
          border-image-repeat: stretch;
          border-style: solid;
        }
      }

      .caret {
        transform-origin: center center;
      }
    }

    &[data-popper-placement^='left'],
    &[data-popper-placement^='right'] {
      .border {
        inline-size: 100%;
        block-size: 100%;
      }

      .sub-border {
        inline-size: 0;
        block-size: calc(100% - 16px);
        inset-block-start: 8px;

        &::before {
          block-size: 100%;
          inline-size: 0;
          border-image-source: url(./assets/images/sub-border-primary-vertical.png);
          border-width: 4px 4px 4px 0;
          border-image-width: 4px 4px 4px 0;
          border-image-slice: 4 4 4 0;
          border-image-repeat: stretch;
          border-style: solid;
        }
      }
    }

    &[data-popper-placement^='top'] {
      .border {
        border-image: linear-gradient(to top, var(--frame-colors)) 1 stretch;
      }

      .sub-border {
        inset-block-end: 0;
      }

      .caret {
        inset-block-end: -13px;
      }
    }

    &[data-popper-placement^='bottom'] {
      .border {
        border: 2px solid transparent;
        border-image: linear-gradient(to bottom, var(--frame-colors)) 1 stretch;
      }

      .sub-border {
        inset-block-start: -4px;

        &::before {
          transform: rotate(180deg);
        }
      }

      .caret {
        inset-block-start: -13px;

        &::before {
          transform: rotate(180deg);
        }
      }
    }

    &[data-popper-placement^='left'] {
      .border {
        border: 2px solid transparent;
        border-image: linear-gradient(to left, var(--frame-colors)) 1 stretch;
      }

      .sub-border {
        inset-inline-end: 0;

        &::before {
          transform: rotate(180deg);
        }
      }

      .caret {
        inset-inline-end: -17px;

        &::before {
          transform: rotate(270deg);
        }
      }
    }

    &[data-popper-placement^='right'] {
      .border {
        border: 2px solid transparent;
        border-image: linear-gradient(to right, var(--frame-colors)) 1 stretch;
      }

      .sub-border {
        inset-inline-start: -4px;
      }

      .caret {
        inset-inline-start: -17px;

        &::before {
          transform: rotate(90deg);
        }
      }
    }
  }

  .border {
    border: 2px solid transparent;
    position: absolute;
    box-shadow: 0 0 0 1px rgb(var(--color-almost-black), 0.48);
    z-index: 1;
    transform-origin: center center;
    will-change: transform;

    &::before {
      content: '';
      position: absolute;
      inline-size: calc(100% + 4px);
      block-size: calc(100% + 4px);
      inset-block-start: -2px;
      inset-inline-start: -2px;
      box-shadow: 0 0 10px 1px rgb(var(--color-almost-black), 0.5);
      pointer-events: none;
    }
  }

  .sub-border {
    position: absolute;
    display: flex;
    transform-origin: center center;
    will-change: transform;

    &::before {
      content: '';
      position: absolute;
    }
  }

  .caret {
    position: absolute;
    display: flex;
    justify-content: center;
    z-index: 2;
    inline-size: 24px;
    block-size: 16px;

    &::before {
      content: '';
      position: relative;
      inline-size: 100%;
      block-size: 100%;
      background-image: url(./assets/images/pointer-intro-01.png);
      background-size: initial;
      background-position: -312px;
      background-repeat: no-repeat;
    }
  }

  .close-button-container {
    &::before {
      content: '';
      position: absolute;
      inline-size: 38px;
      block-size: 68px;
      inset-block-start: -20px;
      inset-inline-end: -20px;
      background-image: url(./assets/images/frame-button-close-top-down.png);
      background-size: 38px 68px;
      z-index: 1;
    }
  }

  .close-button {
    position: absolute;
    inset-block-start: -15px;
    inset-inline-end: -15px;
    inline-size: 28px;
    block-size: 28px;
    z-index: 1;

    > div {
      inline-size: 24px;
      block-size: 24px;
    }
  }

  .flyout-frame-content {
    position: relative;
    background-color: rgb(var(--color-almost-black));
    mask-image: linear-gradient(
      to left,
      rgb(var(--color-black)),
      rgb(var(--color-black))
    );
    -webkit-mask-image: linear-gradient(
      to left,
      rgb(var(--color-black)),
      rgb(var(--color-black))
    );
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-position: center;
    -webkit-mask-position: center;
    mask-size: 100% 100%;
    -webkit-mask-size: 100% 100%;
    padding: 2px;
    will-change: -webkit-mask-size;
  }
</style>
