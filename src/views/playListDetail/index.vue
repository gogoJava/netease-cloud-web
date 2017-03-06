<style lang="less" scoped>
  .playList {
    margin-bottom:2.3rem;
    width:100%;
  }
  .fixed-title {
    position: fixed;
    top: 0;
    width: 100%;
    height: 56px;
    left: 0;
    z-index: 15;
  }

  .mu-appbar {
    background-color: transparent;
  }
  .bar-line {
    display: block;
    bottom: 0 ;
    left: 0;
    display: block;
    width: 100%;
    height: 0.05rem;
    background: radial-gradient(#d3d3d3 -90%, transparent 100%);
  }
  .mu-paper-1 {
    box-shadow: none;
    > .mu-appbar-title {
      text-align: center;
      font-size: 14px;
    }
  }
  .play-list-info {
    position: relative;
    padding: 60px .5rem 0 ;
    height: 10rem;
  }

  .info-wrapper {
    position: relative;
    z-index: 10;
    color: #fff;
    .info-gallery {
      position: relative;
      float: left;
      width: 6rem;
      overflow: hidden;
  span {
    position: absolute;
    display: block;
    padding-right: 5px;
    width: 100%;
    left: 0;
    top: 0;
    font-size: 12px;
    text-align: right;
    background: rgba(0,0,0,.35);
    z-index: 11;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  }

  .info-title {
    float: left;
    width: 7.5rem;
    margin-left: 1rem;
  .title {
    font-size: 16px;
    word-wrap: wrapper;
  }
  .author {
  span {
    display: inline-block;
    font-size: 14px;
    vertical-align: top;
    line-height: 30px;
  }
  }
  }
  }

  .play-list-holder {
    position: relative;
    background: #fff;
    z-index: 3;

  .add-all {
    padding-left: .4rem;
  }
  }

     .indexStyle {
       padding-left: 10px;
       font-size: 18px;
       font-weight: bolder;
     }
  .mu-item-title {
    white-space:nowrap;
    height: 1.7rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .bg-player {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom right;
    filter: blur(40px);
    -webkit-filter: blur(40px);
    z-index: 1;
  }
  .bg-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #292a2b;
    background-color: rgba(0,0,0,.35);
    z-index: 2;
  }
  .center {
    display: block!important;
    margin: 10% auto 0;
  }
</style>
<template>
  <div class="playList">
    <div class="fixed-title"  :style="{'background': 'rgba(206, 61, 62, '+ opacity +')'}">
      <app-bar>
        <icon-button icon='arrow_back' @click="goBack" slot="left"/>
        <div class="play-title">
          <div class="play-name"><span>{{fname}}</span></div>
        </div>
      </app-bar>
    </div>
    <div class="play-list-info">
      <div class="info-wrapper">
        <div class="info-gallery">
          <span>{{playCount | formatCount}}</span>
          <img :src="coverImgUrl + '?param=300y300'" alt="">
        </div>
        <div class="info-title">
          <p class="titile">{{name}}</p>
          <p class="author">
            <avatar slot="left"  :src="creator.avatarUrl + '?param=50y50'" :size="30" :iconSize="20"/>
            <span>{{creator.nickname}}</span>
          </p>
        </div>
      </div>
      <div class="bg-mask"></div>
      <div class="bg-player" id="backImg" :style="{'background-image':'url(' + coverImgUrl + '?param=300y300)'}" ></div>
    </div>
    <div class="play-list-holder">
      <div class="add-all">
        <flat-button label="播放全部" class="demo-flat-button" icon="add_circle_outline"/>
        <divider/>
      </div>
      <div>
        <circular-progress :size="40" class="center" v-if="isloading"/>
        <list :value="value" v-show="!isloading" @change="change">
          <div v-for="(item, index) in list" @click="playAudio(item)">
            <list-item  :disableRipple="true" :title="item.name" :value="item.id" :describeText="item.ar[0].name">
              <span slot="left" class="indexStyle">{{index + 1}}</span>
            </list-item>
            <divider inset/>
          </div>
        </list>
      </div>
      </list>
    </div>
  </div>
  </div>
</template>

<script type='text/babel'>
  import iconButton from 'muse-ui/src/iconButton/iconButton.vue'
  import appBar from 'muse-ui/src/appBar/appBar.vue'
  import avatar from 'muse-ui/src/avatar/avatar.vue'
  import flatButton from 'muse-ui/src/flatButton/flatButton.vue'
  import divider from 'muse-ui/src/divider/divider.vue'
  import circularProgress from 'muse-ui/src/circularProgress/circularProgress.vue'
  import list from 'muse-ui/src/list/list.vue'
  import listItem from 'muse-ui/src/list/listItem.vue'
  // actions
  import actions from './actions'
  // getters
  import getters from './getters'
  export default {
    name: '',
    components: {
      iconButton,
      appBar,
      avatar,
      flatButton,
      divider,
      circularProgress,
      list,
      listItem
    },
    data () {
      return {
        fname: '歌单',
        opacity: 0,
        value: 0
      }
    },
    beforeRouteEnter: (to, from, next) => {
      next(vm => {
        window.onscroll = () => {
          var opa = window.pageYOffset / 150
          if (opa > 0.5) {
            vm.fname = vm.name
          } else {
            vm.fname = '歌单'
          }
          vm.opacity = window.pageYOffset / 150
        }
      })
    },
    // 路由离开时清除onscroll事件
    beforeRouteLeave: (to, from, next) => {
      window.onscroll = null
      next()
    },
    computed: {
      ...getters
    },
    mounted () {
      this.init()
    },
    methods: {
      ...actions,
      goBack () {
        this.$router.go(-1)
      },
      change (val) {
        console.log('change', val)
        this.value = val
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
