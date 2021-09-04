export interface Sentence {
  ru: string;
  en: string;
}

export interface Word {
  id: string;
  word: string;
}

export interface WordsField {
  name: string;
  words: Word[];
}
