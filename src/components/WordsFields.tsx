import React, { useEffect, useState } from 'react';
import { Field, Sentence, Word } from '../types/types';
import { getWordList } from '../utils/utils';
import { Spacer, UserField, WordDiv, OriginField, Lines } from './styled';

interface WordsFieldsProps {
  sentence: Sentence;
  updateUserAnswer(words: Array<Word>): void;
  updateButtonEnabled(isEnabled: boolean): void;
  updateShowingNotification(show: boolean): void;
}

const WordsFields: React.FC<WordsFieldsProps> = ({ sentence: sentence, updateUserAnswer, updateButtonEnabled, updateShowingNotification }) => {
  const [fields, setFields] = useState<Field[]>([]);
  const [sourceField, setSourceField] = useState<Field>();
  const [currentWord, setCurrentWord] = useState<Word>();

  useEffect(() => {
    setFields([
      { name: "new", words: [] },
      { name: "origin", words: getWordList(sentence.en) }
    ]);
  }, [sentence]);

  useEffect(() => {
    updateUserAnswer(fields[0]?.words);
    updateButtonEnabled(fields[0]?.words.length > 0);
  }, [fields[0]?.words.length]);

  function dragStartHandler(e: React.DragEvent<HTMLDivElement>, field: Field, word: Word) {
    setSourceField(field);
    setCurrentWord(word);
    updateShowingNotification(false);
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();

  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {

  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>, targetField: Field, hoveredWord: Word) {
    e.preventDefault();
    if (!currentWord || !sourceField) return;

    const currentIndex = sourceField.words.indexOf(currentWord);
    sourceField.words.splice(currentIndex, 1);

    const underCurrentIndex = targetField.words.indexOf(hoveredWord);
    targetField.words.splice(underCurrentIndex + 1, 0, currentWord);

    setFields(fields.map(itField => {
      if (itField.name === targetField.name) {
        return targetField;
      }
      if (itField.name === sourceField.name) {
        return sourceField;
      }
      return itField;
    }));
  }

  function dropOnEmptyFieldHandler(e: React.DragEvent<HTMLDivElement>, field: Field) {
    if (!currentWord || !sourceField) return;
    if (field.words.includes(currentWord)) return;

    field.words.push(currentWord);
    const currentIndex = sourceField.words.indexOf(currentWord);
    sourceField.words.splice(currentIndex, 1);

    setFields(fields.map(itField => {
      if (itField.name === field.name) {
        return field;
      }
      if (itField.name === sourceField.name) {
        return sourceField;
      }
      return itField;
    }));
  }

  return (
    <div>
      {sentence
        ?
        <div>
          <Lines>
            <UserField
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropOnEmptyFieldHandler(e, fields[0])}>
              {fields[0]?.words.map((word) =>
                <WordDiv
                  key={word.id}
                  draggable
                  onDragStart={(e) => dragStartHandler(e, fields[0], word)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragOver={(e) => dragOverHandler(e)}
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDrop={(e) => dropHandler(e, fields[0], word)}
                >
                  {word.word}
                </WordDiv>
              )}
            </UserField>
          </Lines>

          <Spacer height="50px" />
          <OriginField
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropOnEmptyFieldHandler(e, fields[1])}>
            {fields[1]?.words.map((word) =>
              <WordDiv
                key={word.id}
                draggable
                onDragStart={(e) => dragStartHandler(e, fields[1], word)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHandler(e, fields[1], word)}
              >
                {word.word}
              </WordDiv>
            )}
          </OriginField>
        </div>
        :
        <div>Loading...</div>
      }
    </div>
  )
}

export default WordsFields;
