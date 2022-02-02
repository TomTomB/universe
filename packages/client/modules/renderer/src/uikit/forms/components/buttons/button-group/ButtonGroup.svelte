<script lang="ts"></script>

<div class="button-group"><slot /></div>

<style lang="scss">
  .button-group {
    --border-color: rgb(var(--color-gold-600));

    position: relative;
    background-color: rgb(var(--color-almost-black));
    padding-inline: 4px;
    display: inline-flex;

    &::before,
    &::after {
      content: '';
      position: absolute;
      block-size: 10px;
    }

    &::before {
      left: 0;
      bottom: 0;
      border-inline-end: 2px solid var(--border-color);
      border-block-start: 2px solid transparent;
      block-size: 10px;
    }

    &::after {
      right: 0;
      bottom: 0;
      border-inline-start: 2px solid var(--border-color);
      border-block-start: 2px solid transparent;
      block-size: 10px;
    }

    :global(button + button) {
      margin-inline-start: 0.125rem;
    }
  }
</style>
