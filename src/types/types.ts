export interface Sentence {
  ru: string;
  en: string;
}

export interface Word {
  id: number;
  word: string;
}

export interface WordsField {
  name: string;
  words: Word[];
}
