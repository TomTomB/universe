import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    window.electron.didLoad();
  }, []);

  return <p>App</p>;
};
