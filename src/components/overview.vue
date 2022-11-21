<template>
  <div class="overview">
     <EchartBarF />
  </div>
</template>
<script>
import EchartBarF from '@/components/bigEcharts/echartBarF'
export default {
    components:{
        EchartBarF
    }
}
</script>
<style lang='less' scoped>
.overview{
    height: calc(100% - 20px);
    width: 100%;
}
</style>