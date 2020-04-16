import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Child from '../components/child'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/child',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path: 'child',
          component: Child
        }
      ]
    }
  ]
})
