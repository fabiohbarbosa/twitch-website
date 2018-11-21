<template>
  <section>
    <div class="content">
      <iframe
        :src="stream.url"
        frameborder="0"
        allowfullscreen="true"
        scrolling="no"
        height="378"
        width="620"/>

      <div class="channel" v-if="stream.channel">
        <div class="channel-item">
          <img :src="stream.logo">
        </div>

        <div class="channel-info">
          <div class="channel-item">
            <h1>{{stream.channel}}</h1>
          </div>
          <div class="channel-item">
            <p>Viewers: {{stream.viewers}}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
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
