import type { LCUCredentials } from '@/types';

export const initLCU = () => {
  window.electron.lcu.onConnect((d: LCUCredentials) => {
    console.log(d);
  });

  window.electron.lcu.onDisconnect(() => {
    console.log('disconnect');
  });
};
