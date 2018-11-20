<template>
  <div>
    <div class="dropdown">
      <input class="field" type="text" placeholder="Search Game"
             v-model="text" @keyup="search" @click="search" @keydown="changeFocus"/>
        <div :ref='"dropdown"' class="dropdown-content" v-bind:class="{ show: show && gamesFound.length > 0 }">
          <a href="#" v-for="(game, index) in gamesFound" v-bind:key="index" @click="selectGame(game.name)" tabindex="1">
            {{ game.name }}
          </a>
        </div>
    </div>

  </div>
</template>

<script>
import './InputSearch.scss';
import { mapGetters, mapState } from 'vuex'

export default {
  data () {
    return {
      text: '',
      gamesFound: [],
      show: false
    };
  },

  mounted () {
    this.$store.dispatch('games/getAll');

    // interval to update games on store for each 5 minutes
    setInterval(() => {
      this.$store.dispatch('games/getAll');
    }, 300000);
  },

  computed: {
    ...mapState({
      games: state => state.games.all
    })
  },

  methods: {
    search (event) {
      if (this.text.length < 3) return;
      const textToFilter = this.text.trim().toLowerCase();

      // TODO study whether possible use mapGetters
      this.gamesFound = this.games.filter(g => {
        return g.name.trim()
                .toLowerCase()
                .includes(textToFilter)
      });
      this.show = true;

      if (event.keyCode == 27) {
        this.show = false;
        this.gamesFound = [];
      }
    },

    changeFocus(event) {
      if(event.keyCode === 40) {
        this.$nextTick(() => {
          // TODO change focus to list to navigate with arrows
        });
      }
    },

    selectGame(gameName) {
      this.$store.dispatch('streams/getByGame', gameName);
    }
  }
};
</script>
