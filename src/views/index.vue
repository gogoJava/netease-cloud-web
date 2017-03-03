<style lang="less" scoped>
  .top-nav:hover {
    background: none;
  }
</style>
<template>
  <div class="top-nav">
    <page-top></page-top>
    <top-nav></top-nav>
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>

<script type='text/babel'>
  import PageTop from '../components/common/PageTop.vue'
  import TopNav from '../components/common/TopNav.vue'
  export default {
    name: '',
    components: {
      PageTop,
      TopNav
    }
  }
</script>
