export default  [
    {
      path: 'one',
      name:'one',
      meta:{
        title:'子导航一',
        number:1
      },
      component:() => import('@/views/navigationOne/one'),
    },
    {
      path: 'two',
      name:'two',
      meta:{
        title:'子导航二',
        number:2
      },
      component:() => import('@/views/navigationOne/two'),
    },
    {
      path: 'three',
      name:'three',
      meta:{
        title:'子导航三',
        number:3
      },
      component:() => import('@/views/navigationOne/three'),
    },
  ]