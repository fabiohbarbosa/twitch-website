<template>
  <div v-if="showLoading">
    <img src="/static/img/loading.gif">
  </div>
</template>

<script>

import { mapState } from 'vuex';
export default {
  data () {
    return {
      toggleLoading: false
    };
  },

  computed: {
    ...mapState({
      showLoading: state => state.loading.show
    })
  }

};
</script>
