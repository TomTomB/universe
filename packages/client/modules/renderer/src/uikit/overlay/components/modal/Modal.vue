<script lang="ts" setup>
import { modalRootSelector } from '@/core/constants';

const props = withDefaults(
  defineProps<{
    ally: {
      labeledById: string;
      describedById: string;
    };
    position: 'top' | 'right' | 'bottom' | 'left';
    show?: boolean;
    showCaret?: boolean;
    isDisabled?: boolean;
    isBorderless?: boolean;
    closeOnClickOutside?: boolean;
    topRightCloseButton?: {
      variant: 'circle' | 'toast';
      showBackground: boolean;
      allyLabel?: string;
    };
  }>(),
  { topRightCloseButton: undefined, closeOnClickOutside: true },
);

const emit = defineEmits<{
  (event: 'close'): void;
}>();

const backdropClick = () => {
  if (props.closeOnClickOutside) {
    emit('close');
  }
};
</script>

<template>
  <teleport :to="modalRootSelector">
    <transition name="modal">
      <div v-if="show" class="modal-container" @click="backdropClick()">
        <div
          :class="[
            position,
            {
              'show-caret': showCaret,
              'is-disabled': isDisabled,
            },
            'modal',
          ]"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="ally.labeledById"
          :aria-describedby="ally.describedById"
          @click.stop="() => {}"
        >
          <div v-if="!isBorderless" class="sub-border" />

          <slot />

          <template v-if="topRightCloseButton">
            <div
              v-if="topRightCloseButton.variant === 'circle'"
              class="top-right-close-container"
            >
              <button
                type="button"
                class="top-right-close-button"
                :aria-label="topRightCloseButton.allyLabel ?? 'Close modal'"
                @click="$emit('close')"
              />
            </div>
            <button
              v-else-if="topRightCloseButton.variant === 'toast'"
              :class="[
                { 'with-background': topRightCloseButton.showBackground },
                'top-right-close-toast-button',
              ]"
              :aria-label="topRightCloseButton.allyLabel ?? 'Close modal'"
              @click="$emit('close')"
            />
          </template>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s var(--easing-cushioned);

  .modal {
    transition: transform 0.3s var(--easing-cushioned);
  }
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from {
  .modal {
    transform: scaleX(0.6) translateY(4rem);
  }
}

.modal-leave-to {
  .modal {
    transform: scale(1.1);
  }
}

