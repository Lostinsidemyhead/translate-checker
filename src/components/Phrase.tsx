import React, { FC } from 'react';
import { PhraseBorder, PhraseWrapper } from './styled';

interface PhraseProps {
  phrase: string;
}

const Phrase: FC<PhraseProps> = ({ phrase }) => {
  return (
    <PhraseBorder>
      <PhraseWrapper>{phrase}</PhraseWrapper>
    </PhraseBorder>
  )
}

export default Phrase;
