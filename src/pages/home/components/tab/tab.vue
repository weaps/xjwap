<template>
  <div class="ui-tab">
    <ul class="ui-tab-nav">
      <li
        v-for="(tab, index) of tabs"
        v-bind:key="index"
        v-bind:class="['tab-button', { current: currentTab === tab.title }]"
        @click="toggleTab(tab.title)"
      >
        <span>{{tab.name}}</span>
      </li>
    </ul>
    <keep-alive>
      <home-pages1 :is="currentTab"></home-pages1>
    </keep-alive>
  </div>
</template>

<script>
import HomePages1 from 'pages/home/components/pages1'
import HomePages2 from 'pages/home/components/pages2'
export default {
  name: 'HomeTab',
  data () {
    return {
      currentTab: 'HomePages1',
      letter: '',
      tabs: [{
        title: 'HomePages1',
        name: '技术供给'
      },
      {
        title: 'HomePages2',
        name: '成果竟价'
      }],
      data1: 'ss'
    }
  },
  components: {
    HomePages1,
    HomePages2
  },
  methods: {
    toggleTab (tab) {
      console.log(tab)
      this.currentTab = tab
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~css/variable.styl"
.ui-tab
  margin-top 10px
  background #ffffff
  .ui-tab-nav
    display flex
    height 44px
    padding 0 .15rem
    border-bottom 1px solid #dddddd
    li
      line-height 44px
      font-size $font-size-medium-x
      margin-right .2rem
      &.current
        position relative
        span
          color $color-background-header
        &:before
          position absolute
          left 0
          bottom 0
          content ""
          width 100%
          height 2px
          font-size 0
          background $color-background-header
      span
        height 44px
        line-height 44px
</style>
