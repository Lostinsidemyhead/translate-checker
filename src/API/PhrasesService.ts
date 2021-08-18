import axios from 'axios';

export default class PhrasesService {
  static async getAllSentences() {
    const response = await axios({
      url: "http://109.194.37.212:9080/graphql",
      method: 'post',
      data: {
        query: `
        {
          sentenceAll{
            en
            ru
          }
        }
        `
      }
    });   
    return response;
  }
}