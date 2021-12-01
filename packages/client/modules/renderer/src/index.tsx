import { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
// import "./index.scss";
// import "./core/modules";
// import { App } from "./App";

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<div>Loading... </div>}>
      <h1 style={{ color: 'white' }}>Universe!</h1>
      <App />
      <a href="file.txt">Text</a>
    </Suspense>
  </StrictMode>,
  document.getElementById('universe-app'),
);
