export interface Sentence {
  ru: string;
  en: string;
}

export interface Word {
  id: number;
  word: string;
} 

export interface Field {
  name: string;
  words: Word[];
}