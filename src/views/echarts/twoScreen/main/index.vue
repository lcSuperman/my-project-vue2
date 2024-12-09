<template>
  <div class="childrenOne">
   <EchartHead title="李氏集团工程机械经营大屏"/>
   <div class="echarts">
        <ul class="grid-content left">
            <li class="left-center"> 
                <EchartTitle title="资产出租" />
                <AssetLease/>
            </li>
            <li >
                <EchartTitle title="客户总览"/>
                <CustomerView/>
            </li>
            <li class="leftBottom">
                <EchartTitle title="业务回款趋势" />
                <BusinessCol/>
            </li>
        </ul>
        <ul class="grid-content center">
            <li class="map">
                <EchartChina />
            </li>
            <li class="pies">
                <div class="pie">
                    <EchartTitle title="监控覆盖"/>
                    <Monitor/>
                </div>
                <div class="pie">
                    <EchartTitle title="预警"/>
                    <Warn/>
                </div>
            </li>
        </ul>
        <ul class="grid-content right">
            <li class="rightTop">
                <EchartTitle title="资产状态统计">
                  <EchartBtns1 />
                </EchartTitle>
                <AssetStatus/>
            </li>
            <li >
                <LeaseStatis />   
            </li>
            <li class="rightBottom">
                <Lease />
            </li>
        </ul>
   </div>
  </div>
</template>

<script>
import EchartHead from '@/components/echartHead'
import EchartBtns1 from '@/components/echartBtns1'
import EchartTitle from '@/components/echartTitle'
import Lease from '@/components/twoScreen/one/lease'
import LeaseStatis from '@/components/twoScreen/one/leaseStatis'
import EchartChina from '@/components/twoScreen/one/echartChina'
import BusinessCol from '@/components/twoScreen/one/businessCol'
import AssetLease from '@/components/twoScreen/one/assetLease'
import CustomerView from '@/components/twoScreen/one/customerView'
import Monitor from '@/components/twoScreen/one/monitor'
import Warn from '@/components/twoScreen/one/warn'
import AssetStatus from '@/components/twoScreen/one/assetStatus'
  export default {
    components:{
        EchartHead,
        EchartBtns1,
        EchartTitle,
        BusinessCol,
        Lease,
        LeaseStatis,
        EchartChina,
        AssetLease,
        CustomerView,
        Monitor,
        Warn,
        AssetStatus
      
    }
   
  }
</script>

<style  lang='less' scoped>
@import '~@/assets/less/echart.less';
.childrenOne{
    height: 100%;
    width:100%;
    .echarts{
        height: calc(100% - 85px);
        width: 100%;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding:30px 10px 10px 10px;
        color: #fff;
         .left{
            height: 100%;
            width: 26.5%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            li{
                height: 31%;
                width: 97%;
                border: 2px solid @border1;
                border-radius: 20px;
                box-sizing: border-box;
                padding: 10px 20px;
            }
            .left-center{
                height: 34%;
            }
            .leftBottom{
                height: 32%;
            }

        }
        .center{
            height: 100%;
            width: 46%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            li{
                width: 100%;
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
            width: 26.5%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            li{
                height: 31%;
                width: 97%;
                border: 2px solid @border1;
                border-radius: 20px;
                box-sizing: border-box;
                padding: 10px 20px;
            }
            .rightTop{
                height: 34%;
            }
            .rightBottom{
            height: 32%; 
            }
        
        }
    }
}

</style>