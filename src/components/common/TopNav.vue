<style lang="less" scoped>
  .view-tabs {
    background-color: #fff;
    color: rgba(0,0,0,.87);
  >.mu-tab-link {
     color: rgba(102,102,102,1);
   }
  >.mu-tab-active{
     color: #ce3d3e;
   }
  }
</style>
<template>
  <tabs :value="activeTab" @change="handleTabChange" class="view-tabs">
    <tab value="recommend" title="个性推荐"/>
    <tab value="songList" title="歌单"/>
    <tab value="radio" title="主播电台"/>
    <tab value="singer" title="热门歌手"/>
  </tabs>
</template>

<script type='text/babel'>
  import tabs from 'muse-ui/src/tabs/tabs.vue'
  import tab from 'muse-ui/src/tabs/tab.vue'
  export default {
    components: {
      tabs,
      tab
    },
    data () {
      return {
        activeTab: 'recommend'
      }
    },
    created () {
      // 当created函数时监测路由信息,防止页面刷新tab高亮错误
      var tmpArr = this.$route.path.split('/')
      if (tmpArr[1] === 'index') {
        this.handleTabChange(tmpArr[2])
      }
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val
        this.$router.push({ path: '/index/' + val })
      }
    }
  }
</script>
