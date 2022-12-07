<template>
  <div class="childrenTwo">
   <div class="title">
     <span>高机资产数据</span>
   </div>
   <div class="echarts">
     <div class="topContainer">
        <ul class="topLeft">
           <li v-for="(item , index) in data" :key="index">
               <div class="dataTitle">
                    <div class="titles">
                        <span>{{item.title}}</span>
                        <span><i class="el-icon-warning-outline"></i></span>
                    </div>
                    <span class="count">{{item.count}}</span>
               </div>
               <div class="dataNumber">
                  <div class="percen">
                    <span>{{item.percenName}}：</span>
                    <span>{{item.percent}}%</span>
                  </div>
                  <div class="linkRate">
                    <span>月环比：</span>
                    <i class="el-icon-caret-bottom" v-if="item.isTop"></i>
                    <i class="el-icon-caret-top" v-else></i>
                    <span :style="{color: !item.isTop ? '#cc0000' : '#7ecf51'}">{{item.rate}}%</span>
                  </div>
               </div>
           </li>
        </ul>
        <div class="topRight">
             <EchartTitle title="资产数量" />
             <AssetCount/>
        </div>
     </div>
     <ul class="bottomContainer">
        <li class="bottomLeft">
            <EchartTitle title="高机高度出租率" />
            <GdLeaseRate/>
        </li>
        <li class="bottomMiddle">
            <EchartTitle title="高机类型出租率" />
            <LeaseRate/>
        </li>
        <li class="bottomRight">
            <EchartTitle title="高机品牌出租率" />
            <LeaseRateP/>
        </li>
     </ul>
   </div>
  </div>
</template>

<script>
import EchartTitle from '@/components/echartTitle'
import AssetCount from '@/components/twoScreen/two/assetCount'
import LeaseRate from '@/components/twoScreen/two/leaseRate'
import LeaseRateP from '@/components/twoScreen/two/leaseRateP'
import GdLeaseRate from '@/components/twoScreen/two/gdLeaseRate'
  export default {
    data(){
        return {
           data:[
            {title:'总出租数量',count:7289,percenName:'出租率',percent:'81.3',rate:'3.3',isTop:true},
            {title:'总在库数量',count:361,percenName:'在库率',percent:'11.1',rate:'2.3',isTop:false},
            {title:'总滞留客户现场',count:142,percenName:'出租率',percent:'7.6',rate:'4.9',isTop:false}
           ]
        }
    },
    components:{
        EchartTitle,
        AssetCount,
        LeaseRate,
        LeaseRateP,
        GdLeaseRate
    }
   
  }
</script>

<style  lang='less' scoped>
@import '~@/assets/less/echart.less';
.childrenTwo{
    height: 100%;
    width:100%;
    .title{
        height: 50px;
        width: 10%;
        line-height: 50px;
        background: url(~@/assets/images/title.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        box-sizing: border-box;
        margin:15px 0 0 15px;
        padding: 0 20px;
        span{
            font-size: 20px;
            font-weight: bold;
        }
    }
    .echarts{
        height: calc(100% - 70px);
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        padding:20px 20px 10px 20px;
        color: #fff;
        .topContainer{
            height: 53%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            .topLeft{
                height: 100%;
                width: 15%; 
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                li{
                    width: 100%;
                    height: 31%;
                    border: 2px solid @border1;
                    border-radius: 20px;
                    box-sizing: border-box;
                    padding: 10px 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    .dataTitle{
                       display: flex;
                       flex-direction: column;
                       justify-content: space-between;
                       .titles{
                          display: flex;
                          justify-content: space-between;
                          color: #cecece;
                       }
                       .count{
                          font-size: 30px;
                          font-weight: bold;
                          color: #fff;
                       }
                    }
                    .dataNumber{
                        display: flex;
                        justify-content: space-between;
                        color: #cecece;
                        .linkRate{
                            .el-icon-caret-top{
                                color:#cc0000;
                            }
                            .el-icon-caret-bottom{
                                color:#7ecf51;
                            }
                        }
                    }
                }
            }
            .topRight{
                height: 100%;
                width: 84%; 
                border: 2px solid @border1;
                border-radius: 20px;
                box-sizing: border-box;
                padding: 10px 20px;
            }
        }
        .bottomContainer{
            height: 45%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            li{
                height: 100%;
                width: 32.7%;
                border: 2px solid @border1;
                border-radius: 20px;
                box-sizing: border-box;
                padding: 10px 20px;
            }
        }
       
    }
}

</style>