<template>
    <div class="contents">
        <EchartHead title="李氏集团营大屏"/>
        <router-view></router-view>
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
<style lang='less' scoped>
@import '~@/assets/less/echart.less';
 .contents{
    height: 100%;
    width:100%;
    background: linear-gradient(#02152f,#051e52); 
 }
</style>