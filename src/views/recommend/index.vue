<style lang="less" scoped>
  .img-response {
    max-width: 100%;
    height: auto;
  }
  .wrapper {
    padding: 0 5px;
  }
  /*// 通用的标题样式*/
     .g-title {
       padding-left: 25px;
       color: #333;
       height: 35px;
       line-height: 35px;
       font-size: 16px;
  a {
    float: right;
    font-size: 12px;
    color: #666;
  }
  }
  /*// banner样式*/
     .banner-item {
       width: 100%;
       height: 7.4rem;
       background: url('../../../static/icon/banner-item-load.png') no-repeat;
       background-size: cover;
     }

  /*// 推荐歌单*/
     .song-list {
       background: url("../../../static/icon/aei.png") no-repeat left center;
       background-size: 20px 20px;
     }
  .item {
    position: relative;
    margin: 0 5px 5px 10px;
    height: 100%;
  a {
    color: rgba(0, 0, 0, 0.87);
  }
  .bar {
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    width: 100%;
    text-align: right;
    padding: 2px 5px;
    background-color: rgba(0,0,0,.2);
  }

  &-img {
     min-width:5rem;
     min-height: 5rem;
   }

  &-img[lazy=loading] {
     background: url('../../../static/icon/default_cover.png') no-repeat;
     background-size: cover;
   }

  &-name {
     overflow : hidden;
     font-size: 12px;
     height: 1.7rem;
     text-overflow: ellipsis;
     display: -webkit-box;
     -webkit-line-clamp: 2;
     -webkit-box-orient: vertical;
   }
  }
  .mv {
    background: url("../../../static/icon/aee.png") no-repeat left center;
    background-size: 20px 20px;
  &-name {
     overflow: hidden;
     text-overflow: ellipsis;
     display: -webkit-box;
     -webkit-line-clamp: 1;
     -webkit-box-orient: vertical;
   }
  &-item {
     position: relative;
     margin: 0 5px 5px 10px;
   }
  &-author {
     font-size: 12px;
     color: #666;
   }
  }
  .loading {
    position: absolute;
    top: 0;
    left: 50%;
    background: #fff;
    width: 3rem;
    height: 3rem;
    margin-top: 70%;
    margin-left: -1.5rem;
    background: url('../../../static/icon/recommend_loading.png') no-repeat;
    background-size: cover;
    -webkit-animation: rotating 5s  linear infinite;
    animation: rotating 5s linear infinite;
  }
  .loading-txt {
    position: absolute;
    top:0;
    color: #4a4a4a;
    margin-top: 90%;
    width: 100%;
    text-align:center;
  }

  @keyframes rotating {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>
<template>
  <div>
    <div class="loading-wrapper" v-if="loading" >
      <div class="loading"></div>
      <div class="loading-txt">正在加载中</div>
    </div>
    <div class="container" v-show="!loading">
      <div id="slider">
        <!--<swiper :options="swiperOption">-->
          <!--<swiper-slide><img src="/static/banner1.jpg" class="banner-item"  alt=""></swiper-slide>-->
          <!--<swiper-slide><img src="/static/banner2.jpg" class="banner-item"  alt=""></swiper-slide>-->
          <!--<swiper-slide><img src="/static/banner3.jpg" class="banner-item"  alt=""></swiper-slide>-->
          <!--<swiper-slide><img src="/static/banner4.jpg" class="banner-item"  alt=""></swiper-slide>-->
          <!--<div class="swiper-pagination" slot="pagination"></div>-->
        <!--</swiper>-->
      </div>
      <div class="wrapper">
        <div class="g-title song-list">推荐歌单 <router-link :to="{path: '/index/songList'}">更多></router-link></div>
        <flexbox wrap="wrap" justify="space-around" class="box" :gutter="0">
          <flexbox-item basis="28%" class="item" :key="item.id" v-for="item in playList">
            <router-link :to="{name: 'playListDetail',params: { id: item.id, name: item.name, coverImg: item.coverImgUrl, creator: item.creator, count: item.playCount, desc: item.description }}">
              <div class="bar">{{item.playCount | formatCount}}</div>
              <img class="item-img img-response" v-lazy="item.coverImgUrl + '?param=230y230'" lazy="loading">
              <div class="item-name">{{item.name}}</div>
            </router-link>
          </flexbox-item>
        </flexbox>
        <div class="g-title mv">推荐MV <router-link :to="{}">更多></router-link></div>
        <flexbox wrap="wrap" justify="space-around" class="box" :gutter="0">
          <flexbox-item basis="40%" class="mv-item">
            <img class="img-response" src="http://p4.music.126.net/0r0H97s-bM0lZzs6x0Ibeg==/18685100604133296.jpg?param=300y170">
            <div class="mv-name">Skin to sking</div>
            <div class="mv-author">鹿晗</div>
          </flexbox-item>
          <flexbox-item basis="40%" class="mv-item">
            <img class="img-response"  src="http://p4.music.126.net/0r0H97s-bM0lZzs6x0Ibeg==/18685100604133296.jpg?param=300y170">
            <div class="mv-name">Skin to sking</div>
            <div class="mv-author">鹿晗</div>
          </flexbox-item>
          <flexbox-item basis="40%" class="mv-item">
            <img class="img-response" src="http://p3.music.126.net/DNlE0AUQdXci4XaQaxsHPQ==/18643319162278619.jpg?param=300y170">
            <div class="mv-name">Skin to skingSkin to</div>
            <div class="mv-author">鹿晗</div>
          </flexbox-item>
          <flexbox-item basis="40%" class="mv-item">
            <img class="img-response"  src="http://p3.music.126.net/DNlE0AUQdXci4XaQaxsHPQ==/18643319162278619.jpg?param=300y170">
            <div class="mv-name">Skin to sking</div>
            <div class="mv-author">鹿晗</div>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
  </div>
</template>

<script type='text/babel'>
  // components
  import flexbox from 'muse-ui/src/flexbox/flexbox.vue'
  import flexboxItem from 'muse-ui/src/flexbox/flexboxItem.vue'
  // actions
  import actions from './actions'
  // getters
  import getters from '../songList/getters'
  export default {
    name: '',
    data () {
      return {
      }
    },
    components: {
      flexbox,
      flexboxItem
    },
    computed: {
      ...getters
    },
    mounted () {
      this.init()
    },
    methods: {
      ...actions
    }
  }
</script>
