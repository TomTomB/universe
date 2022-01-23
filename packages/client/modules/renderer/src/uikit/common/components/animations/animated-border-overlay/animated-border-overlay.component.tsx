import * as C from './animated-border-overlay.styles';
import type { FC } from 'react';

export interface AnimatedBorderOverlayProps {
  speed?: number;
  className?: string;
}

export const AnimatedBorderOverlay: FC<AnimatedBorderOverlayProps> = ({
  speed = 25000,
  className,
}) => {
  return (
    <C.AnimatedBorderWrapper className={className}>
      <C.BorderContainer>
        <C.BlurEffectHigh>
          <C.GlowMaskTop>
            <C.GlowContent speed={speed} className="scroll top" />
            <C.GlowContent speed={speed} className="overlay top" />
          </C.GlowMaskTop>
          <C.GlowMaskRight>
            <C.GlowContent speed={speed} className="scroll right" />
            <C.GlowContent speed={speed} className="overlay right" />
          </C.GlowMaskRight>
          <C.GlowMaskBottom>
            <C.GlowContent speed={speed} className="scroll bottom" />
            <C.GlowContent speed={speed} className="overlay bottom" />
          </C.GlowMaskBottom>
          <C.GlowMaskLeft>
            <C.GlowContent speed={speed} className="scroll left" />
            <C.GlowContent speed={speed} className="overlay left" />
          </C.GlowMaskLeft>
        </C.BlurEffectHigh>
        <C.BlurEffectLow>
          <C.GlowMaskTop>
            <C.GlowContent speed={speed} className="scroll top" />
            <C.GlowContent speed={speed} className="overlay top" />
          </C.GlowMaskTop>
          <C.GlowMaskRight>
            <C.GlowContent speed={speed} className="scroll right" />
            <C.GlowContent speed={speed} className="overlay right" />
          </C.GlowMaskRight>
          <C.GlowMaskBottom>
            <C.GlowContent speed={speed} className="scroll bottom" />
            <C.GlowContent speed={speed} className="overlay bottom" />
          </C.GlowMaskBottom>
          <C.GlowMaskLeft>
            <C.GlowContent speed={speed} className="scroll left" />
            <C.GlowContent speed={speed} className="overlay left" />
          </C.GlowMaskLeft>
        </C.BlurEffectLow>
      </C.BorderContainer>
    </C.AnimatedBorderWrapper>
  );
};
