import { FC } from 'react';
import styled from 'styled-components';

const WordDiv = styled.div`
  border: 1px solid #c9c9c9;
  box-shadow: 0px 8px 4px -6px rgba(34, 60, 80, 0.25);
  background: #FFFFFF;
  border: 1px solid #C9C9C9;
  border-radius: 13px;
  text-align: center;
  font-family: Roboto-Regular;
  font-size: 18px;
  padding-top: 6px;
  min-width: 70px;
  height: 30px;
`;

const Word: FC = ({ children }) => {
  return (
    <WordDiv>
      {children}
    </WordDiv>
  )
}

export default Word;
