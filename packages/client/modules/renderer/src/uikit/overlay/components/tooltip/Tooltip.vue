<script lang="ts" setup>
import { useMutationObserver, usePopper } from '@/uikit/core/hooks';
import type { Instance as PopperInstance, Placement } from '@popperjs/core';
import { onBeforeUnmount, ref, watchEffect } from 'vue';

const props = withDefaults(
  defineProps<{
    attachTo: HTMLElement | undefined | null;
    tooltipType?: 'default' | 'system';
    delay?: number;
    placement?: Placement;
  }>(),
  { delay: 0, placement: 'auto', tooltipType: 'default' },
);

let popper: PopperInstance | null = null;
let delayTimeout: number | null = null;

const tooltipRef = ref<HTMLElement | null>(null);
const show = ref(false);

const mutationObserver = useMutationObserver(
  tooltipRef,
  () => popper?.update(),
  {
    childList: true,
    subtree: true,
  },
);

const attachedElementMouseEnter = () => {
  if (props.delay) {
    delayTimeout = window.setTimeout(() => {
      show.value = true;
    }, props.delay);
  } else {
    show.value = true;
  }
};

const attachedElementMouseLeave = () => {
  if (delayTimeout !== null) {
    window.clearTimeout(delayTimeout);
    delayTimeout = null;
  }

  show.value = false;
};

watchEffect(() => {
  if (tooltipRef.value && props.attachTo) {
    popper = usePopper(props.attachTo, tooltipRef.value, {
      placement: props.placement,
      offset: [0, props.tooltipType === 'default' ? 15 : 10],
      arrowPadding: props.tooltipType === 'default' ? 20 : 10,
    });
  }
});

watchEffect(() => {
  props.attachTo?.addEventListener('mouseenter', attachedElementMouseEnter);
  props.attachTo?.addEventListener('mouseleave', attachedElementMouseLeave);
});

onBeforeUnmount(() => {
  if (delayTimeout !== null) {
    window.clearTimeout(delayTimeout);
  }

  cleanupPopper();

  mutationObserver.dispose();

  props.attachTo?.removeEventListener('mouseenter', attachedElementMouseEnter);
  props.attachTo?.removeEventListener('mouseleave', attachedElementMouseLeave);
});

const cleanupPopper = () => popper?.destroy();
</script>

<template>
  <transition name="fade" @after-leave="cleanupPopper">
    <div v-if="show" ref="tooltipRef" :class="['tooltip', props.tooltipType]">
      <div class="tooltip-content">
        <slot />
      </div>
      <div v-if="tooltipType === 'default'" class="tooltip-sub-border" />
      <div class="tooltip-arrow" data-popper-arrow />
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s var(--easing-circular-ease-out);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.tooltip-sub-border {
  position: absolute;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    border-image-repeat: stretch;
    border-style: solid;
  }
}

.tooltip {
  --frameColors: #614a1f 0, #463714 5px, #463714 100%;

  background-color: #010a13;
  box-shadow: 0 0 0 1px rgba(1, 10, 19, 0.48);
  min-width: 41px;
  border: 2px solid transparent;
  z-index: 100;
  pointer-events: none;
  will-change: opacity;

  &::before {
    content: '';
    position: absolute;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    top: 6px;
    left: 6px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }

  .tooltip-content ::v-deep(p:only-child) {
    margin-bottom: 0;
    padding: 8px 6px;
    max-width: 250px;
    text-align: center;
  }

  .tooltip-arrow {
    width: 24px;
    height: 15px;

    &::after {
      content: '';
      position: absolute;
      background: url(./assets/images/tooltip-caret.png) center no-repeat;
      width: 24px;
      height: 15px;
    }
  }

  &[data-popper-placement^='top'],
  &[data-popper-placement^='bottom'] {
    .tooltip-arrow {
      &::after {
        transform-origin: center center;
      }
    }

    .tooltip-sub-border {
      left: 8px;
      right: 8px;

      &::before {
        left: 0;
        right: 0;
        height: 0;
        border-image-source: url(./assets/images/tooltip-sub-border-horizontal.png);
        border-width: 4px 4px 0 4px;
        border-image-width: 4px 4px 0 4px;
        border-image-slice: 4 4 0 4;
      }
    }
  }

  &[data-popper-placement^='left'],
  &[data-popper-placement^='right'] {
    .tooltip-sub-border {
      top: 8px;
      bottom: 8px;

      &::before {
        top: 0;
        bottom: 0;
        width: 0;
        border-image-source: url(./assets/images/tooltip-sub-border-vertical.png);
        border-width: 4px 4px 4px 0;
        border-image-width: 4px 4px 4px 0;
        border-image-slice: 4 4 4 0;
      }
    }
  }

  &[data-popper-placement^='top'] {
    border-image: linear-gradient(to top, var(--frameColors)) 1 stretch;

    .tooltip-arrow {
      bottom: 0;
      &::after {
        bottom: -15px;
        left: 0;
      }
    }

    .tooltip-sub-border {
      bottom: -2px;
    }
  }

  &[data-popper-placement^='bottom'] {
    border-image: linear-gradient(to bottom, var(--frameColors)) 1 stretch;

    .tooltip-arrow {
      top: 0;
      &::after {
        transform: rotate(180deg);
        top: -15px;
        left: 0;
      }
    }

    .tooltip-sub-border {
      top: -2px;
      transform: rotate(180deg);
    }
  }

  &[data-popper-placement^='left'] {
    border-image: linear-gradient(to left, var(--frameColors)) 1 stretch;

    .tooltip-arrow {
      right: 0;

      &::after {
        transform: rotate(-90deg) translateX(-19px);
        transform-origin: top left;
        right: -24px;
      }
    }

    .tooltip-sub-border {
      right: -6px;
      transform: rotate(180deg);
    }
  }

  &[data-popper-placement^='right'] {
    border-image: linear-gradient(to right, var(--frameColors)) 1 stretch;

    .tooltip-arrow {
      left: 0;

      &::after {
        transform: rotate(90deg) translateX(19px);
        transform-origin: top right;
        left: -24px;
      }
    }

    .tooltip-sub-border {
      left: -6px;
    }
  }

  &.system {
    .tooltip-arrow {
      width: 16px;
      height: 11px;

      &::after {
        background: url(./assets/images/tooltip-system-caret.png) center
          no-repeat;
        width: 16px;
        height: 11px;
      }
    }

    &[data-popper-placement^='top'] {
      .tooltip-arrow {
        bottom: 0;
        &::after {
          bottom: -11px;
          left: 0;
        }
      }
    }

    &[data-popper-placement^='bottom'] {
      .tooltip-arrow {
        top: 0;
        &::after {
          top: -11px;
          left: 0;
        }
      }
    }

    &[data-popper-placement^='left'] {
      .tooltip-arrow {
        right: 0;

        &::after {
          transform: rotate(-90deg);
          transform-origin: initial;
          right: -14px;
        }
      }
    }

    &[data-popper-placement^='right'] {
      .tooltip-arrow {
        left: 0;

        &::after {
          transform: rotate(90deg);
          left: -14px;
          transform-origin: initial;
        }
      }
    }
  }
}
</style>
