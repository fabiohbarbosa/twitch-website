<template>
  <div :class="{ show: streams.length > 0 }" class="dropdown-content">
    <div class="dropdown-content-title">
      <div class="dropdown-content-title-item">
        {{ game }}
      </div>
      <div class="dropdown-content-title-item">
        LIVE
      </div>
    </div>

    <a v-for="(stream, index) in streams" :key="index" class="dropdown-content-stream"
       href="#" tabindex="1" @click="selectStream(stream)">
      <div class="dropdown-content-stream-container">
        <div class="dropdown-content-stream-container-item">
          <img :src="stream.preview">
        </div>
        <div class="dropdown-content-stream-container-item">
          <h1>{{ stream.channel }}</h1>
          <p>{{ stream.status }}</p>
          <p>&nbsp;</p>
          <p>Viewers: {{ stream.viewers }}</p>
        </div>
      </div>
    </a>

  </div>
</template>

<script>
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
  }
};
</script>
