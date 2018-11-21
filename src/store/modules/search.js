import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// initial state
const state = {
  gamesToSearch: []
};

export default {
  namespaced: true,
  state,
  getters: {},
  actions: {
    gamesToSearch ({ commit }, gamesToSearch) {
      commit('setGamesToSearch', gamesToSearch);
    }
  },
  mutations: {
    setGamesToSearch (state, gamesToSearch) {
      state.gamesToSearch = gamesToSearch;
    }
  }
};
