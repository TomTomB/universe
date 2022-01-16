import { type Ref, watchEffect } from 'vue';

export const useClickOutside = (
  ref: Ref<HTMLElement | null | undefined>,
  handler: () => void,
  delayInit = true,
) => {
  const dispose = () => {
    document.removeEventListener('click', onClick);
  };

  const attach = () => {
    document.addEventListener('click', onClick);
  };

  const onClick = (e: MouseEvent) => {
    if (ref.value && !ref.value.contains(e.target as HTMLElement)) {
      handler();
    }
  };

  watchEffect(() => {
    if (ref.value) {
      if (delayInit) {
        window.setTimeout(() => {
          attach();
        }, 1);
      } else {
        attach();
      }
    } else {
      dispose();
    }
  });

  return dispose;
};
