<script lang="ts">
  import { createEventDispatcher, onDestroy } from 'svelte';

  export let type: 'button' | 'submit' | 'reset' | null = null;
  export let isDisabled = false;
  export let variant: 'default' | 'golden' | 'purple' = 'default';
  export let isExternal = false;

  let showClickAnim = false;
  let clickAnimTimeout: number | null = null;

  // TODO(TRB): Add sounds

  const dispatch = createEventDispatcher<{ click: void }>();

  const onClick = () => {
    if (isDisabled) return;

    showClickAnim = true;
    dispatch('click');

    clickAnimTimeout = window.setTimeout(() => {
      showClickAnim = false;
      clickAnimTimeout = null;
    }, 400);
  };

  onDestroy(() => {
    if (clickAnimTimeout !== null) {
      window.clearTimeout(clickAnimTimeout);
      clickAnimTimeout = null;
    }
  });
</script>

<button
  class="primary-flat-button {variant}"
  class:click={showClickAnim}
  class:is-external={isExternal}
  disabled={isDisabled}
  type={type ?? 'button'}
  on:click={onClick}
>
  <div class="flare" />
  <div class="glow" />
  <div class="bg" />
  <div class="boder-idle" />
  <div class="boder-transition" />
  <div class="sheen-wrapper">
    <div class="sheen" />
  </div>
  <div class="content-wrapper">
    <slot />
  </div>
</button>

