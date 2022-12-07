<template>
  <div class="assetStatis">
      <EchartLineLR :echartsId="echartsId" ref="myEchart23" />
  </div>
</template>
<script>
import EchartLineLR from '@/components/bigEcharts2/echartLineLR'
export default {
    data(){
       return {
          echartsId:'myEchart23',
          echartData:{
              dataX: ['剪叉式','直臂式','曲臂式','挂柱式'],
              data1: [99, 77, 66, 44],
              data2: [122, 100, 111, 99],
              data3: [77, 88, 44, 66],
          },
          
       }
    },
    mounted(){
       const {echartData} =  this
       this.$refs.myEchart23.initEchart(echartData)
       
    },
   
    components:{
        EchartLineLR
    },
}
</script>
<style lang='less' scoped>
.assetStatis{
    height: calc(100% - 20px);
    width: 100%;
}
</style>