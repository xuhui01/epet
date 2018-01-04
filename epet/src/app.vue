<template>
  <div>
    <router-view></router-view>

    <footerNav />
  </div>
</template>

<script type="text/javascript">
  import footerNav from './components/footer/footer.vue'
  export default {
    components: {
      footerNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
