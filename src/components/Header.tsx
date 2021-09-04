import React, { FC } from 'react';
import { HeaderDiv } from './styled';

interface HeaderProps {
  isBold: boolean;
}

const Header: FC<HeaderProps> = ({ children, isBold }) => {
  return <HeaderDiv isBold={isBold}>{children}</HeaderDiv>;
};

export default Header;
