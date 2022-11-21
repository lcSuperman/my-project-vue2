<template>
  <div class="echartChina">
    <EchartChina />
    <div class="sumNumber">
      <ul class="container">
         <li v-for="(item ,index ) in sum" :key="index">
           <span class="title">{{item.title}}</span>
           <span class="count">{{item.count}}</span>
         </li>
      </ul>
    </div>
  </div>
</template>
<script>
import EchartChina from '@/components/bigEcharts/echartChina'
export default {
    data(){
      return {
         sum:[
          {title:'资产规模 (亿元)',count:'1328'},
          {title:'资产数量',count:'238797'},
          {title:'客户总数',count:'27890'}
         ]
      }
    },
    components:{
        EchartChina
    }
}
</script>
<style lang='less' scoped>
.echartChina{
    height:100%;
    width: 100%;
    position: relative;
    .sumNumber{
      height: 13%;
      width: 70%;
      position: absolute;
      top:0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-around;
      .container{
         height: 100%;
         width: 100%;
         display: flex;
         justify-content: space-around;
        li{
          width: 30%;
          height: 100%;
          border-radius:20px ;
          color: #cecece;
          background:rgba(10, 48, 122, .5);
          box-sizing: border-box;
          padding: 2% 0;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          .title{
            font-weight: 700;
            font-size: 20px;
          }
          .count{
            color: #b08d54;
            font-size: 40px;
            font-weight: 700;
          }
        }
      }
      
    }
}
</style>