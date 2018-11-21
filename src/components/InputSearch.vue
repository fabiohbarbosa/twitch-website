<template>
  <div>
    <div class="dropdown">
      <input
        v-model="text"
        class="field"
        type="text"
        placeholder="Search Game"
        @keyup="search"
        @click="search"
        @keydown="changeFocus">
      <div
        :ref="&quot;dropdown&quot;"
        :class="{ show: show && gamesFound.length > 0 }"
        class="dropdown-content">
        <a
          v-for="(game, index) in gamesFound"
          :key="index"
          href="#"
          tabindex="1"
          @click="selectGame(game.name)">
          {{ game.name }}
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import './InputSearch.scss';
import { mapState } from 'vuex';

export default {
  data () {
    return {
      text: '',
      gamesFound: [],
      show: false
    };
  },

  computed: {
    ...mapState({
      games: state => state.games.all
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
      const textToFilter = this.text.trim().toLowerCase();

      // TODO study whether possible use mapGetters
      this.gamesFound = this.games.filter(g => {
        return g.name.trim()
          .toLowerCase()
          .includes(textToFilter);
      });
      this.show = true;

      if (event.keyCode === 27) {
        this.show = false;
        this.gamesFound = [];
      }
    },

    changeFocus (event) {
      if (event.keyCode === 40) {
        this.$nextTick(() => {
          // TODO change focus to list to navigate with arrows
        });
      }
    },

    selectGame (gameName) {
      this.$store.dispatch('streams/getByGame', gameName);
    }
  }
};
</script>
