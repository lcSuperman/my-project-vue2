<template>
  <div class="overview">
     <EchartBarJ />
  </div>
</template>
<script>
import EchartBarJ from '@/components/bigEcharts/echartBarJ'
export default {
    components:{
        EchartBarJ
    }
}
</script>
<style lang='less' scoped>
.overview{
    height: calc(100% - 20px);
    width: 100%;
}
</style>