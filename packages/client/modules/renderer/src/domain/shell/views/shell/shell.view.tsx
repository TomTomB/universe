import { type FC, useEffect } from 'react';
import { CloseModal, TitleBar } from '../../components';
import { PrimaryNavigation } from '../../components/primary-navigation';
import * as C from './shell.styles';

export const Shell: FC = ({ children }) => {
  useEffect(() => {
    window.electron.window.didLoad();
  }, []);

  return (
    <C.StyledShell>
      <TitleBar />
      <PrimaryNavigation showTickerOnly />

      <CloseModal />

      {children}
    </C.StyledShell>
  );
};
