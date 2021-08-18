import React, { useEffect, useState } from 'react';
import WhiteButton from './components/WhiteButton';
import PhrasesService from './API/PhrasesService'
import { IPhrase } from './types/types';
import Phrase from './components/Phrase';
import GlobalFonts from './fonts/fonts';


function App() {

  const [phrases, setPhrases] = useState<IPhrase[]>([]);
  
  useEffect(() => {
    fetchPhrases();
  }, []);

  async function fetchPhrases() {
    const response = await PhrasesService.getAllSentences();
    setPhrases(response.data?.data?.sentenceAll);      
  }

  const check = () => {
    
  }

  return (
    <div>
       <GlobalFonts />
      <div>Translate this sentence</div>

      <Phrase phrase={phrases[0]?.ru}/>

      <WhiteButton onClick={check}>
        Check
      </WhiteButton>
    </div>
  );
}

export default App;
