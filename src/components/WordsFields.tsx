import React, { useEffect, useState } from 'react';
import { IField, IPhrase, IWord } from '../types/types';
import { getWordList } from '../utils/utils';
import { WordDiv, WordsField } from './styled';

interface WordsFieldsProps {
  phrase: IPhrase;
  updateUserAnswer(words: Array<IWord>): void;
  updateButtonEnabled(isEnabled: boolean): void;
  updateShowingNotification(show: boolean): void;
}

const WordsFields: React.FC<WordsFieldsProps> = ({ phrase, updateUserAnswer, updateButtonEnabled, updateShowingNotification }) => {
  const [fields, setFields] = useState<IField[]>([]);
  const [currentField, setCurrentField] = useState<IField>();
  const [currentWord, setCurrentWord] = useState<IWord>();

  useEffect(() => {
    setFields([
      { name: "new", words: [] },
      { name: "origin", words: getWordList(phrase.en) }
    ]);
  }, [phrase]);

  useEffect(() => {
    updateUserAnswer(fields[0]?.words);
    updateButtonEnabled(fields[0]?.words.length > 0);
  }, [fields[0]?.words.length]);

  function dragStartHandler(e: React.DragEvent<HTMLDivElement>, field: IField, word: IWord) {
    setCurrentField(field);
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

  function dropHandler(e: React.DragEvent<HTMLDivElement>, field: IField, word: IWord) {
    e.preventDefault();
    if (!currentWord || !currentField) return;

    const currentIndex = currentField.words.indexOf(currentWord);
    currentField.words.splice(currentIndex, 1);

    const underCurrentIndex = field.words.indexOf(word);
    field.words.splice(underCurrentIndex + 1, 0, currentWord);

    setFields(fields.map(itField => {
      if (itField.name === field.name) {
        return field;
      }
      if (itField.name === currentField.name) {
        return currentField;
      }
      return itField;
    }));
  }

  function dropOnEmptyFieldHandler(e: React.DragEvent<HTMLDivElement>, field: IField) {
    if (!currentWord || !currentField) return;
    if (field.words.includes(currentWord)) return;

    field.words.push(currentWord);
    const currentIndex = currentField.words.indexOf(currentWord);
    currentField.words.splice(currentIndex, 1);

    setFields(fields.map(itField => {
      if (itField.name === field.name) {
        return field;
      }
      if (itField.name === currentField.name) {
        return currentField;
      }
      return itField;
    }));
  }

  return (
    <div>
      {phrase
        ?
        <div>
          {fields.map((field, name) =>
            <WordsField
              borders={field.name === "new"}
              key={field.name}
              onDragOver={(e) => dragOverHandler(e)}
              onDrop={(e) => dropOnEmptyFieldHandler(e, field)}
            >
              {field.words.map((word, id) =>
                <WordDiv
                  key={word.id}
                  draggable
                  onDragStart={(e) => dragStartHandler(e, field, word)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragOver={(e) => dragOverHandler(e)}
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDrop={(e) => dropHandler(e, field, word)}
                >
                  {word.word}
                </WordDiv>
              )}
            </WordsField>
          )}
        </div>
        :
        <div>Loading...</div>
      }
    </div>
  )
}

export default WordsFields
