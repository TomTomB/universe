import { store } from '..';
import { toggleIsConnected } from '../slices';

export const initLCU = async () => {
  window.electron.lcu.onConnected(() => {
    store.dispatch(toggleIsConnected(true));
  });
  window.electron.lcu.onDisconnected(() => {
    store.dispatch(toggleIsConnected(false));
  });

  window.electron.lcu.ws.onMessage((message) => {
    console.log(JSON.parse(message));
  });

  // This is probably only needed during development.
  // Otherwise the state gets lost after a reload.
  const isConnected = await window.electron.lcu.getIsConnected();
  store.dispatch(toggleIsConnected(isConnected));

  // setTimeout(() => {
  //   const r = window.electron.lcu.request({
  //     url: '/lol-premade-voice/v1/participants',
  //     method: 'GET',
  //   });

  //   r.then((r) => console.log('response', r));
  // }, 2500);
};
