<template>
  <div class="assetStatis">
      <EchartLineT ref="myEchart3" />
  </div>
</template>
<script>
import EchartLineT from '@/components/bigEcharts2/echartLineT'
export default {
    data(){
       return {
          echartData:{
              dataX: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
              data1: [500, 600, 450, 700, 800, 700, 840,900, 830, 700, 1000, 990],
              data2: [400, 450, 400, 600, 800, 640, 800,800, 800, 620, 840, 900],
              data3: [600, 700, 500, 650, 900, 750, 900,900, 1000, 900, 1200, 1000],
              data4: [100, 150, 50, 100, 0, 60, 40,100, 30, 80, 160, 90]
          },
       }
    },
    mounted(){
       const {echartData} =  this
       this.$refs.myEchart3.initEchart(echartData)
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