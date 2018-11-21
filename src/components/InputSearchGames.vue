<template>
  <div :class="{ show: games.length > 0 }" class="dropdown-content">
    <a v-for="(game, index) in games" :key="index"
       href="#" tabindex="1"
       @click="selectGame(game.name)">
      {{ game.name }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    games: {
      type: Array,
      required: true
    },
    selectGame: {
      type: Function,
      required: true
    }
  }
};
</script>
