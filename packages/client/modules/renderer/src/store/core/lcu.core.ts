export const initLCU = () => {
  window.electron.lcu.ws.onOpen(() => {
    console.log('LCU WebSocket Opened');
  });
  window.electron.lcu.ws.onMessage((message) => {
    console.log(JSON.parse(message));
  });

  window.electron.lcu.ws.onClose(() => {
    console.log('LCU WebSocket Closed');
  });

  window.electron.lcu.ws.onError(() => {
    console.log('LCU WebSocket Error');
  });

  setTimeout(() => {
    const r = window.electron.lcu.request({
      url: '/lol-premade-voice/v1/participants',
      method: 'GET',
    });

    r.then((r) => console.log('response', r));
  }, 2500);
};
