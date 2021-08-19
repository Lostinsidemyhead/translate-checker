import { useEffect } from 'react';
import { useState } from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import { IWord } from '../types/types';
import { WordGround } from './styled';
import Word from './Word';

interface IWordsCloud {
  wordList: IWord[];
}

const WordsCloudDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  width: 470px;
  padding: 0 6px 0 6px;
`;

const WordsCloud: FC<IWordsCloud> = ({ wordList }) => {

  const [wordsArray, setWordsArray] = useState<IWord[]>(wordList);
  const [currentWord, setCurrentWord] = useState<IWord>({ id: -1, word: '' });
  const [phraseToCheck, setPhraseToCheck] = useState<IWord[]>([]);

  useEffect(() => {
    setWordsArray(wordList);
  }, [wordList])

  function dragStartHandler(e: React.DragEvent<HTMLDivElement>, word: IWord) {
    console.log("drag start");
    setCurrentWord(word);
  }
  
  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    console.log("drag leave");
  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    console.log("drag over");
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
    console.log("drag end");
  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>, word?: IWord) {
    e.preventDefault();
    console.log("drop");

    const currentIndex = wordsArray.indexOf(currentWord);
    wordsArray.splice(currentIndex, 1);

    const dropIndex = word ? phraseToCheck.indexOf(word) : phraseToCheck.length;
    phraseToCheck.splice(dropIndex + 1, 0, currentWord);

    setWordsArray(wordsArray);
    setPhraseToCheck(phraseToCheck);
    setCurrentWord({ id: -1, word: '' });

    console.log(wordsArray);
    console.log(phraseToCheck);
  }

  return (
    <div>
      {/* TEST BLOCK... */}
      <div
        style={{ display: "flex", border: "1px dotted grey", width: 484, height: 100, marginBottom: 30 }}

        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}
        onDrop={(e) => dropHandler(e)}
      >
        {phraseToCheck.map((word, index) =>
          <div
            style={{ background: "yellow" }}
            draggable

            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDrop={(e) => dropHandler(e, word)}

            key={index}
          >
            {word.word}
          </div>
        )}
      </div>
      <WordsCloudDiv>
        {wordsArray.map((word, index) =>
          <div
            style={{ background: "lightblue" }}
            draggable

            onDragStart={(e) => dragStartHandler(e, word)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}

            key={index}
          >
            {word.word}
          </div>
        )
        }
      </WordsCloudDiv >
      {/* ...TEST BLOCK */}
    </div>
  )
}

export default WordsCloud;
