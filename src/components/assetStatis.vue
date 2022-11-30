<template>
  <div class="assetStatis">
      <EchartLine ref="myEchart1" />
  </div>
</template>
<script>
import EchartLine from '@/components/bigEcharts/echartLine'
export default {
    data(){
       return {
          statisData:{
            dataX:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            data1:[12, 23, 34, 45, 56, 67, 77,89, 99, 123, 134, 156],
            data2:[300, 330, 340, 450, 560, 670, 770,800, 900, 800, 600, 789],
            data3:[34, 57, 78, 45, 56, 78, 89,67, 76, 88, 99, 78],
            data4:[222, 210, 124, 118, 155, 247, 280,150, 230, 224, 218, 135],
            data5:[100, 300, 124, 168, 135, 147, 280,150, 200, 124, 118, 155],
            data6:[100, 200, 124, 168, 135, 147, 180,150, 230, 124, 118, 195]
          },
          statisData1:{
            dataX:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            data1:[20, 23, 34, 45, 56, 67, 77,89, 99, 123, 134, 156],
            data2:[200, 350, 340, 450, 560, 520, 770,800, 1000, 800, 600, 789],
            data3:[24, 57, 78, 35, 56, 78, 89,67, 76, 88, 99, 78],
            data4:[115, 210, 124, 118, 155, 247, 280,120, 230, 224, 218, 135],
            data5:[110, 150, 124, 168, 135, 147, 180,150, 260, 124, 118, 105],
            data6:[100, 200, 124, 168, 135, 147, 180,150, 230, 124, 118, 195]
          },
          statisData2:{
            dataX:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            data1:[50, 23, 34, 45, 56, 67, 77,89, 99, 123, 134, 156],
            data2:[400, 330, 340, 450, 560, 690, 770,800, 960, 800, 660, 789],
            data3:[44, 57, 78, 65, 56, 78, 89,67, 76, 88, 99, 78],
            data4:[115, 210, 124, 118, 155, 247, 250,150, 230, 224, 218, 135],
            data5:[120, 220, 124, 168, 135, 147, 180,130, 260, 124, 118, 165],
            data6:[100, 200, 124, 168, 135, 147, 180,150, 230, 124, 118, 95]
          }
       }
    },
    mounted(){
       const {statisData,statisData1,statisData2} =  this
       this.$refs.myEchart1.initEchart(statisData)
       this.$bus.$on('clickThreeBtns',(value) => {
          if(value == 0){
              this.$refs.myEchart1.initEchart(statisData)
          }else if(value == 1){
              this.$refs.myEchart1.initEchart(statisData1)
          }else if(value == 2){
              this.$refs.myEchart1.initEchart(statisData2)
          }else{

          }
       })
    },
    components:{
        EchartLine
    },
    methods:{

    }
}
</script>
<style lang='less' scoped>
.assetStatis{
    height: calc(100% - 10px);
    width: 100%;
}
</style>