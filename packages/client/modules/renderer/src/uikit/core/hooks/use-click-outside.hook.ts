import type { Ref } from 'vue';

export const useClickOutside = (
  ref: Ref<HTMLElement | null | undefined>,
  handler: () => void,
) => {
  const dispose = () => {
    document.removeEventListener('click', onClick);
  };

  const onClick = (e: MouseEvent) => {
    if (ref.value && !ref.value.contains(e.target as HTMLElement)) {
      handler();
    }
  };

  document.addEventListener('click', onClick);
  return dispose;
};
