<script lang="ts">
  import { AnimatedArrowOverlay } from '@/uikit/common/components';
  import { onMount } from 'svelte';
  import { TitleBar } from '../../components';

  onMount(() => {
    window.electron.window.didLoad();
  });
</script>

<div>
  <TitleBar />
  <button class="parent">
    <AnimatedArrowOverlay />
  </button>
</div>

<style>
  button {
    width: 200px;
    height: 50px;
    position: relative;
    margin-top: 5rem;
  }
</style>
