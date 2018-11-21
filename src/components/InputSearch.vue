<template>
  <div>
    <div class="dropdown">
      <input v-model="text" class="field" type="text" placeholder="Search Game"
             @keyup="search" @click="search">

      <input-search-games :games="gamesFound" :select-game="selectGame" />
      <input-search-streams :game="streamGame" :streams="streamsFound" :select-stream="selectStream"/>

    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import InputSearchGames from './InputSearchGames';
import InputSearchStreams from './InputSearchStreams';

import './InputSearch.scss';

export default {
  components: {
    InputSearchGames,
    InputSearchStreams
  },

  data () {
    return {
      text: '',
      gamesFound: [],
      showStream: true
    };
  },

  computed: {
    ...mapState({
      games: state => state.games.all,
      streamGame: state => state.streams.game,
      streamsFound: state => state.streams.all
    })
  },

  mounted () {
    this.$store.dispatch('games/getAll');

    // interval to update games on store for each 5 minutes
    setInterval(() => {
      this.$store.dispatch('games/getAll');
    }, 300000);
  },

  methods: {
    search (event) {
      if (!this.text || this.text.length === 0) return;
      this.cleanStreams();
      const textToFilter = this.text.trim().toLowerCase();

      // TODO study whether possible use mapGetters
      this.gamesFound = this.games.filter(g => {
        return g.name.trim()
          .toLowerCase()
          .includes(textToFilter);
      });

      if (event.keyCode === 27) {
        this.cleanGames();
      }
    },

    selectGame (game) {
      const limit = localStorage.getItem('iSearchLimit') || 5;
      this.$store.dispatch('streams/getByGame', { game, limit });
      this.cleanGames();
    },

    selectStream (stream) {
      this.$store.dispatch('streams/setStream', stream);
      this.cleanStreams();
      this.text = '';
    },

    cleanGames () {
      this.gamesFound = [];
    },

    cleanStreams () {
      this.$store.dispatch('streams/unsetStreams');
      this.showStream = false;
    }

  }
};
</script>
