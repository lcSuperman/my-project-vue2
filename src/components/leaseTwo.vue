<template>
    <div class="capitalLease">
        <ul class="chartList">
            <li class="leftContent">
                <EchartCircular :echartsId="pieData.echartId" :pieData="pieData" />
            </li>
            <li class="rightContent">
                <div class="twoContent"  v-for="(item ,index) in echartData" :key="index">
                    <div class="countMomey">
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
                </div>

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
            {title:'总资产',count:8972,money:89892},
            {title:'已采购完成资产',count:8972,money:89892},
        ],
        pieData:{title:'监控覆盖率',count:89,echartId:'echartF',color:'#24c0fe',num:212418},

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
        .leftContent{
            width: 52%;
            height: 100%; 
            box-sizing: border-box;
            display: flex;
            color: #cecece;
            font-size: 10px;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }
        .rightContent{
            width: 46%;
            height: 100%; 
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .twoContent{
                 width: 100%;
                 height: 49%;
                 .countMomey{
                    height: 100%;
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
            .countMomey{
                height: 100%;
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