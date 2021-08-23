import { IPhrase, IWord } from "../types/types";

//Random inserts...
//Maybe add this array to words for difficulty 
export function getRandomWords(phrases: IPhrase[], count: number): IWord[] {
  let words: IWord[] = [];
  for (let i = 0; i < count; i++) {
    let phraseNumber = Math.floor(Math.random() * count);
    let phraseWords = getWordList(phrases[phraseNumber].en);
    let wordNumber = Math.floor(Math.random() * phraseWords.length);  
    words.push(phraseWords[wordNumber]);
  }
  return words;
}
//...Random inserts

export const getWordList = (phrase: string): IWord[] => {
  if (!phrase) return [];

  const words = phrase.split(" ").sort();
  let wordList: Array<IWord> = [];
  for (let i = 0; i < words.length; i++) {
    const word: IWord = { id: i, word: words[i] }
    wordList.push(word);
  }
  return wordList;
}