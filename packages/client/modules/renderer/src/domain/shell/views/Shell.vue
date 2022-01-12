<script setup lang="ts">
import { ref } from 'vue';
import { TitleBar } from '../components';
import { Tooltip, FlyoutFrame } from '@/uikit/overlay/components';

const popperRef = ref<HTMLElement | null>(null);

const showFlyout = ref(false);
</script>

<template>
  <div class="shell">
    <TitleBar />

    <div class="popper-test">
      <div class="popper-inner">
        <button ref="popperRef" @click="showFlyout = !showFlyout">
          Popper go here <br />
          Lorem, ipsum. <br />
          Lorem, ipsum. <br />
          Lorem, ipsum. <br />
          Lorem, ipsum dolor.
        </button>
      </div>
    </div>

    <Tooltip :attach-to="popperRef" placement="top-end">
      <p>
        Hello Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Suscipit, dolore. 123
      </p>
    </Tooltip>

    <FlyoutFrame
      :show="showFlyout"
      :attach-to="popperRef"
      :close-on-click-outside="true"
      placement="bottom-end"
    >
      <div style="padding: 1rem">
        <h3 style="margin-bottom: 0.5rem">Hello world!</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quas
          <br />
          temporibus quia! Possimus laborum fuga quisquam quia a cumque magni?
        </p>
      </div>
    </FlyoutFrame>
  </div>
</template>

<style lang="scss" scoped>
.shell {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: var(--color-almost-black);
  border: 1px solid var(--color-frame-grey);
  border-top: 2px solid var(--color-gold5);
  overflow: auto;
  contain: content;
}

.popper-test {
  height: 3000px;
  overflow: scroll;
  margin-top: 200px;
  text-align: center;
}

.popper-inner {
  display: flex;
  justify-content: center;
}
</style>
