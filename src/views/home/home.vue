<template>
  <div class="home">
    <ul class="homeOne">
       <li v-for="(data,index) of homeOneData" :key="index">
         <div class="top">
            <span>{{data.title}}</span>
            <span>{{data.unit}}</span>
         </div>
         <div class="down">
           <span>{{data.count}}</span>
         </div>
       </li>
    </ul>
    <div class="homeTwo">
       <div class="chart"></div>
       <div class="chart"></div>
    </div>
  </div>
</template>
<script>
export default { 
  data(){
    return{
      homeOneData:[
        { title:'技能数量',unit:'g',count:'89.8'},
        { title:'个人评分',unit:'cmd',count:'100%'},
        { title:'技能总分',unit:'m',count:'99.0'},
        { title:'总任务',unit:'g',count:'10.0'},
        { title:'月工时',unit:'h',count:'300.5'},
      ]
    }
  },
  mounted(){
   
  }
}
</script>
<style lang='less' scoped>
.home{
  height: 100%;
  .homeOne{
    height: 120px;
    display: flex;
    justify-content: space-between;
    li{
      width: 17%;
      height: 80px;
      border-radius: 5px;
      padding: 10px;
      background-image: linear-gradient(#8db9eb, #4a9def);
      box-shadow:0px 2px 8px #888888;
      &:nth-child(2){
        background-image: linear-gradient(#b0eae8, #30e2ec);
      }
      &:nth-child(3){
         background-image: linear-gradient(#eaeb8d, #d7ea42);
      }
      &:nth-child(4){
         background-image: linear-gradient(#8ae7ad, #4aef7c);
      }
      &:nth-child(5){
         background-image: linear-gradient(#ebb18d, #efa54a);
      }
      .top{
         font-weight:bold;
          color: #fff;
          display: flex;
          justify-content: space-between;
      }
      .down{
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        color: #fff;
      }
    }
  }
  .homeTwo{
     display: flex;
     justify-content: space-between;
     .chart{
      height: 300px;
      width: 48%;
      box-shadow:0px 2px 8px #888888;
     }
  }
}
</style>