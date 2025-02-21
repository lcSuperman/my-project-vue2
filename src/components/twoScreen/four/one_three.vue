<template>
    <div class="assetStatis">
        <EchartBar_1 ref="myEchart1_3" />
    </div>
  </template>
  <script>
  import EchartBar_1 from './echarts/echartBar_1'
  export default {
      data(){
         return {
            echartData:{
                dataX: ['省公司', '南充', '凉山', '宜宾', '成都', '天府新区', '德阳','巴中','达州','内江','乐山','阿坝','广安','资阳','甘孜','绵阳','泸州','攀枝花','遂宁','眉山','雅安','广元','自贡'],
                dataY: [52484.3, 17579.3, 11947.2, 9525.7, 8995.6, 4382.1, 4025.0,3889.4,3232.0,3117.1,3062.5,2646.0,2590.2,2340.2,2133.0,1998.3,1134.5,999.5,938.4,838.5,799.4,708.9,600],
                maxData:52484.3,
            },
            
         }
      },
      mounted(){
         const {echartData} =  this
         this.$refs.myEchart1_3.initEchart(echartData)
         
      },
     
      components:{
        EchartBar_1
      },
  }
  </script>
  <style lang='less' scoped>
  .assetStatis{
      height: calc(100% - 20px);
      width: 100%;
  }
  </style>