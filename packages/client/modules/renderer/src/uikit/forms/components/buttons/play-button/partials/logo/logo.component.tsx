import { Animation } from '../../../../base';
import { PlayButtonState } from '../../play-button.types';
import { Videos } from './assets';
import { useCompare } from '@/uikit/core/hooks';
import { useEffect, useRef, useState } from 'react';
import type { FC } from 'react';

export interface PlayButtonLogoProps {
  buttonState: { prev: PlayButtonState; curr: PlayButtonState };
  playPatcherIntro: boolean;
}

export enum LogoAnim {
  INTRO,
  IDLE,
  ACTIVE,
}

export const PlayButtonLogo: FC<PlayButtonLogoProps> = ({
  playPatcherIntro,
  buttonState,
}) => {
  const logoIntroAnim = useRef<HTMLVideoElement>(null);
  const logoMagicAnim = useRef<HTMLVideoElement>(null);
  const logoLoopIdleAnim = useRef<HTMLVideoElement>(null);
  const logoLoopActiveAnim = useRef<HTMLVideoElement>(null);

  const [shownLogoAnim, setShownLogoAnim] = useState<LogoAnim | null>(null);

  const [showLogoMagic, setShowLogoMagic] = useState(false);

  const [logoIntroEnded, setLogoIntroEnded] = useState(false);
  const [logoLoopIdleEnded, setLogoLoopIdleEnded] = useState(false);
  const [logoLoopActiveEnded, setLogoLoopActiveEnded] = useState(false);
  const [logoMagicEnded, setLogoMagicEnded] = useState(false);

  const hasButtonStateChanged = useCompare(buttonState.curr);

  useEffect(() => {
    if (!hasButtonStateChanged) {
      return;
    }

    if (
      !logoIntroAnim.current ||
      !logoLoopActiveAnim.current ||
      !logoLoopIdleAnim.current ||
      !logoMagicAnim.current
    ) {
      return;
    }

    switch (buttonState.curr) {
      case PlayButtonState.PATCHER:
        if (playPatcherIntro && buttonState.prev === PlayButtonState.HIDDEN) {
          setShownLogoAnim(LogoAnim.INTRO);
          logoIntroAnim.current.currentTime = 0;
          logoIntroAnim.current.play();
        } else {
          setShownLogoAnim(LogoAnim.ACTIVE);
          logoLoopActiveAnim.current.currentTime = 0;
          logoLoopActiveAnim.current.play();
        }

        break;

      case PlayButtonState.PLAY:
        if (shownLogoAnim !== LogoAnim.IDLE) {
          setShownLogoAnim(LogoAnim.IDLE);
          logoLoopIdleAnim.current.currentTime = 0;
          logoLoopIdleAnim.current.play();
        }

        break;

      case PlayButtonState.PLAY_DISABLED:
        setShowLogoMagic(true);
        logoMagicAnim.current.currentTime = 0;
        logoMagicAnim.current.play();

        if (shownLogoAnim !== LogoAnim.IDLE) {
          setShownLogoAnim(LogoAnim.IDLE);
        }
        break;

      case PlayButtonState.LOBBY:
        if (shownLogoAnim !== LogoAnim.IDLE) {
          setShownLogoAnim(LogoAnim.IDLE);
          logoLoopIdleAnim.current.currentTime = 0;
          logoLoopIdleAnim.current.play();
        }
        break;

      case PlayButtonState.LOBBY_DISABLED:
        if (shownLogoAnim !== LogoAnim.IDLE) {
          setShownLogoAnim(LogoAnim.IDLE);
          logoLoopIdleAnim.current.currentTime = 0;
          logoLoopIdleAnim.current.play();
        }
        break;

      case PlayButtonState.HIDDEN:
      default:
        setShowLogoMagic(false);
        setLogoIntroEnded(false);
        setLogoLoopIdleEnded(false);
        setLogoLoopActiveEnded(false);
        setLogoMagicEnded(false);
        setShownLogoAnim(null);
        break;
    }
  }, [hasButtonStateChanged, shownLogoAnim, playPatcherIntro, buttonState]);

  useEffect(() => {
    if (!logoIntroEnded) {
      return;
    }

    if (!logoLoopActiveAnim.current) {
      return;
    }

    setShownLogoAnim(LogoAnim.ACTIVE);
    logoLoopActiveAnim.current.currentTime = 0;
    logoLoopActiveAnim.current.play();
  }, [logoIntroEnded]);

  useEffect(() => {
    if (!logoLoopActiveEnded) {
      return;
    }

    if (!logoLoopActiveAnim.current) {
      return;
    }

    logoLoopActiveAnim.current.currentTime = 0;
    logoLoopActiveAnim.current.play();
    setLogoLoopActiveEnded(false);
  }, [logoLoopActiveEnded]);

  useEffect(() => {
    if (!logoLoopIdleEnded) {
      return;
    }

    if (!logoLoopIdleAnim.current) {
      return;
    }

    logoLoopIdleAnim.current.currentTime = 0;
    logoLoopIdleAnim.current.play();
    setLogoLoopIdleEnded(false);
  }, [logoLoopIdleEnded]);

  useEffect(() => {
    if (!logoLoopIdleAnim.current || !logoMagicAnim.current) {
      return;
    }

    if (logoMagicEnded) {
      logoMagicAnim.current.currentTime = 0;
      setShowLogoMagic(false);
      setLogoMagicEnded(false);

      logoLoopIdleAnim.current.currentTime = 0;
      logoLoopIdleAnim.current.play();
    }
  }, [logoMagicEnded]);

  return (
    <>
      <Animation
        show={shownLogoAnim === LogoAnim.INTRO}
        src={Videos.leagueLogoIntro}
        ref={logoIntroAnim}
        muted
        onEnded={() => {
          if (buttonState.curr === PlayButtonState.HIDDEN) {
            return;
          }
          setLogoIntroEnded(true);
        }}
      />
      <Animation
        show={shownLogoAnim === LogoAnim.IDLE && !showLogoMagic}
        src={Videos.leagueLogoLoopIdle}
        ref={logoLoopIdleAnim}
        muted
        onEnded={() => {
          if (buttonState.curr === PlayButtonState.HIDDEN) {
            return;
          }
          setLogoLoopIdleEnded(true);
        }}
      />
      <Animation
        show={shownLogoAnim === LogoAnim.ACTIVE}
        src={Videos.leagueLogoLoopActive}
        ref={logoLoopActiveAnim}
        muted
        onEnded={() => {
          if (buttonState.curr === PlayButtonState.HIDDEN) {
            return;
          }
          setLogoLoopActiveEnded(true);
        }}
      />
      <Animation
        show={showLogoMagic}
        src={Videos.leagueLogoMagic}
        ref={logoMagicAnim}
        muted
        onEnded={() => {
          if (buttonState.curr === PlayButtonState.HIDDEN) {
            return;
          }
          setLogoMagicEnded(true);
        }}
      />
    </>
  );
};
