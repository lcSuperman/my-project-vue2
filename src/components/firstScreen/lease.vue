<template>
    <div class="capitalLease">
        <ul class="chartList">
            <li v-for="(item ,index) in echartData" :key="index">
                <div class="investment" v-if="!item.echartId">
                    <div class="count">
                        <span>{{item.count}}</span>
                        <span class="yuan"> 千万元</span>
                    </div>
                    <span>{{item.title}}</span>
                </div>
                <EchartCircular  :echartsId="item.echartId" :pieData="item" v-else/>
            </li>
        </ul>
    </div>
</template>
<script>
import EchartCircular from '@/components/bigEcharts/echartCircular'
export default {
    data(){
      return {
        echartData:[
            {title:'总投资金额',count:892},
            {title:'平均收益率(XIRR)',count:80,echartId:'echartB',color:'#24c0fe'},
            {title:'平均收益率(IRR)',count:89,echartId:'echartC',color:'#2fc605'},
            {title:'本年新增投放',count:18},
            {title:'租金回收率',count:89,echartId:'echartD',color:'#2fc605'},
            {title:'逾期率',count:3,echartId:'echartE',color:'#be1f27'}
        ]
      }
    },
    components:{
        EchartCircular
    }
}
</script>
<style lang='less' scoped>
.capitalLease{
    height: calc(100% - 20px);
    width: 100%;
    box-sizing: border-box;
    padding: 10px 0;
    .chartList{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
            width: 33%;
            height: 48%; 
            display: flex;
            color: #cecece;
            justify-content: space-around;
            align-items: center;
            .investment{
                height: 50%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                font-size: 10px;
                .count{
                    color: #24c0fe;
                    font-weight: 700;
                    font-size: 20px;
                }
                .yuan{
                    font-size: 10px;
                    color:#677c9b;
                  
                }

            }
            
        }
    }
    
}
</style>