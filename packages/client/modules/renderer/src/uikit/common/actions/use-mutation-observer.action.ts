export const mutationObserver = (
  node: HTMLElement,
  options?: MutationObserverInit,
) => {
  const observer = new MutationObserver((e) => {
    const record = e[0];
    node.dispatchEvent(new CustomEvent('element-mutation', { detail: record }));
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
