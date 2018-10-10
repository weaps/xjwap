<template>
  <div class="user">
    <home-header>
      <h1 class="ui-nowrap-flex">我的</h1>
    </home-header>
    <div class="container">
      <!--头像区域-->
      <div class="user-info">
        <div class="avatar-box">
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg list-arrow">
            <div class="weui-media-box__hd ui-avatar">
              <img class="weui-media-box__thumb" src="@/assets/images/avatar.jpg" alt="">
            </div>
            <div class="weui-media-box__bd text-left">
              <h4 class="weui-media-box__title">飞翔的企鹅</h4>
              <p class="weui-media-box__desc">18019986666</p>
            </div>
          </a>
        </div>
      </div>
      <!--end-->
      <div class="weui-flex user__order" style="font-size: 12px">
        <div class="weui-flex__item">
          <i class="icon iconfont icon-tiaochazhengji"></i>
          <div class="placeholder">我的订单</div>
        </div>
        <div class="weui-flex__item">
          <i class="icon iconfont icon-shoucang1"></i>
          <div class="placeholder">收藏</div>
        </div>
        <div class="weui-flex__item">
          <i class="icon iconfont icon-qiandai"></i>
          <div class="placeholder">积分</div>
        </div>
        <div class="weui-flex__item">
          <i class="icon iconfont icon-huodong"></i>
          <div class="placeholder">活动</div>
        </div>
      </div>
      <div class="weui-panel user-nav-list">
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells">
              <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__hd">
                  <i class="icon iconfont icon-survey"></i>
                </div>
                <div class="weui-cell__bd weui-cell_primary text-left">
                  <p>我发布的供给需求</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
              <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__hd">
                  <i class="icon iconfont icon-packing-labeling"></i>
                </div>
                <div class="weui-cell__bd weui-cell_primary text-left">
                  <p>我发布的技术需求</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!---->
      <div class="weui-panel user-nav-list">
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells">
              <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__hd">
                  <i class="icon iconfont icon-account"></i>
                </div>
                <div class="weui-cell__bd weui-cell_primary text-left">
                  <p>我的帐户</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
              <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__hd">
                  <i class="icon iconfont icon-map"></i>
                </div>
                <div class="weui-cell__bd weui-cell_primary text-left">
                  <p>收货地址</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!---->
      <div class="weui-panel user-nav-list">
        <div class="weui-panel__bd">
          <div class="weui-media-box weui-media-box_small-appmsg">
            <div class="weui-cells">
              <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__hd">
                  <i class="icon iconfont icon-survey1"></i>
                </div>
                <div class="weui-cell__bd weui-cell_primary text-left">
                  <p>意见建议</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
              <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__hd">
                  <i class="icon iconfont icon-iconfontfuwushichang"></i>
                </div>
                <div class="weui-cell__bd weui-cell_primary text-left">
                  <p>购买咨询</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
              <a class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__hd">
                  <i class="icon iconfont icon-inquirytemplate"></i>
                </div>
                <div class="weui-cell__bd weui-cell_primary text-left">
                  <p>交易纠纷</p>
                </div>
                <span class="weui-cell__ft"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import HomeHeader from 'common/header/header'
import TabBar from '@/common/tabbar/tabbar'
export default {
  name: 'user',
  components: {
    HomeHeader,
    TabBar
  }
}
</script>

<style lang="stylus" scoped>
@import "~css/mixin.styl"
.user
  padding-bottom 1rem
  .user-info
    display: flex;
    justify-content: center;
    align-items: center;
    width 100%
    height 120px
    background url("../../assets/images/user__bg.png") no-repeat top
    background-size cover
    .avatar-box
      width 100%
      /*padding 0 .1rem*/
      box-sizing border-box
      .ui-avatar
        width 64px
        height 64px
        margin-right .2rem
        img
          border-radius 100px
          border 2px solid #ffffff
      .weui-media-box
        color #ffffff
        .weui-media-box__desc
          color #ffffff
  .user__order
    widows 100%
    background #ffffff
    mt(.1rem)
    .weui-flex__item
      position relative
      padding .1rem 0
      .icon
        font-size .28rem
  .user-nav-list
    .weui-cell__hd
      width 25px
      height 25px
      margin-right 5px
      .icon
        font-size .2rem
</style>
