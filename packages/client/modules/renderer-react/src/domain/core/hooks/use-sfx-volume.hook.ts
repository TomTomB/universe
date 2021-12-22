import { useAppSelector } from '@/store';
import { selectMasterVolume, selectSfxVolume } from '@/store/slices';
import { useMemo } from 'react';

export const useSfxVolume = () => {
  const masterVolume = useAppSelector(selectMasterVolume);
  const sfxVolume = useAppSelector(selectSfxVolume);

  const volume = useMemo(
    () => Math.floor((masterVolume / 100) * sfxVolume) / 100,
    [masterVolume, sfxVolume],
  );

  return volume;
};
