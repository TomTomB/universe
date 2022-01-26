<script lang="ts">
  export let type: 'hide' | 'settings' | 'close' | 'help';
  export let ariaLabel: string;
</script>

<button type="button" class={type} aria-label={ariaLabel} on:click />

<style lang="scss">
  button {
    height: 18px;
    width: 18px;
    mask-size: contain;
    -webkit-mask-size: contain;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    background-color: rgb(var(--color-grey-100));
    transition: opacity 300ms ease;

    &:hover,
    &:focus-visible {
      background-color: rgb(var(--color-gold-100));
    }
    &:active {
      background-color: rgb(var(--color-grey-400));
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    &.hide {
      mask-image: url(./assets/images/control-hide.png);
      -webkit-mask-image: url(./assets/images/control-hide.png);
    }

    &.settings {
      mask-image: url(./assets/images/control-settings.png);
      -webkit-mask-image: url(./assets/images/control-settings.png);
    }

    &.close {
      mask-image: url(./assets/images/control-close.png);
      -webkit-mask-image: url(./assets/images/control-close.png);
    }

    &.help {
      mask-image: url(./assets/images/control-help.png);
      -webkit-mask-image: url(./assets/images/control-help.png);
    }
  }
</style>
