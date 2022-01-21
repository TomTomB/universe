import {
  createPopper,
  type Placement,
  type PositioningStrategy,
} from '@popperjs/core';
import { mutationObserver } from './use-mutation-observer.action';

export const popper = (
  node: HTMLElement,
  {
    attachTo,
    placement,
    strategy,
    offset,
    arrowPadding,
  }: {
    attachTo: HTMLElement;
    placement?: Placement;
    strategy?: PositioningStrategy;
    offset?: [number, number];
    arrowPadding?: number;
  },
) => {
  const { destroy: destroyMutationObserver } = mutationObserver(node, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  const popper = createPopper(attachTo, node, {
    placement: placement ?? 'auto',
    strategy: strategy ?? 'absolute',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: offset ?? [0, 0],
        },
      },
      {
        name: 'arrow',
        options: {
          padding: arrowPadding ?? 0,
        },
      },
    ],
  });

  const nodeMutationCallback = () => {
    popper.update();
  };

  node.addEventListener('element-mutation', nodeMutationCallback);

  return {
    destroy: () => {
      node.removeEventListener('element-mutation', nodeMutationCallback);
      popper.destroy();
      destroyMutationObserver();
    },
  };
};
