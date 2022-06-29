export default  [
    {
      path: 'one',
      name:'子导航一',
      meta:{
        number:11
      },
      component:() => import('@/views/navigationOne/one'),
    },
    {
      path: 'two',
      name:'子导航二',
      meta:{
        number:12
      },
      component:() => import('@/views/navigationOne/two'),
    },
    {
      path: 'three',
      name:'子导航三',
      meta:{
        number:13
      },
      component:() => import('@/views/navigationOne/three'),
    },
  ]