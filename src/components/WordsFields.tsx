import React, { useEffect, useState } from 'react';
import { WordsField, Sentence, Word } from '../types/types';
import { getWordList } from '../utils/utils';
import Field from './Field';
import { Spacer, UserField, OriginField, Lines } from './styled';

interface WordsFieldsProps {
  sentence: Sentence;
  updateUserAnswer(words: Array<Word>): void;
  updateButtonEnabled(isEnabled: boolean): void;
  updateShowingNotification(show: boolean): void;
}

const WordsFields: React.FC<WordsFieldsProps> = ({
  sentence,
  updateUserAnswer,
  updateButtonEnabled,
  updateShowingNotification,
}) => {
  const [fields, setFields] = useState<WordsField[]>([]);
  const [sourceField, setSourceField] = useState<WordsField>();
  const [draggedWord, setDraggedWord] = useState<Word>();

  const updateSourceField = (aSourceField: WordsField) => {
    setSourceField(aSourceField);
    updateShowingNotification(false);
  };

  const updateDraggedWord = (aDraggedWord: Word) => {
    setDraggedWord(aDraggedWord);
  };

  useEffect(() => {
    setFields([
      { name: 'new', words: [] },
      { name: 'origin', words: getWordList(sentence.en) },
    ]);
  }, [sentence]);

  useEffect(() => {
    updateUserAnswer(fields[0]?.words);
    updateButtonEnabled(fields[0]?.words.length > 0);
  }, [fields[0]?.words.length]);

  const updateFields = (targetField: WordsField) => {
    if (!targetField || !sourceField) return;
    setFields(
      fields.map((itField) => {
        if (itField.name === targetField.name) {
          return targetField;
        }
        if (itField.name === sourceField.name) {
          return sourceField;
        }
        return itField;
      })
    );
  };

  return (
    <div>
      {sentence ? (
        <div>
          <Lines>
            <UserField>
              <Field
                field={fields[0]}
                updateSourceField={updateSourceField}
                updateDraggedWord={updateDraggedWord}
                sourceField={sourceField}
                draggedWord={draggedWord}
                updateFields={updateFields}
              />
            </UserField>
          </Lines>
          <Spacer height="50px" />
          <OriginField>
            <Field
              field={fields[1]}
              updateSourceField={updateSourceField}
              updateDraggedWord={updateDraggedWord}
              sourceField={sourceField}
              draggedWord={draggedWord}
              updateFields={updateFields}
            />
          </OriginField>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default WordsFields;
