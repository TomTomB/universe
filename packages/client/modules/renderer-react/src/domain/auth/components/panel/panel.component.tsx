import type { FC } from 'react';
import * as C from './panel.styles';
import { Footer, SignInForm } from './paritals';

export const Panel: FC = () => {
  return (
    <C.StyledPanel>
      <C.LeagueLogoImg
        src="/splashscreen/lol-logo.png"
        alt="League of legends logo"
        height="58"
      />
      <C.SignInContainer>
        <C.SignInHead>Sign in </C.SignInHead>
        <SignInForm />
      </C.SignInContainer>
      <Footer />
    </C.StyledPanel>
  );
};
