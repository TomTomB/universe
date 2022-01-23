import { tick } from 'svelte';

const portalMap = new Map<string, HTMLElement>();

const mount = (node: HTMLElement, id = 'default') => {
  const portal = portalMap.get(id);

  if (!portal) {
    throw new Error(`Portal with id ${id} does not exist.`);
  }

  portal.insertBefore(node, null);

  return () => portal.contains(node) && portal.removeChild(node);
};

export const createPortal = (node: HTMLElement, id = 'default') => {
  const key = `$$portal.${id}`;

  if (portalMap.has(key)) {
    throw new Error(`Portal with id ${id} already exists.`);
  }

  portalMap.set(key, node);

  return { destroy: portalMap.delete.bind(portalMap, key) };
};

export const teleport = (node: HTMLElement, id = 'default') => {
  let destroy: () => unknown;
  const key = `$$portal.${id}`;

  if (!portalMap.has(key))
    tick().then(() => {
      destroy = mount(node, key);
    });
  else {
    destroy = mount(node, key);
  }

  return { destroy: () => destroy?.() };
};
