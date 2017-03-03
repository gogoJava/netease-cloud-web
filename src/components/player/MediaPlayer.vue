<style lang="less" scoped>
  .foot {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 998;
  }
  .player {
    width: 100%;
    height: 2.3rem;
    position: relative;
    background-color: rgba(255,255,255,.9);
    color: #333333;
  }
  .player .cover {
    width: 2rem;
    height: 2rem;
    overflow: hidden;
    float: left;
    padding-left: 0.2rem;
    padding-top: 0.2rem;
    background: url('../../../static/icon/player-bar.png') no-repeat;
    background-size: cover;
  }
  .player .cover img {
    width: 100%;
    height: 100%;
  }
  .player .info {
    overflow: hidden;
    position: relative;
    width: 7rem;
    float: left;
    padding-top: 0.2rem;
    padding-left: .3rem;
  }
  .player .info .name {
    font-size: .7rem;
    line-height: 1rem;
  }
  .player .info .name, .player .info .artist {
    overflow: hidden;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .player .info .artist {
    color: #8a8a8a;
    font-size: .6rem;
  }
  .player .info .name, .player .info .artist {
    overflow: hidden;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  /*按钮*/
  .control {
    float: right;
  }
  .control .mini-btn {
    width: 2rem;
    height: 2rem;
  }
  .player .content .info .control {
    position: absolute;
    height: 100%;
    top: 50%;
    margin-top: -1rem;
    right: 0;
  }
  /*列表按钮*/
  .player-list {
    background: url("../../../static/icon/playbar_btn_playlist.png") no-repeat!important;
    background-size: cover!important;
  }
  .play {
    background: url("../../../static/icon/playbar_btn_play.png") no-repeat!important;
    background-size: cover!important;
  }
  .pause {
    background: url("../../../static/icon/playbar_btn_pause.png") no-repeat!important;
    background-size: cover!important;
  }
  .next {
    background: url("../../../static/icon/playbar_btn_next.png") no-repeat!important;
    background-size: cover!important;
  }
</style>
<template>
  <div class="foot" v-show="songList && songList.length > 0">
    <div class="player">
      <audio :src="audio.location" @timeupdate="updateTime" @canplay="canPlaySong" @error="loadError" @ended="nextSong" id="audioPlay"/>
      <div class="cover" @click="showDetail">
        <circular-progress v-show="loading" :size="30"/>
        <img class="xmplogo" :src="audio.albumPic + '?param=100y100'" v-show="!loading" :alt="audio.name">
        <!--<img class="xmplogo" src="../../../static/icon/default_cover.png" v-show="!loading" alt="audio.name">-->
      </div>
      <div class="info">
        <div class="name xmpname">{{audio.name}}</div>
        <div class="artist xmpartist">{{audio.singer}}</div>
      </div>
      <div class="control">
        <icon-button class="mini-btn player-list" @click="showList"/>
        <icon-button class="mini-btn play" :class="{pause: playing}" @click="toggleStatus"/>
        <icon-button class="mini-btn next" @click="nextSong"/>
      </div>
    </div>
  </div>
</template>

<script type='text/babel'>
  import iconButton from 'muse-ui/src/iconButton/iconButton.vue'
  import circularProgress from 'muse-ui/src/circularProgress/circularProgress.vue'
  import getters from './getters'
  import actions from './actions'
  export default {
    components: {
      iconButton,
      circularProgress
    },
    data () {
      return {
//        playing: true
      }
    },
    created () {
      this.init()
    },
    computed: {
      ...getters
    },
    methods: {
      ...actions,
      showDetail () {
        console.log('显示详情')
//        this.$router.push({name: 'playerDetail', params: {id: this.audio.id}})
//        this.$store.commit('toggleDetail')
      },
      loading () {
        return false
      },
      showList () {
        console.log('显示播放列表')
      },
      nextSong () {
        console.log('下一首')
      },
      updateTime () {
        console.log('updateTime')
      },
      loadError () {
        console.log('loadError')
      }
    }
  }
</script>
