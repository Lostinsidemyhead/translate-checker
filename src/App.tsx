import React, { useEffect, useState } from 'react';
import SentencesService from './api/SentencesService';
import Button from './components/Button';
import DragAndDrop from './components/DragAndDrop';
import ExampleBlock from './components/ExampleBlock';
import Header from './components/Header';
import Notification from './components/Notification';
import { AppWrapper, GlobalStyle, Spacer } from './components/styled';
import { SENTENCES_FETCH_URL } from './config';
import GlobalFonts from './fonts/fonts';
import { Sentence, Word } from './types/types';
import { speechSentence } from './utils/utils';

function App() {
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [currentSentence, setCurrentSentence] = useState<Sentence>({ ru: '', en: '' });
  const [sentenceCounter, setSentenceCounter] = useState<number>(0);

  const [buttonEnabled, setButtonEnabled] = useState<boolean>(false);
  const [userAnswer, setUserAnswer] = useState<Word[]>([]);

  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);

  const speaker = window.speechSynthesis;

  async function fetchSentences() {
    const sentencesService = new SentencesService(SENTENCES_FETCH_URL);
    const sentencesAll = await sentencesService.getAllSentences();
    setSentences(sentencesAll);
    setCurrentSentence(sentencesAll[sentenceCounter]);
  }

  useEffect(() => {
    fetchSentences();
  }, []);

  const updateUserAnswer = (words: Word[]) => {
    console.log(words);
    setUserAnswer(words);
  };
  const updateButtonEnabled = (isEnabled: boolean) => {
    setButtonEnabled(isEnabled);
  };
  const updateShowingNotification = (show: boolean) => {
    setShowNotification(show);
  };

  const check = async () => {
    setShowNotification(true);
    const words = userAnswer.map((word) => word.word);

    console.log(words, 1);

    console.log(currentSentence.en);

    const resultIsCorrect = currentSentence.en === words.join(' ');
    if (resultIsCorrect) {
      setIsAnswerCorrect(true);

      await speechSentence(currentSentence.en, speaker);
      if (!sentences[sentenceCounter + 1]) return;

      setCurrentSentence(sentences[sentenceCounter + 1]);
      setSentenceCounter(sentenceCounter + 1);
      updateShowingNotification(false);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  return (
    <AppWrapper>
      <GlobalStyle />
      <GlobalFonts />
      <Header isBold={buttonEnabled}>Translate this sentence</Header>
      <Spacer height="56px;" />
      <ExampleBlock sentence={currentSentence?.ru} />
      <Spacer height="50px;" />
      <DragAndDrop
        sentence={currentSentence?.en}
        updateUserAnswer={updateUserAnswer}
        updateButtonEnabled={updateButtonEnabled}
        updateShowingNotification={updateShowingNotification}
      />
      {showNotification ? <Notification isValid={isAnswerCorrect} /> : <Spacer height="79px;" />}
      <Button isEnable={buttonEnabled} onClick={check}>
        Check
      </Button>
      <Spacer height="50px;" />
    </AppWrapper>
  );
}

export default App;
