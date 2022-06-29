export default  [
    {
      path: 'one',
      name:'子导航一',
      meta:{
        number:2
      },
      component:() => import('@/views/navigationOne/one'),
    },
    {
      path: 'two',
      name:'子导航二',
      meta:{
        number:3
      },
      component:() => import('@/views/navigationOne/two'),
    },
    {
      path: 'three',
      name:'子导航三',
      meta:{
        number:4
      },
      component:() => import('@/views/navigationOne/three'),
    },
  ]