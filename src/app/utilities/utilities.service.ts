import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilitiesService {
  constructor() {}

  compressWords(words: string) {
    words = words.length > 26 ? (words = words.slice(0, 20) + '....') : words;
    return words;
  }

  compressWordsHome(words: string) {
    words = words.length > 18 ? (words = words.slice(0, 20) + '....') : words;
    return words;
  }
}
