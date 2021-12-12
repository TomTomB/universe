import { useStore } from '..';

export const initLCU = async () => {
  const store = useStore.getState();

  window.electron.lcu.onConnected(() => {
    store.lcu.setIsConnected(true);
  });
  window.electron.lcu.onDisconnected(() => {
    store.lcu.setIsConnected(false);
  });

  window.electron.lcu.ws.onMessage((message) => {
    console.log(JSON.parse(message));
  });

  // This is probably only needed during development.
  // Otherwise the state gets lost after a reload.
  const isConnected = await window.electron.lcu.getIsConnected();
  store.lcu.setIsConnected(isConnected);

  // setTimeout(() => {
  //   const r = window.electron.lcu.request({
  //     url: '/lol-premade-voice/v1/participants',
  //     method: 'GET',
  //   });

  //   r.then((r) => console.log('response', r));
  // }, 2500);
};
