import { createStore } from "vuex";

const store = createStore({
  state: {
    uuidP: "",
    alias: "",
    gameId: "",
    state: "",
    error: "",
  },
  mutations: {
    setUuidP(state, uuidP) {
      state.uuidP = uuidP;
    },
    setAlias(state, alias) {
      state.alias = alias;
    },
    setGameID(state, gameId) {
      state.gameId = gameId;
    },
    setError(state, error) {
      state.error = error;
    },
    setState(state, stateGame) {
      state.state = stateGame;
    },
  },
  actions: {},
  getters: {
    uuidP: (state) => state.uuidP,
    alias: (state) => state.alias,
    gameId: (state) => state.gameId,
    error: (state) => state.error,
    state: (state) => state.state,
  },
});

export default store;
