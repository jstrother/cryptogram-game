export const state = () => ({
  selectedQuote: '',
  selectedMovie: '',
  encryptedQuote: '',
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
  setUserAnswer(state, payload, index) {
    state.userAnswer[index] = payload;
  },
};

export const actions = {
  saveQuoteInfo({ commit }, payload) {
    commit('setSelectedQuote', payload.quote);
    commit('setSelectedMovie', payload.movie);
    commit('setEncryptedQuote', payload.encrypted);
  },
};
