<template>
  <div>
    <home-header>
      <router-link tag="button" class="header-left" to="/publish">
        <i class="icon iconfont icon-arrow-left"></i>
      </router-link>
      <h1 class="ui-nowrap-flex">{{this.name}}</h1>
    </home-header>
    <div class="container form-container">
      <div class="weui-cells weui-cells_form">
        <div class="weui-cells__title text-left">技术名称</div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入技术名称">
          </div>
        </div>
      </div>
      <div class="weui-cells weui-cells_form">
        <div class="weui-cells__title text-left">手机号</div>
        <div class="weui-cell weui-cell_vcode">
          <div class="weui-cell__bd">
            <input class="weui-input" type="tel" placeholder="请输入手机号">
          </div>
          <div class="weui-cell__ft">
            <button class="weui-vcode-btn">获取验证码</button>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label">日期</label></div>
          <div class="weui-cell__bd">
            <input class="weui-input" type="date" value="">
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label">时间</label></div>
          <div class="weui-cell__bd">
            <input class="weui-input" type="datetime-local" value="" placeholder="">
          </div>
        </div>
        <div class="weui-cell weui-cell_vcode">
          <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
          <div class="weui-cell__bd">
            <input class="weui-input" type="number" placeholder="请输入验证码">
          </div>
          <div class="weui-cell__ft">
            <img class="weui-vcode-img" src="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from 'common/header/header'
export default {
  name: 'publishForm',
  data () {
    return {
      name: '',
      data: 0
    }
  },
  // created () {
  //   this.name = this.$route.query.name
  // },
  mounted () {
    this.name = this.$route.query.name
    console.log(this.name)
  },
  methods: {
    onchangebutton () {
      return this.data++
    }
  },
  updated () {
    console.log(this.data + 'aaaaaa')
  },
  components: {
    HomeHeader
  }
}
</script>

<style lang="stylus" scoped>
.form-container
  .weui-cells_form
    .weui-cell
      .weui-label
        width .9rem
        text-align left
    .weui-cells__title
      color: #333
</style>
