<script lang="ts">
  import { AnimatedBorderOverlay } from '@/uikit/common/components';
  import { onDestroy } from 'svelte';

  export let type: 'button' | 'submit' | 'reset' | null = null;
  export let isDisabled = false;
  export let playIntroOnEnable = true;

  // TODO(TRB): Add sounds

  let showIntroAnim = false;
  let introAnimTimeout: number | null = null;
  let previoslyDisabled = isDisabled;

  $: if (previoslyDisabled !== isDisabled && playIntroOnEnable) {
    if (introAnimTimeout !== null) {
      clearTimeout(introAnimTimeout);
      showIntroAnim = false;
    }

    previoslyDisabled = isDisabled;

    if (!isDisabled) {
      showIntroAnim = true;

      introAnimTimeout = window.setTimeout(() => {
        showIntroAnim = false;
        introAnimTimeout = null;
      }, 500);
    }
  }

  onDestroy(() => {
    if (introAnimTimeout !== null) {
      clearTimeout(introAnimTimeout);
    }
  });
</script>

<button
  class="primary-magic-button parent"
  class:intro={showIntroAnim}
  disabled={isDisabled}
  type={type ?? 'button'}
  on:click
>
  <div class="frame frame-idle" />
  <div class="frame frame-interactive" />
  <div class="rune-magic rune-magic-left" />
  <div class="rune-magic rune-magic-right" />
  <div class="radial-container">
    <div class="radial-effect" />
  </div>

  <div class="content"><slot /></div>

  <AnimatedBorderOverlay />
</button>

