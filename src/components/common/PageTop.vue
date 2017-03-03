<style lang="less" scoped>
  .logo {
    width: 150px;
    height: 48px;
    background: url("../../../static/icon/logo.png") no-repeat left center;
    background-size: cover;
  }
  .mu-appbar {
    background-color: #ce3d3e;
    padding: 0;
  }
</style>
<template>
  <app-bar>
    <div class="logo" slot="left"></div>
    <icon-button icon='search'  slot="right"/>
  </app-bar>
</template>

<script type='text/babel'>
  import AppBar from 'muse-ui/src/appBar/appBar.vue'
  import IconButton from 'muse-ui/src/iconButton/iconButton.vue'
  export default {
    components: {
      AppBar,
      IconButton
    }
  }
</script>
