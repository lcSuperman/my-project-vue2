<template>
  <div class="overviewContainer">
    <EchartTitle title="客户风险统计">
        <div class="gengduo" @click="clickGD">
            <span>更多</span>
            <i class="el-icon-caret-right"></i>
        </div>
    </EchartTitle>
    <div class="overview">
      <ul class="twoPie">
        <li>
            <EchartPieA :echartsId="dataA.echartsId" :doubleNum="dataC"  :pieData="dataA"/>
        </li>
        <li>
            <EchartPieA :echartsId="dataB.echartsId" :doubleNum="dataD" :pieData="dataB"/>
        </li>
      </ul>
  </div>

  </div>
  
</template>
<script>
import EchartPieA from '@/components/bigEcharts/echartPieA'
import EchartTitle from '@/components/echartTitle'
export default {
    data(){
       return {
         dataA: {
            title:'融资性',
            echartsId:'myEchartP',
            pieData:[
            { total:100, nomal:97,realValue:2, name: '关注'},
            { total:100, nomal:97,realValue:1,name: '次级' },
            { total:100, nomal:97,realValue:0,name: '可疑' },
            { total:100, nomal:97,realValue:0,name: '损失' },
            { total:100, nomal:97,realValue:97,name: '正常' }
          ],
         },
         dataB:{
            title:'光伏',
            echartsId:'myEchartQ',
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
    computed:{
        dataC:function(){
            var num = 0 //非正常为0的个数
            var num2 = 0 //非正常剩余为0的图例比例
            var num3 = 0 //非正常图例相加比例
            var num4 = 4 //正常的图例比例
            var total = 0
            this.dataA.pieData.forEach(item => {
                total = item.total
                if(item.realValue == 0){
                    num += 1
                    
                }
                if(item.name !== '正常'){
                    if(item.realValue !== 0){
                        num3 += ((item.total -  Math.round(((item.nomal/item.total)*0.95) * 100) )/4)*item.realValue
                    }
                   
                }else{
                     num4 = Math.round(((item.nomal/item.total)*0.95) * 100)
                } 

            })
           num2 =  (total - num4) - num3
           return  {num,num2,num4}   
        },
        dataD:function(){
            var num = 0 //非正常为0的个数
            var num2 = 0 //非正常剩余为0的图例比例
            var num3 = 0 //非正常图例相加比例
            var num4 = 4 //正常的图例比例
           
            this.dataB.pieData.forEach(item => {
              
                if(item.realValue == 0){
                    num += 1
                    
                }
                if(item.name !== '正常'){
                    if(item.realValue !== 0){
                        num3 += ((item.total -  Math.round(((item.nomal/item.total)*0.95) * 100) )/4)*item.realValue
                    }
                   
                }else{
                     num4 = Math.round(((item.nomal/item.total)*0.95) * 100)
                } 

            })
           num2 =  (100 - num4) - num3
           return  {num,num2,num4}   
        },

    },
    components:{
        EchartPieA,
        EchartTitle
    },
    methods:{
        clickGD(){
            this.$router.push({path:'/echarts/tableOne'})
        }
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
}

</style>