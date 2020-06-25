import types from './types';

export default {
    [types.GET_KEY_WORD_TREND](state, payload) {
        console.log(8888888888);
        state.trends = payload;
    }
};
