<template>
    <div class="contents">
        <div class="topTitle">
            <i class="el-icon-back" @click="logoutDP"></i>
            <span class="title">华夏金租资产大屏</span>
            <div class="time">
                <span>数据日期：</span>
                <span>2022年11月16日</span>
            </div>
        </div>
        <div class="echarts">
            <ul class="grid-content left">
                <li class="left-center"> 
                    <EchartTitle title="资产趋势">
                        <EchartBtns/>
                    </EchartTitle>
                    <EchartLine />
                </li>
                <li >
                    <EchartTitle title="资产出租"/>
                    <AssetLease></AssetLease>
                </li>
                <li>
                    <EchartTitle title="业务回款">
                        <EchartBtns/>
                    </EchartTitle>
                    <EchartLineT/>
                </li>
            </ul>
            <ul class="grid-content center">
                <li class="map">
                   <EchartChina />
                </li>
                <li class="pies">
                    <div class="pie">
                        <EchartTitle title="融资性租赁"/>
                        <Lease/>
                    </div>
                    <div class="pie">
                        <EchartTitle title="经营性租赁"/>
                        <LeaseTwo/>
                    </div>
                </li>
            </ul>
            <ul class="grid-content right">
                <li>
                    <EchartTitle title="客户总览" />
                    <Overview />  
                </li>
                <li class="left-center">
                    <EchartTitle title="逾期客户" />
                     <OvervDue />   
                </li>
                <li class="pieTwo">
                    <EchartTitle title="资产预警" />
                    <AssetWarn />
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import EchartTitle from '@/components/echartTitle'
import EchartBtns from '@/components/echartBtns'
import Lease from '@/components/lease'
import LeaseTwo from '@/components/leaseTwo'
import AssetLease from '@/components/assetLease'
import AssetWarn from '@/components/assetWarn'
import Overview from '@/components/overview'
import OvervDue from '@/components/overDue'
import EchartChina from '@/components/echartChina'
import EchartLine from '@/components/bigEcharts/echartLine'
import EchartLineT from '@/components/bigEcharts/echartLineT'
export default {
    components:{
        EchartTitle,
        EchartBtns,
        EchartLine,
        EchartLineT,
        Lease,
        LeaseTwo,
        AssetLease,
        AssetWarn,
        Overview,
        OvervDue,
        EchartChina
    },
    methods:{
        logoutDP(){
             this.$router.push({ path: '/home'})
        }
    }
}
</script>
<style lang='less' scoped>
@import '~@/assets/less/echart.less';
 .contents{
    height: 100%;
    .topTitle{
        height: 100px;
        text-align: center;
        line-height: 100px;
        background-color: @border;
        position: relative;
        color: #fff;
        .title{
           font-size: 40px;
           font-weight: 700;
        }
        .el-icon-back{
           position: absolute;
           left: 1%;
           top: 50%;
           transform: translateY(-50%); 
           font-size: 30px;
           cursor: pointer;
        }
        .time{
           position: absolute;
           right: 3%;
           top: 0;
           font-size: 20px;
        }
    }
    .echarts{
        height: calc(100% - 100px);
        width: 100%;
        background: linear-gradient(#02152f,#051e52); 
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding:10px 0;
        .left{
            height: 100%;
            width: 26%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            li{
                height: 32%;
                width: 97%;
                border: 2px solid @border1;
                border-radius: 20px;
                box-sizing: border-box;
                padding: 10px 20px;
            }
            .left-center{
                height: 34%;
            }
        }
        .center{
            height: 100%;
            width: 47%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            li{
                width: 99%;
            }
            .map{
                height: 67%;
            }
            .pies{
                height: 32%;
                display: flex;
                justify-content: space-between;
                
                .pie{
                    height: 100%;
                    width: 49%;
                    box-sizing: border-box;
                    border: 2px solid  @border1;
                    border-radius: 20px;
                    padding: 10px 20px;
                    
                    .operateLease{
                        height: calc(100% - 20px);
                        width: 100%;
                        box-sizing: border-box;
                        padding: 10px 0;
                        ul{
                            height: 50%;
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            li{
                              width: 49%;
                              height: 99%;
                              background-color: pink;
                            }
                        }
                    }
                }
            }
        }
        .right{
            height: 100%;
            width: 26%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            li{
                height: 32%;
                width: 97%;
                border: 2px solid @border1;
                border-radius: 20px;
                box-sizing: border-box;
                padding: 10px 20px;
            }
            .left-center{
                height: 34%;
            }
        
        }
        
        
    }
 }
</style>