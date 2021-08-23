import { FC } from 'react';
import styled from 'styled-components';
import phraseBorder from '../images/phrase.svg'

interface PhraseProps {
  phrase: string;
}

const PhraseBorder = styled.div`
  background-image: url(${phraseBorder});
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 92px;
  width: 307px;
  margin-left: -12px;
  margin-top: -8px;
`;

const PhraseWrapper = styled.div`
  margin-left: 43px;
  font-family: Roboto-Regular;
  font-style: normal;
  font-size: 18px;
  line-height: 32px;
  text-decoration: underline dotted;
  text-underline-position: under;
  user-select: none;
`;

const Phrase: FC<PhraseProps> = ({ phrase }) => {
  
  return (
    <PhraseBorder>
      <PhraseWrapper>
      {phrase}
      </PhraseWrapper>
    </PhraseBorder>
  )
}

export default Phrase;
