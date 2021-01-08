export const state = () => ({
  selectedQuote: '',
  selectedMovie: '',
  encryptedQuote: '',
  similarLetterIndexes: {},
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
  setSimilarLetterIndexes(state) {
    const letterIndexes = state.similarLetterIndexes;
    const quote = state.encryptedQuote;
    const trash = [];

    for (const char of quote.split('')) {
      if (char.match(/[A-Z]/)) {
        const index = quote.indexOf(char);

        letterIndexes[char]
          ? letterIndexes[char].push(quote.indexOf(char))
          : (letterIndexes[char] = [quote.indexOf(char)]);

        trash.push(quote.slice(index, index + 1));
      }
    }

    console.log('quote:', quote);
    console.log('similarLetterIndexes:', letterIndexes);
  },
  setUserAnswer(state, payload) {
    const indexes = state.similarLetterIndexes;
    const userAnswer = state.userAnswer;
    const encryptedQuote = state.encryptedQuote;
    console.log('userAnswer payload:', payload);
    if (payload.match(/[A-Z]/)) {
      for (const char of encryptedQuote) {
        if (char === payload) {
          indexes[char].forEach((index) => {
            userAnswer[index] = payload;
            console.log('userAnswer:', userAnswer);
          });
        }
      }
    }
  },
};

export const actions = {
  saveQuoteInfo({ commit }, payload) {
    commit('setSelectedQuote', payload.quote);
    commit('setSelectedMovie', payload.movie);
    commit('setEncryptedQuote', payload.encrypted);
    // we need to give 'setEncryptedQuote' a chance to finish before we run 'setSimilarLetterIndexes'
    setTimeout(() => {
      commit('setSimilarLetterIndexes');
    }, 1500);
  },
};
