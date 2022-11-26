<template>
  <div class="overview">
      <ul class="twoPie">
        <li>
            <EchartPieA :echartsId="dataA.echartsId" :pieData="dataA"/>
        </li>
        <li>
            <EchartPieA :echartsId="dataB.echartsId" :pieData="dataB"/>
        </li>
      </ul>
  </div>
</template>
<script>
import EchartPieA from '@/components/bigEcharts/echartPieA'
export default {
    data(){
       return {
         dataA: {
            title:'融资性',
            echartsId:'myEchartP',
            num:2,//非正常数据为0的个数
            num2:2, //8-（2*2 + 1*2）剩余的比例，
            pieData:[
            { total:100, nomal:97,realValue:2, name: '关注' },
            { total:100, nomal:97,realValue:1,name: '次级' },
            { total:100, nomal:97,realValue:0,name: '可疑' },
            { total:100, nomal:97,realValue:0,name: '损失' },
            { total:100, nomal:97,realValue:97,name: '正常' }
          ],
         },
         dataB:{
            title:'光伏',
            echartsId:'myEchartQ',
            num:4,
            num2:8,
            pieData:[
            { total:2745, nomal:2745,realValue:0, name: '关注' },
            { total:2745, nomal:2745,realValue:0,name: '次级' },
            { total:2745, nomal:2745,realValue:0,name: '可疑' },
            { total:2745, nomal:2745,realValue:0,name: '损失' },
            { total:2745, nomal:2745,realValue:2745,name: '正常' }
          ],

         } 
       }
    },
    components:{
        EchartPieA
    },
}
</script>
<style lang='less' scoped>
.overview{
    height: calc(100% - 20px);
    width: 100%;
    .twoPie{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        li{
            width: 49%;
            height: 100%;
        }
    }
}
</style>