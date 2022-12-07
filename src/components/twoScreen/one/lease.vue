<template>
    <div class="assetWarnContainer">
        <EchartTitle title="租约">
            <span :style="{color:'#0078ff'}">已签约总数：2970</span>
        </EchartTitle>
        <div class="assetWarn">
            <EchartLineL ref="myEchart19"/>
        </div>
    </div>
 
</template>
<script>
import EchartTitle from '@/components/echartTitle'
import EchartLineL from '@/components/bigEcharts2/echartLineL'
export default {
    data(){
        return {
            echartData:{
                  dataX: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                  data1: [12,22,14,23,19,21,27,33,15,16,41,33],
            }

        }
    },
    mounted(){
       const {echartData} = this
       this.$refs.myEchart19.initEchart(echartData)
    },
    components:{
        EchartTitle,
        EchartLineL
    },
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