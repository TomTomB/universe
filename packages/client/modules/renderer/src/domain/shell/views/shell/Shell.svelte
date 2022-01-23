<script lang="ts">
  import { AnimatedArrowOverlay } from '@/uikit/common/components';
  import { FlyoutFrame, Modal, Tooltip } from '@/uikit/overlay/components';
  import { onMount } from 'svelte';
  import { TitleBar } from '../../components';

  let showModal = true;
  let modalInner: HTMLButtonElement;
  let showFlyoutFrame = false;

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
  <Modal
    allyModalHeaderId="modal-head"
    allyModalDescriptionId="modal-body"
    position="bottom"
    topRightCloseButton={{ variant: 'toast', showBackground: true }}
    on:backdrop-click={() => (showModal = false)}
    on:close-click={() => (showModal = false)}
    on:escape-key-up={() => (showModal = false)}
  >
    <div class="modal-inner">
      <h1 id="modal-head">Modal</h1>
      <p class="modal-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, porro!
      </p>

      <button
        bind:this={modalInner}
        aria-describedby="modalTooltip"
        on:click={() => (showFlyoutFrame = !showFlyoutFrame)}
      >
        <p>I have some tooltip</p>
      </button>
    </div>

    <Tooltip attachTo={modalInner} id="modalTooltip">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
        ratione atque perspiciatis aliquam recusandae sed?
      </p>
    </Tooltip>

    {#if showFlyoutFrame}
      <FlyoutFrame attachTo={modalInner}>
        <div class="modal-inner">
          <h4>Hello</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            nihil?
          </p>
        </div>
      </FlyoutFrame>
    {/if}
  </Modal>
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

  .modal-inner {
    padding: 1rem;

    h1 {
      margin-bottom: 0.75rem;
    }
  }
</style>
