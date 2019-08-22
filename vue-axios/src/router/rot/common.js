import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default [{
  path: '/',
  redirect: '/login'
}, {
  path: '/hello',
  name: 'HelloWorld',
  component: HelloWorld
}]


