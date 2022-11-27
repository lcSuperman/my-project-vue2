<template>
  <div class="assetStatis">
      <EchartLine />
  </div>
</template>
<script>
import EchartLine from '@/components/bigEcharts/echartLine'
export default {
    data(){
       return {
        
       }
    },
   
    components:{
        EchartLine
    },
}
</script>
<style lang='less' scoped>
.assetStatis{
    height: calc(100% - 10px);
    width: 100%;
}
</style>