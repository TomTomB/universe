<script lang="ts" setup>
import {
  useClickOutside,
  useMutationObserver,
  usePopper,
} from '@/uikit/core/hooks';
import type { Instance as PopperInstance, Placement } from '@popperjs/core';
import { onBeforeUnmount, ref, watchEffect } from 'vue';

const props = withDefaults(
  defineProps<{
    attachTo: HTMLElement | undefined | null;
    flyoutFrameType?: 'default' | 'with-close';
    placement?: Placement;
    closeOnClickOutside?: boolean;
    show?: boolean;
  }>(),
  {
    placement: 'auto',
    flyoutFrameType: 'default',
    closeOnClickOutside: true,
  },
);

const emit = defineEmits<{
  (event: 'close'): void;
}>();

let popper: PopperInstance | null = null;

const flyoutFrameRef = ref<HTMLElement | null>(null);

const mutationObserver = useMutationObserver(
  flyoutFrameRef,
  () => popper?.update(),
  {
    childList: true,
    subtree: true,
  },
);

const disposeClickOutside = useClickOutside(flyoutFrameRef, () => {
  if (props.closeOnClickOutside) {
    emit('close');
  }
});

watchEffect(() => {
  if (flyoutFrameRef.value && props.attachTo) {
    popper = usePopper(props.attachTo, flyoutFrameRef.value, {
      placement: props.placement,
      arrowPadding: props.flyoutFrameType === 'default' ? 17 : 30,
      offset: [0, 18],
    });
  }
});

onBeforeUnmount(() => {
  cleanupPopper();
  mutationObserver.dispose();
  disposeClickOutside();
});

const cleanupPopper = () => popper?.destroy();
</script>

<template>
  <transition name="fly">
    <div
      v-if="show"
      ref="flyoutFrameRef"
      class="flyout-frame"
      :data-popper-placement="placement"
    >
      <div class="flyout-frame-inner">
        <div class="border" />
        <div class="sub-border" />
        <div class="caret" data-popper-arrow />

        <div class="flyout-frame-content">
          <slot />
        </div>
        <div
          v-if="flyoutFrameType === 'with-close'"
          class="close-button-container"
        >
          <button class="close-button" @click="$emit('close')">X</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.fly-enter-active {
  --anim-duration: 250ms;

  .caret::before {
    animation: caretIn 433ms steps(13, end) forwards;
  }
}

.fly-leave-active {
  --anim-duration: 200ms;

  .caret::before {
    background-image: url(./assets/images/pointer-outro-01.png);
    animation: caretOut 133ms steps(4, end) forwards;
  }
}

.fly-enter-active,
.fly-leave-active {
  transition: opacity var(--anim-duration) linear;

  .flyout-frame-content {
    transition: -webkit-mask-size var(--anim-duration)
      var(--easing-circular-ease-out);
  }

  .border,
  .sub-border {
    transition: transform var(--anim-duration) var(--easing-circular-ease-out);
  }

  .flyout-frame-inner {
    transition: transform var(--anim-duration) var(--easing-circular-ease-out);
  }
}

.fly-enter-from,
.fly-leave-to {
  opacity: 0;

  &[data-popper-placement^='top'],
  &[data-popper-placement^='bottom'] {
    .flyout-frame-content {
      -webkit-mask-size: 50% 100%;
    }

    .border,
    .sub-border {
      transform: scaleX(0.5);
    }
  }

  &[data-popper-placement^='left'],
  &[data-popper-placement^='right'] {
    .flyout-frame-content {
      -webkit-mask-size: 100% 50%;
    }

    .border,
    .sub-border {
      transform: scaleY(0.5);
    }
  }

  &[data-popper-placement^='top'] {
    .flyout-frame-inner {
      transform: translateY(1.5rem);
    }
  }

  &[data-popper-placement^='bottom'] {
    .flyout-frame-inner {
      transform: translateY(-1.5rem);
    }
  }

  &[data-popper-placement^='left'] {
    .flyout-frame-inner {
      transform: translateX(1.5rem);
    }
  }

  &[data-popper-placement^='right'] {
    .flyout-frame-inner {
      transform: translateX(-1.5rem);
    }
  }
}

@keyframes caretIn {
  from {
    background-position: 0;
  }
  to {
    background-position: -312px;
  }
}

