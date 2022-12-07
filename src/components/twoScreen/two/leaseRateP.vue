<template>
  <div class="assetStatis">
      <EchartLineLR :echartsId="echartsId" ref="myEchart24" />
  </div>
</template>
<script>
import EchartLineLR from '@/components/bigEcharts2/echartLineLR'
export default {
    data(){
       return {
          echartsId:'myEchart24',
          echartData:{
              dataX: ['剪叉式','直臂式','曲臂式','挂柱式','直臂式','曲臂式','挂柱式'],
              data1: [99, 88, 77, 66,77, 66, 55],
              data2: [122, 100, 111, 99,111, 88, 50],
              data3: [77, 88, 44, 66,43, 78, 50],
          },
          
       }
    },
    mounted(){
       const {echartData} =  this
       this.$refs.myEchart24.initEchart(echartData)
       
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