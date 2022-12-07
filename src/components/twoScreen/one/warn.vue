<template>
  <div class="warn">
      <EchartPieW ref="myEchart16" />
  </div>
</template>
<script>
import EchartPieW from '@/components/bigEcharts2/echartPieW'
export default {
    data(){
       return {
         echartData:[
              { value: 1048, name: '低电压' },
              { value: 735, name: '在库超出基地围栏' },
              { value: 580, name: '滞留客户现场' },
              { value: 484, name: '再租超出客户现场围栏' },
              { value: 300, name: '报停违规开工' },
              { value: 484, name: '离线' },
              { value: 300, name: '其他' }
          ]
       }
    },
    mounted(){
       this.getStatisData()
    },
    components:{
        EchartPieW
    },
    methods:{
       getStatisData(){
            const {echartData} =  this
            this.$refs.myEchart16.initEchart(echartData)
       },
    }
}
</script>
<style lang='less' scoped>
@import '~@/assets/less/echart.less';
.warn{
    height: calc(100% - 20px);
    width: 100%;
}
</style>