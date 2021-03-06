import React, { FC } from 'react';
import { ButtonDiv, ButtonWrapper } from './styled';

interface ButtonProps {
  onClick: () => void;
  isEnable: boolean;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <ButtonWrapper>
      <ButtonDiv disabled={!props.isEnable} {...props}>
        {children}
      </ButtonDiv>
    </ButtonWrapper>
  );
};

export default Button;
