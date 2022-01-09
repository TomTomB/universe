<script setup lang="ts">
import { ref } from 'vue';
import { TitleBar } from '../components';
import { Tooltip } from '@/uikit/overlay/components';

const popperRef = ref<HTMLElement | null>(null);
</script>

<template>
  <div class="shell">
    <TitleBar />

    <div class="popper-test">
      <div class="popper-inner">
        <button ref="popperRef">
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
