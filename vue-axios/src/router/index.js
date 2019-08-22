import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from './rot/login'
import common from './rot/common'

Vue.use(Router)

export default new Router({
  routes: [
    ...common,
    ...login
  ]
})
