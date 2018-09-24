<template>
  <div class="statistics">
    <ul class="ui-row">
      <li class="ui-col ui-col-20" v-for="item of discList" :key="item.categoryId">
        <p class="icon-box">
          <i class="icon iconfont" :class="item.iconUrl"></i>
        </p>
        <p class="num">{{item.categoryId}}</p>
        <p class="text">{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { getNavigationData } from 'api/api'
export default {
  name: 'HomeStatistics',
  data () {
    return {
      discList: []
    }
  },
  created () {
    this._getNavigationData()
  },
  methods: {
    _getNavigationData () {
      getNavigationData().then((res) => {
        if (res.errCode === 0 && res.success) {
          console.log(res)
          this.discList = res.data
        } else {
          console.log('没,没有推荐')
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~css/variable.styl"
@import "~css/mixin.styl"
.statistics
  background #fff
  padding .1rem 0
  .ui-col
    height 0
    padding-bottom 22%
    overflow hidden
    .icon-box
      width 100%
      padding-top .05rem
      .icon
        &.iconfont
          font-size .25rem
          color: $color-background-header
    .num
      font-size .14rem
      font-weight 600
    .text
      line-height .2rem
      font-size .14rem
      ellipsis()
      color $color-text-d
</style>
