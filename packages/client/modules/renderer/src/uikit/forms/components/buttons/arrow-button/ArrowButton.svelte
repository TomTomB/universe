<script lang="ts">
  export let isDisabled = false;
  export let isRotated = false;
  export let ariaLabel: string;
  export let type: 'button' | 'submit' | 'reset' | null = null;
</script>

<button
  class="arrow-button"
  class:is-rotated={isRotated}
  disabled={isDisabled}
  aria-label={ariaLabel}
  type={type ?? 'button'}
  on:click
>
  <div class="button-state default" />
  <div class="button-state hover" />
  <div class="button-state active" />
  <div class="button-state disabled" />
</button>

<style lang="scss">
  .arrow-button {
    display: block;
    block-size: 48px;
    inline-size: 44px;
    position: relative;

    &.is-rotated:not(:dir(rtl)),
    &:dir(rtl) {
      transform: rotate(180deg);
    }

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

      .default {
        opacity: 0;
      }

      .disabled {
        opacity: 1;
      }
    }
  }

  .button-state {
    position: absolute;
    opacity: 0;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    transition: opacity 0.3s ease;
    inset-block: 2px;

    &.default {
      opacity: 1;
      background-image: url(./assets/images/border-arrow-up.png);
    }

    &.hover {
      background-image: url(./assets/images/border-arrow-hover.png);
    }

    &.active {
      background-image: url(./assets/images/border-arrow-click.png);
    }

    &.disabled {
      background-image: url(./assets/images/border-arrow-disabled.png);
    }
  }
</style>