.modal-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.modal {
  --frameColors: #614a1f 0, #463714 5px, #463714 100%;

  border: 2px solid transparent;
  position: relative;
  background: #010a13;
  box-shadow: 0 0 0 1px rgba(1, 10, 19, 0.48);
  max-width: 800px;

  will-change: transform, opacity;

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

  &.with-caret {
    &::after {
      content: '';
      position: absolute;
      background: url(./assets/images/caret.png) 50% no-repeat;
    }

    &.top::after {
      height: 18px;
      width: 100%;
      top: -16px;
      transform: rotate(180deg);
    }

    &.bottom::after {
      height: 18px;
      width: 100%;
      bottom: -17px;
    }

    &.left::after {
      height: 100%;
      width: 32px;
      top: 0;
      left: -23px;
      transform: rotate(90deg);
    }

    &.right::after {
      height: 100%;
      width: 32px;
      top: 0;
      right: -23px;
      transform: rotate(-90deg);
    }
  }

  &.top,
  &.bottom {
    .sub-border {
      &::before,
      &::after {
        left: 12px;
        width: calc(100% - 24px);
        height: 0;
        border-width: 4px 4px 0 4px;
        border-image-width: 4px 4px 0 4px;
        border-image-slice: 4 4 0 4;
      }

      &::before {
        top: -6px;
        border-image-source: url(./assets/images/sub-border-secondary-horizontal.png);
      }

      &::after {
        bottom: -6px;
        border-image-source: url(./assets/images/sub-border-primary-horizontal.png);
      }
    }
  }

  &.left,
  &.right {
    .sub-border {
      &::before,
      &::after {
        top: 12px;
        height: calc(100% - 24px);
        width: 0;
        border-width: 4px 4px 4px 0;
        border-image-width: 4px 4px 4px 0;
        border-image-slice: 4 4 4 0;
      }

      &::before {
        left: -6px;
        border-image-source: url(./assets/images/sub-border-primary-vertical.png);
      }

      &::after {
        right: -6px;
        border-image-source: url(./assets/images/sub-border-secondary-vertical.png);
      }
    }
  }

  &.left {
    border-image: linear-gradient(to right, var(--frameColors) 100%) 1 stretch;
  }

  &.right {
    border-image: linear-gradient(to left, var(--frameColors) 100%) 1 stretch;

    .sub-border {
      &::before,
      &::after {
        transform: rotate(180deg);
      }

      &::before {
        border-image-source: url(./assets/images/sub-border-secondary-vertical.png);
      }

      &::after {
        border-image-source: url(./assets/images/sub-border-primary-vertical.png);
      }
    }
  }

  &.top {
    border-image: linear-gradient(to bottom, var(--frameColors) 100%) 1 stretch;

    .sub-border {
      &::before,
      &::after {
        transform: rotate(180deg);
      }

      &::before {
        border-image-source: url(./assets/images/sub-border-primary-horizontal.png);
      }

      &::after {
        border-image-source: url(./assets/images/sub-border-secondary-horizontal.png);
      }
    }
  }

  &.bottom {
    border-image: linear-gradient(to top, var(--frameColors) 100%) 1 stretch;
  }

  &.is-disabled {
    --frameColors: #39393e 0, #1e282d 5px, #1e282d 100%;

    &.top {
      .sub-border {
        &::before {
          border-image-source: url(./assets/images/sub-border-primary-horizontal-disabled.png);
        }

        &::after {
          border-image-source: url(./assets/images/sub-border-secondary-horizontal-disabled.png);
        }
      }
    }

    &.bottom {
      .sub-border {
        &::before {
          border-image-source: url(./assets/images/sub-border-secondary-horizontal-disabled.png);
        }

        &::after {
          border-image-source: url(./assets/images/sub-border-primary-horizontal-disabled.png);
        }
      }
    }

    &.right {
      .sub-border {
        &::before {
          border-image-source: url(./assets/images/sub-border-secondary-vertical-disabled.png);
        }

        &::after {
          border-image-source: url(./assets/images/sub-border-primary-vertical-disabled.png);
        }
      }
    }

    &.left {
      .sub-border {
        &::before {
          border-image-source: url(./assets/images/sub-border-primary-vertical-disabled.png);
        }

        &::after {
          border-image-source: url(./assets/images/sub-border-secondary-vertical-disabled.png);
        }
      }
    }
  }
}

.sub-border {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    display: flex;
    border-image-repeat: stretch;
    border-style: solid;
  }
}

.top-right-close-container {
  &::before {
    content: '';
    position: absolute;
    width: 38px;
    height: 68px;
    top: -22px;
    right: -22px;
    background-image: url(./assets/images/frame-button-close-top-down.png);
    background-size: 38px 68px;
  }
}

.top-right-close-button {
  position: absolute;
  top: -17px;
  right: -17px;
  width: 28px;
  height: 28px;

  > div {
    width: 24px;
    height: 24px;
  }
}

.top-right-close-toast-button {
  display: block;
  height: 24px;
  width: 24px;
  position: absolute;
  top: 8px;
  right: 8px;
  background: url(./assets/images/close.png), rgba(0, 0, 0, 0.5);
  cursor: pointer;
  border-radius: 4px;
  background-size: 75% 75%, 100% 100%;
  background-position: center;
  background-repeat: no-repeat;

  border: 0;
  appearance: none;
  padding: 0;

  &:hover {
    background: url(./assets/images/close.png), rgba(10, 20, 40, 0.5);
    background-size: 75% 75%, 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  &.with-background {
    background-color: #0a1428;
    background-size: 18px 18px;
    background-position: center;
    border-radius: 2px;
    opacity: 0.8;
    transition: opacity 0.05s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
