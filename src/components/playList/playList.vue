<style lang="less" scoped>
  .play-title {
    font-size: 16px;
    height: 2rem;
    line-height: 2rem;
    color: rgba(0,0,0,.87);
    text-align: center;
  }
  .play-list {
    /*height: 10rem;*/
    max-height: 10rem;
    min-height: 5rem;
    width: 100%;
    padding: 0 10px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  .list-item {
    height: 2rem;
    line-height: 2rem;
  .left {
    max-width: 92%;
    float: left;
    height: 2rem;
    overflow: hidden;
  }
  }
  .list-name {
    float: left;
    max-width: 72%;
    height: 2rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .list-singer {
    color: #737171;
    font-size: 12px;
  }
  .list-btn {
    width: 32px;
    text-align: center;
    float: right;
    color: #737171;
  }
  .on {
    color: #ce3d3e;
  .list-singer {
    color: #ce3d3e;
  }
  }
  }
</style>
<template>
  <div>
    <bottom-sheet :open="show" @close="closeBottomSheet">
      <div class="play-title">播放列表（{{songList.length}}）</div>
      <hr class="mu-divider">
      <div class="play-list">
        <div class="list-item" :class="{on: item.id == audio.id}" v-for="(item, index) in songList">
          <div class="left" @click="play(index)">
            <span class="list-name">{{item.name}}</span> <span class="list-singer">&nbsp;-{{item.singer}}&nbsp;</span>
          </div>
          <span class="list-btn" @click="remove(index)">x</span>
          <hr class="mu-divider">
        </div>
      </div>
    </bottom-sheet>
  </div>
</template>
<script type="text/babel">
  import bottomSheet from 'muse-ui/src/bottomSheet/bottomSheet.vue'
  import getters from '../player/getters'
  import actions from './actions'
  export default {
    props: {
      show: Boolean
    },
    components: {
      bottomSheet
    },
    computed: {
      ...getters
    },
    methods: {
      ...actions,
      closeBottomSheet () {
        this.$emit('closePlayList')
      }
    }
  }
</script>
