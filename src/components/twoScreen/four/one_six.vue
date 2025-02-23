<template>
    <div class="assetStatis">
        <EchartBar_6 ref="myEchart1_6" />
    </div>
  </template>
  <script>
  import EchartBar_6 from './echarts/echartBar_6'
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
            this.$refs.myEchart1_6.initEchart(echartData)
        }
      
         
      },
     
      components:{
        EchartBar_6
      },
  }
  </script>
  <style lang='less' scoped>
  .assetStatis{
      height: calc(100% - 20px);
      width: 100%;
  }
  </style>