<template>
    <div class="assetWarnContainer">
    <EchartTitle title="资产预警">
        <div class="gengduo">
            <span>更多</span>
            <i class="el-icon-caret-right"></i>
        </div>
    </EchartTitle>
    <div class="assetWarn">
        <EchartBarY />
    </div>
    </div>
 
</template>
<script>
import EchartTitle from '@/components/echartTitle'
import EchartBarY from '@/components/bigEcharts/echartBarY'
export default {
    components:{
        EchartBarY,
        EchartTitle
    }
}
</script>
<style lang='less' scoped>
.assetWarnContainer{
    height: 100%;
    width: 100%;
    .assetWarn{
        height: calc(100% - 20px);
        width: 100%;
    }

}

</style>