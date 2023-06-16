export default  [
    {
      path: 'one',
      name:'one',
      meta:{
        title:'凤宁苑一号楼',
        number:1
      },
      component:() => import('@/views/navigationOne/one/index'),
    },
    {
      path: 'two',
      name:'two',
      meta:{
        title:'凤宁苑二号楼',
        number:2
      },
      component:() => import('@/views/navigationOne/two/index'),
    },
    {
      path: 'three',
      name:'three',
      meta:{
        title:'凤宁苑三号楼',
        number:3
      },
      component:() => import('@/views/navigationOne/three/index'),
    },
  ]