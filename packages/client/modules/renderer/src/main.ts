import App from './App.svelte';
import './styles/index.scss';

const app = new App({
  target: document.getElementById('universe-app'),
});

window.electron.window.didLoad();

export default app;
