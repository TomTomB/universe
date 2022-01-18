declare namespace svelte.JSX {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> {
    elementresize?: (
      event: CustomEvent<{ width: number; height: number }> & {
        target: EventTarget & T;
      },
    ) => void;
  }
}
