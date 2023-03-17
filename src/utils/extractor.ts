import {stopwords} from './stopwords';

export function keywordExtract(str: string): string[] {
  str = str.toLowerCase();
  str = str.replace(/[^\w\d ]/g, '');

  const result = str
    .split(' ')
    .filter(function (word) {
      return stopwords.indexOf(word) === -1;
    })
    .filter((value, index, array) => array.indexOf(value) === index);
  return result;
}
