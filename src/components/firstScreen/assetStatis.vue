<template>
  <div class="assetStatis">
      <EchartLine ref="myEchart1" />
  </div>
</template>
<script>
import EchartLine from '@/components/bigEcharts/echartLine'
import {getStatisData,getStatisData1,getStatisData2} from '@/api'
export default {
    data(){
       return {
          statisData:{},
          statisData1:{},
          statisData2:{}
       }
    },
    mounted(){
       this.getStatisData()
       this.$bus.$on('clickThreeBtns',(value) => {
          if(value == 0){
             this.getStatisData()
          }else if(value == 1){
              this.getStatisData1()
          }else if(value == 2){
              this.getStatisData2()
          }else{

          }
       })
    },
    components:{
        EchartLine
    },
    methods:{
       getStatisData(){
         getStatisData().then(  res => {
            this.statisData = res.data
            const {statisData} =  this
            this.$refs.myEchart1.initEchart(statisData)
         })
       },
       getStatisData1(){
         getStatisData1().then(  res => {
            this.statisData1 = res.data
            const {statisData1} =  this
            this.$refs.myEchart1.initEchart(statisData1)
         })
       },
       getStatisData2(){
         getStatisData2().then(  res => {
            this.statisData2 = res.data
            const {statisData2} =  this
            this.$refs.myEchart1.initEchart(statisData2)
         })
       }
    }
}
</script>
<style lang='less' scoped>
.assetStatis{
    height: calc(100% - 10px);
    width: 100%;
}
</style>