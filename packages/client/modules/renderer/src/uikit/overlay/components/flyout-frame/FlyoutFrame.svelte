<script lang="ts">
  import type { BasePlacement } from '@popperjs/core';
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
  let popperPlacement = placement;

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

  const onPopperPlacement = (newPlacement: CustomEvent<BasePlacement>) => {
    console.log(newPlacement.detail);

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
        width: 100%;
        height: 100%;
      }

      .sub-border {
        left: 8px;
        width: calc(100% - 16px);
        height: 0;

        &::before {
          width: 100%;
          height: 0;
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
        width: 100%;
        height: 100%;
      }

      .sub-border {
        width: 0;
        height: calc(100% - 16px);
        top: 8px;

        &::before {
          height: 100%;
          width: 0;
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
        bottom: 0;
      }

      .caret {
        bottom: -13px;
      }
    }

    &[data-popper-placement^='bottom'] {
      .border {
        border: 2px solid transparent;
        border-image: linear-gradient(to bottom, var(--frame-colors)) 1 stretch;
      }

      .sub-border {
        top: -4px;

        &::before {
          transform: rotate(180deg);
        }
      }

      .caret {
        top: -13px;

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
        right: 0;

        &::before {
          transform: rotate(180deg);
        }
      }

      .caret {
        right: -17px;

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
        left: -4px;
      }

      .caret {
        left: -17px;

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
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      top: -2px;
      left: -2px;
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
    width: 24px;
    height: 16px;

    &::before {
      content: '';
      position: relative;
      width: 100%;
      height: 100%;
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
      width: 38px;
      height: 68px;
      top: -20px;
      right: -20px;
      background-image: url(./assets/images/frame-button-close-top-down.png);
      background-size: 38px 68px;
      z-index: 1;
    }
  }

  .close-button {
    position: absolute;
    top: -15px;
    right: -15px;
    width: 28px;
    height: 28px;
    z-index: 1;

    > div {
      width: 24px;
      height: 24px;
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
