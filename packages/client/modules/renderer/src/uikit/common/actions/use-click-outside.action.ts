export const clickOutside = (node: HTMLElement) => {
  const handleClick = (e: MouseEvent) => {
    if (node.contains(e.target as Node) || e.defaultPrevented) {
      return;
    }

    node.dispatchEvent(new CustomEvent('click-outside'));
  };

  node.addEventListener('click', handleClick, true);

  return {
    destroy() {
      node.removeEventListener('click', handleClick, true);
    },
  };
};
