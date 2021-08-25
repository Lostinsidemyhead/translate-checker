import { useEffect, useState } from 'react';
import SentencesService from './api/SentencesService';
import Button from './components/Button';
import ExampleBlock from './components/ExampleBlock';
import Header from './components/Header';
import Notification from './components/Notification';
import { AppWrapper, GlobalStyle, Spacer } from './components/styled';
import WordsFields from './components/WordsFields';
import { SENTENCES_FETCH_URL } from './config';
import GlobalFonts from './fonts/fonts';
import { Sentence, Word } from './types/types';
import { speechSentence } from './utils/utils';

function App() {
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [currentSentence, setCurrentSentence] = useState<Sentence>({ ru: "", en: "" });
  const [sentenceCounter, setSentenceCounter] = useState<number>(0);

  const [buttonEnabled, setButtonEnabled] = useState<boolean>(false);
  const [userAnswer, setUserAnswer] = useState<Word[]>([]);

  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);

  const speaker = window.speechSynthesis;

  useEffect(() => {
    fetchSentences();
  }, []);

  async function fetchSentences() {
    const sentencesService = new SentencesService(SENTENCES_FETCH_URL);
    const sentencesAll = await sentencesService.getAllSentences();
    setSentences(sentencesAll);
    setCurrentSentence(sentencesAll[sentenceCounter]);
  }

  const updateUserAnswer = (words: Word[]) => { setUserAnswer(words); }
  const updateButtonEnabled = (isEnabled: boolean) => { setButtonEnabled(isEnabled); }
  const updateShowingNotification = (showNotification: boolean) => { setShowNotification(showNotification); }

  const check = async () => {
    setShowNotification(true);
    const words = userAnswer.map((word) => {
      return word.word;
    });

    const resultIsCorrect = currentSentence.en === words.join(' ');
    if (resultIsCorrect) {
      setIsAnswerCorrect(true);

      await speechSentence(currentSentence.en, speaker);

      setCurrentSentence(sentences[sentenceCounter + 1]);
      setSentenceCounter(sentenceCounter + 1);
      updateShowingNotification(false);
    }
    else {
      setIsAnswerCorrect(false);
    }
  }

  return (
    <AppWrapper>
      <GlobalStyle />
      <GlobalFonts />
      <Header>
        Translate this sentence
      </Header>
      <Spacer height="56px;" />
      <ExampleBlock phrase={sentences[sentenceCounter]?.ru} />
      <Spacer height="50px;" />
      <WordsFields
        sentence={currentSentence}
        updateUserAnswer={updateUserAnswer}
        updateButtonEnabled={updateButtonEnabled}
        updateShowingNotification={updateShowingNotification}
      />
      {showNotification
        ? <Notification isValid={isAnswerCorrect} />
        : <Spacer height="79px;" />}
      <Button isEnable={buttonEnabled} onClick={check}>
        Check
      </Button>
    </AppWrapper>
  );
}

export default App;
