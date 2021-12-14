import { type FC, useEffect } from 'react';
import { TitleBar } from '../../components';
import * as C from './shell.styles';

export const Shell: FC = ({ children }) => {
  useEffect(() => {
    window.electron.window.didLoad();
  }, []);

  return (
    <C.StyledShell>
      <TitleBar />
      {children}
    </C.StyledShell>
  );
};
