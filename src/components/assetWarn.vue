<template>
  <div class="assetWarn">
     <EchartBarY />
  </div>
</template>
<script>
import EchartBarY from '@/components/bigEcharts/echartBarY'
export default {
    components:{
        EchartBarY
    }
}
</script>
<style lang='less' scoped>
.assetWarn{
    height: calc(100% - 20px);
    width: 100%;
}
</style>