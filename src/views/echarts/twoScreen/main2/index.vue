<template>
  <div class="childrenTwo">
   <div class="title">
     <span>高机资产数据</span>
   </div>
   <div class="echarts">
     <div class="topContainer">
        <ul class="topLeft">
           <li></li>
           <li></li>
           <li></li>
        </ul>
        <div class="topRight"></div>
     </div>
     <ul class="bottomContainer">
        <li class="bottomLeft"></li>
        <li class="bottomMiddle"></li>
        <li class="bottomRight"></li>
     </ul>
   </div>
  </div>
</template>

<script>
import EchartTitle from '@/components/echartTitle'

  export default {
    components:{
        EchartTitle,
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
        padding:20px 10px 10px 10px;
        color: #fff;
        .topContainer{
            height: 53%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            .topLeft{
                height: 100%;
                width: 13%; 
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
                }
            }
            .topRight{
                height: 100%;
                width: 86%; 
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