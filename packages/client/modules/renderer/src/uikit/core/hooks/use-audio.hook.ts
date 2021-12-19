import { useEffect, useMemo } from 'react';

export const useAudio = (src: string, isDisabled = false, volume = 1) => {
  const audio = useMemo(() => new Audio(src), [src]);

  useEffect(() => {
    audio.volume = volume;
  }, [audio, volume]);

  const play = () => {
    if (isDisabled) {
      return;
    }

    stop();
    audio.play();
  };

  const pause = () => {
    audio.pause();
  };

  const stop = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  const onMouseEnter = () => {
    if (isDisabled) {
      return;
    }
    play();
  };

  const onFocus = () => {
    if (isDisabled) {
      return;
    }
    play();
  };

  const onClick = () => {
    if (isDisabled) {
      return;
    }
    play();
  };

  return {
    play,
    pause,
    stop,
    hover: {
      onMouseEnter,
      onFocus,
    },
    active: {
      onClick,
    },
  };
};
