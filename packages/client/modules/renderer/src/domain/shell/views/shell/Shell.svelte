<script lang="ts">
  import { AnimatedArrowOverlay } from '@/uikit/common/components';
  import { onMount } from 'svelte';
  import { TitleBar } from '../../components';
  import TestModal from './TestModal.svelte';

  let showModal = true;

  onMount(() => {
    window.electron.window.didLoad();
  });
</script>

<TitleBar />

<button class="parent" on:click={() => (showModal = !showModal)}>
  <p>Hello</p>
  <AnimatedArrowOverlay />
</button>

{#if showModal}
  <TestModal on:close={() => (showModal = false)} />
{/if}

<style lang="scss">
  button {
    width: 200px;
    height: 50px;
    position: relative;
    margin-top: 5rem;
    background-color: red;
    p {
      margin: 0;
      padding: 0;
    }
  }
</style>
