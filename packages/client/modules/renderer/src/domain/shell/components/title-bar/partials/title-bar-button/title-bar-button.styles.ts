import controlClose from './assets/images/control-close.png';
import controlHelp from './assets/images/control-help.png';
import controlHide from './assets/images/control-hide.png';
import controlSettings from './assets/images/control-settings.png';
import styled from 'styled-components';

export const TitleBarButtonBase = styled.button`
  height: 18px;
  width: 18px;
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  background-color: ${(props) => props.theme.colors.grey[1]};

  :hover,
  :focus-visible {
    background-color: ${(props) => props.theme.colors.gold[1]};
  }
  :active {
    background-color: ${(props) => props.theme.colors.grey[2]};
  }
`;

export const TitleBarButtonClose = styled(TitleBarButtonBase)`
  -webkit-mask-image: url(${controlClose});
`;

export const TitleBarButtonHide = styled(TitleBarButtonBase)`
  -webkit-mask-image: url(${controlHide});
`;

export const TitleBarButtonHelp = styled(TitleBarButtonBase)`
  -webkit-mask-image: url(${controlHelp});
`;

export const TitleBarButtonSettings = styled(TitleBarButtonBase)`
  -webkit-mask-image: url(${controlSettings});
`;
