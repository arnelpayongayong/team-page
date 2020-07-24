import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TeamPage from '@/components/TeamPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Team Page',
      component: TeamPage
    }
  ]
})
