import type {
  SplashScreenAudioMachine,
  SplashScreenVideoMachine,
} from '@/uikit/core/machines';
import { type FC, useRef } from 'react';
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
        ref={introMusic}
        onLoadedData={() => {
          music.send({
            element: introMusic.current,
            type: 'LOADED_INTRO_MUSIC',
          });
        }}
      >
        <source src={music.intro} type="audio/ogg" />
      </C.BackgroundAudio>
      <C.BackgroundAudio
        ref={loopMusic}
        controls
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
      >
        <source src={music.loop} type="audio/ogg" />
      </C.BackgroundAudio>
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
      >
        <source src={video.loop} type="video/webm" />
      </C.DynamicSplash>
      <C.DynamicSplash
        show={video.current.matches('playing.intro')}
        enabled={
          video.current.context.isVideoEnabled &&
          !video.current.matches('loading')
        }
        ref={introVideo}
        muted
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
      >
        <source src={video.intro} type="video/webm" />
      </C.DynamicSplash>
    </>
  );
};
