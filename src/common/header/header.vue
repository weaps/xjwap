<template>
  <header class="ui-header ui-header-stable">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
@import "~css/variable.styl"
.ui-header
  position fixed
  left 0
  top 0
  height 44px
  line-height 44px
  padding 0 44px
  width 100%
  background $color-background-header
  color #fff
  box-sizing border-box
  z-index 10
  .header-left
    position absolute
    left 0
    top 0
    width 44px
    height 44px
    background transparent
    border 0
    .icon
      color #ffffff
  h1
    font-size $font-size-medium-x
</style>
