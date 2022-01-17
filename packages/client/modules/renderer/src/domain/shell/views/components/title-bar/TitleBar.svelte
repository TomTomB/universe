<script lang="ts">
  import { TitleBarButton } from './partials';

  const close = () => window.electron.window.close();
  const minimize = () => window.electron.window.minimize();
  const showSettings = () => console.log('Open settings');
</script>

<div class="title-bar">
  <nav class="controls">
    <TitleBarButton
      type="hide"
      ariaLabel="Minimize window"
      on:click={minimize}
    />
    <TitleBarButton
      type="settings"
      ariaLabel="Open settings"
      on:click={showSettings}
    />
    <TitleBarButton type="close" ariaLabel="Close window" on:click={close} />
  </nav>
</div>

<style lang="scss">
  .title-bar {
    -webkit-app-region: drag;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 32px;
    display: grid;
    justify-content: end;
    z-index: 10000;
  }

  .controls {
    -webkit-app-region: no-drag;
    align-self: center;
    position: relative;
    top: -1px;
    right: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
</style>
