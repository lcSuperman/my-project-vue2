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

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      component: () => import('@/views/home/index'),
      children:[
        {
          path: '',
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
          component: () => import('@/views/navigationTwo')
        },
        {
          path: 'navigationThree',
          component: () => import('@/views/navigationThree')
        },
        {
          path: 'navigationFour',
          component: () => import('@/views/navigationFour')
        },
        {
          path: 'navigationFive',
          component: () => import('@/views/navigationFive')
        },
        {
          path: 'navigationSix',
          component: () => import('@/views/navigationSix')
        }
      ]
    }
  ],
  scrollBehavior: () => {
    history.pushState(null, null, document.URL)
  }

})
