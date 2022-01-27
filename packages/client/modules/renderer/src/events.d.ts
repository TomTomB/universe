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

    /**
     * This event can only be used if the clickOutside action is present on the element.
     */
    'onclick-outside'?: (
      event: CustomEvent & {
        target: EventTarget & T;
      },
    ) => void;

    /**
     * This event can only be used if the mutationObserver action is present on the element.
     */
    'onelement-mutation'?: (
      event: CustomEvent<MutationRecord> & {
        target: EventTarget & T;
      },
    ) => void;

    /**
     * This event can only be used if the popper action is present on the element.
     */
    'onpopper-placement-change'?: (
      event: CustomEvent<
        | 'top'
        | 'bottom'
        | 'right'
        | 'left'
        | 'top-start'
        | 'top-end'
        | 'bottom-start'
        | 'bottom-end'
        | 'right-start'
        | 'right-end'
        | 'left-start'
        | 'left-end'
      > & {
        target: EventTarget & T;
      },
    ) => void;
  }
}
