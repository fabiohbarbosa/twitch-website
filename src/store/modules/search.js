import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

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
}
