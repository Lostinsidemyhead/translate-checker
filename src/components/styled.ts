import styled, { createGlobalStyle } from 'styled-components';
import { GridDropZone } from 'react-grid-dnd';
import phraseBorder from '../images/phrase.svg';

export const GlobalStyle = createGlobalStyle`
    html {
      margin: 0;
    }

    body {
      margin: 0;
      border: none;
      background: #eeeeee;
    }
`;

interface SpacerProps {
  height: string;
}
export const Spacer = styled.div<SpacerProps>`
  height: ${(props) => props.height};
`;

export const ButtonWrapper = styled.div`
  padding-left: 7px;
`;

export const AppWrapper = styled.div`
  max-width: 484px;
  margin: auto;
  margin-top: 10%;
`;

export const Grounds = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  flex-wrap: wrap;
  grid-column-gap: 8px;
  grid-row-gap: 16px;
`;

export const WordGround = styled.div`
  width: 68px;
  height: 30px;
  background: #e6e6e6;
  box-shadow: inset 0px 8px 4px -6px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
`;

export const WordDiv = styled.div`
  height: 28px;
  width: 68px;
  background: #ffffff;
  border: 1px solid #c9c9c9;
  border-radius: 13px;
  box-shadow: 0px 8px 4px -6px rgba(34, 60, 80, 0.25);
  font-family: Roboto-Regular;
  text-align: center;
  font-size: 18px;
  line-height: 28px;
  cursor: pointer;
`;

export const StyledNewDnDField = styled(GridDropZone)`
  width: 470px;
  height: 76px;
  grid-column-gap: 10px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 7px 5px 7px 5px;
`;

export const StyledOriginDnDField = styled(GridDropZone)`
  width: 470px;
  height: 76px;
  padding: 7px 0 7px 5px;
  grid-column-gap: 10px;
`;

export const Line = styled.div`
  width: 480px;
  height: 1px;
  background: #000;
  margin-left: -5px;
  margin-top: 38px;
`;

interface ButtonProps {
  isEnable: boolean;
}

export const ButtonDiv = styled.button<ButtonProps>`
  width: 470px;
  height: 68px;
  padding: 24px;
  background: linear-gradient(91.2deg, #ffffff 0%, #f2f2f2 100%);
  box-shadow: -2px -4px 12px #ffffff, 2px 4px 8px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 88px;
  font-family: Roboto-Bold;
  line-height: 21px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  &:active {
    background: linear-gradient(91.2deg, #ffffff 0%, #f2f2f2 100%);
    box-shadow: inset -2px -4px 12px #ffffff, inset 2px 4px 8px rgba(0, 0, 0, 0.2);
  }
  margin: auto;
  color: ${(props) => (props.isEnable ? '#000000' : '#00000034')};
`;

export const ExampleBlockDiv = styled.div`
  display: flex;
`;

interface HeaderProps {
  isBold: boolean;
}

export const HeaderDiv = styled.div<HeaderProps>`
  font-size: 36px;
  line-height: 42px;
  color: #252525;
  text-shadow: -2px -4px 3px #ffffff, 2px 4px 3px rgba(0, 0, 0, 0.25);
  font-family: ${(props) => (props.isBold ? 'Roboto-Bold' : 'Roboto-Regular')};
  transition: font-family 2s lenear;
`;

interface NotificationProps {
  isValid: boolean;
}

export const NotificationWrapper = styled.div<NotificationProps>`
  font-family: Roboto-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: ${(props) => (props.isValid ? '#03C03C' : '#FF0000')};
  text-shadow: ${(props) =>
    props.isValid
      ? '-1px -2px 2px #FFFFFF, 1px 2px 2px rgba(91, 13, 13, 0.5)'
      : '-1px -2px 2px #FFFFFF, 1px 2px 2px rgba(13, 91, 55, 0.5)'};
`;

export const PhraseBorder = styled.div`
  background-image: url(${phraseBorder});
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 92px;
  width: 307px;
  margin-left: -12px;
  margin-top: -8px;
`;

export const PhraseWrapper = styled.div`
  margin-left: 43px;
  font-family: Roboto-Regular;
  font-style: normal;
  font-size: 18px;
  line-height: 32px;
  text-decoration: underline dotted;
  text-underline-position: under;
  user-select: none;
`;
