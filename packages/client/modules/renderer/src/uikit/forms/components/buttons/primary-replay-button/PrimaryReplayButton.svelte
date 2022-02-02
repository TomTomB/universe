<script lang="ts">
  export let type: 'button' | 'submit' | 'reset' | null = null;
  export let ariaLabel: string;
  export let isDisabled = false;
</script>

<button
  class="primary-replay-button"
  disabled={isDisabled}
  aria-label={ariaLabel}
  type={type ?? 'button'}
  on:click
>
  <div class="button-state default" />
  <div class="button-state hover" />
  <div class="button-state active" />
</button>

<style lang="scss">
  .primary-replay-button {
    inline-size: 49px;
    block-size: 49px;
    position: relative;
    transition: opacity 300ms cubic-bezier(0, 0, 0, 1);

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
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
  }

  .button-state {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    inline-size: 100%;
    block-size: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 0.3s ease;

    &.default {
      opacity: 1;
      background-image: url(./assets/images/button-replay.png);
    }

    &.hover {
      background-image: url(./assets/images/button-replay-hover.png);
    }

    &.active {
      background-image: url(./assets/images/button-replay-active.png);
    }
  }
</style>
