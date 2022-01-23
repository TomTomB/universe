import {
  createPopper,
  type Placement,
  type PositioningStrategy,
  type StrictModifiers,
} from '@popperjs/core';
import { mutationObserver } from './use-mutation-observer.action';

export interface UsePopperOptions {
  attachTo: HTMLElement;
  enabled?: boolean;
  placement?: Placement;
  strategy?: PositioningStrategy;
  offset?: [number, number];
  arrowPadding?: number;
}

export const popper = (
  node: HTMLElement,
  {
    attachTo,
    enabled,
    placement,
    strategy,
    offset,
    arrowPadding,
  }: UsePopperOptions,
) => {
  const { destroy: destroyMutationObserver } = mutationObserver(node, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  const normalizeEnabled = (enabled: boolean | undefined) =>
    enabled === undefined || enabled ? true : false;

  const popper = createPopper<StrictModifiers>(attachTo, node, {
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
      {
        name: 'eventListeners',
        enabled: normalizeEnabled(enabled),
      },
    ],
  });

  const nodeMutationCallback = () => {
    popper.update();
  };

  node.addEventListener('element-mutation', nodeMutationCallback);

  return {
    update: (e: UsePopperOptions) => {
      if (e.attachTo !== attachTo) {
        popper.state.elements.reference = e.attachTo;
      }

      if (
        e.placement !== placement ||
        e.strategy !== strategy ||
        e.offset !== offset ||
        e.arrowPadding !== arrowPadding ||
        e.enabled !== enabled
      ) {
        popper.setOptions({
          placement: e.placement ?? 'auto',
          strategy: e.strategy ?? 'absolute',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: e.offset ?? [0, 0],
              },
            },
            {
              name: 'arrow',
              options: {
                padding: e.arrowPadding ?? 0,
              },
            },
            {
              name: 'eventListeners',
              enabled: normalizeEnabled(e.enabled),
            },
          ],
        });
      }

      popper.update();
    },
    destroy: () => {
      node.removeEventListener('element-mutation', nodeMutationCallback);
      popper.destroy();
      destroyMutationObserver();
    },
  };
};
