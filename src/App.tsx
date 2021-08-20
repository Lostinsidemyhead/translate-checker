import { useEffect, useState } from 'react';
import WhiteButton from './components/WhiteButton';
import PhrasesService from './API/PhrasesService'
import { IField, IPhrase, IWord } from './types/types';
import GlobalFonts from './fonts/fonts';
import Header from './components/Header';
import ExampleBlock from './components/ExampleBlock';
import { AppWrapper, ButtonWrapper, Spacer, WordDiv, WordsField } from './components/styled';

function App() {
  const [phrases, setPhrases] = useState<IPhrase[]>([]);
  const [currentPhrase, setCurrentPhrase] = useState<IPhrase>({ ru: "", en: "" });

  const [fields, setFields] = useState<IField[]>([]);
  const [currentField, setCurrentField] = useState<IField>();
  const [currentWord, setCurrentWord] = useState<IWord>();
  
  const [buttonState, setButtonState] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);

  useEffect(() => {
    fetchPhrases();
  }, []);

  useEffect(() => {
    if (fields[0]?.words.length > 0) {
      setButtonState(true);
    }
    else {
      setButtonState(false);
    }
  }, [fields[0]?.words.length]);

  const getWordList = (phrase: string): IWord[] => {
    if (!phrase) return [];

    const words = phrase.split(" ").sort();
    let wordList: Array<IWord> = [];

    for (let i = 0; i < words.length; i++) {
      const word: IWord = { id: i, word: words[i] }
      wordList.push(word);
    }
    return wordList;
  }

  async function fetchPhrases() {
    const response = await PhrasesService.getAllSentences();
    setPhrases(response.data?.data?.sentenceAll);
    setCurrentPhrase(response.data?.data?.sentenceAll[0]);

    setFields([
      { name: "new", words: [] },
      { name: "origin", words: getWordList(response.data?.data?.sentenceAll[0].en) }
    ]);
  }

  const check = () => {
    setShowNotification(true);

    const words = fields[0].words.map((word) => {
      return word.word;
    });

    if (currentPhrase.en === words.join(' ')) {
      setIsAnswerCorrect(true);
    }
    else {
      setIsAnswerCorrect(false);
    }
  }

  //DND BLOCK VERSION...
  function dragStartHandler(e: React.DragEvent<HTMLDivElement>, field: IField, word: IWord) {
    setCurrentField(field);
    setCurrentWord(word);
    setShowNotification(false);
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

  //...DND BLOCK VERSION

  return (
    <AppWrapper>
      <GlobalFonts />
      <Header />
      <Spacer height="56px;" />
      <ExampleBlock examplePhrase={phrases[0]?.ru} />
      <Spacer height="50px;" />

      {/* DND BLOCK VERSION... */}
      {currentPhrase
        ?
        <div>
          {fields.map((field, name) =>
            <WordsField
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
        <div>Loading</div>
      }
      {/* ... DND BLOCK VERSION*/}

      <Spacer height="79px;" />
      {showNotification &&
        <div>
          {isAnswerCorrect
          ?
          <div>Верно</div>
          :
          <div>Не верно</div>
          }
        </div>
      }
      <ButtonWrapper>
        <WhiteButton isEnable={buttonState} onClick={check}>
          Check
        </WhiteButton>
      </ButtonWrapper>
    </AppWrapper>
  );
}

export default App;