<style lang="scss">
  .primary-flat-button {
    font-kerning: normal;
    font-family: LoL Display;
    font-feature-settings: 'kern' 1;
    -webkit-font-feature-settings: 'kern' 1;
    -webkit-font-smoothing: antialiased;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.075em;

    color: rgb(var(--color-gold-200));
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    padding: 5px 1.3em;
    min-height: 32px;
    box-shadow: 0 0 1px 1px rgb(var(--color-almost-black)),
      inset 0 0 1px 1px rgb(var(--color-almost-black));
    background: rgb(var(--color-grey-700));
    border: 2px solid transparent;

    * {
      pointer-events: none;
    }

    &.is-external {
      .content-wrapper::after {
        display: inline-block;
      }
    }

    &:hover,
    &:focus-visible {
      color: rgb(var(--color-gold-100));
      animation: 600ms cubic-bezier(0, 0, 0.33, 1) 1 hoverTextShadow;

      .boder-transition {
        opacity: 1;
        border-image: linear-gradient(
          to top,
          #c89c3c 0%,
          #dcc188 50%,
          #e1c998 71%,
          #f0e6d8 100%
        );
        border-image-slice: 1;
      }

      .glow {
        animation: 600ms cubic-bezier(0, 0, 0.33, 1) 1 hoverGlow;
      }

      .bg {
        opacity: 1;
      }

      .content-wrapper {
        &::after {
          background: rgb(var(--color-gold-100));
        }
      }
    }

    &:active {
      color: rgb(var(--color-grey-200));
      transition: color 100ms linear;
      animation: none;

      .bg {
        opacity: 0;
      }

      .boder-transition {
        opacity: 1;
        border-image: linear-gradient(to bottom, #463817 0%, #694f27 100%);
        border-image-slice: 1;
      }

      .content-wrapper {
        &::after {
          background: rgb(var(--color-grey-200));
        }
      }
    }

    &.click {
      color: #e4e1d8;
      border-image-slice: 1;
      animation: 130ms linear clickScale 1, 400ms linear 1 hoverTextShadow;

      .boder-transition {
        border-image-slice: 1;
        transition: opacity 400ms linear;
        opacity: 1;
      }

      .glow {
        animation: 600ms cubic-bezier(0, 0, 0.33, 1) hoverGlow 1;
      }

      .sheen {
        animation: 330ms clickSheen 1 linear;
      }

      .bg {
        opacity: 1;
      }

      .flare {
        &::before {
          animation: 400ms cubic-bezier(0, 0, 0.33, 1) 0ms 1 clickFlare;
        }

        &::after {
          animation: 400ms cubic-bezier(0, 0, 0.33, 1) 30ms 1 clickFlare;
        }
      }

      .content-wrapper {
        &::after {
          background: #e4e1d8;
        }
      }
    }

    &.golden {
      background: linear-gradient(to bottom, #5a401f 0%, #332717 100%);

      .bg {
        background: linear-gradient(to bottom, #604522 0%, #846745 100%);
      }

      .content-wrapper {
        &::after {
          background: rgb(var(--color-gold-200));
        }
      }

      &:active {
        color: rgb(var(--color-gold-500));
        background: linear-gradient(to bottom, #362715 0%, #17130e 100%);

        .content-wrapper {
          &::after {
            background: rgb(var(--color-gold-500));
          }
        }
      }
    }

    &.purple {
      background: linear-gradient(
          to bottom,
          rgba(255, 44, 170, 0.3) 0%,
          rgba(255, 44, 170, 0) 100%
        ),
        rgb(var(--color-grey-700));
      color: #fde9f8;

      .bg {
        background: linear-gradient(
            to bottom,
            rgba(255, 44, 170, 0.3) 0%,
            rgba(255, 44, 170, 0) 100%
          ),
          rgb(var(--color-grey-700));
      }

      .boder-idle {
        border-image: linear-gradient(
          to bottom,
          rgba(245, 155, 247, 0.8) 0%,
          rgba(232, 216, 227, 0.8) 0.01%,
          rgba(237, 153, 239, 0.8) 100%
        );
        border-image-slice: 1;
      }

      .content-wrapper {
        &::after {
          background: rgb(var(--color-gold-200));
        }
      }

      &:hover,
      &:focus-visible {
        color: #fde9f8;
        background: linear-gradient(
            to bottom,
            rgba(255, 44, 170, 0.5) 0%,
            rgba(255, 44, 170, 0) 100%
          ),
          rgb(var(--color-grey-700));

        .bg {
          background: linear-gradient(
              to bottom,
              rgba(255, 44, 170, 0.5) 0%,
              rgba(255, 44, 170, 0) 100%
            ),
            rgb(var(--color-grey-700));
        }

        .boder-transition {
          border-image: linear-gradient(
            to bottom,
            #f59bf7 0%,
            #e8d8e3 0.01%,
            #ed99ef 100%
          );
          border-image-slice: 1;
        }

        .content-wrapper {
          &::after {
            background: #fde9f8;
          }
        }
      }

      &:active {
        color: #fde9f8;
        background: linear-gradient(
            to bottom,
            rgba(255, 44, 170, 0.2) 0%,
            rgba(255, 44, 170, 0) 100%
          ),
          rgb(var(--color-grey-700));

        .bg {
          background: linear-gradient(
              to bottom,
              rgba(255, 44, 170, 0.2) 0%,
              rgba(255, 44, 170, 0) 100%
            ),
            rgb(var(--color-grey-700));
        }

        .boder-transition {
          border-image: linear-gradient(
            to bottom,
            rgba(245, 155, 247, 0.4) 0%,
            rgba(232, 216, 227, 0.4) 0.01%,
            rgba(237, 153, 239, 0.4) 100%
          );
          border-image-slice: 1;
        }

        .boder-idle {
          border-image: linear-gradient(
            to bottom,
            rgba(245, 155, 247, 0.4) 0%,
            rgba(232, 216, 227, 0.4) 0.01%,
            rgba(237, 153, 239, 0.4) 100%
          );
          border-image-slice: 1;
        }

        .content-wrapper {
          &::after {
            background: #fde9f8;
          }
        }
      }
    }

    &:disabled {
      pointer-events: none;
      animation: none;
      cursor: default;
      color: rgb(var(--color-grey-200));
      background: rgb(var(--color-grey-700));
      border: 2px solid rgb(var(--color-grey-200));
      border-image: initial;
      transition: color 300ms linear, border 300ms linear,
        background 300ms linear;

      .bg,
      .glow,
      .sheen-wrapper,
      .flare {
        display: none;
      }

      .boder-transition {
        transition: opacity 300ms linear;
        opacity: 0;
      }

      .boder-idle {
        opacity: 0;
      }

      .content-wrapper {
        &::after {
          background: rgb(var(--color-grey-200));
        }
      }
    }
  }

  .flare {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: -25px;
      left: -25px;
      width: 48px;
      height: 48px;
      opacity: 0;
      background: transparent url(./assets/images/sheen.png) top center
        no-repeat;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -25px;
      right: -25px;
      width: 48px;
      height: 48px;
      opacity: 0;
      background: transparent url(./assets/images/sheen.png) top center
        no-repeat;
    }
  }

  .glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(4px);
    animation: initial;
  }

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: opacity 400ms cubic-bezier(0, 0, 0.33, 1);
    opacity: 0;
    background-image: linear-gradient(
      to bottom,
      #1e232a 0%,
      #1e232a 40%,
      rgba(118, 97, 51, 0.8) 140%
    );
  }

  .boder-idle {
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: 1;
    border: 2px solid transparent;
    border-image: linear-gradient(
      to top,
      #785b28 0%,
      #c89c3c 55%,
      #c8a355 71%,
      rgb(var(--color-gold-300)) 100%
    );
    border-image-slice: 1;
    transition: opacity 300ms linear;
  }

  .boder-transition {
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: 0;
    border: 2px solid transparent;
  }

  .sheen-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .sheen {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100%;
    height: 150%;
    transform: translateY(-100%);
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.15) 92%,
      rgba(255, 255, 255, 0) 100%
    );
    filter: blur(2px);
  }

  .content-wrapper {
    position: relative;

    &::after {
      display: none;
      width: 9px;
      height: 9px;
      content: '';
      vertical-align: middle;
      mask: url(./assets/images/external-link-mask.png) no-repeat;
      -webkit-mask: url(./assets/images/external-link-mask.png) no-repeat;
      mask-size: contain;
      -webkit-mask-size: contain;
      background: rgb(var(--color-gold-200));
      margin-left: 5px;
      margin-top: -5px;
    }
  }

  @keyframes hoverTextShadow {
    0% {
      text-shadow: 0 0 4px rgba(240, 230, 216, 1);
    }
    50% {
      text-shadow: 0 0 4px rgba(240, 230, 216, 0.5);
    }
    100% {
      text-shadow: 0 0 4px rgba(240, 230, 216, 0);
    }
  }

  @keyframes hoverGlow {
    0% {
      box-shadow: 0px 0px 5px 4px rgba(240, 230, 216, 0.5),
        0px 0px 2px 1px rgba(240, 230, 216, 0.5) inset;
    }
    50% {
      box-shadow: 0px 0px 5px 4px rgba(240, 230, 216, 0.3),
        0px 0px 2px 1px rgba(240, 230, 216, 0.3) inset;
    }
    100% {
      box-shadow: 0px 0px 5px 4px rgba(240, 230, 216, 0),
        0px 0px 2px 1px rgba(240, 230, 216, 0) inset;
    }
  }

  @keyframes clickFlare {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes clickScale {
    from {
      transform: scale(0.94);
    }

    to {
      transform: scale(1);
    }
  }

  @keyframes clickSheen {
    from {
      transform: translateY(-100%) rotate(0deg);
    }
    10% {
      transform: translateY(-80%) rotate(-5deg);
    }
    to {
      transform: translateY(100%) rotate(0deg);
    }
  }
</style>
