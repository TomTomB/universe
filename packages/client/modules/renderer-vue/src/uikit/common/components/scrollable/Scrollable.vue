<script lang="ts" setup>
import { onUnmounted, ref, watchEffect } from 'vue';

const props = defineProps<{
  overflow: 'auto' | 'overlay';
  direction: 'horizontal' | 'vertical';
  hideScrollbar?: boolean;
  disableMasks?: boolean;
  disableStartMask?: boolean;
  disableEndMask?: boolean;
}>();

const emit = defineEmits<{
  (event: 'scrolled-start'): void;
  (event: 'scrolled-between'): void;
  (event: 'scrolled-end'): void;
}>();

const scrolledStart = ref(false);
const scrolledEnd = ref(false);

const scrollableStart = ref<HTMLDivElement | null>(null);
const scrollableEnd = ref<HTMLDivElement | null>(null);

let observer: IntersectionObserver | null = null;

watchEffect(() => {
  observer?.disconnect();

  if (!scrollableStart.value || !scrollableEnd.value) {
    return;
  }

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.target === scrollableStart.value) {
        scrolledStart.value = entry.isIntersecting;

        if (scrolledStart.value) {
          emit('scrolled-start');
        }
      }
      if (entry.target === scrollableEnd.value) {
        scrolledEnd.value = entry.isIntersecting;

        if (scrolledEnd.value) {
          emit('scrolled-end');
        }
      }

      if (!scrolledStart.value && !scrolledEnd.value) {
        emit('scrolled-between');
      }
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: [0, 1],
    },
  );

  observer.observe(scrollableStart.value);
  observer.observe(scrollableEnd.value);
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<template>
  <div
    :class="[
      {
        'disable-masks':
          props.disableMasks ||
          (props.disableStartMask && props.disableEndMask),
        'disable-start-mask': props.disableStartMask,
        'disable-end-mask': props.disableEndMask,
        'scrolled-start': scrolledStart,
        'scrolled-end': scrolledEnd,
        'hide-scrollbar': props.hideScrollbar,
      },
      props.direction,
      props.overflow,
      'scrollable',
    ]"
  >
    <div ref="scrollableStart" />
    <slot />
    <div ref="scrollableEnd" />
  </div>
</template>

<style lang="scss" scoped>
.scrollable {
  position: relative;
  overflow: auto;

  &.horizontal {
    overflow-x: auto;
    overflow-y: hidden;

    &.overlay {
      overflow-x: overlay;
    }
  }

  &.vertical {
    overflow-x: hidden;
    overflow-y: auto;

    &.overlay {
      overflow-y: overlay;
    }
  }

  &.hide-scrollbar {
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &:not(.disable-masks) {
    &.horizontal {
      &.scrolled-start:not(.scrolled-end):not(.disable-end-mask),
      &.disable-start-mask:not(.scrolled-end):not(.scrolled-start) {
        &.overlay,
        &.hide-scrollbar {
          -webkit-mask-box-image-source: url(./assets/images/content-gradient-mask-right-no-scrollbar.png);
        }

        -webkit-mask-box-image-source: url(./assets/images/content-gradient-mask-right.png);
        -webkit-mask-box-image-slice: 0 0 8 18 fill;
      }

      &.scrolled-end:not(.scrolled-start):not(.disable-start-mask),
      &.disable-end-mask:not(.scrolled-end):not(.scrolled-start) {
        &.overlay,
        &.hide-scrollbar {
          -webkit-mask-box-image-source: url(./assets/images/content-gradient-mask-left-no-scrollbar.png);
        }

        -webkit-mask-box-image-source: url(./assets/images/content-gradient-mask-left.png);
        -webkit-mask-box-image-slice: 0 18 8 0 fill;
      }

      &:not(.scrolled-end):not(.scrolled-start):not(.disable-start-mask):not(.disable-end-mask) {
        &.overlay,
        &.hide-scrollbar {
          -webkit-mask-box-image-source: url(./assets/images/content-gradient-mask-both-horizontal-no-scrollbar.png);
        }

        -webkit-mask-box-image-source: url(./assets/images/content-gradient-mask-both-horizontal.png);
        -webkit-mask-box-image-slice: 0 18 8 18 fill;
      }
    }

    &.vertical {
      &.scrolled-start:not(.scrolled-end):not(.disable-end-mask),
      &.disable-start-mask:not(.scrolled-end):not(.scrolled-start) {
        &.overlay,
        &.hide-scrollbar {
          -webkit-mask-box-image-source: url(./assets/images/content-gradient-mask-bottom-no-scrollbar.png);
        }

        -webkit-mask-box-image-source: url(./assets/images/content-gradient-mask-bottom.png);
        -webkit-mask-box-image-slice: 0 8 18 0 fill;
      }

      &.scrolled-end:not(.scrolled-start):not(.disable-start-mask),
      &.disable-end-mask:not(.scrolled-end):not(.scrolled-start) {
        &.overlay,
        &.hide-scrollbar {
          -webkit-mask-box-image-source: url(./assets/images/content-gradient-mask-top-no-scrollbar.png);
        }

        -webkit-mask-box-image-source: url(./assets/images/content-gradient-mask-top.png);
        -webkit-mask-box-image-slice: 18 8 0 0 fill;
      }

      &:not(.scrolled-end):not(.scrolled-start):not(.disable-start-mask):not(.disable-end-mask) {
        &.overlay,
        &.hide-scrollbar {
          -webkit-mask-box-image-source: url(./assets/images/content-gradient-mask-both-no-scrollbar.png);
        }

        -webkit-mask-box-image-source: url(./assets/images/content-gradient-mask-both.png);
        -webkit-mask-box-image-slice: 18 8 18 0 fill;
      }
    }
  }
}
</style>
