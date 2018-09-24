<template>
  <div class="ui-tab">
    <ul class="ui-tab-nav ui-border-b">
      <li
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { current: currentTab === tab }]"
        @click="toggleTab(tab)"
      >
        <span>{{tab}}</span>
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
      tabs: ['HomePages1', 'HomePages2']
    }
  },
  components: {
    HomePages1,
    HomePages2
  },
  methods: {
    toggleTab (tab) {
      this.currentTab = tab
    }
  }
}
</script>

<style scoped>

</style>
