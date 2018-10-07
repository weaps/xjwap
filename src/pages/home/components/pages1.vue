<template>
  <!--<ul class="index-tab-list ui-list ui-border-tb">-->
    <!--<li v-for="(item, index) of homeListData" :key="index" class="ui-border-b">-->
      <!--<div class="ui-list-img-square">-->
        <!--<span><img v-lazy="item.shopPhoto" alt=""></span>-->
      <!--</div>-->
      <!--<div class="ui-list-info">-->
        <!--<h5 class="ui-nowrap-multi">{{item.title}}</h5>-->
        <!--<ul class="ui-row">-->
          <!--<li class="ui-col ui-col-50">-->
            <!--<p class="ui-nowrap">类型：实用新型专利</p>-->
          <!--</li>-->
          <!--<li class="ui-col ui-col-50">-->
            <!--<p>交易方式：完全转让</p>-->
          <!--</li>-->
          <!--<li class="ui-col ui-col-50">-->
            <!--<p>预算:{{item.saleCount}}万元</p>-->
          <!--</li>-->
          <!--<li class="ui-col ui-col-50">-->
            <!--<p>{{item.cityName}}</p>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</li>-->
  <!--</ul>-->
  <div class="index-tab-list ui-list">
    <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg bikeshedding" v-for="(item, index) of homeListData" :key="index">
      <div class="ui-list-img-square">
        <img v-lazy="item.shopPhoto" alt="" class="weui-media-box__thumb">
      </div>
      <div class="weui-media-box__bd ui-list-info">
        <h4 class="weui-media-box__title">{{item.title}}</h4>
        <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
        <ul class="weui-media-box__info">
          <li class="weui-media-box__info__meta">{{item.saleCount}}万元</li>
          <li class="weui-media-box__info__meta">完全转让</li>
          <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">{{item.cityName}}</li>
        </ul>
      </div>
    </a>
  </div>
</template>

<script>
import { getHomListData } from 'api/api'
export default {
  name: 'pages1',
  data () {
    return {
      homeListData: []
    }
  },
  created () {
    this._getHomListData()
  },
  methods: {
    _getHomListData () {
      getHomListData().then((res) => {
        console.log(res)
        if (res.errCode === 0 && res.success) {
          this.homeListData = res.data.list
          console.log(this.homeListData)
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.index-tab-list
  background #fff
  &.ui-list
    .bikeshedding
       align-items: top
    .ui-list-img-square
      flex none
      width .8rem
      height .8rem
      margin .03rem 0.2rem 0 0
      vertical-align top
      img
        width 100%
    .ui-list-info
      text-align left
      h5
        font-size .14rem
      p
        font-size .12rem
</style>
