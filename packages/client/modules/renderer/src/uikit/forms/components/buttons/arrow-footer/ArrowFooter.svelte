<script lang="ts">
  import { AnimatedArrowOverlay } from '@/uikit/common/components';
  import { createEventDispatcher } from 'svelte';

  export let primaryButton: {
    label: string;
    isDisabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
  };

  export let secondaryButton: {
    ariaLabel: string;
    isDisabled?: boolean;
    isBack?: boolean;
    type?: 'button' | 'submit' | 'reset';
  } | null = null;

  export let isCompleted = false;
  export let isDecorated = false;

  // TODO(TRB): Add sounds
  //   export let soundType: 'game-select' | 'lobby';

  const dispatch =
    createEventDispatcher<{ 'primary-click': void; 'secondary-click': void }>();
</script>

<div
  class="arrow-footer"
  class:is-secondary-hidden={!secondaryButton}
  class:is-completed={isCompleted}
>
  {#if isDecorated}
    <div class="decoration">
      <div class="decoration-child decoration-child-left" />
    </div>
  {/if}

  <div class="button-container">
    <div class="border-bg">
      <div class="border-left-bg" />
      <div class="border-middle-bg" />
      <div class="border-right-bg" />
    </div>

    <button
      class="primary-button parent"
      disabled={primaryButton.isDisabled || isCompleted}
      type={primaryButton.type ?? 'button'}
      on:click={() => dispatch('primary-click')}
    >
      <div class="left-primary">
        <div class="button-state default" />
        <div class="button-state hover" />
        <div class="button-state active" />
        <div class="button-state completed" />
        <div class="button-state disabled" />
      </div>
      <div class="middle-primary">
        <div class="button-state default" />
        <div class="button-state hover" />
        <div class="button-state active" />
        <div class="button-state completed" />
        <div class="button-state disabled" />
        <span>{primaryButton.label}</span>
      </div>
      <div class="right-primary">
        <div class="button-state default" />
        <div class="button-state hover" />
        <div class="button-state active" />
        <div class="button-state completed" />
        <div class="button-state disabled" />
      </div>

      <AnimatedArrowOverlay isCarrot={!secondaryButton} />
    </button>

    {#if !!secondaryButton}
      <button
        aria-label={secondaryButton.ariaLabel}
        class="secondary-button"
        disabled={secondaryButton.isDisabled || isCompleted}
        type={secondaryButton.type ?? 'button'}
        on:click={() => dispatch('secondary-click')}
      >
        <div class="button-state default" />
        <div class="button-state hover" />
        <div class="button-state active" />
        <div class="button-state completed" />
        <div class="button-state disabled" />
        <div class="secondary-icon" class:is-back={secondaryButton.isBack}>
          <div class="button-state default" />
          <div class="button-state hover" />
          <div class="button-state active" />
          <div class="button-state completed" />
          <div class="button-state disabled" />
        </div>
      </button>
    {/if}
  </div>

  {#if isDecorated}
    <div class="decoration">
      <div class="decoration-child decoration-child-right" />
    </div>
  {/if}
</div>

<style lang="scss">
  @import '@/styles';

  .arrow-footer {
    display: flex;
    justify-content: center;
    height: 43px;

    &.is-secondary-hidden {
      .border-bg {
        .border-left-bg {
          background-image: url(./assets/images/bgleftstraight.png);
        }

        .border-middle-bg {
          margin: 0 7px;
        }
      }

      .primary-button {
        margin-left: 0;

        .left-primary {
          .button-state {
            &.default {
              background-image: url(./assets/images/leftstraightdefault.png);
              opacity: 1;
            }

            &.hover {
              background-image: url(./assets/images/leftstraighthover.png);
            }

            &.active {
              background-image: url(./assets/images/leftstraightclick.png);
            }

            &.completed {
              background-image: url(./assets/images/leftstraightcompleted.png);
            }

            &.disabled {
              background-image: url(./assets/images/leftstraightdisabled.png);
            }
          }
        }
      }
    }

    &.is-completed {
      .primary-button {
        color: rgb(var(--color-gold-400));
      }

      .secondary-button,
      .primary-button {
        .button-state {
          &.default,
          &.disabled {
            opacity: 0 !important;
          }
          &.completed {
            opacity: 1;
          }
        }
      }
    }
  }

  .button-state {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .button-container {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .primary-button {
    @include fontDisplay();

    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.0325em;
    height: 34px;
    min-width: 170px;
    padding-right: 1px;
    margin-left: 29px;
    color: rgb(var(--color-blue-200));
    position: relative;
    display: flex;
    top: 5px;
    transition: color 300ms ease;

    span {
      position: relative;
    }

    &:hover,
    &:focus-visible {
      color: rgb(var(--color-gold-100));

      .button-state.hover {
        opacity: 1;
      }
    }

    &:active {
      color: rgb(var(--color-blue-500));

      .button-state.default,
      .button-state.hover {
        opacity: 0;
      }

      .button-state.active {
        opacity: 1;
      }
    }

    &:disabled {
      color: rgb(var(--color-grey-200));
      pointer-events: none;

      .button-state.disabled {
        opacity: 1;
      }
    }

    .button-state {
      background-size: 100% 100%;
    }

    .left-primary {
      height: 34px;
      width: 12px;
      position: relative;

      .button-state {
        &.default {
          background-image: url(./assets/images/leftdefault.png);
          opacity: 1;
        }

        &.hover {
          background-image: url(./assets/images/lefthover.png);
        }

        &.active {
          background-image: url(./assets/images/leftclick.png);
        }

        &.completed {
          background-image: url(./assets/images/leftcompleted.png);
        }

        &.disabled {
          background-image: url(./assets/images/leftdisabled.png);
        }
      }
    }

    .middle-primary {
      background-size: 100% 100%;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
      padding: 0px 10px;
      background-repeat: repeat-x;
      position: relative;

      .button-state {
        &.default {
          background-image: url(./assets/images/middefault.png);
          opacity: 1;
        }

        &.hover {
          background-image: url(./assets/images/midhover.png);
        }

        &.active {
          background-image: url(./assets/images/midclick.png);
        }

        &.completed {
          background-image: url(./assets/images/midcompleted.png);
        }

        &.disabled {
          background-image: url(./assets/images/middisabled.png);
        }
      }
    }

    .right-primary {
      background-size: 100% 100%;
      height: 34px;
      width: 17px;
      position: relative;

      .button-state {
        &.default {
          background-image: url(./assets/images/rightdefault.png);
          opacity: 1;
        }

        &.hover {
          background-image: url(./assets/images/righthover.png);
        }

        &.active {
          background-image: url(./assets/images/rightclick.png);
        }

        &.completed {
          background-image: url(./assets/images/rightcompleted.png);
        }

        &.disabled {
          background-image: url(./assets/images/rightdisabled.png);
        }
      }
    }
  }

  .secondary-button {
    width: 34px;
    height: 34px;
    background-size: contain;
    position: absolute;
    left: 0px;
    top: 5px;

    &:hover .hover,
    &:focus-visible .hover {
      opacity: 1;
    }

    &:active {
      .default,
      .hover {
        opacity: 0;
      }

      .active {
        opacity: 1;
      }
    }

    &:disabled {
      pointer-events: none;
      .disabled {
        opacity: 1;
      }
    }

    .button-state {
      background-size: contain;

      &.default {
        background-image: url(./assets/images/normal.png);
        opacity: 1;
      }

      &.hover {
        background-image: url(./assets/images/hover.png);
      }

      &.active {
        background-image: url(./assets/images/clicked.png);
      }

      &.completed {
        background-image: url(./assets/images/completed.png);
      }

      &.disabled {
        background-image: url(./assets/images/disabled.png);
      }
    }

    .secondary-icon {
      height: 34px;
      width: 34px;

      .button-state {
        background-size: 18px;
        background-repeat: no-repeat;
        background-position: center;

        &.default {
          background-image: url(./assets/images/exit_default.png);
          opacity: 1;
        }

        &.hover {
          background-image: url(./assets/images/exit_hover.png);
        }

        &.active {
          background-image: url(./assets/images/exit_click.png);
        }

        &.completed {
          background-image: url(./assets/images/checkmark.png);
        }

        &.disabled {
          background-image: url(./assets/images/exit_disabled.png);
        }
      }

      &.is-back {
        .button-state {
          &.default {
            background-image: url(./assets/images/back_default.png);
            opacity: 1;
          }

          &.hover {
            background-image: url(./assets/images/back_hover.png);
          }

          &.active {
            background-image: url(./assets/images/back_click.png);
          }

          &.completed {
            background-image: url(./assets/images/checkmark.png);
          }

          &.disabled {
            background-image: url(./assets/images/back_disabled.png);
          }
        }
      }
    }
  }

  .border-bg {
    position: absolute;
    width: 100%;
    height: 44px;
    display: flex;

    .border-left-bg {
      height: 44px;
      width: 29px;
      position: absolute;
      top: 0px;
      left: -6px;
      background-size: 100% 100%;
      background-image: url(./assets/images/bgleft.png);
    }

    .border-middle-bg {
      flex-grow: 1;
      height: 44px;
      margin: 0px 12px;
      background-size: contain;
      background-image: url(./assets/images/bgmid.png);
    }

    .border-right-bg {
      height: 44px;
      width: 26px;
      position: absolute;
      top: 0;
      right: -6px;
      background-size: 100% 100%;
      background-image: url(./assets/images/bgright.png);
    }
  }

  .decoration {
    display: flex;
    position: relative;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;

    .decoration-child {
      background-size: 100% 100%;
      width: 256px;
      height: 8px;

      &-left {
        margin-right: 50px;
        align-self: flex-end;
        background-image: url(./assets/images/footermetaldecorationleft.png);
      }

      &-right {
        margin-left: 50px;
        align-self: flex-start;
        background-image: url(./assets/images/footermetaldecorationright.png);
      }
    }
  }
</style>
