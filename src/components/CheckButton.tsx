import { FC } from 'react';
import styled from 'styled-components';
import { ButtonWrapper } from './styled';

interface CheckButtonProps {
  onClick: () => void;
  isEnable: boolean;
}

const Button = styled.button<CheckButtonProps>`
  width: 470px;
  height: 68px;
  padding: 24px;
  background: linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%);  
  box-shadow: -2px -4px 12px #FFFFFF, 2px 4px 8px rgba(0, 0, 0, 0.2);  
  border: none;
  border-radius: 88px;
  font-family: Roboto-Bold;
  line-height: 21px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  &:active {
    background: linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%);
    box-shadow: inset -2px -4px 12px #FFFFFF, inset 2px 4px 8px rgba(0, 0, 0, 0.2);
  }
  margin: auto;
  color:  ${props => props.isEnable ? "#000000" : "#00000034"};
`;

const CheckButton: FC<CheckButtonProps> = ({ ...props }) => {
  return (
    <ButtonWrapper>
      <Button disabled={!props.isEnable} {...props}>
        Check
      </Button>
    </ButtonWrapper>
  )
}

export default CheckButton;


