import { store } from '../../../store';

export const useAudio = <Channel extends 'music' | 'sfx'>(
  src: string,
  channel: Channel,
  category?: Channel extends 'music'
    ? 'champ-select' | 'lobby-post-game' | 'login'
    : 'ambient-sounds' | 'pick-quote' | 'ban-quote',
) => {
  const runAudio = (src: string, volume: number) => {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play();
  };

  const getSfxVolume = () => {
    const { masterVolume, sfxVolume } = store.getState().settings;

    return Math.floor((masterVolume / 100) * sfxVolume) / 100;
  };

  const getMusicVolume = () => {
    const { masterVolume, musicVolume } = store.getState().settings;

    return Math.floor((masterVolume / 100) * musicVolume) / 100;
  };

  const checkSfxSettings = () => {
    const {
      enableSound,
      enableSfx,
      masterVolume,
      sfxVolume,
      playAmbientSounds,
      playBanQuotes,
      playPickQuotes,
    } = store.getState().settings;

    const playAny =
      enableSound && enableSfx && masterVolume > 0 && sfxVolume > 0;

    if (!playAny) {
      return;
    }

    if (!category) {
      return true;
    }

    switch (category) {
      case 'ambient-sounds':
        return playAmbientSounds;
      case 'ban-quote':
        return playBanQuotes;
      case 'pick-quote':
        return playPickQuotes;
    }

    return true;
  };

  const checkMusicSettings = () => {
    const {
      enableSound,
      enableMusic,
      masterVolume,
      musicVolume,
      playChampionSelectMusic,
      playLobbyPostGameMusic,
      playLoginMusic,
    } = store.getState().settings;

    const playAny =
      enableSound && enableMusic && masterVolume > 0 && musicVolume > 0;

    if (!playAny) {
      return;
    }

    if (!category) {
      return true;
    }

    switch (category) {
      case 'champ-select':
        return playChampionSelectMusic;
      case 'lobby-post-game':
        return playLobbyPostGameMusic;
      case 'login':
        return playLoginMusic;
    }

    return true;
  };

  const play = () => {
    if (channel === 'sfx') {
      const shouldPlay = checkSfxSettings();

      if (shouldPlay) {
        runAudio(src, getSfxVolume());
      }
    } else {
      const shouldPlay = checkMusicSettings();

      if (shouldPlay) {
        runAudio(src, getMusicVolume());
      }
    }
  };

  return {
    play,
    hover: {
      onMouseEnter: () => play(),
      onFocus: () => play(),
    },
    active: {
      onClick: () => play(),
    },
  };
};
