<template>
  <div class="assetCount">
      <EchartLineAC ref="myEchart21" />
  </div>
</template>
<script>
import EchartLineAC from '@/components/bigEcharts2/echartLineAC'
export default {
    data(){
       return {
          echartData:{
              dataX: [
                '合肥瑶海店','郑州中牟店','郑州中牟店','郑州中牟店','郑州中牟店','郑州中牟店','郑州中牟店','郑州中牟店','郑州中牟店','郑州中牟店','郑州中牟店','郑州中牟店',
                '合肥瑶海店','郑州中牟店','郑州中牟店','郑州中牟店','郑州中牟店','郑州中牟店','郑州中牟店','郑州中牟店','郑州中牟店','郑州中牟店','郑州中牟店','郑州中牟店',
                '合肥瑶海店','郑州中牟店','郑州中牟店'
                 ],
              data1: [
                99, 100, 88, 89, 92, 78, 66,66, 54, 56, 59, 65,
                60, 65, 76, 80, 66, 59, 76,65, 74, 88, 76, 66,
                65, 66, 88,
                ],
              data2: [
                199, 190, 123, 143, 299, 88, 97,111, 100, 112, 132, 99,140, 130, 133, 140, 120, 111, 313,131, 150, 144, 213, 316,
                210, 130, 133
                ],
              data3: [
                156, 199, 130, 120, 222, 221, 140,130, 144, 132, 132, 310,130, 120, 130, 210, 122, 211, 140,201, 144, 112, 132, 130,
                210, 110, 130
                ],
               data4: [
                244, 153, 122, 120, 222, 142, 132,130, 144, 132, 140, 130,130, 120, 130, 133, 122, 144, 140,130, 144, 312, 154, 130,
                130, 331, 144
                ],
          },
          
       }
    },
    mounted(){
       const {echartData} =  this
       this.$refs.myEchart21.initEchart(echartData)
       
    },
   
    components:{
        EchartLineAC
    },
}
</script>
<style lang='less' scoped>
.assetCount{
    height: calc(100% - 20px);
    width: 100%;
}
</style>