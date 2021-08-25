import { FC } from 'react';
import Phrase from './Phrase';
import man from '../images/man.svg';
import { ExampleBlockDiv } from './styled';

interface ExampleBlockProps {
  sentence: string;
}

const ExampleBlock: FC<ExampleBlockProps> = ({sentence: phrase}) => {
  return (
    <ExampleBlockDiv>
      <img src={man} alt="" />
      <Phrase phrase={phrase} />
    </ExampleBlockDiv>
  )
}

export default ExampleBlock;
