import { FC } from 'react';
import styled from 'styled-components';
import Word from './Word';

interface IWordsCloud {
  wordList: string[];
}

const WordsCloudDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const WordsCloud: FC<IWordsCloud> = ({wordList}) => {
  return (
    <WordsCloudDiv>
      {wordList.map((word, index)=>
        <Word key={index}>{word}</Word>
      )}
    </WordsCloudDiv>
  )
}

export default WordsCloud;
