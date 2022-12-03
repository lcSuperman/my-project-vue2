<template>
  <div class="assetStatis">
      <EchartLineT ref="myEchart3" />
  </div>
</template>
<script>
import EchartLineT from '@/components/bigEcharts/echartLineT'
export default {
    data(){
       return {
          echartData:{
              dataX: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
              data1: [889, 1000, 999, 1211, 1233, 1321, 1451,1378, 1456, 1578, 1678, 1800],
              data2: [500, 800, 777, 1000, 1233, 1200, 1300,1200, 1321, 1560, 1560, 1680],
              data3: [1000, 1500, 1299, 1311, 1333, 1399, 1301,1300, 1556, 1678, 1778, 1900],
              data4: [110, 220, 130, 210, 0, 160, 212,310, 100, 132, 123, 143]
          },
          echartData1:{
              dataX: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
              data1: [700, 1000, 999, 1211, 1500, 1321, 1451,1378, 1656, 1578, 1678, 2000],
              data2: [600, 800, 777, 1000, 1233, 1200, 1300,1200, 1321, 1560, 1560, 1680],
              data3: [900, 1500, 1299, 1311, 1333, 1399, 1301,1100, 1456, 1678, 1778, 1900],
              data4: [110, 220, 130, 210, 90, 160, 212,300, 100, 132, 123, 143]
          },
          echartData2:{
              dataX: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
              data1: [900, 1000, 999, 1211, 1400, 1321, 1451,1378, 1456, 1578, 1678, 1700],
              data2: [600, 800, 777, 1000, 1233, 1200, 1300,1200, 1321, 1560, 1560, 1680],
              data3: [800, 1500, 1299, 1311, 1333, 1399, 1301,1300, 1556, 1678, 1778, 1900],
              data4: [110, 220, 130, 210, 60, 160, 212,310, 100, 132, 123, 133]
          },
       }
    },
    mounted(){
       const {echartData,echartData1,echartData2} =  this
       this.$refs.myEchart3.initEchart(echartData)
       this.$bus.$on('clickThreeBtns',(value) => {
          if(value == 3){
              this.$refs.myEchart3.initEchart(echartData)
          }else if(value == 4){
              this.$refs.myEchart3.initEchart(echartData1)
          }else if(value == 5){
              this.$refs.myEchart3.initEchart(echartData2)
          }else{

          }
       })
    },
   
    components:{
        EchartLineT
    },
}
</script>
<style lang='less' scoped>
.assetStatis{
    height: calc(100% - 10px);
    width: 100%;
}
</style>