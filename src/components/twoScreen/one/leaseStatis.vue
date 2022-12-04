<template>
  <div class="overviewContainer">
    <EchartTitle title="租赁统计" />
   
    <div class="overview">
    
     </div>

  </div>
  
</template>
<script>
import EchartTitle from '@/components/echartTitle'
export default {
  components:{
      EchartTitle
  },
}
</script>
<style lang='less' scoped>
.overviewContainer{
    height: 100%;
    width: 100%;
    .overview{
      height: calc(100% - 20px);
      width: 100%;
    
}
}

</style>