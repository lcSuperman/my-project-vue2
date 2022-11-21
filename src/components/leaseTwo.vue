<template>
    <div class="capitalLease">
        <ul class="chartList">
            <li v-for="(item ,index) in echartData" :key="index">
                <div class="countMomey" v-if="!item.echartId">
                    <span class="title">{{item.title}}</span>
                    <ul>
                        <li class="count">
                            <div class="highLight" :style="{width:'100%'}">{{item.count}}</div>
                            <div class="gray" >数量</div>
                        </li>
                        <li class="money">
                            <div :style="{width:'100%'}">
                                <span class="highLight">{{item.money}}</span>
                                <span :style="{color:'#677d9e'}"> 千万元</span>
                            </div>
                            <div class="gray">价值</div>
                        </li>
                    </ul>
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
            {title:'监控覆盖率',count:89,echartId:'echartF',color:'#24c0fe',num:212418},
            {title:'总资产',count:8972,money:89892},
            {title:'0租约情况',count:9,echartId:'echartG',color:'#be1f27',num:589},
            {title:'已采购完成资产',count:8972,money:89892},
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
            width: 49%;
            height: 48%; 
            display: flex;
            color: #cecece;
            font-size: 10px;
            justify-content: space-around;
            align-items: center;
            .countMomey{
                height: 80%;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                .title{
                  color: #e3e7ee;
                  font-size: 14px;
                }
                ul{
                 height: 50%;
                 display: flex;
                 justify-content: space-between;
                 .count{
                    display: flex;
                    flex-direction: column;
                    width: 30%;
                    height: 100%;
                   
                 } 
                 .money{
                    width: 70%;
                    height: 100%;
                    display: flex;
                    flex-direction: column; 
                 } 
                 .gray{
                    width:100%;
                    color:#677d9e
                 } 
                 .highLight{
                    color: #24c0fe;
                    font-weight: 700;
                    font-size: 20px;
                 } 

                }
            }
        }
    }
    
}
</style>