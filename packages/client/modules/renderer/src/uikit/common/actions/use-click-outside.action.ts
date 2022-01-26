export interface UseClickOutsideOptions {
  exclude?: Array<HTMLElement | null | undefined>;
}

export const clickOutside = (
  node: HTMLElement,
  { exclude }: UseClickOutsideOptions = {},
) => {
  const handleClick = (e: MouseEvent) => {
    if (e.defaultPrevented) {
      return;
    }

    if (exclude) {
      const isExcluded = exclude.some((excludedNode) => {
        if (excludedNode) {
          return (
            excludedNode.contains(e.target as Node) || excludedNode === e.target
          );
        }
        return false;
      });

      if (isExcluded) {
        return;
      }
    }

    if (node.contains(e.target as Node)) {
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
