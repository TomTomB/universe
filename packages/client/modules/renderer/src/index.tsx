import { Suspense, StrictMode } from 'react';
import ReactDOM from 'react-dom';
// import "./index.scss";
// import "./core/modules";
// import { App } from "./App";

ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<div>Loading... </div>}>
      <h1 style={{ color: 'white' }}>Universe!</h1>
    </Suspense>
  </StrictMode>,
  document.getElementById('universe-app')
);
