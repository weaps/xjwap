<template>
  <div class="TextScroll ui-border-t">
    <div class="img-icon ui-border-r">
      <img src="../../../../assets/images/scroll-news-icon.png" alt="">
    </div>
    <transition-group tag="ul" :name="scrollType">
      <li
        v-for="(item,index) in dataList"
        :key='index'
        v-show="index==count"
        class="ui-arrowlink"
      >
        <!-- <router-link to=""> -->
        <p>{{item.name}}</p>
        <!-- </router-link> -->
      </li>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: 'TextScroll',
  props: {
    scrollType: {
      type: String,
      default: 'scroll-up'
    }
  },
  data () {
    return {
      dataList: [
        {
          name: '龙岗平台组织英国伯明翰大学教授与企业',
          url: ''
        },
        {
          name: '组织高校专家团开展企业巡诊顾问活动',
          url: ''
        },
        {
          name: '助力国家创新型城市建设',
          url: ''
        },
        {
          name: '热烈祝贺深圳新技术有限公司签约成功',
          url: ''
        },
        {
          name: '热烈祝贺黄巧霜的交易履行完成',
          url: ''
        }
      ],
      count: 0, // 当前索引
      intervalId: null, // 定时器ID
      playTime: 5000 // 定时器执行间隔
    }
  },
  methods: {
    getText () {
      let len = this.dataList.length // 获取数组长度
      if (len === 0) {
        return // 当数组为空时，直接返回
      }
      if (this.count === len - 1) { // 当前为最后一个时
        this.count = 0 // 从第一个开始
      } else {
        this.count++ // 自增
      }
    }
  },
  created () {
    // 根据不同的动画效果，指定不同的动画时间，可配合底部的css样式修改
    switch (this.scrollType) {
      case 'scroll-up':this.playTime = 5000
        break
      case 'scroll-up-linear':this.playTime = 1000
        break
      case 'scroll-left':this.playTime = 2000
        break
      case 'scroll-left-linear':this.playTime = 4000
        break
      default:this.playTime = 2000
        break
    }
    this.intervalId = setInterval(() => { // 定义定时器
      this.getText()
    }, this.playTime)
  },
  destroyed () {
    clearInterval(this.intervalId) // 清除定时器
  }
}
</script>

<style lang="stylus" scoped>
  @import "~css/variable.styl"
  .TextScroll
    display flex
    background #fff
    width 100%
    padding .12rem
    box-sizing border-box
    .img-icon
      flex none
      width .3rem
      height .3rem
      padding-right .12rem
      img
        width .3rem
    ul
      flex 1
      position relative
      width 0%
      height .28rem
      overflow hidden
      li
        width 100%
        height .3rem
        line-height .3rem
        padding-left .12rem
        text-align left
        overflow hidden
        position absolute
        box-sizing border-box
        p
          font-size $font-size-medium-x
          padding0 0.2rem
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
  /* 向上滚动动画 */
  .scroll-up-enter-active,
  .scroll-up-leave-active{
    transition all .5s ease
  }
  .scroll-up-enter{
    transform translate3d(0,100%,0)
  }
  .scroll-up-leave-to{
    transform translate3d(0,-100%,0)
  }
  /* 向上匀速滚动动画 */
  .scroll-up-linear-enter-active,
  .scroll-up-linear-leave-active{
    transition all 1s linear  /*此时间必须和 playTime 保持一致*/
  }
  .scroll-up-linear-enter{
    transform translate3d(0,100%,0)
  }
  .scroll-up-linear-leave-to{
    transform translate3d(0,-100%,0)
  }
  /* 向左滚动动画 */
  .scroll-left-enter-active,
  .scroll-left-leave-active{
    transition all 1s ease
  }
  .scroll-left-enter{
    transform translate3d(100%,0,0)
  }
  .scroll-left-leave-to{
    transform translate3d(-100%,0,0)
  }
  /* 向左匀速滚动动画 */
  .scroll-left-linear-enter-active,
  .scroll-left-linear-leave-active{
    transition all 4s linear   /*此时间必须和 playTime 保持一致*/
  }
  .scroll-left-linear-enter{
    transform translate3d(100%,0,0)
  }
  .scroll-left-linear-leave-to{
    transform translate3d(-100%,0,0)
  }
</style>