@keyframes caretOut {
  from {
    background-position: 0;
  }
  to {
    background-position: -96px;
  }
}

.flyout-frame-inner {
  will-change: transform;
}

.flyout-frame {
  will-change: opacity;

  &[data-popper-placement^='top'],
  &[data-popper-placement^='bottom'] {
    .border {
      width: 100%;
      height: 100%;
    }

    .sub-border {
      left: 8px;
      width: calc(100% - 16px);
      height: 0;

      &::before {
        width: 100%;
        height: 0;
        border-image-source: url(./assets/images/sub-border-primary-horizontal.png);
        border-width: 4px 4px 0 4px;
        border-image-width: 4px 4px 0 4px;
        border-image-slice: 4 4 0 4;
        border-image-repeat: stretch;
        border-style: solid;
      }
    }

    .caret {
      transform-origin: center center;
    }
  }

  &[data-popper-placement^='left'],
  &[data-popper-placement^='right'] {
    .border {
      width: 100%;
      height: 100%;
    }

    .sub-border {
      width: 0;
      height: calc(100% - 16px);
      top: 8px;

      &::before {
        height: 100%;
        width: 0;
        border-image-source: url(./assets/images/sub-border-primary-vertical.png);
        border-width: 4px 4px 4px 0;
        border-image-width: 4px 4px 4px 0;
        border-image-slice: 4 4 4 0;
        border-image-repeat: stretch;
        border-style: solid;
      }
    }
  }

  &[data-popper-placement^='top'] {
    .border {
      border-image: linear-gradient(
          to top,
          #614a1f 0,
          #463714 5px,
          #463714 100%
        )
        1 stretch;
    }

    .sub-border {
      bottom: 0;
    }

    .caret {
      bottom: -13px;
    }
  }

  &[data-popper-placement^='bottom'] {
    .border {
      border: 2px solid transparent;
      border-image: linear-gradient(
          to bottom,
          #614a1f 0,
          #463714 5px,
          #463714 100%
        )
        1 stretch;
    }

    .sub-border {
      top: -4px;

      &::before {
        transform: rotate(180deg);
      }
    }

    .caret {
      top: -13px;

      &::before {
        transform: rotate(180deg);
      }
    }
  }

  &[data-popper-placement^='left'] {
    .border {
      border: 2px solid transparent;
      border-image: linear-gradient(
          to left,
          #614a1f 0,
          #463714 5px,
          #463714 100%
        )
        1 stretch;
    }

    .sub-border {
      right: 0;

      &::before {
        transform: rotate(180deg);
      }
    }

    .caret {
      right: -17px;

      &::before {
        transform: rotate(270deg);
      }
    }
  }

  &[data-popper-placement^='right'] {
    .border {
      border: 2px solid transparent;
      border-image: linear-gradient(
          to right,
          #614a1f 0,
          #463714 5px,
          #463714 100%
        )
        1 stretch;
    }

    .sub-border {
      left: -4px;
    }

    .caret {
      left: -17px;

      &::before {
        transform: rotate(90deg);
      }
    }
  }
}

.border {
  border: 2px solid transparent;
  position: absolute;
  box-shadow: 0 0 0 1px rgba(1, 10, 19, 0.48);
  z-index: 1;
  transform-origin: center center;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    top: -2px;
    left: -2px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }
}

.sub-border {
  position: absolute;
  display: flex;
  transform-origin: center center;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
  }
}

.caret {
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 2;
  width: 24px;
  height: 16px;

  &::before {
    content: '';
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(./assets/images/pointer-intro-01.png);
    background-size: initial;
    background-position: -312px;
    background-repeat: no-repeat;
  }
}

.close-button-container {
  &::before {
    content: '';
    position: absolute;
    width: 38px;
    height: 68px;
    top: -20px;
    right: -20px;
    background-image: url(./assets/images/frame-button-close-top-down.png);
    background-size: 38px 68px;
    z-index: 1;
  }
}

.close-button {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 28px;
  height: 28px;
  z-index: 1;

  > div {
    width: 24px;
    height: 24px;
  }
}

.flyout-frame-content {
  position: relative;
  background-color: #010a13;
  -webkit-mask-image: linear-gradient(to left, #000, #000);
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: 100% 100%;
  padding: 2px;
  will-change: -webkit-mask-size;
}
</style>
