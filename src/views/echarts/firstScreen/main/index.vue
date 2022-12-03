<template>
       <div class="echarts">
            <ul class="grid-content left">
                <li class="left-center"> 
                    <EchartTitle title="资产统计">
                        <EchartBtns :btns ="staticsBtns"/>
                    </EchartTitle>
                    <AssetStatis />
                </li>
                <li >
                    <EchartTitle title="资产出租"/>
                    <AssetLease></AssetLease>
                </li>
                <li>
                    <EchartTitle title="业务回款">
                        <EchartBtns :btns ="backBtns" />
                    </EchartTitle>
                    <BusinessCol/>
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
                     <OvervDue />   
                </li>
                <li class="pieTwo">
                    <AssetWarn />
                </li>
            </ul>
        </div>
</template>
<script>
import EchartTitle from '@/components/echartTitle'
import EchartBtns from '@/components/echartBtns'
import Lease from '@/components/firstScreen/lease'
import LeaseTwo from '@/components/firstScreen/leaseTwo'
import AssetLease from '@/components/firstScreen/assetLease'
import AssetWarn from '@/components/firstScreen/assetWarn'
import Overview from '@/components/firstScreen/overview'
import OvervDue from '@/components/firstScreen/overDue'
import EchartChina from '@/components/firstScreen/echartChina'
import AssetStatis from '@/components/firstScreen/assetStatis'
import BusinessCol from '@/components/firstScreen/businessCol'
export default {
     data(){
        return {
            staticsBtns:{all:0,finance:1,manage:2},
            backBtns:{all:3,finance:4,manage:5},

        }
     },
     components:{
        EchartTitle,
        EchartBtns,
        Lease,
        LeaseTwo,
        AssetLease,
        AssetWarn,
        Overview,
        OvervDue,
        EchartChina,
        AssetStatis,
        BusinessCol
    },
}
</script>
<style lang='less' scoped>
@import '~@/assets/less/echart.less';
 .echarts{
    height: calc(100% - 85px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding:30px 10px 10px 10px;
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
</style>