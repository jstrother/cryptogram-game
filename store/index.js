import { cleanString } from '~/functions/cleanString';

export const state = () => ({
  selectedQuote: '',
  selectedMovie: '',
  encryptedQuote: '',
  similarEncryptedLetterIndexes: {},
  userAnswer: [],
  isAnswerCorrect: false,
});

export const mutations = {
  setSelectedQuote(state, payload) {
    state.selectedQuote = payload;
  },
  setSelectedMovie(state, payload) {
    state.selectedMovie = payload;
  },
  setEncryptedQuote(state, payload) {
    state.encryptedQuote = payload;
  },
  setSimilarEncryptedLetterIndexes(state) {
    const encryptedWords = state.encryptedQuote.split(' ');

    encryptedWords.forEach((word, wordIndex) => {
      const encryptedLetters = word.split('');
      encryptedLetters.forEach((letter, letterIndex) => {
        // this ternary is to make sure we have an array of arrays
        state.similarEncryptedLetterIndexes[letter]
          ? state.similarEncryptedLetterIndexes[letter].push([wordIndex, letterIndex])
          : (state.similarEncryptedLetterIndexes[letter] = [[wordIndex, letterIndex]]);
      });
    });
  },
  setUserAnswer(state, payload) {
    const indexes = state.similarEncryptedLetterIndexes;
    const encryptedWords = state.encryptedQuote.split(' ');
    const encryptedLetters = encryptedWords[payload.wordIndex].split('');
    const letter = encryptedLetters[payload.letterIndex];

    // this is to prep state.userAnswer for the correct number of words
    // otherwise we get errors
    encryptedWords.forEach(() => state.userAnswer.push([]));

    indexes[letter].forEach(([wordIndex, letterIndex]) => {
      state.userAnswer[wordIndex][letterIndex] = payload.letter;
    });
  },
  setIsAnswerCorrect(state) {
    state.isAnswerCorrect =
      cleanString(state.userAnswer.flat().join('')) === cleanString(state.selectedQuote);
  },
  resetState(state) {
    state.selectedQuote = '';
    state.selectedMovie = '';
    state.encryptedQuote = '';
    state.similarEncryptedLetterIndexes = {};
    state.userAnswer = [];
    state.isAnswerCorrect = false;
  },
};

export const actions = {
  saveQuoteInfo({ commit }, payload) {
    commit('resetState');
    commit('setSelectedQuote', payload.quote);
    commit('setSelectedMovie', payload.movie);
    commit('setEncryptedQuote', payload.encrypted);
    // we need to give 'setEncryptedQuote' a chance to finish before we run 'setSimilarEncryptedLetterIndexes'
    setTimeout(() => {
      commit('setSimilarEncryptedLetterIndexes');
    }, 1500);
  },
};
