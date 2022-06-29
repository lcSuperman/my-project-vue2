import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login'
import navigationOne from './navigationOne'

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
      name: '登录页',
      component: Login
    },
    {
      path: '/home',
      component: () => import('@/views/home/index'),
      children:[
        {
          path: '',
          name:'首页',
          meta:{
            number:1
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
          name:'导航二',
          meta:{
            number:5
          },
          component: () => import('@/views/navigationTwo')
        },
        {
          path: 'navigationThree',
          name:'导航三',
          meta:{
            number:9
          },
          component: () => import('@/views/navigationThree')
        },
        {
          path: 'navigationFour',
          name:'导航四',
          meta:{
            number:13
          },
          component: () => import('@/views/navigationFour')
        },
        {
          path: 'navigationFive',
          name:'导航五',
          meta:{
            number:17
          },
          component: () => import('@/views/navigationFive')
        },
        {
          path: 'navigationSix',
          name:'导航六',
          meta:{
            number:21
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