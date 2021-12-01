import { useStore } from '@/store';
import type {
  SplashScreenAudioMachine,
  SplashScreenVideoMachine,
} from '@/uikit/core/machines';
import { Checkbox } from '@/uikit/forms/components';
import type { FC } from 'react';
import type { State } from 'xstate';
import * as C from './controls.styles';

interface SplashScreenControlsProps {
  hasIntroVideo?: boolean;
  music: {
    current: State<
      SplashScreenAudioMachine.MachineContext,
      SplashScreenAudioMachine.MachineEvent
    >;
    send: (event: SplashScreenAudioMachine.MachineEvent) => void;
  };
  video: {
    current: State<
      SplashScreenVideoMachine.MachineContext,
      SplashScreenVideoMachine.MachineEvent
    >;
    send: (event: SplashScreenVideoMachine.MachineEvent) => void;
  };
}

export const Controls: FC<SplashScreenControlsProps> = ({ music, video }) => {
  const store = useStore();

  return (
    <C.SplashScreenControlsContainer>
      <C.StyledControls>
        <C.UniverseLogo>Universe</C.UniverseLogo>
        <C.LineVerticalFade />
        <C.ReplayButton
          onClick={() => {
            music.send({ type: 'REPLAY' });
            video.send({ type: 'REPLAY' });
          }}
          disabled={
            music.current.matches('disabled') &&
            video.current.matches('disabled')
          }
        />

        <C.SplashCheckboxContainer>
          <Checkbox
            id="disableLoginAnimations"
            label="Disable Login Animations"
            name="disableLoginAnimations"
            value={!store.playLoginAnimations}
            onChange={() => {
              store.setPlayLoginAnimations(!store.playLoginAnimations);
            }}
          />
          <Checkbox
            id="disableLoginMusic"
            label="Disable Login Music"
            name="disableLoginMusic"
            value={!store.playLoginMusic}
            onChange={() => {
              store.setPlayLoginMusic(!store.playLoginMusic);
            }}
          />
        </C.SplashCheckboxContainer>
      </C.StyledControls>
    </C.SplashScreenControlsContainer>
  );
};
