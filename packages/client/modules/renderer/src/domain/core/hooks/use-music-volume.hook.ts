import { useAppSelector } from '@/store';
import { selectMasterVolume, selectMusicVolume } from '@/store/slices';
import { useMemo } from 'react';

export const useMusicVolume = () => {
  const masterVolume = useAppSelector(selectMasterVolume);
  const musicVolume = useAppSelector(selectMusicVolume);

  const volume = useMemo(
    () => Math.floor((masterVolume / 100) * musicVolume) / 100,
    [masterVolume, musicVolume],
  );

  return volume;
};
