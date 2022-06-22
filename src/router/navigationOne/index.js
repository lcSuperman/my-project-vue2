export default  [
    {
      path: 'one',
      component:() => import('@/views/navigationOne/one'),
    },
    {
      path: 'two',
      component:() => import('@/views/navigationOne/two'),
    },
    {
      path: 'three',
      component:() => import('@/views/navigationOne/three'),
    },
  ]