import { FC } from 'react';

interface IPhraseProps {
  phrase: string;
}

const Phrase: FC<IPhraseProps> = ({ phrase }) => {
  return (
    <div>
      {phrase}
    </div>
  )
}

export default Phrase;
