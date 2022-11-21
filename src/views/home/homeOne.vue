<template>
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
</template>
<script>
export default {
    props:{
       homeOneData:Array
    }
}
</script>
<style lang='less' scoped>
 .homeOne{
    height: 150px;
    display: flex;
    justify-content: space-between;
    li{
      width: 17%;
      height: 110px;
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
        font-size: 35px;
        font-weight: bold;
        color: #fff;
      }
    }
  }
</style>