import Vue from 'vue';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';
import axios from '../../utils/http';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

// initial state
const state = {
  all: [],
  stream: {},
  game: ''
};

let interval;

export default {
  namespaced: true,
  state,
  getters: {},
  actions: {
    unsetStreams ({ commit }) {
      commit('unsetStreams');
    },

    getByChannelName ({ commit }, channel) {
      axios
        .get(`/stream/channel/${channel}`)
        .then(r => r.data)
        .then(stream => {
          commit('setStream', stream);
        }).catch(err => {
          if (err.response && err.response.status === 400) {
            commit('setStreams', []);
            return;
          }
          throw err;
        });
    },

    getByGame ({ commit }, args) {
      const { game, limit } = args;
      commit('setStreamGame', game);

      axios
        .get(`/stream/game/${game}?limit=${limit}`)
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

    setStream ({ dispatch, commit }, stream) {
      commit('setStream', stream);
      if (!stream) {
        return;
      }

      // Clean up the last interval
      if (interval) {
        clearInterval(interval);
        interval = undefined;
      }

      // create interval to sync stream each 1 minutes
      dispatch('getByChannelName', stream.channel.name);

      // interval to update games on store for each 5 minutes
      interval = setInterval(() => {
        dispatch('getByChannelName', stream.channel.name);
      }, 30000);
    }
  },
  mutations: {
    setStreamGame (state, game) {
      state.game = game;
    },

    setStream (state, stream) {
      if (!stream || !stream.channel) {
        state.stream = [];
        return;
      }

      stream.url = `https://player.twitch.tv/?channel=${stream.channel.name}`;
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
