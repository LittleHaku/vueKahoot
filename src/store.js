import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
    state: {
        uuidP: '',
        alias: '',
        gameId: '',
        error: '',
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
    },
    actions: {

    },
    getters: {
        uuidP: state => state.uuidP,
        alias: state => state.alias,
        gameId: state => state.gameId,
        error: state => state.error,
    },
});

export default store;
