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
    <ul class="btns" @click="clickBtns">
      <li :class="clickTitle == btn.title ? 'active' : ''" v-for="(btn , index) in btns" :key="index">
        <img :src="btn.image" alt="">
        <div class="btnTitle">
           <span class="title">{{btn.title}}</span>
        </div>
       
      </li>
     
    </ul>
    <div class="threeBtns">
      <EchartBtns/>
    </div>
  </div>
</template>
<script>
import EchartChina from '@/components/bigEcharts/echartChina'
import car from '@/assets/images/car.jpg'
import boat from '@/assets/images/boat.jpg'
import computer from '@/assets/images/computer.jpg'
import EchartBtns from '@/components/echartBtns'
export default {
    data(){
      return {
         clickTitle:'全部',
         sum:[
          {title:'资产规模 (亿元)',count:'1328'},
          {title:'资产数量',count:'238797'},
          {title:'客户总数',count:'27890'}
         ],
         btns:[
          {image:car,title:'全部'},
          {image:car,title:'汽车租赁'},
          {image:car,title:'工程机械'},
          {image:computer,title:'办公设备'},
          {image:car,title:'产业集群'},
          {image:car,title:'网约车'},
          {image:boat,title:'风车吊装'},
          {image:computer,title:'户用光伏'},
          {image:boat,title:'船舶'}
         ]
      }
    },
    components:{
        EchartChina,
        EchartBtns
    },
    methods:{
      clickBtns(e){
       // console.log(e.target.innerText)
        this.clickTitle = e.target.innerText
      }
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
    .btns{
      position: absolute;
      left:2%;
      bottom: 3%;
      li{
        width: 105px;
        height: 35px;
        background: rgba(255, 255, 255, .1);
        border: 1px solid #1984fe;
        border-radius: 5px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 5px 0 8px;
        cursor: pointer;
        img{
          width: 20px;
          height: 20px;
          border-radius:50% ;
        }
        .btnTitle{
           width: 100%;
           text-align: center;
           .title{
              font-size: 10px;
              color: #cecece;
            }
        }
       
      }
      li:hover{
          background: rgba(25, 132, 254, .7);
      }
      .active{
          background: rgba(25, 132, 254, 1);
      }
    }
    .threeBtns{
      width: 210px;
      height: 40px;
      position: absolute;
      left:50%;
      top:15%;
      transform: translateX(-50%);
      text-align: center;
      display: flex;
      justify-content: space-around;
    }
}
</style>