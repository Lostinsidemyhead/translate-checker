import { FC } from 'react';
import styled from 'styled-components';
import phraseBorder from '../images/phrase.svg'

interface IPhraseProps {
  phrase: string;
}

const PhraseWrapper = styled.div`
  background-image: url(${phraseBorder});
  height: 92px;
  width: 306px;
  font-family: Roboto-Regular;
  font-style: normal;
  font-size: 18px;
  line-height: 21px;
`;

const Phrase: FC<IPhraseProps> = ({ phrase }) => {
  return (
    <PhraseWrapper>
      {phrase}
    </PhraseWrapper>
  )
}

export default Phrase;
