import type {
  SplashScreenAudioMachine,
  SplashScreenVideoMachine,
} from '@/uikit/core/machines';
import { ArrowFooter } from '@/uikit/forms/components';
import type { FC } from 'react';
import { useRef } from 'react';
import type { State } from 'xstate';
import * as C from './video.styles';

interface SplashScreenProps {
  video: {
    intro?: string;
    loop: string;
    current: State<
      SplashScreenVideoMachine.MachineContext,
      SplashScreenVideoMachine.MachineEvent
    >;
    send: (event: SplashScreenVideoMachine.MachineEvent) => void;
  };
  music: {
    intro?: string;
    loop: string;
    current: State<
      SplashScreenAudioMachine.MachineContext,
      SplashScreenAudioMachine.MachineEvent
    >;
    send: (event: SplashScreenAudioMachine.MachineEvent) => void;
  };
  picture: string;
}

export const Video: FC<SplashScreenProps> = ({ video, music, picture }) => {
  const introVideo = useRef<HTMLVideoElement>(null);
  const loopVideo = useRef<HTMLVideoElement>(null);

  const introMusic = useRef<HTMLVideoElement>(null);
  const loopMusic = useRef<HTMLVideoElement>(null);

  return (
    <>
      <C.BackgroundAudio
        src={music.intro}
        ref={introMusic}
        onLoadedData={() => {
          music.send({
            element: introMusic.current,
            type: 'LOADED_INTRO_MUSIC',
          });
        }}
      />
      <C.BackgroundAudio
        src={music.loop}
        ref={loopMusic}
        onLoadedData={() => {
          music.send({
            element: loopMusic.current,
            type: 'LOADED_LOOP_MUSIC',
          });
        }}
        onEnded={() => {
          music.send({
            type: 'LOOP_END',
          });
        }}
      />
      <C.StaticSplash
        src={picture}
        show={
          !video.current.context.isVideoEnabled ||
          video.current.matches('loading')
        }
      />
      <C.DynamicSplash
        show={video.current.matches('playing.loop')}
        enabled={
          video.current.context.isVideoEnabled &&
          !video.current.matches('loading')
        }
        ref={loopVideo}
        muted
        src={video.loop}
        onLoadedData={() => {
          video.send({
            element: loopVideo.current,
            type: 'LOADED_LOOP_VIDEO',
          });
        }}
        onEnded={() => {
          video.send({
            type: 'LOOP_END',
          });
        }}
      />
      <C.DynamicSplash
        show={video.current.matches('playing.intro')}
        enabled={
          video.current.context.isVideoEnabled &&
          !video.current.matches('loading')
        }
        ref={introVideo}
        muted
        src={video.intro}
        onLoadedData={() => {
          if (!introVideo.current) {
            return;
          }
          video.send({
            element: introVideo.current,
            type: 'LOADED_INTRO_VIDEO',
          });
        }}
        onEnded={() => {
          video.send({
            type: 'INTRO_END',
          });
        }}
      />

      <div style={{ position: 'relative', zIndex: 20000, marginTop: '30px' }}>
        <ArrowFooter hideCloseButton> Hello! </ArrowFooter>
      </div>
    </>
  );
};
