<style>
  *, :after, :before {
    box-sizing: border-box;
  }
  .mu-divider {
    -webkit-transform: scaleY(.33);
    transform: scaleY(.33);
  }
</style>
<template>
  <div id="app">
    <router-view></router-view>
    <media-player></media-player>
  </div>
</template>

<script>
  import MediaPlayer from './components/player/MediaPlayer.vue'
//  import getters from './components/player/getters'
  export default {
    name: 'app',
    components: {
      MediaPlayer
    },
    computed: {
//      ...getters
    }
  }
</script>

