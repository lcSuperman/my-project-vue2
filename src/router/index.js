import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import navigationOne from './navigationOne'
import { number } from 'echarts'

Vue.use(Router)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router =  new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      component: () => import('@/views/home/index'),
      children:[
        {
          path: '',
          name:'home',
          meta:{
            title:'首页'  
      
          },
          component:() => import('@/views/home/home'),
        },
        {
          path: 'navigationOne',
          component: () => import('@/views/navigationOne/index'),
          children:[
             ...navigationOne
          ]
        },
        {
          path: 'navigationTwo',
          name:'navigationTwo',
          meta:{
            title:'导航二',
            number:5
          },
          component: () => import('@/views/navigationTwo')
        },
        {
          path: 'navigationThree',
          name:'navigationThree',
          meta:{
            title:'导航三',
            number:10
          },
          component: () => import('@/views/navigationThree')
        },
        {
          path: 'navigationFour',
          name:'navigationFour',
          meta:{
            title:'导航四',
            number:15
          },
          component: () => import('@/views/navigationFour')
        },
        {
          path: 'navigationFive',
          name:'navigationFive',
          meta:{
            title:'导航五',
            number:20
          },
          component: () => import('@/views/navigationFive')
        },
        {
          path: 'navigationSix',
          name:'navigationSix',
          meta:{
            title:'导航六',
            number:25
          },
          component: () => import('@/views/navigationSix')
        }
      ]
    }
  ],
  scrollBehavior: () => {
    history.pushState(null, null, document.URL)
  }

})

export default router