<script lang="ts">
  import { teleport, focusTrap } from '@/uikit/common/actions';
  import { MODAL_PORTAL } from '@/uikit/common/constants';
  import { fade } from 'svelte/transition';
  import { transform } from '@/uikit/common/animations';
  import { cubicCushioned } from '@/uikit/common/easing';
  import { createEventDispatcher } from 'svelte';
  import { useModal, useOverlay } from '../../util';

  export let position: 'top' | 'right' | 'bottom' | 'left';
  export let showCaret = false;
  export let isDisabled = false;
  export let isBorderless = false;

  export let topRightCloseButton: {
    variant: 'circle' | 'toast';
    showBackground?: boolean;
    allyLabel?: string;
  } | null = null;

  export let allyModalHeaderId: string;
  export let allyModalDescriptionId: string;

  let didMouseDownOnBackdrop = false;

  const dispatch = createEventDispatcher<{
    'backdrop-click': void;
    'close-click': void;
    'escape-key-up': void;
    'transition-done': 'enter' | 'leave';
  }>();

  const { currentOpenOverlay, overlayId } = useOverlay(() => {
    if (overlayId === $currentOpenOverlay) {
      dispatch('escape-key-up');
      return true;
    }
  });

  const { currentOpenModal, modalId } = useModal();

  const onTopRightClose = () => {
    dispatch('close-click');
  };

  const onTransitionDone = (state: 'enter' | 'leave') => {
    dispatch('transition-done', state);
  };

  const onBackdropMouseDown = () => {
    didMouseDownOnBackdrop = true;
  };

  const onBackdropMouseUp = () => {
    if (didMouseDownOnBackdrop) {
      dispatch('backdrop-click');
    }
    didMouseDownOnBackdrop = false;
  };
</script>

<div
  class="modal-container"
  role="dialog"
  aria-modal="true"
  aria-labelledby={allyModalHeaderId}
  aria-describedby={allyModalDescriptionId}
  tabindex="-1"
  transition:fade={{ duration: 300, easing: cubicCushioned }}
  use:teleport={MODAL_PORTAL}
  on:mousedown={onBackdropMouseDown}
  on:mouseup={onBackdropMouseUp}
  on:introend={() => {
    onTransitionDone('enter');
  }}
  on:outroend={() => {
    onTransitionDone('leave');
  }}
