import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HolaMundo from '@/components/HolaMundo'
import GitHub from '@/components/GitHub'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GitHub',
      component: GitHub
    },
    {
      path: '/es',
      name: 'Hola',
      component: HolaMundo
    }
  ]
})
