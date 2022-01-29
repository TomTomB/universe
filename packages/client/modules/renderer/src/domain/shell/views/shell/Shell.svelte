<script lang="ts">
  import {
    AnimatedArrowOverlay,
    AnimatedBorderOverlay,
  } from '@/uikit/common/components';
  import { ArrowFooter, RoundedMagicButton } from '@/uikit/forms/components';
  import { onMount } from 'svelte';
  import { TitleBar } from '../../components';
  import TestModal from './TestModal.svelte';

  let showModal = false;
  let showOtherModal = false;

  onMount(() => {
    window.electron.window.didLoad();
  });
</script>

<TitleBar />

<button class="parent" on:click={() => (showModal = !showModal)}>
  <p>Hello</p>
  <AnimatedArrowOverlay />
</button>

<ArrowFooter
  primaryButton={{
    isDisabled: false,
    type: 'button',
    label: 'Find match',
  }}
  secondaryButton={{
    type: 'button',
    isDisabled: false,
    ariaLabel: 'Exit',
    isBack: false,
  }}
/>
<br />

<div style="display: flex; justify-content: center;">
  <RoundedMagicButton isDecorated>Find match</RoundedMagicButton>
</div>

{#if showModal}
  <TestModal on:close={() => (showModal = false)}>
    <button class="parent" on:click={() => (showOtherModal = !showOtherModal)}>
      <p>Hello2</p>
      <AnimatedBorderOverlay />
    </button>
  </TestModal>
{/if}

{#if showOtherModal}
  <TestModal on:close={() => (showOtherModal = false)} />
{/if}

<style lang="scss">
  button {
    width: 200px;
    height: 50px;
    position: relative;
    margin-top: 5rem;
    background-color: red;
    z-index: 999999;
    p {
      margin: 0;
      padding: 0;
    }
  }
</style>
