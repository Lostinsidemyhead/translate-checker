import axios from 'axios';
import { Sentence } from '../types/types';

interface SentencesResponse {
  data: {
    sentenceAll: {
      en: string;
      ru: string;
    }[];
  };
}

export default class SentencesService {
  constructor(private url: string) {}

  async getAllSentences(): Promise<Sentence[]> {
    const response = await axios.post<SentencesResponse>(this.url, {
      query: `
        {
          sentenceAll{
            en
            ru
          }
        }
      `,
    });

    return response.data?.data?.sentenceAll;
  }
}
