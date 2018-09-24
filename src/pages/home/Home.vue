<template>
  <div>
    <header class="ui-header ui-header-stable ui-border-b">
      <i class="ui-icon-return" onclick="history.back()"></i><h1>layout</h1><button class="ui-btn">回首页</button>
    </header>
    <!--幻灯片-->
    <swiper-banner></swiper-banner>
    <!--统计 statistics-->
    <home-statistics></home-statistics>
    <text-scroll></text-scroll>
    <ul class="ui-row ui-whitespace">
      <li class="ui-col ui-col-50">50</li>
      <li class="ui-col ui-col-50">50</li>
    </ul>
    <div class="ui-feeds">
      <ul>
        <li>
          <span>ssss</span>
        </li>
        <li>
          <span style="background-image:url(http://placeholder.qiniudn.com/374x374)"></span>
        </li>
        <li>
          <span style="background-image:url(http://placeholder.qiniudn.com/374x374)"></span>
        </li>
        <li>
          <span style="background-image:url(http://placeholder.qiniudn.com/374x374)"></span>
        </li>
        <li>
          <span style="background-image:url(http://placeholder.qiniudn.com/374x374)"></span>
        </li>
        <li>
          <span style="background-image:url(http://placeholder.qiniudn.com/374x374)"></span>
        </li>
      </ul>
    </div>
    <home-tab></home-tab>
  </div>
</template>

<script>
import SwiperBanner from 'pages/home/components/swiper/Swiper'
import HomeStatistics from 'pages/home/components/statistics/Statistics'
import TextScroll from 'pages/home/components/textscroll/textScroll'
import HomeTab from 'pages/home/components/tab/tab'
export default {
  name: 'Home',
  components: {
    SwiperBanner,
    HomeStatistics,
    TextScroll,
    HomeTab
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  body
    padding 0
    margin 0
</style>
