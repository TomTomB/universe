<script lang="ts"></script>

<div class="button-group"><slot /></div>

<style lang="scss">
  .button-group {
    --border-color: rgb(var(--color-gold-600));

    position: relative;
    background-color: rgb(var(--color-almost-black));
    padding: 0 4px;
    display: inline-flex;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 10px;
    }

    &::before {
      left: 0;
      bottom: 0;
      border-right: 2px solid var(--border-color);
      border-top: 2px solid transparent;
      height: 10px;
    }

    &::after {
      right: 0;
      bottom: 0;
      border-left: 2px solid var(--border-color);
      border-top: 2px solid transparent;
      height: 10px;
    }

    :global(button + button) {
      margin-left: 0.125rem;
    }
  }
</style>
