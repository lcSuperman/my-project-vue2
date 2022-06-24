<template>
  <div class="home">
    <HomeOne :homeOneData="homeOneData" />
    <div class="homeTwo">
       <div class="chart">
           <EchartLine />
       </div>
       <div class="chart">
           <EchartPie />
       </div>
    </div>
  </div>
</template>
<script>
import HomeOne from './homeOne.vue'
import EchartLine from './echartLine.vue'
import EchartPie from './echartPie.vue'
export default { 
  components:{
    HomeOne,
    EchartLine,
    EchartPie 
  },
  data(){
    return{
      homeOneData:[
        { title:'技能数量',unit:'g',count:'89.8'},
        { title:'个人评分',unit:'cmd',count:'100%'},
        { title:'技能总分',unit:'m',count:'99.0'},
        { title:'总任务',unit:'g',count:'10.0'},
        { title:'月工时',unit:'h',count:'300.5'},
      ]
    }
  },
  mounted(){
   
  }
}
</script>
<style lang='less' scoped>
.home{
  height: 100%;
  .homeTwo{
     display: flex;
     justify-content: space-between;
     .chart{
      height: 450px;
      width: 49%;
      box-shadow:0px 2px 8px #888888;
     }
  }
}
</style>