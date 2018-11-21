<template>
  <section>
    <div v-if="stream" class="content">

      <div id="iframeContainer" class="iframe-container">
        <iframe
          :src="stream.url"
          frameborder="0"
          allowfullscreen="true"
          scrolling="no"
        />
      </div>

      <div v-if="stream.channel" class="channel">
        <div class="channel-item">
          <img :src="stream.channel.logo">
        </div>

        <div class="channel-info">
          <div class="channel-item">
            <h1>{{ stream.channel.name }}</h1>
          </div>
          <div class="channel-item">
            <p>Viewers: {{ stream.viewers }}</p>
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
