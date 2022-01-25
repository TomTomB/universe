import { generateShortId } from '@/core/util';
import { onDestroy, onMount } from 'svelte';
import { writable, derived } from 'svelte/store';

export const openOverlays = writable<string[]>([]);

export const pushOverlay = (id: string) => {
  openOverlays.update((overlays) => [...overlays, id]);
};

export const popOverlay = (id: string) => {
  openOverlays.update((overlays) =>
    overlays.filter((overlay) => overlay !== id),
  );
};

export const currentOpenOverlay = derived(
  openOverlays,
  (overlays) =>
    overlays.find((o) => o.startsWith('PRIORITIZE')) ??
    overlays[overlays.length - 1],
);

const onEscFns: Array<() => boolean | undefined> = [];

window.addEventListener('keyup', (event) => {
  if (event.key === 'Escape') {
    for (const fn of onEscFns) {
      if (fn()) {
        break;
      }
    }
  }
});

export const useOverlay = (
  onEsc: () => boolean | undefined,
  {
    ignoreOnMount,
    prioritize,
  }: { ignoreOnMount?: boolean; prioritize?: boolean } = {},
) => {
  const id = prioritize ? `PRIORITIZE_${generateShortId()}` : generateShortId();
  onEscFns.unshift(onEsc);

  onMount(() => {
    if (ignoreOnMount) {
      return;
    }
    pushOverlay(id);
  });

  onDestroy(() => {
    popOverlay(id);
    onEscFns.splice(onEscFns.indexOf(onEsc), 1);
  });

  return { currentOpenOverlay, overlayId: id };
};
