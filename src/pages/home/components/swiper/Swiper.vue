<template>
  <div class="swiper-wrap">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of swiperImgList" :key="item.id" class="swiper-slide">
        <a href="#"><img :src="item.imgUrl" alt="" class="needsclick swiper-img"></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Swiper-banner',
  data () {
    return {
      swiperImgList: [{
        id: 0,
        imgUrl: 'https://weaps.github.io/workspace/xj/img/3.jpg'
      },
      {
        id: 1,
        imgUrl: 'https://weaps.github.io/workspace/xj/img/1.jpg'
      },
      {
        id: 2,
        imgUrl: 'https://weaps.github.io/workspace/xj/img/2.jpg'
      }],
      swiperOption: {
        pagination: '.swiper-pagination', // 显示小圆点
        autoplay: 3000, // 自动播放
        loop: true // 设置循环滑动
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperImgList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper-wrap >>> .swiper-pagination-bullet-active
    width 20px
    border-radius 4px
    background #fff
  .swiper-wrap
    width 100%
    height 0
    overflow hidden
    padding-bottom 46%
    .swiper-slide
      .swiper-img
        width 100%
        display block
</style>
