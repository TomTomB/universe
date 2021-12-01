import type { GlTexture } from '@/uikit/webgl';
import type { Rank } from '@/types';

export interface BannerAnimationConfig {
  bannerHeight: number;
  bannerWidth: number;
  bottomFadeAlpha: number;
  bottomFadeEnd: number;
  bottomFadeStart: number;
  brightness: number;
  circleGradientCenter: number;
  circleGradientEnd: number;
  circleGradientStart: number;
  debugFade: boolean;
  fadeOutColor: [number, number, number];
  highlightNoiseX: number;
  highlightNoiseY: number;
  movingRange: number;
  noiseScale: number;
  patternPosition: number;
  rankPosition: number;
  ripple: {
    uDensity: number;
    uRippleCenter: number;
    uRippleNoise: number;
    uRippleNoiseStrength: number;
    uRippleRange: number;
    uRippleScaleX: number;
    uRippleSpeed: number;
    uRippleStart: number;
  };
  speed: number;
  topFadeEnd: number;
  topFadeStart: number;
  viewportHeight: number;
  viewportWidth: number;
  waves: {
    numWaves: number;
    uDebugWave: number;
    uWaveHeight: number;
    waveLength: number;
    waveRadius: number;
  };
}

export interface BannerTextureMap {
  rank: GlTexture;
  overlay: GlTexture;
  background: GlTexture;
}

export interface BannerAssets {
  rank: string;
  overlay: string;
  background: string;
}

export interface BannerBaseProps {
  rank: Rank;
  showPattern?: boolean;
  className?: string;
}
