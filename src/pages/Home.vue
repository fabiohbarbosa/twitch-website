<template>
  <div class="content">
    <iframe
      :src="stream.url"
      frameborder="0"
      allowfullscreen="true"
      scrolling="no"
      height="378"
      width="620"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import './Home.scss';

export default {
  computed: {
    ...mapState({
      stream: state => state.streams.stream
    })
  }
};
</script>
