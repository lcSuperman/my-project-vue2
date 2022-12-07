<template>
  <div class="assetStatis">
      <EchartLineT ref="myEchart13" />
  </div>
</template>
<script>
import EchartLineT from '@/components/bigEcharts2/echartLineT'
export default {
    data(){
       return {
          echartData:{
              dataX: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
              data1: [500, 600, 700, 800, 750, 850, 900,630, 720, 900, 850, 1000],
              data2: [400, 500, 400, 720, 750, 800, 810,600, 700, 810, 800, 900],
              data3: [600, 700, 800, 900, 800, 900, 800,700, 800, 900, 900, 900],
              data4: [100, 100, 300, 80, 0, 50, 90,30, 20, 90, 50, 100]
          },
          
       }
    },
    mounted(){
       const {echartData} =  this
       this.$refs.myEchart13.initEchart(echartData)
       
    },
   
    components:{
        EchartLineT
    },
}
</script>
<style lang='less' scoped>
.assetStatis{
    height: calc(100% - 20px);
    width: 100%;
}
</style>