<template>
  <header class="menu">
    <div class="menu-container">
      <div class="menu-item menu-logo">
        <img src="/static/img/twitch-logo.png">
      </div>
      <div class="menu-item menu-input">
        <input-search />
      </div>
    </div>
  </header>
</template>

<script>
import './TopMenu.scss';
import InputSearch from './InputSearch';

export default {
  components: {
    InputSearch
  }
};
</script>
