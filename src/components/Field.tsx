import React from 'react';
import { WordsField, Word } from '../types/types';
import { FieldWrapper, WordDiv } from './styled';

interface FieldProps {
  field: WordsField;
  updateSourceField(aSourceField: WordsField): void;
  updateDraggedWord(aDraggedWord: Word): void;
  sourceField?: WordsField;
  draggedWord?: Word;
  updateFields(targetField: WordsField): void;
}

const Field: React.FC<FieldProps> = ({
  field,
  updateSourceField,
  updateDraggedWord,
  sourceField,
  draggedWord,
  updateFields,
}) => {
  function dragStartHandler(e: React.DragEvent<HTMLDivElement>, srcField: WordsField, word: Word) {
    updateSourceField(field);
    updateDraggedWord(word);
  }

  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {}

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {}

  function dropHandler(
    e: React.DragEvent<HTMLDivElement>,
    targetField: WordsField,
    hoveredWord: Word
  ) {
    e.preventDefault();
    if (!draggedWord || !sourceField) return;

    const currentWordIndex = sourceField.words.indexOf(draggedWord);
    sourceField.words.splice(currentWordIndex, 1);

    const hoveredWordIndex = targetField.words.indexOf(hoveredWord);
    targetField.words.splice(hoveredWordIndex + 1, 0, draggedWord);

    updateFields(targetField);
  }

  function dropOnEmptyFieldHandler(e: React.DragEvent<HTMLDivElement>, targetField: WordsField) {
    if (!draggedWord || !sourceField) return;
    if (targetField.words.includes(draggedWord)) return;

    targetField.words.push(draggedWord);
    const currentIndex = sourceField.words.indexOf(draggedWord);
    sourceField.words.splice(currentIndex, 1);

    updateFields(targetField);
  }

  return (
    <FieldWrapper
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropOnEmptyFieldHandler(e, field)}
    >
      {field?.words.map((word) => (
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
      ))}
    </FieldWrapper>
  );
};

export default Field;
