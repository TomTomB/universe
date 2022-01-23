import { useAppSelector } from '@/store';
import {
  selectEnableMusic,
  selectEnableSound,
  selectMasterVolume,
  selectMusicVolume,
  selectPlayChampionSelectMusic,
  selectPlayLobbyPostGameMusic,
  selectPlayLoginMusic,
} from '@/store/slices';
import { useMemo } from 'react';

export const useMusicChannel = (
  type?: 'champ-select' | 'lobby-post-game' | 'login',
) => {
  const enableSound = useAppSelector(selectEnableSound);
  const enableMusic = useAppSelector(selectEnableMusic);
  const masterVolume = useAppSelector(selectMasterVolume);
  const musicVolume = useAppSelector(selectMusicVolume);

  const playChampionSelectMusic = useAppSelector(selectPlayChampionSelectMusic);
  const playLobbyPostGameMusic = useAppSelector(selectPlayLobbyPostGameMusic);
  const playLoginMusic = useAppSelector(selectPlayLoginMusic);

  const playAny = useMemo(() => {
    return enableSound && enableMusic && masterVolume > 0 && musicVolume > 0;
  }, [enableSound, enableMusic, masterVolume, musicVolume]);

  const playThis = useMemo(() => {
    if (!playAny) {
      return false;
    }

    if (!type) {
      return true;
    }

    switch (type) {
      case 'champ-select':
        return playChampionSelectMusic;
      case 'lobby-post-game':
        return playLobbyPostGameMusic;
      case 'login':
        return playLoginMusic;
    }
  }, [
    playAny,
    type,
    playChampionSelectMusic,
    playLobbyPostGameMusic,
    playLoginMusic,
  ]);

  return playThis;
};
