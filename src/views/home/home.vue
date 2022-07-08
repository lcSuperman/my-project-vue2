<template>
  <div class="home">
    <HomeOne :homeOneData="homeOneData" />
    <div class="homeTwo">
       <div class="chart">
           <EchartBar />
       </div>
       <div class="chart">
           <EchartPie />
       </div>
       <div class="chart">
           <EchartLine />
       </div>
    </div>
    <div class="homeThree">
       <div class="wordCloud">
            <EchartWordCloud />
       </div>
       <div class="Gauge">
          <EchartGauge />
       </div>
    </div>
    <div class="homeFour">
       <div class="chart">
         <EchartHenan />
       </div>
       <div class="china">
          <EchartChina />
       </div>
    </div>
     <div class="homeFiver">
       <div class="left">
         <EchartWordCloud1 />
       </div>
       <div class="right">
         <EchartDynamicline />
       </div>
    </div>
  </div>
</template>
<script>
import HomeOne from './homeOne.vue'
import EchartBar from './echarts/echartBar.vue'
import EchartPie from './echarts/echartPie.vue'
import EchartLine from './echarts/echartLine.vue'
import EchartWordCloud from './echarts/echartWordCloud.vue'
import EchartWordCloud1 from './echarts/echartWordCloud1.vue'
import EchartChina from './echarts/echartChina.vue'
import EchartHenan from './echarts/echartHenan.vue'
import EchartGauge from './echarts/echartGauge.vue'
import EchartDynamicline from './echarts/echartDynamicline.vue'

export default { 
  components:{
    HomeOne,
    EchartBar,
    EchartPie,
    EchartLine,
    EchartWordCloud,
    EchartWordCloud1,
    EchartChina,
    EchartHenan,
    EchartGauge,
    EchartDynamicline
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
  .homeTwo{
     display: flex;
     justify-content: space-between;
     .chart{
      height: 300px;
      width: 32%;
      box-shadow:0px 2px 8px #888888;
     }
  }
  .homeThree{
    margin-top: 20px;
     display: flex;
     justify-content: space-between;
     .wordCloud{
        height: 300px;
        width: 66%;
        box-shadow:0px 2px 8px #888888;
     }
     .Gauge{
        width: 32%;
        height: 300px;
        box-shadow:0px 2px 8px #888888;
     }
  }
  .homeFour{
     margin-top: 20px;
     display: flex;
     justify-content: space-between;
     .chart{
      height: 400px;
      width: 49%;
      box-shadow:0px 2px 8px #888888;
     }
     .china{
      height: 400px;
      width: 49%;
      box-shadow:0px 2px 8px #888888;
     }
  }
  .homeFiver{
     margin-top: 20px;
     display: flex;
     justify-content: space-between;
     .left{
      height: 400px;
      width: 32%;
      box-shadow:0px 2px 8px #888888;
     }
     .right{
      height: 400px;
      width: 66%;
      box-shadow:0px 2px 8px #888888;
     }
  }
}
</style>