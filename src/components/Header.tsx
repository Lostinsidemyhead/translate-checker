import { FC } from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  font-family: Roboto-Bold;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #252525;
  text-shadow: -2px -4px 3px #FFFFFF, 2px 4px 3px rgba(0, 0, 0, 0.25);
`;

const Header: FC = () => {
  return (
    <HeaderDiv>
      Translate this sentence
    </HeaderDiv>
  )
}

export default Header;