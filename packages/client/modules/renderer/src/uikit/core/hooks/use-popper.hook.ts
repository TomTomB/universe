import {
  createPopper,
  type Placement,
  type PositioningStrategy,
} from '@popperjs/core';
import { watchEffect } from 'vue';

export const usePopper = (
  refToAttachTo: HTMLElement,
  popperRef: HTMLElement,
  isEnabled = true,
  options?: {
    placement?: Placement;
    strategy?: PositioningStrategy;
    offset?: [number, number];
    arrowPadding?: number;
  },
) => {
  const popper = createPopper(refToAttachTo, popperRef, {
    placement: options?.placement ?? 'auto',
    strategy: options?.strategy ?? 'absolute',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: options?.offset ?? [0, 0],
        },
      },
      {
        name: 'arrow',
        options: {
          padding: options?.arrowPadding ?? 0,
        },
      },
    ],
  });

  const setPopperEventListeners = (enabled: boolean) => {
    popper?.setOptions((options) => ({
      ...options,
      modifiers: options.modifiers
        ? [...options.modifiers, { name: 'eventListeners', enabled }]
        : [{ name: 'eventListeners', enabled }],
    }));
  };

  watchEffect(() => {
    setPopperEventListeners(isEnabled);
  });

  return popper;
};
