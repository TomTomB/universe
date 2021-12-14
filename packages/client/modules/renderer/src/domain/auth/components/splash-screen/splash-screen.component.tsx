import { useStore } from '@/store';
import {
  SplashScreenAudioMachine,
  SplashScreenVideoMachine,
} from '@/uikit/core/machines';
import { useMachine } from '@xstate/react';
import type { FC } from 'react';
import { useEffect } from 'react';
import { Controls, Video } from './partials';
import * as C from './splash-screen.styles';
import videoSplash from '@/assets/splash/videos/video-splash-snowdown2017.webm';
import musicSplash from '@/assets/splash/music/music-splash-snowdown2017.ogg';
import staticSplash from '@/assets/splash/images/image-splash-snowdown2017.jpg';

interface SplashScreenContainerProps {
  className?: string;
}

export const SplashScreen: FC<SplashScreenContainerProps> = ({ className }) => {
  const store = useStore();

  const [currentMusic, sendMusic] = useMachine(
    SplashScreenAudioMachine.machine,
    {
      context: {
        hasIntroAudio: false,
        isAudioEnabled: false,
        introAudio: null,
        loopAudio: null,
      },
    },
  );

  const [currentVideo, sendVideo] = useMachine(
    SplashScreenVideoMachine.machine,
    {
      context: {
        hasIntroVideo: false,
        isVideoEnabled: true,
        introVideo: null,
        loopVideo: null,
      },
    },
  );

  useEffect(() => {
    sendMusic({ type: 'SET_ENABLED', enabled: store.playLoginMusic });
  }, [store.playLoginMusic, sendMusic]);

  useEffect(() => {
    sendVideo({ type: 'SET_ENABLED', enabled: store.playLoginAnimations });
  }, [store.playLoginAnimations, sendVideo]);

  return (
    <C.StyledSplashScreenContainer className={className}>
      <Video
        music={{
          loop: musicSplash,
          current: currentMusic,
          send: sendMusic,
        }}
        picture={staticSplash}
        video={{
          loop: videoSplash,
          current: currentVideo,
          send: sendVideo,
        }}
      />
      <Controls
        hasIntroVideo
        music={{ current: currentMusic, send: sendMusic }}
        video={{ current: currentVideo, send: sendVideo }}
      />
    </C.StyledSplashScreenContainer>
  );
};
