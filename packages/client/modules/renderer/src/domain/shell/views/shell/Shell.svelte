<script lang="ts">
  import {
    AnimatedArrowOverlay,
    AnimatedBorderOverlay,
  } from '@/uikit/common/components';
  import {
    ArrowFooter,
    RoundedMagicButton,
    ArrowButton,
    RoundedIconButton,
    PrimaryFlatButton,
    ButtonGroup,
    PrimaryReplayButton,
    PrimaryMagicButton,
    SecondaryFlatButton,
  } from '@/uikit/forms/components';
  import { onMount } from 'svelte';
  import { TitleBar } from '../../components';
  import TestModal from './TestModal.svelte';

  let showModal = false;
  let showOtherModal = false;
  let isPrimaryDisabled = true;

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
  isDecorated
  primaryButton={{
    isDisabled: false,
    type: 'button',
    label: 'Start search',
  }}
  secondaryButton={{
    type: 'button',
    isDisabled: false,
    ariaLabel: 'Exit',
    isBack: false,
  }}
/>
<br />
<PrimaryReplayButton ariaLabel="dd" />
<br />

<div style="display: flex; justify-content: center;">
  <RoundedMagicButton isDecorated>Start search</RoundedMagicButton>
</div>

<br />
<RoundedIconButton ariaLabel="icon btn" icon="close" />
<br />

<RoundedIconButton ariaLabel="icon btn" icon="close" isDisabled />
<br />

<ArrowButton ariaLabel="dd" isRotated />

<ButtonGroup>
  <SecondaryFlatButton>Hello</SecondaryFlatButton>
  <SecondaryFlatButton isDisabled>Disabled</SecondaryFlatButton>
</ButtonGroup>
<br />
<br />
<ButtonGroup>
  <PrimaryFlatButton>Default</PrimaryFlatButton>
  <PrimaryFlatButton isExternal>External</PrimaryFlatButton>
  <PrimaryFlatButton isDisabled>Disabled</PrimaryFlatButton>
</ButtonGroup>

<ButtonGroup>
  <PrimaryFlatButton variant="golden">Default</PrimaryFlatButton>
  <PrimaryFlatButton isExternal variant="golden">External</PrimaryFlatButton>
  <PrimaryFlatButton variant="golden" isDisabled>Disabled</PrimaryFlatButton>
</ButtonGroup>

<ButtonGroup>
  <PrimaryFlatButton variant="purple">purchase</PrimaryFlatButton>
  <PrimaryFlatButton isExternal variant="purple">External</PrimaryFlatButton>
  <PrimaryFlatButton variant="purple" isDisabled>Disabled</PrimaryFlatButton>
</ButtonGroup>

<ButtonGroup>
  <PrimaryMagicButton on:click={() => (isPrimaryDisabled = !isPrimaryDisabled)}
    >Default</PrimaryMagicButton
  >
  <PrimaryMagicButton isDisabled={isPrimaryDisabled}
    >Disabled</PrimaryMagicButton
  >
</ButtonGroup>

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
    clip-path: polygon(60% 0, 100% 50%, 60% 100%, 0 100%, 0 0);

    p {
      margin: 0;
      padding: 0;
    }
  }
</style>
