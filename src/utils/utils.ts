import { Word } from "../types/types";

export const getWordList = (phrase: string): Word[] => {
  if (!phrase) return [];

  const words = phrase.split(" ").sort();
  let wordList: Array<Word> = [];
  for (let i = 0; i < words.length; i++) {
    const word: Word = { id: i, word: words[i] }
    wordList.push(word);
  }
  return wordList;
}

export const speechSentence = async (sentence: string, speaker: SpeechSynthesis) => {
  if (speaker.speaking) return;
  
  const msg = new SpeechSynthesisUtterance(sentence);
  const voices = speaker.getVoices();
  msg.voice = voices.filter(voice => voice.name === 'Google UK English Male')[0];
  speaker.speak(msg);

  return new Promise((resolve) => {
    msg.onend = () => resolve("");
  });
}