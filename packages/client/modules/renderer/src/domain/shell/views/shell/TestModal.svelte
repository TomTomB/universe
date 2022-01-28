<script lang="ts">
  import { Slider, ArrowButton } from '@/uikit/forms/components';
  import { FlyoutFrame, Modal, Tooltip } from '@/uikit/overlay/components';
  import { createEventDispatcher } from 'svelte';

  let modalInner: HTMLButtonElement;
  let showFlyoutFrame = false;
  let sliderValue = 25;
  let slider: Slider | null = null;

  const dispatch = createEventDispatcher<{ close: void }>();
</script>

<Modal
  allyModalHeaderId="modal-head"
  allyModalDescriptionId="modal-body"
  position="bottom"
  topRightCloseButton={{ variant: 'toast', showBackground: true }}
  on:backdrop-click={() => dispatch('close')}
  on:close-click={() => dispatch('close')}
  on:escape-key-up={() => dispatch('close')}
  on:transition-done={() => {
    if (slider) {
      slider.recalculateDimensions();
    }
  }}
>
  <div class="modal-inner">
    <h1 id="modal-head">Modal</h1>
    <p class="modal-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, porro!
    </p>

    <label for="slider_new1">Value is {sliderValue}</label>
    <Slider
      bind:this={slider}
      bind:value={sliderValue}
      id="slider_new1"
      isTooltipEnabled
      tooltipValueSuffix="%"
    />

    <ArrowButton ariaLabel="Hello" />

    <button
      bind:this={modalInner}
      aria-describedby="modalTooltip"
      on:click={() => (showFlyoutFrame = !showFlyoutFrame)}
    >
      <p>I have some tooltip</p>
    </button>

    <slot />
  </div>

  <Tooltip attachTo={modalInner}>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ratione
      atque perspiciatis aliquam recusandae sed?
    </p>
  </Tooltip>

  {#if showFlyoutFrame}
    <FlyoutFrame
      attachTo={modalInner}
      placement="top"
      on:escape-key-up={() => (showFlyoutFrame = false)}
      on:click-outside={() => (showFlyoutFrame = false)}
    >
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
