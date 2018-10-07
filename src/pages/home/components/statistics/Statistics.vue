<template>
  <div class="statistics">
    <ul class="">
      <li class="ui-col" v-for="item of discList" :key="item.categoryId">
        <div class="box">
          <i class="icon iconfont" :class="item.iconUrl"></i>
          <p class="num">{{item.categoryId}}</p>
          <p class="text">{{item.title}}</p>
        </div>
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
  ul
    width 100%
    overflow hidden
  .ui-col
    float left
    width 20%
    height 0
    padding-bottom 24%
    overflow hidden
    .box
      font-size $font-size-medium-x
    .icon
      &.iconfont
        font-size .25rem
        color: $color-background-header
        vertical-align top
    .num
      font-size $font-size-medium-x
      font-weight 600
    .text
      line-height .2rem
      font-size $font-size-medium
      ellipsis()
      color $color-text-d
</style>
