<template>
  <div class="childrenThree">
   <div class="title">
     <span>高机营收数据</span>
   </div>
   <div class="echarts">
     <ul class="topContainer">
        <li v-for="(item , index ) in moneyData" :key="index">
           <div class="money">
              <div class="money-container">
                  <i class="iconfont" :class="item.icon"></i>
                  <div>
                    <span class="grey">{{item.title}}</span>
                    <div>
                        <span class="moneyCount">{{item.value}}</span>
                        <span class="grey">亿元</span>
                    </div>
                  </div>
              </div>
              <span class="warning"><i class="el-icon-warning-outline"></i></span>
           </div>
           <div class="moneyRate">
              <span>
                <span>月环比</span>
                <i class="el-icon-caret-bottom" v-if="item.isTop"></i>
                <i class="el-icon-caret-top" v-else></i>
                <span :style="{color: !item.isTop ? '#cc0000' : '#7ecf51'}">{{item.rate}}%</span>
              </span>
           </div>
        </li>
     </ul>
     <div class="middleContainer">
        <EchartTitle title="门店高机价值" />
        <AssetValue/>
     </div>
     <div class="bottomContainer">
        <EchartTitle title="业务经营情况" />
        <BusinessOperate />
     </div>
   </div>
  </div>
</template>

<script>
import EchartTitle from '@/components/echartTitle'
import AssetValue from '@/components/twoScreen/three/assetValue'
import BusinessOperate from '@/components/twoScreen/three/businessOperate'
  export default {
    data(){
      return {
        moneyData:[
            {title:'资产总值',icon:'icon-zichan',value:'218.079',isTop:true,rate:4.9},
            {title:'本月应收',icon:'icon-qianbao',value:'18.079',isTop:true,rate:4.9},
            {title:'本月实收',icon:'icon-jieqian',value:'17.079',isTop:false,rate:3.3},
            {title:'总逾期租金',icon:'icon-fangwuzujin',value:'8.079',isTop:true,rate:4.9},
        ]
      }
    },
    components:{
        EchartTitle,
        AssetValue,
        BusinessOperate
    }
   
  }
</script>

<style  lang='less' scoped>
@import '~@/assets/less/echart.less';
.childrenThree{
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
            height: 15%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            li{
                width: 24.3%;
                height: 100%;
                border: 2px solid @border1;
                border-radius: 20px;
                box-sizing: border-box;
                padding: 10px 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
              
                .money{
                  width: 100%;
                  height: 70%;
                  display: flex;
                  align-items: center;
                  justify-content: space-around;
                  box-sizing: border-box;
                  position: relative;
                  .money-container{
                     display: flex;
                     align-items: center;
                     .iconfont{
                        font-size: 60px;
                        color: #cecece;
                        margin-right: 20px;
                      }
                      .moneyCount{
                        font-size: 35px;
                        font-weight: bold;
                      }
                      .grey{
                        color: #cecece;
                      }

                  }
                  .warning{
                    color: #cecece;
                    position: absolute;
                    top:10%;
                    right: 0;
                  }
                 
                }
                .moneyRate{
                  width: 100%;
                  height: 30%;
                  border-top: 1px solid  @border1;
                  display: flex;
                  justify-content: space-around;
                  align-items: center;
                  color: #cecece;
                  .el-icon-caret-top{
                      color:#cc0000;
                  }
                  .el-icon-caret-bottom{
                      color:#7ecf51;
                  }
                }
               
            }
         
        }
        .middleContainer{
            height: 40.5%;
            width: 100%;
            border: 2px solid @border1;
            border-radius: 20px;
            box-sizing: border-box;
            padding: 10px 20px;
        }
        .bottomContainer{
            height: 40.5%;
            width: 100%;
            border: 2px solid @border1;
            border-radius: 20px;
            box-sizing: border-box;
            padding: 10px 20px;
        }
       
    }
}

</style>