<template>
    <div class="assetStatis">
        <EchartBar_5 ref="myEchart1_5" />
    </div>
  </template>
  <script>
  import EchartBar_5 from './echarts/echartBar_5'
  export default {
      data(){
         return {
            echartData:{},
         }
      },
      props:{
        active_data:Object,
      },
      watch:{
        active_data:{
            handler(nweVal,oldVal){
                if(nweVal){
                    this.echartData = nweVal.echartData
                    this.renderEchart()
                }
            }

        }
      },
      methods:{
        renderEchart(){
            const {echartData} =  this
            this.$refs.myEchart1_5.initEchart(echartData)
        }
      
         
      },
     
      components:{
        EchartBar_5
      },
  }
  </script>
  <style lang='less' scoped>
  .assetStatis{
      height: calc(100% - 20px);
      width: 100%;
  }
  </style>