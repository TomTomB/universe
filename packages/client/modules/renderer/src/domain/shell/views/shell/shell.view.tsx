import type { FC } from 'react';
import { useEffect } from 'react';
import { TitleBar } from '../../components';
import * as C from './shell.styles';
// import type { LCUCredentials } from '@/types';

export const Shell: FC = ({ children }) => {
  useEffect(() => {
    window.electron.window.didLoad();

    // const interval = setInterval(() => {
    //   invoke<LCUCredentials | Record<string, never>>(
    //     'get_league_credentials',
    //   ).then((credentials) => {
    //     console.log(credentials);
    //   });
    // }, 2500);

    // return () => clearInterval(interval);
  }, []);

  return (
    <C.StyledShell>
      <TitleBar />
      {children}
    </C.StyledShell>
  );
};
