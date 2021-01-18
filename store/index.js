import { cleanString } from '~/functions/cleanString';

export const state = () => ({
  selectedQuote: '',
  selectedMovie: '',
  encryptedQuote: '',
  encryptedLetterIndexes: {},
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
  setEncryptedLetterIndexes(state, payload) {
    const encryptedWords = payload.split(' ');

    encryptedWords.forEach((word, wordIndex) => {
      const encryptedLetters = word.split('');
      encryptedLetters.forEach((letter, letterIndex) => {
        // this ternary is to make sure we have an array of arrays
        state.encryptedLetterIndexes[letter]
          ? state.encryptedLetterIndexes[letter].push([wordIndex, letterIndex])
          : (state.encryptedLetterIndexes[letter] = [[wordIndex, letterIndex]]);
      });
    });
  },
  setUserAnswer(state, payload) {
    const encryptedWords = state.encryptedQuote.split(' ');
    const encryptedLetters = encryptedWords[payload.wordIndex].split('');
    const letter = encryptedLetters[payload.letterIndex];

    // this is to prep state.userAnswer for the correct number of words
    // otherwise we get errors
    if (state.userAnswer.length !== encryptedWords.length) {
      encryptedWords.forEach(() => state.userAnswer.push([]));
    }

    state.encryptedLetterIndexes[letter].forEach(([wordIndex, letterIndex]) => {
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
    state.encryptedLetterIndexes = {};
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
    commit('setEncryptedLetterIndexes', payload.encrypted);
  },
  selectLevel({ state, commit }, payload) {
    const mostCommonLetters = ['E', 'A', 'R', 'I', 'O'];
    const upperCaseQuote = state.selectedQuote.toUpperCase();
    const wordsFromQuote = upperCaseQuote.split(' ');
    const lettersFromQuote = upperCaseQuote.split('').filter((letter) => letter.match(/[A-Z]/));
    const letterSet = new Set();
    const answerArray = [];

    let levelNumber;

    if (payload === 'easy') {
      lettersFromQuote.length < 7
        ? (levelNumber = Math.floor(lettersFromQuote.length / 2))
        : (levelNumber = Math.floor(lettersFromQuote.length / 4));
    } else {
      // if payload === 'medium'
      lettersFromQuote.length < 7
        ? (levelNumber = Math.floor(lettersFromQuote.length / 3))
        : (levelNumber = Math.floor(lettersFromQuote.length / 6));
    }

    while (levelNumber > letterSet.size) {
      const randomLetter = lettersFromQuote[Math.floor(Math.random() * lettersFromQuote.length)];

      wordsFromQuote.forEach((word, wordIndex) => {
        word.split('').forEach((letter, letterIndex) => {
          if (
            !mostCommonLetters.includes(letter) &&
            !letterSet.has(letter) &&
            letter === randomLetter
          ) {
            letterSet.add(randomLetter);
            answerArray.push([letter, wordIndex, letterIndex]);
          }
        });
      });
    }

    answerArray.forEach((group) => {
      commit('setUserAnswer', {
        letter: group[0],
        wordIndex: group[1],
        letterIndex: group[2],
      });
    });
  },
};
