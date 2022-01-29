<script lang="ts">
  export let isDisabled = false;
  export let isDecorated = false;
</script>

<div class="rounded-magic-container">
  {#if isDecorated}
    <div class="decoration-child decoration-child-left" />
  {/if}

  <button class="rounded-magic-button" disabled={isDisabled}>
    <div class="button-state default" />
    <div class="button-state hover" />
    <div class="button-state active" />
    <div class="button-state disabled" />
    <span> <slot /> </span>
  </button>
  {#if isDecorated}
    <div class="decoration-child decoration-child-right" />
  {/if}
</div>

<style lang="scss">
  .rounded-magic-container {
    position: relative;
    height: 51px;
    width: 188px;
  }

  .rounded-magic-button {
    display: block;
    height: 100%;
    width: 100%;
    position: relative;

    font-family: LoL Display;
    color: rgb(var(--color-blue-100));
    font-kerning: normal;
    font-feature-settings: 'kern' 1;
    -webkit-font-feature-settings: 'kern' 1;
    -webkit-font-smoothing: antialiased;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.075em;
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
  }

  .button-state {
    position: absolute;
    opacity: 0;
    width: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    transition: opacity 0.3s ease;
    top: 2px;
    bottom: 2px;

    &.default {
      opacity: 1;
      background-image: url(./assets/images/button-find-match.png);
    }

    &.hover {
      background-image: url(./assets/images/button-find-match-over.png);
    }

    &.active {
      background-image: url(./assets/images/button-find-match-down.png);
    }

    &.disabled {
      background-image: url(./assets/images/button-find-match-disabled.png);
    }
  }

  .decoration-child {
    position: absolute;
    background-size: cover;
    top: 2px;
    height: 28px;
    width: 122px;
    pointer-events: none;

    &-left {
      background-image: url(./assets/images/footer-wing.png);
      left: -110px;
    }

    &-right {
      background-image: url(./assets/images/footer-wing.png);
      right: -110px;
      transform: scaleX(-1);
    }
  }
</style>
