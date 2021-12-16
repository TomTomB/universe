import { useAppDispatch, useAppSelector } from '@/store';
import {
  selectPlayLoginAnimations,
  selectPlayLoginMusic,
  togglePlayLoginAnimations,
  togglePlayLoginMusic,
} from '@/store/slices';
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
  const playLoginMusic = useAppSelector(selectPlayLoginMusic);
  const playLoginAnimations = useAppSelector(selectPlayLoginAnimations);

  const dispatch = useAppDispatch();

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
            value={!playLoginAnimations}
            playSounds
            onChange={() => {
              dispatch(togglePlayLoginAnimations(!playLoginAnimations));
            }}
          />
          <Checkbox
            id="disableLoginMusic"
            label="Disable Login Music"
            name="disableLoginMusic"
            value={!playLoginMusic}
            playSounds
            onChange={() => {
              dispatch(togglePlayLoginMusic(!playLoginMusic));
            }}
          />
        </C.SplashCheckboxContainer>
      </C.StyledControls>
    </C.SplashScreenControlsContainer>
  );
};
