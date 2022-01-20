export const resizeObserver = (node: HTMLElement) => {
  const observer = new ResizeObserver((entries) => {
    const { width, height } = entries[0].contentRect;
    node.dispatchEvent(
      new CustomEvent('element-resize', { detail: { width, height } }),
    );
  });

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
};
