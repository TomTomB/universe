import { useAppSelector } from '@/store';
import {
  selectEnableSfx,
  selectEnableSound,
  selectMasterVolume,
  selectSfxVolume,
  selectPlayAmbientSounds,
  selectPlayBanQuotes,
  selectPlayPickQuotes,
} from '@/store/slices';
import { useMemo } from 'react';

export const useSfxChannel = (
  type?: 'ambient-sounds' | 'ban-quote' | 'pick-quote',
) => {
  const enableSound = useAppSelector(selectEnableSound);
  const enableSfx = useAppSelector(selectEnableSfx);
  const masterVolume = useAppSelector(selectMasterVolume);
  const sfxVolume = useAppSelector(selectSfxVolume);

  const playAmbientSounds = useAppSelector(selectPlayAmbientSounds);
  const playBanQuotes = useAppSelector(selectPlayBanQuotes);
  const playPickQuotes = useAppSelector(selectPlayPickQuotes);

  const playAny = useMemo(() => {
    return enableSound && enableSfx && masterVolume > 0 && sfxVolume > 0;
  }, [enableSound, enableSfx, masterVolume, sfxVolume]);

  const playThis = useMemo(() => {
    if (!playAny) {
      return false;
    }

    if (!type) {
      return true;
    }

    switch (type) {
      case 'ambient-sounds':
        return playAmbientSounds;
      case 'ban-quote':
        return playBanQuotes;
      case 'pick-quote':
        return playPickQuotes;
    }
  }, [playAny, type, playAmbientSounds, playBanQuotes, playPickQuotes]);

  return playThis;
};
