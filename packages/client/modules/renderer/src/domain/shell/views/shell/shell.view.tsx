import { type FC, useEffect } from 'react';
import {
  CloseModal,
  TitleBar,
  PrimaryNavigation,
  SettingsModal,
} from '../../components';
import * as C from './shell.styles';

export const Shell: FC = ({ children }) => {
  useEffect(() => {
    window.electron.window.didLoad();
  }, []);

  return (
    <C.StyledShell>
      <TitleBar />
      <PrimaryNavigation showTickerOnly />

      <SettingsModal />
      <CloseModal />

      {children}
    </C.StyledShell>
  );
};
