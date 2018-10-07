import Vue from 'vue'
import Router from 'vue-router'
import Category from 'pages/category/category'
import User from 'pages/user/user'
import Home from 'pages/home/Home'
import Vip from 'pages/vip/vip'
import Publish from 'pages/publish/publish'
import PublishForm from 'pages/publish/publishForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/vip',
      name: 'Vip',
      component: Vip
    },
    {
      path: '/publish',
      name: 'Publish',
      component: Publish
    },
    {
      path: '/publish-form',
      name: 'PublishForm',
      component: PublishForm
    }
  ]
})