>
  <div
    role="document"
    class="modal {position}"
    class:show-caret={showCaret}
    class:is-disabled={isDisabled}
    in:transform={{
      scale: { x: 0.6, y: 0.6 },
      translate: { x: 0, y: 4, unit: 'rem' },
      easing: cubicCushioned,
    }}
    out:transform={{
      scale: { x: 1.1, y: 1.1 },
      easing: cubicCushioned,
    }}
    use:focusTrap={{
      isEnabled: $currentOpenModal === modalId,
      native: { allowOutsideClick: true },
    }}
    on:mousedown|stopPropagation={() => void 0}
  >
    {#if !isBorderless}
      <div class="sub-border" />
    {/if}

    {#if topRightCloseButton}
      {#if topRightCloseButton.variant === 'circle'}
        <div class="top-right-close-container">
          <button
            type="button"
            class="top-right-close-button"
            aria-label={topRightCloseButton.allyLabel ?? 'Close modal'}
            on:click={onTopRightClose}
          />
        </div>
      {:else if topRightCloseButton.variant === 'toast'}
        <button
          class="top-right-close-toast-button"
          class:with-background={topRightCloseButton.showBackground}
          aria-label={topRightCloseButton.allyLabel ?? 'Close modal'}
          on:click={onTopRightClose}
        />
      {/if}
    {/if}

    <slot />
  </div>
</div>

<style lang="scss">
  .modal-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    background-color: rgb(var(--color-black), 0.5);
    overflow: hidden;
  }

  .modal {
    --frame-colors: rgb(var(--color-gold-600)) 0, rgb(var(--color-gold-700)) 5px,
      rgb(var(--color-gold-700)) 100%;

    border: 2px solid transparent;
    position: relative;
    background: #010a13;
    box-shadow: 0 0 0 1px rgb(var(--color-almost-black), 0.48);
    max-width: 800px;

    will-change: transform, opacity;

    &::before {
      content: '';
      position: absolute;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      top: -2px;
      left: -2px;
      box-shadow: 0 0 10px 1px rgb(var(--color-black), 0.5);
      pointer-events: none;
    }

    &.show-caret {
      &::after {
        content: '';
        position: absolute;
        background: url(./assets/images/caret.png) 50% no-repeat;
      }

      &.top::after {
        height: 18px;
        width: 100%;
        top: -16px;
        transform: rotate(180deg);
      }

      &.bottom::after {
        height: 18px;
        width: 100%;
        bottom: -17px;
      }

      &.left::after {
        height: 100%;
        width: 32px;
        top: 0;
        left: -23px;
        transform: rotate(90deg);
      }

      &.right::after {
        height: 100%;
        width: 32px;
        top: 0;
        right: -23px;
        transform: rotate(-90deg);
      }
    }

    &.top,
    &.bottom {
      .sub-border {
        &::before,
        &::after {
          left: 12px;
          width: calc(100% - 24px);
          height: 0;
          border-width: 4px 4px 0 4px;
          border-image-width: 4px 4px 0 4px;
          border-image-slice: 4 4 0 4;
        }

        &::before {
          top: -6px;
          border-image-source: url(./assets/images/sub-border-secondary-horizontal.png);
        }

        &::after {
          bottom: -6px;
          border-image-source: url(./assets/images/sub-border-primary-horizontal.png);
        }
      }
    }

    &.left,
    &.right {
      .sub-border {
        &::before,
        &::after {
          top: 12px;
          height: calc(100% - 24px);
          width: 0;
          border-width: 4px 4px 4px 0;
          border-image-width: 4px 4px 4px 0;
          border-image-slice: 4 4 4 0;
        }

        &::before {
          left: -6px;
          border-image-source: url(./assets/images/sub-border-primary-vertical.png);
        }

        &::after {
          right: -6px;
          border-image-source: url(./assets/images/sub-border-secondary-vertical.png);
        }
      }
    }

    &.left {
      border-image: linear-gradient(to right, var(--frame-colors) 100%) 1
        stretch;
    }

    &.right {
      border-image: linear-gradient(to left, var(--frame-colors) 100%) 1 stretch;

      .sub-border {
        &::before,
        &::after {
          transform: rotate(180deg);
        }

        &::before {
          border-image-source: url(./assets/images/sub-border-secondary-vertical.png);
        }

        &::after {
          border-image-source: url(./assets/images/sub-border-primary-vertical.png);
        }
      }
    }

    &.top {
      border-image: linear-gradient(to bottom, var(--frame-colors) 100%) 1
        stretch;

      .sub-border {
        &::before,
        &::after {
          transform: rotate(180deg);
        }

        &::before {
          border-image-source: url(./assets/images/sub-border-primary-horizontal.png);
        }

        &::after {
          border-image-source: url(./assets/images/sub-border-secondary-horizontal.png);
        }
      }
    }

    &.bottom {
      border-image: linear-gradient(to top, var(--frame-colors) 100%) 1 stretch;
    }

    &.is-disabled {
      --frame-colors: var(--color-frame-grey-light) 0,
        rgb(var(--color-grey-800)) 5px, rgb(var(--color-grey-800)) 100%;

      &.top {
        .sub-border {
          &::before {
            border-image-source: url(./assets/images/sub-border-primary-horizontal-disabled.png);
          }

          &::after {
            border-image-source: url(./assets/images/sub-border-secondary-horizontal-disabled.png);
          }
        }
      }

      &.bottom {
        .sub-border {
          &::before {
            border-image-source: url(./assets/images/sub-border-secondary-horizontal-disabled.png);
          }

          &::after {
            border-image-source: url(./assets/images/sub-border-primary-horizontal-disabled.png);
          }
        }
      }

      &.right {
        .sub-border {
          &::before {
            border-image-source: url(./assets/images/sub-border-secondary-vertical-disabled.png);
          }

          &::after {
            border-image-source: url(./assets/images/sub-border-primary-vertical-disabled.png);
          }
        }
      }

      &.left {
        .sub-border {
          &::before {
            border-image-source: url(./assets/images/sub-border-primary-vertical-disabled.png);
          }

          &::after {
            border-image-source: url(./assets/images/sub-border-secondary-vertical-disabled.png);
          }
        }
      }
    }
  }

  .sub-border {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;

    &::before,
    &::after {
      content: '';
      position: absolute;
      display: flex;
      border-image-repeat: stretch;
      border-style: solid;
    }
  }

  .top-right-close-container {
    &::before {
      content: '';
      position: absolute;
      width: 38px;
      height: 68px;
      top: -22px;
      right: -22px;
      background-image: url(./assets/images/frame-button-close-top-down.png);
      background-size: 38px 68px;
    }
  }

  .top-right-close-button {
    position: absolute;
    top: -17px;
    right: -17px;
    width: 28px;
    height: 28px;

    > div {
      width: 24px;
      height: 24px;
    }
  }

  .top-right-close-toast-button {
    display: block;
    height: 24px;
    width: 24px;
    position: absolute;
    top: 8px;
    right: 8px;
    background: url(./assets/images/close.png), rgb(var(--color-black), 0.5);
    cursor: pointer;
    border-radius: 4px;
    background-size: 75% 75%, 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    border: 0;
    appearance: none;
    padding: 0;

    &:hover,
    &:focus-visible {
      background: url(./assets/images/close.png), rgb(var(--color-blue-700));
      background-size: 75% 75%, 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }

    &.with-background {
      background-color: rgb(var(--color-blue-700), 0.5);
      background-size: 18px 18px;
      background-position: center;
      border-radius: 2px;
      opacity: 0.8;
      transition: opacity 0.05s ease-in-out;

      &:hover,
      &:focus-visible {
        opacity: 1;
      }
    }
  }
</style>
