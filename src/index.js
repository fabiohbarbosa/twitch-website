import Vue from 'vue';
import router from './router';
import App from './App.vue';
import store from './store'

import './index.scss';

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
