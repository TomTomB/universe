import { generateShortId } from '@/core/util';
import { onDestroy, onMount } from 'svelte';
import { writable, derived } from 'svelte/store';

export const openModals = writable<string[]>([]);

export const pushModal = (id: string) => {
  openModals.update((modals) => [...modals, id]);
};

export const popModal = (id: string) => {
  openModals.update((modals) => modals.filter((modal) => modal !== id));
};

export const currentOpenModal = derived(
  openModals,
  (modals) => modals[modals.length - 1],
);

export const useModal = () => {
  const id = generateShortId();

  onMount(() => {
    pushModal(id);
  });

  onDestroy(() => {
    popModal(id);
  });

  return { currentOpenModal, modalId: id };
};
