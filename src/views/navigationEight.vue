<template>
<div class="eight">
    <div class="dtline">
       <EchartDynamicline />
    </div>
</div>
</template>
<script>
import EchartDynamicline from '@/components/echarts/echartDynamicline.vue'
export default {
    components:{
        EchartDynamicline
    }
}
</script>
<style lang='less' scoped>
.eight{
    .dtline{
        width: 100%;
        height: 500px;
        background-color: rgb(245, 245, 245);
    }
}
</style>