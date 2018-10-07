<template>
  <div>
    <home-header>
      <i class="icon iconfont icon-arrow-left" @click="$router.back()"></i>
      <h1>国家技术转移东部中心-新疆分中心</h1>
      <!--<button class="ui-btn">回首页</button>-->
    </home-header>
  </div>
</template>

<script>
import HomeHeader from 'common/header/header'
export default {
  name: 'category',
  components: {
    HomeHeader
  }
}
</script>

<style scoped>

</style>
