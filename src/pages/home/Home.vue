<template>
  <div>
    <home-header>
      <i class="ui-icon-return" onclick="history.back()"></i>
      <h1 class="ui-nowrap-flex">国家技术转移东部中心-新疆分中心</h1>
      <!--<button class="ui-btn">回首页</button>-->
    </home-header>
    <!--幻灯片-->
    <swiper-banner></swiper-banner>
    <!--统计 statistics-->
    <home-statistics></home-statistics>
    <text-scroll></text-scroll>
    <home-tab></home-tab>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import SwiperBanner from 'pages/home/components/swiper/Swiper'
import HomeStatistics from 'pages/home/components/statistics/Statistics'
import TextScroll from 'pages/home/components/textscroll/textScroll'
import HomeTab from 'pages/home/components/tab/tab'
import TabBar from '@/common/tabbar/tabbar'
import HomeHeader from '@/common/header/header'
export default {
  name: 'Home',
  components: {
    SwiperBanner,
    HomeStatistics,
    TextScroll,
    HomeTab,
    TabBar,
    HomeHeader
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
</style>
