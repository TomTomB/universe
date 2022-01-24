export const resizeObserver = (node: HTMLElement) => {
  const observer = new ResizeObserver((entries) => {
    const entry = entries[0];

    node.dispatchEvent(
      new CustomEvent('element-resize', {
        detail: entry.target.getBoundingClientRect(),
      }),
    );
  });

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
};
