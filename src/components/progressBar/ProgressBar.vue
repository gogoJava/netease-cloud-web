<style lang="less" scoped></style>
<template>
  <linear-progress mode="determinate" :value="value" :max="total" />
</template>
<script type="text/babel">
  import linearProgress from 'muse-ui/src/linearProgress/linearProgress.vue'
  export default {
    props: {
      value: Number,
      total: Number
    },
    components: {
      linearProgress
    },
    data () {
      return {
//        value: 34
      }
    }
  }
</script>
