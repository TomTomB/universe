import styled from 'styled-components';

export const FadeCondition = styled.div`
  transition: opacity 300ms ease-in-out;
  opacity: 0;

  &.show {
    opacity: 1;
  }

  display: flex;
  justify-content: center;
`;

export const VideoBase = styled.video``;

export const IntroVideo = styled(VideoBase)`
  z-index: 1;
`;

export const StyledSummonerBanner = styled.div`
  width: 275px;
  display: grid;

  &.ally {
    width: 240px;

    ${IntroVideo} {
      margin-top: -68px;
    }
  }

  ${FadeCondition} {
    grid-column: 1;
    grid-row: 1;
  }

  ${IntroVideo} {
    margin-top: -60px;
  }

  canvas {
    margin-top: -100px;
  }
`;
