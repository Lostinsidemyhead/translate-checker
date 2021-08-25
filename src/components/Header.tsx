import { FC } from 'react';
import { HeaderDiv } from './styled';

const Header: FC = ({children}) => {
  return (
    <HeaderDiv>
      {children}
    </HeaderDiv>
  )
}

export default Header;