<style lang="scss">
  @import '@/styles';

  .frame {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    transition: 300ms all linear;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      box-sizing: border-box;
      box-shadow: 0 0 1px rgb(var(--color-almost-black), 0.25),
        inset 0 0 1px rgb(var(--color-almost-black), 0.25);
    }

    &-idle {
      opacity: 1;
      &::before,
      &::after {
        transition: 300ms all linear;
      }
      &::before {
        opacity: 1;
        border: 2px solid rgb(var(--color-grey-400));
      }
      &::after {
        opacity: 0;
        border: 2px solid transparent;
        border-image: linear-gradient(
            to top,
            rgb(var(--color-blue-500)) 0%,
            rgb(var(--color-blue-400)) 44%,
            rgb(var(--color-blue-400)) 93%,
            rgb(var(--color-blue-300)) 100%
          )
          2 stretch;
      }
    }

    &-interactive {
      opacity: 0;
      &::before,
      &::after {
        transition: 300ms all linear;
      }
      &::before {
        opacity: 1;
        border: 2px solid transparent;
        border-image: linear-gradient(
            to top,
            #3295c7 0%,
            rgb(var(--color-blue-300)) 49%,
            rgb(var(--color-blue-100)) 100%
          )
          2 stretch;
      }
      &::after {
        opacity: 0;
        border: 2px solid transparent;
        border-image: linear-gradient(
            to top,
            rgb(var(--color-blue-500)) 0%,
            rgb(var(--color-blue-500)) 83%,
            rgb(var(--color-blue-500)) 100%
          )
          2 stretch;
      }
    }
  }

  .rune-magic {
    position: absolute;
    pointer-events: inherit;
    background-repeat: no-repeat;

    &-left {
      width: 44px;
      height: 22px;
      left: 0;
      bottom: 0;
      background-image: url(./assets/images/magic-button-left-runes-44x22-29f30f29f.png);
      background-position: 100px 100px;
    }

    &-right {
      width: 62px;
      height: 22px;
      right: 0;
      top: 0;
      background-image: url(./assets/images/magic-button-right-runes-62x22-25f30f29f.png);
      background-position: 100px 100px;
    }
  }

  .radial-container {
    display: block;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  .radial-effect {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 3px;
    box-sizing: border-box;
    overflow: hidden;
    mask-image: linear-gradient(to right, #000, #000);
    -webkit-mask-image: linear-gradient(to right, #000, #000);

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 120px;
      top: -120px;
      opacity: 0.1;
      background-image: radial-gradient(
        ellipse closest-side,
        #a2ffff 40%,
        #6cfcff 60%,
        transparent 90%
      );
      background-position: center;
    }
  }

  .content {
    @include fontDisplay();

    color: rgb(var(--color-grey-700));
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.0325em;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0 1.3em;
    text-align: center;
    box-sizing: border-box;
    border: 2px solid transparent;
    overflow: hidden;
    transition: 300ms all linear;
    height: 100%;
  }

  .primary-magic-button {
    height: 32px;
    position: relative;
    display: flex;

    &:not(:disabled) {
      &.intro {
        .frame-idle {
          background-color: rgb(var(--color-grey-700), 0.5);
          animation: backgroundIntro 1000ms ease-out;
          transition: 500ms all ease-out;
          &::before {
            opacity: 0;
          }
          &::after {
            opacity: 1;
          }
        }
        :global(.animated-border-overlay-wrapper) {
          opacity: 0.75;
        }
      }

      &.intro,
      &:hover,
      &:focus-visible {
        .rune-magic {
          background-position-x: 0;

          &-left {
            animation: runeMagicLeftSpriteSheet 500ms forwards steps(31);
          }

          &-right {
            animation: runeMagicRightSpriteSheet 500ms forwards steps(31);
          }
        }
      }

      &:not(:is(:hover, :active, :focus-visible)) {
        .content {
          color: rgb(var(--color-blue-200));
        }
        .frame-interactive {
          opacity: 0;
          transition: 300ms all linear;
          &::before,
          &::after {
            opacity: 0;
          }
        }
        .frame-idle {
          opacity: 1;
          background-color: rgb(var(--color-grey-700), 0.5);
          &::before,
          &::after {
            transition: 300ms all linear;
          }
          &::before {
            opacity: 0;
          }
          &::after {
            opacity: 1;
          }
        }
      }

      &:hover,
      &:focus-visible {
        .content {
          color: rgb(var(--color-blue-100));
        }
        .radial-effect {
          display: block;
          &::after {
            animation: radialEffect 700ms forwards ease-out;
          }
        }
        .rune-magic-right {
          background-position-x: -62px;
        }
        .rune-magic-left {
          background-position-x: -44px;
        }
        .frame-interactive {
          background-color: rgb(var(--color-grey-700), 0.5);
          opacity: 1;
          &::before,
          &::after {
            box-shadow: inset 0 -10px 20px rgb(var(--color-blue-400), 0.5);
          }
          &::before {
            opacity: 1;
          }
          &::after {
            opacity: 0;
          }
        }
        .frame-idle {
          background-color: rgb(var(--color-grey-700), 0.5);
          opacity: 0;
        }
        :global(.animated-border-overlay-wrapper) {
          opacity: 1;
        }
      }

      &:active {
        .content {
          color: rgb(var(--color-blue-500));
        }
        .rune-magic-right {
          background-position-x: -124px;
        }
        .rune-magic-left {
          background-position-x: -88px;
        }
        .frame-interactive {
          opacity: 1;
          box-shadow: inset 0 -10px 20px rgb(var(--color-blue-400), 0.5);
          &::before,
          &::after {
            box-shadow: inset 0 -10px 20px rgb(var(--color-blue-400), 0);
          }
          &::before {
            opacity: 0;
          }
          &::after {
            opacity: 1;
          }
        }
        .frame-idle {
          opacity: 0;
        }
        :global(.animated-border-overlay-wrapper) {
          opacity: 0.5;
        }
      }
    }

    &:disabled {
      cursor: default;
      .content {
        color: rgb(var(--color-grey-200));
        font-size: 14px;
        box-shadow: 0 0 1px 1px rgb(var(--color-almost-black)),
          inset 0 0 1px 1px rgb(var(--color-almost-black));
        background-color: rgb(var(--color-grey-800));
        border: 2px solid rgb(var(--color-grey-200));
      }
    }
  }

  @keyframes backgroundIntro {
    0% {
      box-shadow: inset 0 -10px 20px rgb(var(--color-blue-400), 0);
    }
    30% {
      box-shadow: inset 0 -10px 20px rgb(var(--color-blue-400), 0.5);
    }
    100% {
      box-shadow: inset 0 -10px 20px rgb(var(--color-blue-400), 0);
    }
  }

  @keyframes runeMagicLeftSpriteSheet {
    0% {
      background-position-y: 22px;
    }

    100% {
      background-position-y: -660px;
    }
  }

  @keyframes runeMagicRightSpriteSheet {
    0% {
      background-position-y: 24px;
    }

    100% {
      background-position-y: -720px;
    }
  }

  @keyframes radialEffect {
    0% {
      transform: translateY(-120px);
    }
    100% {
      transform: translateY(120px);
    }
  }
</style>
