<script lang="ts" setup>
import { useElectron } from '@/core/hooks';
import { TitleBarButton } from './partials';

const electron = useElectron();

const minimizeClick = () => {
  electron.window.minimize();
};

const settingsClick = () => {
  console.log('settings');
};

const closeClick = () => {
  electron.window.close();
};
</script>

<template>
  <div class="title-bar">
    <nav class="controls">
      <TitleBarButton title="Minimize" type="hide" @click="minimizeClick()" />
      <TitleBarButton
        title="Settings"
        type="settings"
        @click="settingsClick()"
      />
      <TitleBarButton title="Close" type="close" @click="closeClick()" />
    </nav>
  </div>
</template>

<style lang="scss" scoped>
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
  align-self: center;
  position: relative;
  top: -1px;
  -webkit-app-region: no-drag;

  button {
    &:not(:last-of-type) {
      margin-right: 15px;
    }

    &:last-of-type {
      margin-right: 10px;
    }
  }
}
</style>
