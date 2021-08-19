import { FC } from 'react';
import Phrase from './Phrase';
import man from '../images/man.svg';
import styled from 'styled-components';

interface IExampleBlock {
  examplePhrase: string;
}

const ExampleBlockDiv = styled.div`
  display: flex;
`;

const ExampleBlock: FC<IExampleBlock> = ({examplePhrase}) => {
  return (
    <ExampleBlockDiv>
      <img src={man} alt="" />
      <Phrase phrase={examplePhrase} />
    </ExampleBlockDiv>
  )
}

export default ExampleBlock;
