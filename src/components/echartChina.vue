<template>
  <div class="assetWarn">
    <EchartChina />
  </div>
</template>
<script>
import EchartChina from '@/components/bigEcharts/echartChina'
export default {
    components:{
        EchartChina
    }
}
</script>
<style lang='less' scoped>
.assetWarn{
    height:100%;
    width: 100%;
}
</style>