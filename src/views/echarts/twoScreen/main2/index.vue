<template>
  <div class="childrenOne">
   <EchartHead title="华夏金租工程机械经营大屏2"/>
   <div class="echarts">
      第二屏第一张页面
   </div>
  </div>
</template>

<script>
 import EchartHead from '@/components/echartHead'
  export default {
    components:{
        EchartHead
    }
   
  }
</script>

<style  lang='less' scoped>
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
    }
}

</style>