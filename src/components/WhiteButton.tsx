import { FC } from 'react';
import styled from 'styled-components';

interface WhiteButtonProps {
  onClick: () => void;
}

const Button = styled.button`
  height: 68px;
  width: 100%;
  background: linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%);  
  border-radius: 30px;
  padding: 24px;
  border: none;
  box-shadow: -2px -4px 12px #FFFFFF, 2px 4px 8px rgba(0, 0, 0, 0.2);  
  font-family: Roboto-Bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  cursor: pointer;
`;

const WhiteButton: FC<WhiteButtonProps> = ({ children, ...props }) => {
  return (
    <Button {...props}>
      {children}
    </Button>
  )
}

export default WhiteButton;


