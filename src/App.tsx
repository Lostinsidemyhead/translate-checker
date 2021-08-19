import { useEffect, useState } from 'react';
import WhiteButton from './components/WhiteButton';
import PhrasesService from './API/PhrasesService'
import { IPhrase, IWord } from './types/types';
import GlobalFonts from './fonts/fonts';
import WordsCloud from './components/WordsCloud';
import Header from './components/Header';
import ExampleBlock from './components/ExampleBlock';
import { AppWrapper, ButtonWrapper, Spacer } from './components/styled';

function App() {
  const [phrases, setPhrases] = useState<IPhrase[]>([]);

  useEffect(() => {
    fetchPhrases();
  }, []);

  async function fetchPhrases() {
    const response = await PhrasesService.getAllSentences();
    setPhrases(response.data?.data?.sentenceAll);
  }

  const getWordList = (phrase: string): IWord[] => {
    if (!phrase) return [];

    const words = phrase.split(" ").sort();
    let wordList: Array<IWord> = [];
    for (let i = 0; i < words.length; i++) {
      const word: IWord = {id: i, word: words[i]}
      wordList.push(word);
    }

    return wordList;
  }

  const check = () => {
  }

  return (
    <AppWrapper>
      <GlobalFonts />
      <Header />
      <Spacer height="56px;" />

      <ExampleBlock examplePhrase={phrases[0]?.ru} />

      <Spacer height="50px;" />

      <WordsCloud wordList={getWordList(phrases[0]?.en)} />
      <Spacer height="79px;" />

      <ButtonWrapper>
        <WhiteButton onClick={check}>
          Check
        </WhiteButton>
      </ButtonWrapper>
    </AppWrapper>
  );
}

export default App;
