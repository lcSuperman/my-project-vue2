<template>
    <div class="assetStatis">
        <EchartLineM ref="myEchart1_2" />
    </div>
  </template>
  <script>
  import EchartLineM from './echarts/echartLineM'
  export default {
      data(){
         return {
            echartData:{
                dataX:  ['202402', '03', '04', '05', '06', '07', '08','09','10','11','12','202501'],
                dataY: [2000, 120000, 130000, 140000, 70000, 100000, 110000,90000,80000,60000,68000,70000],
                dataY2:[90000,95000,'','','','','','','','','',''],
                maxData:140000,
            },
            
         }
      },
      mounted(){
         const {echartData} =  this
         this.$refs.myEchart1_2.initEchart(echartData)
         
      },
     
      components:{
        EchartLineM
      },
  }
  </script>
  <style lang='less' scoped>
  .assetStatis{
      height: calc(100% - 20px);
      width: 100%;
  }
  </style>