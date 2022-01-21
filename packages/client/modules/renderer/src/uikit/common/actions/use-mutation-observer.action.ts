export const mutationObserver = (
  node: HTMLElement,
  options?: MutationObserverInit,
) => {
  const observer = new MutationObserver(() => {
    node.dispatchEvent(new CustomEvent('element-mutation'));
  });

  observer.observe(node, options);

  return {
    destroy() {
      observer.disconnect();
    },
  };
};
