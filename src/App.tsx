import { useEffect, useState } from 'react';
import WhiteButton from './components/WhiteButton';
import PhrasesService from './API/PhrasesService'
import { IPhrase } from './types/types';
import Phrase from './components/Phrase';
import GlobalFonts from './fonts/fonts';
import WordsCloud from './components/WordsCloud';
import styled from 'styled-components';
import Header from './components/Header';

const AppWrapper = styled.div`
  max-width: 482px;
  margin: auto;

`;
function App() {

  const [phrases, setPhrases] = useState<IPhrase[]>([]);

  useEffect(() => {
    fetchPhrases();
  }, []);

  async function fetchPhrases() {
    const response = await PhrasesService.getAllSentences();
    setPhrases(response.data?.data?.sentenceAll);
  }

  const getWordList = (phrase: string): string[] => {
    if (!phrase) return [];
    const wordList = phrase.split(" ").sort();
    return wordList;
  }

  const check = () => {
    console.log(getWordList(phrases[0].en).sort());
  }

  return (
    <AppWrapper>
      <GlobalFonts />
      <Header/>

      <Phrase phrase={phrases[0]?.ru} />
      
      <WordsCloud wordList={getWordList(phrases[0]?.en)}/>

      <WhiteButton onClick={check}>
        Check
      </WhiteButton>
    </AppWrapper>
  );
}

export default App;
