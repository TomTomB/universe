export const clickOutside = (node: HTMLElement) => {
  const handleClick = (e: MouseEvent) => {
    if (node.contains(e.target as Node) || e.defaultPrevented) {
      return;
    }

    node.dispatchEvent(new CustomEvent('click-outside'));
  };

  document.addEventListener('click', handleClick, true);

  return {
    destroy() {
      document.removeEventListener('click', handleClick, true);
    },
  };
};
