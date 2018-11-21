import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import games from './modules/games';
import search from './modules/search';
import streams from './modules/streams';
import loading from './modules/loading';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    games,
    search,
    streams,
    loading
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
