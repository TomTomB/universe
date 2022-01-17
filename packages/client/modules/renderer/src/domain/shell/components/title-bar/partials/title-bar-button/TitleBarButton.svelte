<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let type: 'hide' | 'settings' | 'close' | 'help';
  export let ariaLabel: string;

  const dispatch = createEventDispatcher<{ click: void }>();
</script>

<button
  type="button"
  class={type}
  aria-label={ariaLabel}
  on:click={() => dispatch('click')}
/>

<style lang="scss">
  button {
    height: 18px;
    width: 18px;
    -webkit-mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    background-color: var(--color-grey1);
    transition: opacity 300ms ease;

    &:hover,
    &:focus-visible {
      background-color: var(--color-gold1);
    }
    &:active {
      background-color: var(--color-grey2);
    }

    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    &.hide {
      -webkit-mask-image: url(./assets/images/control-hide.png);
    }

    &.settings {
      -webkit-mask-image: url(./assets/images/control-settings.png);
    }

    &.close {
      -webkit-mask-image: url(./assets/images/control-close.png);
    }

    &.help {
      -webkit-mask-image: url(./assets/images/control-help.png);
    }
  }
</style>
