import * as C from './summoner-banner.styles';
import { BannerBase } from '../banner-base';
import { Videos } from './assets';
import { useEffect, useRef, useState, type FC } from 'react';
import classNames from 'classnames';
import type { Rank } from '@/types';

export type SummonerBannerType = 'primary' | 'ally';

export interface SummonerBannerProps {
  rank: Rank;
  showPattern?: boolean;
  bannerType?: SummonerBannerType;
  playIntro?: boolean;
}

export const SummonerBanner: FC<SummonerBannerProps> = ({
  rank,
  showPattern,
  bannerType = 'primary',
  playIntro = true,
}) => {
  const bannerIntroRef = useRef<HTMLVideoElement>(null);

  const [introTimeElapsed, setIntroTimeElapsed] = useState(false);
  const [introTimeElapsedTimeout, setIntroTimeElapsedTimeout] = useState<
    number | null
  >(null);

  const [introState, setIntroState] = useState<
    'LOADING' | 'LOADED' | 'PLAYING' | 'ENDED'
  >('LOADING');

  useEffect(() => {
    if (!bannerIntroRef.current) {
      return;
    }

    if (introState === 'LOADED') {
      if (playIntro) {
        bannerIntroRef.current.currentTime = 0;
        bannerIntroRef.current.play();
        const timeout = window.setTimeout(() => {
          setIntroTimeElapsed(true);
          setIntroTimeElapsedTimeout(null);
        }, 400);
        setIntroTimeElapsedTimeout(timeout);
        setIntroState('PLAYING');
      } else if (!introTimeElapsedTimeout) {
        const timeout = window.setTimeout(() => {
          setIntroTimeElapsed(true);
          setIntroTimeElapsedTimeout(null);
        }, 100);
        setIntroTimeElapsedTimeout(timeout);
      }
    } else if (introState === 'ENDED') {
      bannerIntroRef.current.currentTime = 0;
    }

    return () => {
      if (introTimeElapsedTimeout) {
        window.clearTimeout(introTimeElapsedTimeout);
      }
    };
  }, [introState, bannerIntroRef, introTimeElapsedTimeout, playIntro]);

  return (
    <C.StyledSummonerBanner className={bannerType}>
      <C.FadeCondition className={classNames({ show: introTimeElapsed })}>
        <BannerBase rank={rank} showPattern={showPattern} />
      </C.FadeCondition>

      <C.FadeCondition
        className={classNames({ show: !!playIntro && introState !== 'ENDED' })}
      >
        <C.IntroVideo
          src={
            bannerType === 'primary'
              ? Videos.bannerPrimaryIntro
              : Videos.bannerPrimaryIntro
          }
          onLoadedData={() => setIntroState('LOADED')}
          onEnded={() => setIntroState('ENDED')}
          muted
          ref={bannerIntroRef}
        />
      </C.FadeCondition>
    </C.StyledSummonerBanner>
  );
};
