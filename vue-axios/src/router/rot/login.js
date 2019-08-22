import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'


Vue.use(Router)

export default [{
  path: '/login',
  name: 'Login',
  component: Login
}

]


