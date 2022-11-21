<template>
  <div class="assetWarn">
     <EchartBarT />
  </div>
</template>
<script>
import EchartBarT from '@/components/bigEcharts/echartBarT'
export default {
    components:{
        EchartBarT
    }
}
</script>
<style lang='less' scoped>
.assetWarn{
    height: calc(100% - 20px);
    width: 100%;
}
</style>