<template>
  <div :class="{ show: streams.length > 0 }" class="dropdown-content">
    <div class="dropdown-content-title">
      <div class="dropdown-content-title-item">
        {{ game }}
      </div>

      <div class="dropdown-content-title-item">
        <select v-model="iSearchLimit" @change="updateSearch">
          <option v-for="i in incrementalSearch" :key="i">
            {{ i }}
          </option>
        </select>
      </div>
    </div>

    <a v-for="(stream, index) in streams" :key="index" class="dropdown-content-stream"
       href="#" tabindex="1" @click="selectStream(stream)">
      <div class="dropdown-content-stream-container">
        <div class="dropdown-content-stream-container-item">
          <img :src="stream.preview">
        </div>
        <div class="dropdown-content-stream-container-item">
          <h1>{{ stream.channel.name }}</h1>
          <p>{{ stream.channel.status }}</p>
          <p>&nbsp;</p>
          <p>Viewers: {{ stream.viewers }}</p>
        </div>
      </div>
    </a>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import './InputSearchStreams.scss';

export default {
  props: {
    game: {
      type: String,
      required: true
    },
    streams: {
      type: Array,
      required: true
    },
    selectStream: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      iSearchLimit: 5,
      incrementalSearch: [
        5, 15, 30, 50, 75, 100
      ]
    };
  },

  computed: {
    ...mapState({
      games: state => state.games.all
    })
  },

  mounted () {
    const limit = localStorage.getItem('iSearchLimit');
    if (limit) {
      this.iSearchLimit = limit;
    }
  },

  methods: {
    updateSearch () {
      localStorage.setItem('iSearchLimit', this.iSearchLimit);
      this.$store.dispatch('streams/getByGame', {
        game: this.game, limit: this.iSearchLimit
      });
    }
  }
};
</script>
