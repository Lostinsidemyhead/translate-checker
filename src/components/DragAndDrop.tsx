import React, { useEffect, useState } from 'react';
import { GridContextProvider, GridItem, move, swap } from 'react-grid-dnd';
import { Word } from '../types/types';
import { getWordList } from '../utils/utils';
import {
  Spacer,
  WordDiv,
  StyledNewDnDField,
  StyledOriginDnDField,
  WordGround,
  Grounds,
  Line,
} from './styled';

interface DnDProps {
  sentence: string;
  updateUserAnswer(words: Array<Word>): void;
  updateButtonEnabled(isEnabled: boolean): void;
  updateShowingNotification(show: boolean): void;
}

interface FieldsList {
  newField: Word[];
  originField: Word[];
}

const DragAndDrop: React.FC<DnDProps> = ({
  sentence,
  updateUserAnswer,
  updateButtonEnabled,
  updateShowingNotification,
}) => {
  const [words, setWords] = useState<FieldsList>({ newField: [], originField: [] });
  const [grounds, setGrounds] = useState<string[]>([]);

  useEffect(() => {
    setWords({ newField: [], originField: getWordList(sentence) });
    setGrounds(getEmptyList());
  }, [sentence]);

  function getEmptyList() {
    const list = [];
    const count = Math.ceil(getWordList(sentence).length / 6) * 6;
    for (let i = 0; i < count; i++) {
      list.push('');
    }
    return list;
  }

  useEffect(() => {
    updateUserAnswer(words.newField);
    updateButtonEnabled(words.newField.length > 0);
    setGrounds(getEmptyList());
  }, [words.newField.length]);

  const onChange = (
    sourceId: string,
    sourceIndex: number,
    targetIndex: number,
    targetId?: string
  ) => {
    updateShowingNotification(false);
    if (sourceId !== 'newField' && sourceId !== 'originField') return;

    if (targetId) {
      if (targetId !== 'newField' && targetId !== 'originField') return;

      const result = move(words[sourceId], words[targetId], sourceIndex, targetIndex);
      setWords({ ...words, [sourceId]: result[0], [targetId]: result[1] });
      return;
    }
    const result = swap(words[sourceId], sourceIndex, targetIndex);
    setWords({ ...words, [sourceId]: result });
  };

  return (
    <GridContextProvider onChange={onChange}>
      <StyledNewDnDField id="newField" boxesPerRow={6} rowHeight={45}>
        {words.newField.map((word, index) => (
          <GridItem key={word.id}>
            <WordDiv>{word.word}</WordDiv>
          </GridItem>
        ))}
        <Line />
      </StyledNewDnDField>

      <Spacer height="50px" />

      <StyledOriginDnDField id="originField" boxesPerRow={6} rowHeight={45}>
        {words.originField.map((word, index) => (
          <GridItem key={word.id}>
            <WordDiv>{word.word}</WordDiv>
          </GridItem>
        ))}
        <Grounds>
          {grounds.map((i) => (
            <WordGround />
          ))}
        </Grounds>
      </StyledOriginDnDField>
    </GridContextProvider>
  );
};

export default DragAndDrop;
