<template>
  <div class="assetStatis">
      <EchartLineT />
  </div>
</template>
<script>
import EchartLineT from '@/components/bigEcharts/echartLineT'
export default {
    data(){
       return {
        
       }
    },
   
    components:{
        EchartLineT
    },
}
</script>
<style lang='less' scoped>
.assetStatis{
    height: calc(100% - 10px);
    width: 100%;
}
</style>