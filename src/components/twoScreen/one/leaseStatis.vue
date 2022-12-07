<template>
  <div class="overviewContainer">
    <EchartTitle title="租赁统计" />
   
    <div class="overview">
        <EchartPieLS ref="myEchart18"/>
     </div>

  </div>
  
</template>
<script>
import EchartTitle from '@/components/echartTitle'
import EchartPieLS from '@/components/bigEcharts2/echartPieLS'
export default {
  data(){
    return {
     echartData:[
        { name: '转租', count:8679,value: 7.6881 },
        { name: '直租', count:1073,value: 0.9502 },
     ]
    }
  },
  components:{
      EchartTitle,
      EchartPieLS
  },
  mounted(){
      const {echartData} =  this
      this.$refs.myEchart18.initEchart(echartData)
  }
}
</script>
<style lang='less' scoped>
.overviewContainer{
    height: 100%;
    width: 100%;
    .overview{
      height: calc(100% - 20px);
      width: 100%;
    
   }
}

</style>