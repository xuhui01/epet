<template>
  <div>
    <div class="leftbox bgfff scrollbar-none" ref="wrapper">
      <div>
        <ul>
          <li class="ftc bgfff" v-for="(category, index) in categorys" :key="index"
               @click="switchType" :data-id="category.cateid">{{category.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      categorys: Array
    },

    methods: {
      switchType () {

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .leftbox
    position: fixed;
    top: 40px;
    left: 0;
    overflow-y: scroll;
    bottom: 0;
    padding-bottom: 45px;
    box-sizing border-box
    li
      padding: 15px 0;
      border-bottom: 1px solid #f3f4f5;
      width: 70px;
      height: 50px;
      font-size: 13px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      box-sizing border-box
    .on
      background: #f3f4f5;
      color: #ed4044;
    .ftc
      text-align center
  .bgfff
    background #fff
</style>
