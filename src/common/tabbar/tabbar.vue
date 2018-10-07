<template>
  <div class="weui-tabbar">
    <router-link class="weui-tabbar__item weui-bar__item_on" to="/">
      <span style="display: inline-block;position: relative;">
        <div class="weui-tabbar__icon">
          <i class="icon iconfont icon-home"></i>
        </div>
      </span>
      <p class="weui-tabbar__label">首页</p>
    </router-link>
    <router-link class="weui-tabbar__item" to="/category">
      <div class="weui-tabbar__icon">
        <i class="icon iconfont icon-fenlei"></i>
      </div>
      <p class="weui-tabbar__label">分类</p>
    </router-link>
    <router-link tag="div" class="weui-tabbar__item" style="position: relative" to="/publish">
      <span style="display: inline-block;">
        <div class="weui-tabbar__icon">
          <!--<i class="icon iconfont icon-xiaoxi"></i>-->
          <button class="publish" type="button"><i class="icon iconfont icon-jia"></i></button>
        </div>
      </span>
      <p class="weui-tabbar__label">发布需求</p>
    </router-link>
    <router-link class="weui-tabbar__item" to="/vip">
      <span style="display: inline-block;position: relative;">
        <div class="weui-tabbar__icon">
        <i class="icon iconfont icon-crown"></i>
      </div>
      </span>
      <p class="weui-tabbar__label">VIP</p>
    </router-link>
    <router-link class="weui-tabbar__item" to="/user">
      <div class="weui-tabbar__icon">
        <i class="icon iconfont icon-wode"></i>
      </div>
      <p class="weui-tabbar__label">我</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style lang="stylus" scoped>
.weui-tabbar
  display flex
  position fixed
  z-index 500
  bottom 0
  width 100%
  background-color #ffffff
  box-shadow 0 0 16px 6px #eee
  .weui-tabbar__item
    display block
    -webkit-box-flex 1
    -webkit-flex 1
    flex 1
    padding 0
    font-size 0
    color #808080
    text-align center
    -webkit-tap-highlight-color rgba(0, 0, 0, 0)
    .weui-tabbar__label
      text-align center
      color #808080
      font-size 10px
      line-height 1.8
    .weui-tabbar__icon
      display inline-block
      width 30px
      height 30px
      .icon
        font-size .3rem
      .publish
        position absolute
        left 50%
        top -10px
        width 40px
        height 40px
        border 3px solid #ffffff
        border-radius 20px
        background #cf3529
        background: -webkit-linear-gradient(to right, #cf3529, #F43530);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #cf3529, #F43530); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        transform translateX(-50%)
        .icon
          font-size .2rem
          color #ffffff
.weui-badge {
  display: inline-block;
  padding: .15em .4em;
  min-width: 8px;
  border-radius: 18px;
  background-color: #F43530;
  color: #FFFFFF;
  line-height: 1.2;
  text-align: center;
  font-size: 12px;
  vertical-align: middle;
}
</style>
