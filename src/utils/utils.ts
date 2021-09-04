import { Word } from '../types/types';

export const getWordList = (phrase: string): Word[] => {
  if (!phrase) return [];

  const words = phrase.split(' ').sort();
  const wordList: Array<Word> = [];
  for (let i = 0; i < words.length; i++) {
    const word: Word = { id: `word-${i}`, word: words[i] };
    wordList.push(word);
  }
  return wordList;
};

/* global SpeechSynthesis */
export const speechSentence = async (sentence: string, speaker: SpeechSynthesis) => {
  if (speaker.speaking) return;

  const msg = new SpeechSynthesisUtterance(sentence);
  const voices = speaker.getVoices();
  msg.voice = voices.filter((voice) => voice.name === 'Google UK English Male')[0];
  speaker.speak(msg);

  await new Promise((resolve) => {
    msg.onend = () => resolve('done');
  });
};

export const sortOrigin = (arr: Word[]) => {
  const res = arr.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });
  return res;
};
