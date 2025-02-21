<template>
  <div class="assetStatis">
      <EchartLineT ref="myEchart1_1" />
  </div>
</template>
<script>
import EchartLineT from './echarts/echartLineT'
export default {
    data(){
       return {
          echartData:{
              dataX: ['北京','天津','河北','河南','山东','山西','黑龙江','辽宁','安徽','江苏','甘肃','上海','湖北','湖南','江西','广东','云南','成都','澳门','香港','台湾','新疆'],
              data2: [1000, 650, 700, 550, 800, 580, 350,700, 680, 650, 600, 590,560,520,500,460,410,400,380,330,200,100,],//小于90天库龄
              data4: [930, 730, 500, 300, 200, 300, 400,200,150, 100, 150, 100,100,100,200,150,20,100,80,50,10,0], //大于90天库龄
              maxData:1930,
          },
          
       }
    },
    mounted(){
       const {echartData} =  this
       this.$refs.myEchart1_1.initEchart(echartData)
       
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