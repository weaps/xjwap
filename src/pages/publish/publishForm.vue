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
        <div class="weui-cells__title text-left">图片上传</div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <div class="weui-uploader">
              <div class="weui-uploader__hd">
                <p class="weui-uploader__title">图片上传</p>
                <div class="weui-uploader__info">0/2</div>
              </div>
              <div class="weui-uploader__bd">
                <ul class="weui-uploader__files" id="uploaderFiles">
                  <li class="weui-uploader__file">
                    <img src="../../assets/images/default_img.png" alt="" width="79">
                  </li>
                  <li class="weui-uploader__file">
                    <img src="../../assets/images/default_img.png" alt="" width="79">
                  </li>
                  <li class="weui-uploader__file">
                    <img src="../../assets/images/default_img.png" alt="" width="79">
                  </li>
                  <li class="weui-uploader__file weui-uploader__file_status">
                    <div class="weui-uploader__file-content">
                      <i class="weui-icon-warn"></i>
                    </div>
                  </li>
                  <li class="weui-uploader__file weui-uploader__file_status" style="background-image:url(./images/pic_160.png)">
                    <div class="weui-uploader__file-content">50%</div>
                  </li>
                </ul>
                <div class="weui-uploader__input-box">
                  <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-cells weui-cells_form">
        <div class="weui-cells__title text-left">单选列表项</div>
        <div class="weui-cells weui-cells_checkbox">
          <label class="weui-cell weui-check__label" for="s11">
            <div class="weui-cell__hd">
              <input type="checkbox" class="weui-check" name="checkbox1" id="s11" checked="checked">
              <i class="weui-icon-checked"></i>
            </div>
            <div class="weui-cell__bd">
              <p>standard is dealt for u.</p>
            </div>
          </label>
          <label class="weui-cell weui-check__label" for="s12">
            <div class="weui-cell__hd">
              <input type="checkbox" name="checkbox1" class="weui-check" id="s12">
              <i class="weui-icon-checked"></i>
            </div>
            <div class="weui-cell__bd">
              <p>standard is dealicient for u.</p>
            </div>
          </label>
          <a href="javascript:void(0);" class="weui-cell weui-cell_link">
            <div class="weui-cell__bd">添加更多</div>
          </a>
        </div>
      </div>
      <div class="weui-cells weui-cells_form">
        <div class="weui-cells__title text-left">下拉菜单</div>
        <div class="weui-cells">
          <div class="weui-cell weui-cell_select">
            <div class="weui-cell__bd">
              <select class="weui-select" name="select1" v-model="sdata">
                <option selected="" value="1">微信号</option>
                <option value="2">QQ号</option>
                <option value="3">Email</option>
              </select>
            </div>
          </div>
          <div class="weui-cell weui-cell_select weui-cell_select-after">
            <div class="weui-cell__hd">
              <label for="" class="weui-label">国家/地区</label>
            </div>
            <div class="weui-cell__bd">
              <select class="weui-select" name="select2">
                <option value="1">中国</option>
                <option value="2">美国</option>
                <option value="3">英国</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="weui-cells weui-cells_form" v-if="this.showForm.mobile">
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
      <div class="weui-cells weui-cells_form">
        <div class="weui-cells__title text-left">文本域</div>
        <div class="weui-cell">
          <div class="weui-cell__bd">
            <textarea class="weui-textarea" placeholder="请输入文本" rows="3"></textarea>
            <div class="weui-textarea-counter"><span>0</span>/200</div>
          </div>
        </div>
      </div>
      <label for="weuiAgree" class="weui-agree text-left">
        <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox">
        <span class="weui-agree__text">
                阅读并同意<a href="javascript:void(0);">《相关条款》</a>
            </span>
      </label>
      <div class="ui-btn-area">
        <a class="weui-btn weui-btn_warn" href="javascript:" id="showTooltips">确定</a>
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
      data: 0,
      sdata: '',
      showForm: {
        projectnName: true,
        mobile: true
      }
    }
  },
  mounted () {
    this.name = this.$route.query.name
    this.sdata = this.$route.query.sdata
    this.showForm.projectnName = this.$route.query.projectnName
    this.showForm.mobile = this.$route.query.mobile
  },
  components: {
    HomeHeader
  },
  updated () {
    console.log(this.sdata)
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
