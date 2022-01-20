<script lang="ts">
  import { AnimatedArrowOverlay } from '@/uikit/common/components';
  import { Modal } from '@/uikit/overlay/components';
  import { onMount } from 'svelte';
  import { TitleBar } from '../../components';

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
  <Modal position="bottom">
    <div class="modal-inner">
      <h1>Modal</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, porro!
      </p>
    </div>
  </Modal>
{/if}

<style lang="scss">
  button {
    width: 200px;
    height: 50px;
    position: relative;
    margin-top: 5rem;
    z-index: 10000;
  }

  .modal-inner {
    padding: 1rem;

    h1 {
      margin-bottom: 0.75rem;
    }
  }
</style>
