import { FC } from 'react';
import styled from 'styled-components';

interface WhiteButtonProps {
  onClick: () => void;
}

const Button = styled.button`
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
`;

const WhiteButton: FC<WhiteButtonProps> = ({ children, ...props }) => {
  return (
    <Button {...props}>
      {children}
    </Button>
  )
}

export default WhiteButton;


