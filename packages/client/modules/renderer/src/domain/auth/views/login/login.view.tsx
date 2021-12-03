import {
  FramedSelect,
  PlayButton,
  PlayButtonState,
  PrimaryMagicButton,
} from '@/uikit/forms/components';
import type { FC } from 'react';
import { SplashScreen } from '../../components';
import * as C from './login.styles';

export const Login: FC = () => {
  return (
    <C.Container>
      <SplashScreen />
      <div>
        <br />
        <br />
        <h1>Login</h1>
        <br />
        <br />

        <div style={{ padding: '0 10px' }}>
          <PrimaryMagicButton playSounds> Login </PrimaryMagicButton>

          <br />
          <br />
          <PlayButton
            buttonState={PlayButtonState.PLAY}
            prevButtonState={PlayButtonState.HIDDEN}
            type="button"
          >
            Play
          </PlayButton>

          <br />
          <br />

          <FramedSelect
            id="id"
            playSounds
            items={[
              { label: 'Label 1', value: 'value1' },
              { label: 'Label 2', value: 'value2' },
              { label: 'Label 3', value: 'value3' },
              { label: 'Label 4', value: 'value4' },
              { label: 'Label 5', value: 'value5' },
              { label: 'Foo', value: 'foo' },
            ]}
            label="A select"
            name="name1"
          />
        </div>
      </div>
    </C.Container>
  );
};
