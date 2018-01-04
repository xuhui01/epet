<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="分类" name="first">
        <leftItem :categorys="categorys" />
        <rightItem :rightdatas="rightdatas" />
      </el-tab-pane>
      <el-tab-pane label="品牌" name="second">
        <brand />
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import leftItem from '../../components/leftItem/leftItem.vue'
  import rightItem from '../../components/rightItem/rightItem.vue'
  import brand from '../../components/brand/brand.vue'
  export default {
    components: {
      leftItem,
      rightItem,
      brand
    },

    data () {
      return {
        categorys: [],
        rightdatas: {},
        activeName: 'first'
      }
    },

    mounted () {

      let url = `/api/categoryLeftData`;
      axios.get(url)
        .then(response => {
          let data = response.data;
          if (data.code === 0) {
            this.categorys = data.data.categorys;

            let ownner = data.data.categorys[0].cateid;
            url = `/api/rightData?owner=${ownner}`;
            axios.get(url)
              .then(response => {
                let data = response.data;
                this.rightdatas = data.data.cate_list[0];
              })
          }
        })
        .catch(err => {
          console.log(err);
        });

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    background-color #f3f4f5
  .scrollbar-none::-webkit-scrollbar
    height: 0
    width: 0
  .el-tabs__nav
    transform: translateX(145px) !important
</style>
