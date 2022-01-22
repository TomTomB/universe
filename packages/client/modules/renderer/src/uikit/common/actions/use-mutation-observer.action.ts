export const mutationObserver = (
  node: HTMLElement,
  options?: MutationObserverInit,
) => {
  const observer = new MutationObserver(() => {
    node.dispatchEvent(new CustomEvent('element-mutation'));
  });

  observer.observe(node, options);

  return {
    update(e?: MutationObserverInit) {
      observer.disconnect();
      observer.observe(node, e);
    },
    destroy() {
      observer.disconnect();
    },
  };
};
