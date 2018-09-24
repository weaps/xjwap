<template>
  <ul class="index-tab-list ui-list ui-border-tb">
    <li v-for="(item, index) of homeListData" :key="index" class="ui-border-b">
      <div class="ui-list-img-square">
        <span><img :src="item.shopPhoto" alt=""></span>
      </div>
      <div class="ui-list-info">
        <h5 class="ui-nowrap-multi">{{item.title}}</h5>
        <p class="ui-nowrap">{{item.brandName}}</p>
      </div>
    </li>
  </ul>
</template>

<script>
import { getHomListData } from 'api/api'
export default {
  name: 'pages1',
  data () {
    return {
      homeListData: []
    }
  },
  created () {
    this._getHomListData()
  },
  methods: {
    _getHomListData () {
      getHomListData().then((res) => {
        console.log(res)
        if (res.errCode === 0 && res.success) {
          this.homeListData = res.data.list
          console.log(this.homeListData)
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.index-tab-list
  background #fff
  &.ui-list
    .ui-list-img-square
      width .9rem
      height .9rem
      img
        width 100%
    .ui-list-info
      text-align left
      h5
        font-size .14rem
</style>
