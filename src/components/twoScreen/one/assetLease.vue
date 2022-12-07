<template>
  <div class="assetStatis">
      <EchartLine ref="myEchart11" />
  </div>
</template>
<script>
import EchartLine from '@/components/bigEcharts2/echartLine'
export default {
    data(){
       return {
          statisData:{
               dataX:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
               data1:[
                  {value:1000,total:2000},
                  {value:1100,total:2000},
                  {value:1200,total:2000},
                  {value:1300,total:2000},
                  {value:1400,total:2000},
                  {value:1500,total:2000},
                  {value:2000,total:2600},
                  {value:2300,total:3000},
                  {value:2600,total:3000},
                  {value:3000,total:4000},
                  {value:3300,total:4000},
                  {value:3700,total:4000},
               ],
               data3:[
                  {value:500,total:1000},
                  {value:600,total:1000},
                  {value:700,total:1000},
                  {value:800,total:1000},
                  {value:900,total:1000},
                  {value:1200,total:2000},
                  {value:1600,total:2000},
                  {value:1900,total:2000},
                  {value:2000,total:2000},
                  {value:2300,total:3000},
                  {value:2600,total:3000},
                  {value:2900,total:3000},
               ],
               
         }
       }
    },
    mounted(){
       this.getStatisData()
    },
    components:{
        EchartLine
    },
    methods:{
       getStatisData(){
            const {statisData} =  this
            this.$refs.myEchart11.initEchart(statisData)
       },
    }
}
</script>
<style lang='less' scoped>
.assetStatis{
    height: calc(100% - 20px);
    width: 100%;
}
</style>