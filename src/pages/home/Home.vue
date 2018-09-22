<template>
  <div>
    <div class="header">Home</div>
    <!--幻灯片-->
    <swiper-banner></swiper-banner>
    <!--统计 statistics-->
    <home-statistics></home-statistics>
  </div>
</template>

<script>
import SwiperBanner from 'pages/home/components/swiper/Swiper'
import HomeStatistics from 'pages/home/components/statistics/Statistics'
export default {
  name: 'Home',
  components: {
    SwiperBanner,
    HomeStatistics
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
