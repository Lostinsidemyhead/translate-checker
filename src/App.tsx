import React, { useEffect, useState } from 'react';
import WhiteButton from './components/WhiteButton';
import axios from 'axios';
import PhrasesService from './API/PhrasesService'
import { IPhrases } from './types/types';

function App() {

  const [phrases, setPhrases] = useState<IPhrases[]>();

  async function fetchPhrases() {
    const response = await PhrasesService.getAllSentences();
    setPhrases([response.data.data.sentenceAll]);
  }

  useEffect(() => {
    fetchPhrases();
  }, []);

  const check = () => {
    console.log(phrases);
  }

  return (
    <div>
      <div>Translate this sentence</div>

      <WhiteButton onClick={check}>
        Check
      </WhiteButton>
    </div>
  );
}

export default App;
