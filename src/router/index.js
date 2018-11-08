import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Page from '@/components/Page'
import List from '@/components/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      alias:'home',
      children:[
        {
          path:'',
          name:'List',
          component:List
        }
      ]
    },
    {
      path:'/page/:id',
      name:'Page',
      component: Page
    }
  ]
})
