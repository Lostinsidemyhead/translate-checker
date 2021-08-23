import { FC } from 'react';
import Phrase from './Phrase';
import man from '../images/man.svg';
import styled from 'styled-components';

interface ExampleBlockProps {
  phrase: string;
}

const ExampleBlockDiv = styled.div`
  display: flex;
`;

const ExampleBlock: FC<ExampleBlockProps> = ({phrase}) => {
  return (
    <ExampleBlockDiv>
      <img src={man} alt="" />
      <Phrase phrase={phrase} />
    </ExampleBlockDiv>
  )
}

export default ExampleBlock;
