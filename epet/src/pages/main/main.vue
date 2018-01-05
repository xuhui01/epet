<template>
  <div>
    <div class="overflow xiazaiApp" style="display: block;">
      <div class="overflow rela">
        <span class="clsoebtn">
          <img id="close_down_bar" src="//static.epetbar.com/static_wap/lib/common_images/closebtn_03.png">
        </span>
        <div class="appdowimg">
          <a href="http://wap.epet.com/download.html?appname=epetmall" style="display: block;">
            <img src="https://img2.epetbar.com/nowater/2017-12/13/18/c63b6e6cf483cbb61196f658920a9d6e.jpg@!water">
          </a>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="indexnavcon">
        <!--上半部搜索区-->
        <div class="clearfix pt5 pl10 pr10 pb5">
          <div class="epet-search bgf">
            <div class="fl rela ft14 location">

              <a href="javascript:;">
                <span class="catordog c89">狗狗站</span>
                <span class="c89">|</span>
                <span data-name="my-place" class="myposition c89 ft13">重庆</span>
                <i></i>
              </a>
            </div>

            <p class="search-text">
              <a href="javascript:;">
                <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
                <span class="eico serach-ico"></span>
              </a>
            </p>

            <a href="javascript:;" class="epet-category">
              <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
            </a>
          </div>
        </div>
        <!--下半部分-->
        <div class="find_nav">
          <div class="find_nav_left dscroll">
            <div class="find_nav_list dscroll-div">
              <ul class="dscroll-ul">
                <li class="dscroll-li" v-for="(menu, index) in menus" :key="index">
                  <a href="javascript:;">
                    <span class="rela">
                      <span>{{menu.menu_name}}</span>
                      <i></i>
                    </span>
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>

      </div>

      <div class="allmodule module">
        <!--轮播图-->
        <carouse :images="images" :height="'160px'" />

        <!--专栏列表-->
        <column :columnDatas="columnDatas" />

        <!--分隔线-->
        <xline />

        <!--新人专享-->
        <carouse :images="xinrenImg" :height="'120px'"/>

        <!--每日疯抢-->
        <fengqiang />

        <!--分隔线-->
        <xline />

        <!--折扣-->
        <currency :imageData="ad1" />

        <!--分隔线-->
        <xline />

        <!---->
        <currency :imageData="ad2" />

        <!--分隔线-->
        <xline />

        <custom />

        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
  import carouse from '../../components/carousel/carousel.vue'
  import column from '../../components/column/column.vue'
  import xline from '../../components/xline/xline.vue'
  import fengqiang from '../../components/fengqiang/fengqiang.vue'
  import currency from '../../components/currency/currency.vue'
  import custom from '../../components/custom/custom.vue'
  import xinrenzhuanxiang from './xinrenzhuanxiang.gif'
  export default {
    components: {
      carouse,
      column,
      xline,
      fengqiang,
      currency,
      custom
    },

    data () {
      return {
        menus: [],
        datas: [],
        images: [],
        columnDatas: [],
        xinrenImg: [{image:xinrenzhuanxiang}],

        ad1: [],
        ad2: [],
        ad3: {},
      }
    },

    mounted () {
      let url = '/api/main/home';
      axios.get(url)
        .then(response => {
          let data = response.data;
          if (data.code === 0) {
            this.menus = data.home.menus;
            this.datas = data.home.datas;
            this.images = this.datas[0].value;
            this.columnDatas = this.datas[2].menus;

            this.ad1 = this.datas[7].content_images;
            this.ad2 = this.datas[9].content_images;
            this.ad3 = this.datas[11].value;
          }
        });


    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .xiazaiApp
    max-width 640px
    margin 0 auto
    background: rgba(61, 61, 61, 1);
    color: #fff;
    position: relative;
    z-index: 102;
    .rela
      position: relative
      .clsoebtn
        display: inline-block;
        width: 5%;
        margin-right: 2%;
        vertical-align: middle;
        position: absolute;
        top: 20%;
        left: 2%;
        img
          height: 100%;
          width: 100%;
      .appdowimg
        img
          width 100%

  .main
    max-width 640px
    margin 0 auto
    .indexnavcon
      height 86px
      .clearfix
        .epet-search
          /*padding: 8px 0;*/
          background: #fff;
          text-align: center;
          display: -webkit-box;
          -webkit-box-align: center;
          display: -moz-box;
          -moz-box-align: center;
          width: 100%;
          .location
            margin-right: 20px;
            i
              position: absolute;
              top: 10px;
              right: -11px;
              border-width: 4px;
              font-size: 0;
              line-height: 0;
              border-style: solid solid dotted;
              border-color: #898989 transparent transparent;
          .search-text
            position: relative;
            -webkit-box-flex: 1;
            input
              width: 100%;
              border: 0;
              height: 25px;
              background: #e9e9e9;
              border-radius: 4px;
              color: #bcbcbc;
              text-indent: 10px;
              font-size: 13px;
              outline: 0;
            .serach-ico
              background: url("./search.png") no-repeat;
              background-size: 11px auto;
              background-position: 0 0;
              width: 11px;
              height: 11px;
              position: absolute;
              right: 5px;
              top: 5px;
              bottom: 0;
              margin: auto 0;
          .epet-category
            display: block;
            img
              width: 25px;
              margin-left: 10px;
      .clearfix:after
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;

      .find_nav
        width: 100%;
        height: 35px;
        min-width: 320px;
        .dscroll
          overflow-x: auto;
          overflow-y: hidden;
          .dscroll-div
            width: 140%;
            .dscroll-ul
              white-space: nowrap;
              display: flex;
              .dscroll-li
                float: left;
                width: 20%
                a
                  display: block;
                  width: 100%;
                  height: 100%;
                  line-height: 36px;
                  font-size: 14px;
                  text-align: center;
                  color: #666;
                i
                  position: absolute;
                  bottom: 1px;
                  left: -10%;
                  width: 120%;
                  height: 2px;

  /*.footernav_ul
    .index-a a
      background-position: 0 0;
    .type-a a
      background-position: -85px -41px;*/
</style>
