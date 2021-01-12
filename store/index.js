export const state = () => ({
  selectedQuote: '',
  selectedMovie: '',
  encryptedQuote: '',
  similarEncryptedLetterIndexes: {},
  userAnswer: [],
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
    const quote = state.encryptedQuote;

    for (const [index, char] of quote.split('').entries()) {
      state.similarEncryptedLetterIndexes[char]
        ? state.similarEncryptedLetterIndexes[char].push(index)
        : (state.similarEncryptedLetterIndexes[char] = [index]);
    }
  },
  setUserAnswer(state, payload) {
    const indexes = state.similarEncryptedLetterIndexes;
    const encryptedLetter = state.encryptedQuote[payload.index];
    indexes[encryptedLetter].forEach((index) => {
      if (encryptedLetter.match(/[A-Z]/)) {
        state.userAnswer[index] = payload.letter;
      } else {
        state.userAnswer[index] = encryptedLetter;
      }
    });
  },
  resetUserAnswer(state) {
    state.userAnswer = [];
  },
};

export const actions = {
  saveQuoteInfo({ commit }, payload) {
    commit('resetUserAnswer');
    commit('setSelectedQuote', payload.quote);
    commit('setSelectedMovie', payload.movie);
    commit('setEncryptedQuote', payload.encrypted);
    // we need to give 'setEncryptedQuote' a chance to finish before we run 'setSimilarEncryptedLetterIndexes'
    setTimeout(() => {
      commit('setSimilarEncryptedLetterIndexes');
    }, 1500);
  },
};

export const getters = {
  userAnswer(state) {
    return state.userAnswer;
  },
};
