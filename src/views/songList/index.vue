<style lang="less" scoped>
  .img-response {
    max-width: 100%;
    height: auto;
  }
  .wrapper {
    width: 100%;
    padding:0 10px;
    /*height: 28rem;*/
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .title {
    margin: .2rem 0 .3rem 0;
    padding-left: .5rem;
    border-left: .15rem solid #ce3d3e;
  }
  .list {
  &-bar {
     position: absolute;
     top: 0;
     left: 0;
     color: #fff;
     width: 100%;
     text-align: right;
     padding: 2px 5px;
     background-color: rgba(0,0,0,.2);
   }
  &-item {
     position: relative;
     margin: 0 5px 5px 10px;
  a {
    color:rgba(0,0,0,.87);
  }
  }
  &-img {
     /*width: 8rem;*/
     /*height: 8rem;*/
   }
  &-img[lazy=loading] {
     background: url('../../../static/icon/default_cover.png') no-repeat;
     background-size: cover;
   }

  &-name {
     overflow: hidden;
     text-overflow: ellipsis;
     display: -webkit-box;
     /*-webkit-line-clamp: 1;*/
     /*-webkit-box-orient: vertical;*/
   }
  }
  .list-item a {
    text-decoration: none;
  }
  .list-name {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
</style>
<template>
  <div class="wrapper playList">
    <div class="content">
      <div class="title">全部歌单 </div>
      <flexbox wrap="wrap" justify="space-around" class="box" :gutter="0">
        <flexbox-item basis="40%" class="list-item" :key="item.id" v-for="item in playList">
          <router-link :to="{name: 'playListDetail',params: { id: item.id, name: item.name, coverImg: item.coverImgUrl, creator: item.creator, count: item.playCount, desc: item.description }}">
            <div class="list-bar">{{item.playCount | formatCount}}</div>
            <img class="list-img img-response" v-lazy="item.coverImgUrl + '?param=300y300'" lazy="loading">
            <div class="list-name">{{item.name}}</div>
          </router-link>
        </flexbox-item>
      </flexbox>
      <infinite-scroll :scroller="scroller" :loading="loading" loading-text="加载中..." @load="loadMore"/>
    </div>
  </div>
</template>

<script type='text/babel'>
  import flexbox from 'muse-ui/src/flexbox/flexbox.vue'
  import flexboxItem from 'muse-ui/src/flexbox/flexboxItem.vue'
  import infiniteScroll from 'muse-ui/src/infiniteScroll/infiniteScroll.vue'
  // actions
  import actions from './actions'
  import getters from './getters'
  export default {
    name: '',
    components: {
      flexbox,
      flexboxItem,
      infiniteScroll
    },
    data () {
      return {
        scroller: window
//        offset: 0,
//        loading: false
      }
    },
    mounted () {
      this.init()
    },
    computed: {
      ...getters
    },
    methods: {
      ...actions,
      loadMore () {
        console.log('loadmore')
        this.init()
      }
    },
    filters: {
      formatCount (v) {
        if (v < 100000) {
          return v
        } else {
          return (v / 10000).toFixed(0) + '万'
        }
      }
    }
  }
</script>
