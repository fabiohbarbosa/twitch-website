import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// initial state
const state = {
  show: false
};

export default {
  namespaced: true,
  state,
  getters: {},
  actions: {
    toggle ({ commit }) {
      commit('toogle');
    }
  },
  mutations: {
    toogle (state) {
      state.show = !state.show;
    }
  }
};
