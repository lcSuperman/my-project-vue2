<template>
    <div class="contents">
        <div class="topTitle">
            <div class="container">
                <i class="el-icon-back" @click="logoutDP"></i>
                <span class="title">华夏金租经营大屏</span>
                <div class="time">
                    <span>数据日期：</span>
                    <span>{{timeDate}}</span>
                </div>
                <div class="container2"></div>
            </div>
        </div>
        <div class="echarts">
            <ul class="grid-content left">
                <li class="left-center"> 
                    <EchartTitle title="资产统计">
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
                    <EchartTitle title="客户风险统计" />
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
    data(){
        return {
          timeDate:null
        }
    },
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
    mounted(){
      this.getDate()
    },
    methods:{
        getDate(){
            var date = new Date()
            const Y = date.getFullYear()
            const M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
            const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
            const time = Y + '年' + M + '月' + D + '日'

            this.timeDate = time
        },

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
    background: linear-gradient(#02152f,#051e52); 
    .topTitle{
        width:calc(100% - 40px);
        height: 60px;
        border-top: 40px solid #051d63;
        border-right: 20px solid transparent;
        border-left: 20px solid transparent;
        position: relative;
        .container{
            position: absolute;
            left: 50%;
            top:-34px;
            transform: translateX(-50%);
            width:calc(100% - 80px);
            border-top: 70px solid @border;
            border-right: 30px solid transparent;
            border-left: 30px solid transparent;
            text-align: center;
            .container2{
                position: absolute;
                bottom: -16px;
                left: 50%;
                transform: translateX(-50%);
                width:30%;
                border-top: 30px solid @border;
                border-right: 40px solid transparent;
                border-left: 40px solid transparent;
            }
            .title{
               color: #fff;
               font-size: 40px;
               font-weight: bold;
               position: absolute;
               z-index: 100;
               left: 50%;
               transform: translateX(-50%);
               top:-50px;
            }
            .time{
               color: #fff;
               font-size: 20px;
               position: absolute;
               right: 10px;
               bottom: 50%;
               transform: translateY(-70%); 
            }
            .el-icon-back{
               color: #fff;
               font-size: 30px;
               position: absolute;
               left: 10px;
               bottom: 50%;
               transform: translateY(-70%); 
               cursor: pointer;
            }
        }
       
        
    }
    .echarts{
        height: calc(100% - 100px);
        width: 100%;
       
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