import { useEffect, useState } from 'react';
import './styles/styles.css';
import PhrasesService from './API/PhrasesService';
import ExampleBlock from './components/ExampleBlock';
import Header from './components/Header';
import Notification from './components/Notification';
import { AppWrapper, Spacer } from './components/styled';
import CheckButton from './components/CheckButton';
import WordsFields from './components/WordsFields';
import GlobalFonts from './fonts/fonts';
import { IPhrase, IWord } from './types/types';

function App() {
  const [phrases, setPhrases] = useState<IPhrase[]>([]);
  const [currentPhrase, setCurrentPhrase] = useState<IPhrase>({ ru: "", en: "" });
  const [phraseCounter, setPhraseCounter] = useState<number>(0);

  const [buttonEnabled, setButtonEnabled] = useState<boolean>(false);
  const [userAnswer, setUserAnswer] = useState<IWord[]>([]);

  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);

  const synth = window.speechSynthesis;

  useEffect(() => {
    fetchPhrases();
  }, []);

  async function fetchPhrases() {
    const response = await PhrasesService.getAllSentences();
    setPhrases(response.data?.data?.sentenceAll);
    setCurrentPhrase(response.data?.data?.sentenceAll[phraseCounter]);
  }

  const updateUserAnswer = (words: IWord[]) => { setUserAnswer(words); }
  const updateButtonEnabled = (isEnabled: boolean) => { setButtonEnabled(isEnabled); }
  const updateShowingNotification = (showNotification: boolean) => { setShowNotification(showNotification); }

  const check = () => {
    setShowNotification(true);
    const words = userAnswer.map((word) => {
      return word.word;
    });

    if (currentPhrase.en === words.join(' ')) {
      setIsAnswerCorrect(true);
      speechPhrase();
    }
    else {
      setIsAnswerCorrect(false);
    }
  }

  function speechPhrase() {
    if (synth.speaking) return;
    let voices = speechSynthesis.getVoices();
    let msg = new SpeechSynthesisUtterance(currentPhrase.en);
    msg.voice = voices.filter(voice => voice.name === 'Google UK English Male')[0];
    speechSynthesis.speak(msg);
    
    msg.onend = function (e) {
      setCurrentPhrase(phrases[phraseCounter + 1]);
      setPhraseCounter(phraseCounter + 1);
    }
  }

  return (
    <AppWrapper>
      <GlobalFonts />
      <Header />
      <Spacer height="56px;" />

      <ExampleBlock phrase={phrases[phraseCounter]?.ru} />
      <Spacer height="50px;" />

      <WordsFields
        phrase={currentPhrase}
        updateUserAnswer={updateUserAnswer}
        updateButtonEnabled={updateButtonEnabled}
        updateShowingNotification={updateShowingNotification}
      />

      {showNotification
        ? <Notification isValid={isAnswerCorrect} />
        : <Spacer height="79px;" />}

      <CheckButton isEnable={buttonEnabled} onClick={check} />
    </AppWrapper>
  );
}

export default App;
