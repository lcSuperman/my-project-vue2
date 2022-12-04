<template>
  <div class="childrenTwo">
   <div class="title">
     <span>高机营收数据</span>
   </div>
   <div class="echarts">
     <ul class="topContainer">
        <li ></li>
        <li ></li>
        <li ></li>
        <li ></li>
     </ul>
     <div class="middleContainer"></div>
     <div class="bottomContainer"></div>
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
            height: 23%;
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
            }
         
        }
        .middleContainer{
            height: 36.5%;
            width: 100%;
            border: 2px solid @border1;
            border-radius: 20px;
            box-sizing: border-box;
            padding: 10px 20px;
        }
        .bottomContainer{
            height: 36.5%;
            width: 100%;
            border: 2px solid @border1;
            border-radius: 20px;
            box-sizing: border-box;
            padding: 10px 20px;
        }
       
    }
}

</style>