import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

// initial state
const state = {
  all: [],
  fetchCount: 0
};

export default {
  namespaced: true,
  state,
  getters: {},
  actions: {
    getAll ({ commit }) {
      axios
        .get(`/api/game`)
        .then(r => r.data)
        .then(games => {
          commit('setGames', games);
          commit('fetchCount');
        });
    }
  },
  mutations: {
    setGames (state, games) {
      state.all = games;
    },
    fetchCount (state) {
      state.fetchCount += 1;
    }
  }
};
