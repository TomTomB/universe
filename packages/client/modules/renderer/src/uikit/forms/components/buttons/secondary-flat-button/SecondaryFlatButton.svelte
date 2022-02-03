<script lang="ts">
  export let type: 'button' | 'submit' | 'reset' | null = null;
  export let isDisabled = false;
</script>

<button
  class="secondary-flat-button"
  disabled={isDisabled}
  type={type ?? 'button'}
  on:click
>
  <div class="button-state default" />
  <div class="button-state hover" />
  <div class="button-state active" />
  <div class="button-state disabled" />
  <span> <slot /> </span>
</button>

<style lang="scss">
  @import '@/styles';

  .secondary-flat-button {
    @include fontBody();

    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.025em;
    position: relative;
    display: flex;
    flex-basis: 100%;
    align-items: center;
    justify-content: center;
    padding-block: 1px;
    padding-inline: 15px;
    min-inline-size: 90px;
    min-block-size: 32px;
    font-weight: 700;
    white-space: nowrap;

    &:hover,
    &:focus-visible {
      span {
        background-color: #f0e6d2;
      }

      .hover {
        opacity: 1;
      }
    }

    &:active {
      span {
        transition-duration: 100ms;
        background-color: #785a28;
      }

      .active {
        opacity: 1;
      }
    }

    &:disabled {
      pointer-events: none;

      span {
        background-color: #5c5b57;
      }

      .disabled {
        opacity: 1;
      }
    }
  }

  span {
    position: relative;
    background-color: #cdbe91;
    color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    transition: background-color 200ms linear;
  }

  .button-state {
    position: absolute;
    block-size: 100%;
    inline-size: 100%;
    box-sizing: border-box;
    background: #1e2328;
    box-shadow: 0 0 1px 1px #010a13, inset 0 0 1px 1px #010a13;
    border: thin solid transparent;
    border-image-slice: 1;
    opacity: 0;
    transition: opacity 200ms linear;

    &.default {
      opacity: 1;
      border-image-source: linear-gradient(
        to top,
        #785b28 0%,
        #c89c3c 55%,
        #c8a355 71%,
        #c8aa6e 100%
      );
    }

    &.hover {
      background: linear-gradient(
        to bottom,
        #1e232a 0%,
        #1e232a 40%,
        rgba(118, 97, 51, 0.8) 140%
      );
      border-image-source: linear-gradient(
        to top,
        #c89c3c 0%,
        #dcc188 50%,
        #e1c998 71%,
        #f0e6d8 100%
      );
    }

    &.active {
      transition-duration: 100ms;
      border-image-source: linear-gradient(to top, #6b5024, #463714);
    }

    &.disabled {
      border-color: #5c5b57;
    }
  }
</style>
