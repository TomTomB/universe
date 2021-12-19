import { SecondaryFlatButton } from '@/uikit/forms/components';
import styled from 'styled-components';

export const StyledSettingsModal = styled.div`
  width: 700px;
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const SettingsContent = styled.div`
  display: flex;
  height: 482px;
`;

export const SettingsTitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 67px;
  border-bottom: thin solid #1e282d;
  margin: 0 9px;
  grid-column: 1 / 3;
  position: relative;
`;

export const TitleBarTitle = styled.h4`
  color: #a09b8c;
  margin-left: 9px;
`;

export const TitleBarBreak = styled.span`
  padding: 0 5px;
  display: inline-block;
`;

export const TitleBarCurrent = styled.span`
  color: #f0e6d2;
`;

export const ResetSettingsForPageButton = styled(SecondaryFlatButton)`
  position: absolute;
  right: 9px;
  top: 20px;
  min-width: 152px;
`;

export const PagePlaceholder = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PagePlaceholderImg = styled.img`
  width: 100px;
  object-fit: contain;
  margin-bottom: 10px;
`;
