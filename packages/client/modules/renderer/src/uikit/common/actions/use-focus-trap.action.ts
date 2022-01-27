import { createFocusTrap, type Options } from 'focus-trap';

export interface UseFocusTrapOptions {
  native?: Options;
  isEnabled?: boolean;
}

export const focusTrap = (
  node: HTMLElement,
  { native, isEnabled }: UseFocusTrapOptions = {},
) => {
  const trap = createFocusTrap(node, native);
  trap.activate();

  return {
    update(e: UseFocusTrapOptions) {
      if (e.isEnabled !== isEnabled) {
        if (e.isEnabled || e.isEnabled === undefined) {
          trap.unpause();
        } else {
          trap.pause();
        }
      }
    },
    destroy() {
      trap.deactivate();
    },
  };
};
