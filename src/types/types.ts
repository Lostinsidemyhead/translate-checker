export interface IPhrase {
  ru: string;
  en: string;
}

export interface IWord {
  id: number;
  word: string;
} 

export interface IField {
  name: string;
  words: IWord[];
}