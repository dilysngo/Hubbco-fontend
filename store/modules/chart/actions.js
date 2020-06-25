import axios from 'axios';
import types from './types';
export default {
    async getKeyWordsTrend({commit}) {
        console.log(999999999);
        const trends = await axios.get('http://localhost:10000/api/charts/key-word');
        commit(types.GET_KEY_WORD_TREND, trends.data);
        return trends;
    }
};
