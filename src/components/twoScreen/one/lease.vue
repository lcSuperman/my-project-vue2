<template>
    <div class="assetWarnContainer">
        <EchartTitle title="租约" />
        <div class="assetWarn">
            
        </div>
    </div>
 
</template>
<script>
import EchartTitle from '@/components/echartTitle'

export default {
    components:{
        EchartTitle
    },
     methods:{
        clickGD(){
            this.$router.push({path:'/echarts/tableTwo'})
        }
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