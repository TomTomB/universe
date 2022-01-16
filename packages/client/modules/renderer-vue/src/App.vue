<script lang="ts" setup>
import { useElectron } from './core/hooks';
import Shell from './domain/shell/views/Shell.vue';

const electron = useElectron();
electron.window.didLoad();
</script>

<template>
  <Shell />
</template>
