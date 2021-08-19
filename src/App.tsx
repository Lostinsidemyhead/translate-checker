import { useEffect, useState } from 'react';
import WhiteButton from './components/WhiteButton';
import PhrasesService from './API/PhrasesService'
import { IPhrase } from './types/types';
import GlobalFonts from './fonts/fonts';
import WordsCloud from './components/WordsCloud';
import styled from 'styled-components';
import Header from './components/Header';
import ExampleBlock from './components/ExampleBlock';
import { Spacer } from './components/Spacer';
import Field from './components/Field';

const AppWrapper = styled.div`
  max-width: 484px;
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
  }

  return (
    <AppWrapper>
      <GlobalFonts />
      <Header />
      <Spacer height="56px;"/>
      
      <ExampleBlock examplePhrase={phrases[0]?.ru}/>
      <Spacer height="4.5px;"/>

      <Field/>
      <Spacer height="50px;"/>
      
      <WordsCloud wordList={getWordList(phrases[0]?.en)} />
      <Spacer height="79px;"/>
      
      <WhiteButton onClick={check}>
        Check
      </WhiteButton>
    </AppWrapper>
  );
}

export default App;
