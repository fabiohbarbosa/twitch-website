import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

// initial state
const state = {
  all: []
};

export default {
  namespaced: true,
  state,
  getters: {},
  actions: {
    getByGame ({ commit }, game) {
      axios
        .get(`/api/streams?game=${game}`)
        .then(r => r.data)
        .then(streams => {
          commit('setStreams', streams);
        });
    }
  },
  mutations: {
    setStreams (state, streams) {
      state.all = streams;
    }
  }
};
