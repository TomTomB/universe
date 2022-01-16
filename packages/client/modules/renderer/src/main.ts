import App from './App.svelte';

const app = new App({
  target: document.getElementById('universe-app'),
});

window.electron.window.didLoad();

export default app;
