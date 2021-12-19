import { useAppDispatch, useAppSelector } from '@/store';
import {
  selectEnableMusic,
  selectEnableSound,
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
import { type FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
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
  const enableSound = useAppSelector(selectEnableSound);
  const enableMusic = useAppSelector(selectEnableMusic);
  const playLoginAnimations = useAppSelector(selectPlayLoginAnimations);

  const dispatch = useAppDispatch();

  const { control, watch } =
    useForm<{ disableLoginAnimations: boolean; disableLoginMusic: boolean }>();

  const disableLoginAnimations = watch('disableLoginAnimations');
  const disableLoginMusic = watch('disableLoginMusic');

  useEffect(() => {
    dispatch(togglePlayLoginAnimations(!disableLoginAnimations));
  }, [disableLoginAnimations, dispatch]);

  useEffect(() => {
    dispatch(togglePlayLoginMusic(!disableLoginMusic));
  }, [disableLoginMusic, dispatch]);

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
            defaultValue={!playLoginAnimations}
            playSounds
            control={control}
          />
          <Checkbox
            id="disableLoginMusic"
            label="Disable Login Music"
            name="disableLoginMusic"
            defaultValue={!playLoginMusic}
            playSounds
            isDisabled={!enableMusic || !enableSound}
            control={control}
          />
        </C.SplashCheckboxContainer>
      </C.StyledControls>
    </C.SplashScreenControlsContainer>
  );
};
