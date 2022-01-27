/* eslint-disable @typescript-eslint/no-explicit-any */
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
    attributes: true,
    attributeFilter: ['data-popper-placement'],
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

  let lastPlacement = popper.state.placement;

  const dispatchPlacementChange = () => {
    node.dispatchEvent(
      new CustomEvent('popper-placement-change', {
        detail: popper.state.placement,
      }),
    );
  };

  const nodeMutationCallback = (event: CustomEvent<MutationRecord>) => {
    const record = event.detail;

    if (record.type !== 'attributes') {
      popper.update();
    } else {
      if (lastPlacement !== popper.state.placement) {
        lastPlacement = popper.state.placement;
        dispatchPlacementChange();
      }
    }
  };

  node.addEventListener('element-mutation', nodeMutationCallback as any);

  dispatchPlacementChange();

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
      node.removeEventListener('element-mutation', nodeMutationCallback as any);
      popper.destroy();
      destroyMutationObserver();
    },
  };
};
