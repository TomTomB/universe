import type { FC } from 'react';
import { Panel, SplashScreen } from '../../components';
import * as C from './login.styles';

export const Login: FC = () => {
  return (
    <C.Container>
      <SplashScreen />
      <Panel />
    </C.Container>
  );
};
