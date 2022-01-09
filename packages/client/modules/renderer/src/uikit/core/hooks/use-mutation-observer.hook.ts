import { type Ref, watchEffect } from 'vue';

export const useMutationObserver = (
  refToAttachTo: Ref<HTMLElement | null | undefined>,
  callback: MutationCallback,
  options?: MutationObserverInit,
) => {
  let observer: MutationObserver | null = null;

  const dispose = () => {
    observer?.disconnect();
    observer = null;
  };

  watchEffect(() => {
    dispose();

    if (refToAttachTo.value) {
      observer = new MutationObserver(callback);
      observer.observe(refToAttachTo.value, options);
    }
  });

  return { observer, dispose };
};
