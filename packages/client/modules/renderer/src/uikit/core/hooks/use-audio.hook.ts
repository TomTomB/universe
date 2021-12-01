export const useAudio = (src: string, isDisabled = false) => {
  const audio = new Audio(src);

  const play = () => {
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
