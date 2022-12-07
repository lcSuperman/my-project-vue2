<template>
  <div class="assetStatis">
      <EchartLineC ref="myEchart12" />
  </div>
</template>
<script>
import EchartLineC from '@/components/bigEcharts2/echartLineC'
export default {
    data(){
       return {
          echartData:{
              dataX: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
              data1: [1600, 1700, 1800, 1900, 2000, 2200, 2400,2700, 3000, 3300, 3700, 4000],
              data2: [20, 30, 33, 40, 20, 11, 33,43, 50, 44, 23, 36],
              data3: [30, 20, 30, 20, 22, 21, 40,30, 44, 32, 32, 30],
          },
          
       }
    },
    mounted(){
       const {echartData} =  this
       this.$refs.myEchart12.initEchart(echartData)
       
    },
   
    components:{
        EchartLineC
    },
}
</script>
<style lang='less' scoped>
.assetStatis{
    height: calc(100% - 20px);
    width: 100%;
}
</style>