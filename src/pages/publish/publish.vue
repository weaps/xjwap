<template>
  <div>
    <home-header>
      <router-link tag="button" class="header-left" to="/">
        <i class="icon iconfont icon-arrow-left"></i>
      </router-link>
      <h1 class="ui-nowrap-flex">发布需求</h1>
    </home-header>
    <div class="container publish-list">
      <!--<ul class="ui-list ui-list-function ui-border-tb publish-list">-->
        <!--<li class="ui-arrowlink" @click="toProvide('发布供给需求')">-->
          <!--<div class="ui-avatar">-->
            <!--<span><i class="icon iconfont icon-survey" style="color: #ff5000"></i></span>-->
          <!--</div>-->
          <!--<div class="ui-list-info ui-border-t">-->
            <!--<h5 class="ui-nowrap">发布供给需求</h5>-->
            <!--<p>涵盖人才、金融、知产、政策、咨询、培训等内容</p>-->
          <!--</div>-->
        <!--</li>-->
        <!--<li class="ui-arrowlink">-->
          <!--<div class="ui-avatar">-->
            <!--<span><i class="icon iconfont icon-packing-labeling" style="color: #55efc4"></i></span>-->
          <!--</div>-->
          <!--<div class="ui-list-info ui-border-t">-->
            <!--<h5 class="ui-nowrap">发布技术需求</h5>-->
            <!--<p>关于技术相关的技术类型需求</p>-->
          <!--</div>-->
        <!--</li>-->
      <!--</ul>-->
      <div class="weui-cells">
        <li class="weui-cell weui-cell_access list-arrow" @click="toProvide('发布供给需求')">
          <div class="weui-cell__hd"><i class="icon iconfont icon-survey" style="color: #ff5000"></i></div>
          <div class="weui-cell__bd_text weui-cell_primary">
            <p class="text">发布供给需求</p>
            <p class="weui-media-box__desc text-left">涵盖人才、金融、知产、政策、咨询、培训等内容</p>
          </div>
        </li>
        <li class="weui-cell weui-cell_access list-arrow">
          <div class="weui-cell__hd"><i class="icon iconfont icon-packing-labeling" style="color: #ff5000"></i></div>
          <div class="weui-cell__bd_text weui-cell_primary">
            <p class="text">发布技术需求</p>
            <p class="weui-media-box__desc text-left">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from 'common/header/header'
export default {
  name: 'publish',
  components: {
    HomeHeader
  },
  methods: {
    toProvide (name) {
      let query = {
        name: name
      }
      this.$router.replace({name: 'PublishForm', query: query})
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~css/variable.styl"
.publish-list
  .weui-cells
    .weui-cell
      align-items flex-start
  .weui-cell__hd
    padding-right .1rem
    vertical-align top
    .icon
      font-size $font-size-large-xl
      vertical-align top
  .weui-cell__bd_text
    flex 1
    width 0%
    .text
      text-align left
</style>
