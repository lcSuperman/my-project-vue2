<template>
  <div class="monitor">
      <EchartPieM ref="myEchart15" />
      <div class="monitorAsset">
        <span>监控覆盖资产</span>
        <div class="counts">
          <span>数量<span class="num">{{count.value}}</span></span>
          <span>价值<span  class="num">{{count.value2}}</span>万元</span>
          <span>覆盖率<span  class="num">{{count.value3}}</span></span>
        </div>
      </div>
  </div>
</template>
<script>
import EchartPieM from '@/components/bigEcharts2/echartPieM'
export default {
    data(){
       return {
         echartData:[
            { name: '未覆盖', value: 585 },
            { name: '在线', value: 7704 },
            { name: '离线', value: 1460 }
         ],
         count:{value:9167,value2:89892,value3:'92%'}
       }
    },
    mounted(){
       this.getStatisData()
    },
    components:{
        EchartPieM
    },
    methods:{
       getStatisData(){
            const {echartData} =  this
            this.$refs.myEchart15.initEchart(echartData)
       },
    }
}
</script>
<style lang='less' scoped>
@import '~@/assets/less/echart.less';
.monitor{
    height: calc(100% - 20px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .monitorAsset{
      height: 25%;
      border-top: 1px solid @border1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      font-size: 10px;
      .counts{
        display: flex;
        justify-content: space-between;
        font-size: 10px;
        span{
          color: #cecece;
        }
        .num{
          color: #26effe;
          font-weight: 700;
        }

      }
      
    }
}
</style>