import React, { FC } from 'react';
import styled from 'styled-components';
import GlobalFonts from '../fonts/fonts';

interface WhiteButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = styled.button`
  background: white;
  border-radius: 30px;
  padding: 1rem 24px;
  border:none;
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.2);
  font-family: Roboto-Bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
`;

const WhiteButton: FC<WhiteButtonProps> = ({ children, ...props }) => {
  return (
    <Button {...props}>
      {children}
    </Button>
  )
}

export default WhiteButton;


