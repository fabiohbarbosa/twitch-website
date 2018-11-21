import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

// initial state
const state = {
  all: [],
  stream: {},
  game: ''
};

export default {
  namespaced: true,
  state,
  getters: {},
  actions: {
    unsetStreams ({ commit, dispatch }, stream) {
      commit('unsetStreams');
    },
    getByGame ({ commit }, game) {
      commit('setStreamGame', game);
      axios
        .get(`/api/streams?game=${game}`)
        .then(r => r.data)
        .then(streams => {
          commit('setStreams', streams.data);
        }).catch(err => {
          if (err.response && err.response.status === 400) {
            commit('setStreams', []);
            return;
          }
          throw err;
        });
    },
    setStream ({ commit }, stream) {
      commit('setStream', stream);
    }
  },
  mutations: {
    setStreamGame (state, game) {
      state.game = game;
    },
    setStream (state, stream) {
      stream.url = `https://player.twitch.tv/?channel=${stream.channel}`;
      state.stream = stream;
    },
    setStreams (state, streams) {
      state.all = streams;
    },
    unsetStreams (state) {
      state.all = [];
    }
  }
};
