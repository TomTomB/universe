import type { Placement } from '@popperjs/core';

declare namespace svelte.JSX {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> {
    // These are custom events dispatched via svelte actions.
    // For now they need to be defined here.
    // See: https://github.com/sveltejs/language-tools/issues/431

    /**
     * This event can only be used if the resizeObserver action is present on the element.
     */
    'onelement-resize'?: (
      event: CustomEvent<DOMRect> & {
        target: EventTarget & T;
      },
    ) => void;

    'onclick-outside'?: (
      event: CustomEvent & {
        target: EventTarget & T;
      },
    ) => void;

    'onelement-mutation'?: (
      event: CustomEvent<MutationRecord> & {
        target: EventTarget & T;
      },
    ) => void;

    'onpopper-placement-change'?: (
      event: CustomEvent<Placement> & {
        target: EventTarget & T;
      },
    ) => void;
  }
}
