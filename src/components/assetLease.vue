<template>
  <div class="assetLease">
      <div class="assetBar">
         <EchartBar echartId="echartH"  ref="myEchart2"/>
      </div>
      <div class="assetBar">
         <EchartBar echartId="echartK" ref="myEchart22"/>
      </div>
  </div>
</template>
<script>
import EchartBar from '@/components/bigEcharts/echartBar'
export default {
    data(){
      return{
        
      }
    },
    mounted(){
        var arr = [
            {title:'网约车',count:26068,total:29623},
            {title:'户用光伏',count:8068 ,total:12042},
            {title:'船舶',count:168,total:300},
            {title:'工程机械',count:3658,total:3934},
            {title:'汽车租赁',count:26688,total:32546}
        ]
        var arr2 = [
            {title:'冷库',count:3546,total:4076},
            {title:'风电吊装',count:2068 ,total:6267},
            {title:'产业集群',count:19868,total:44151},
            {title:'办公设备',count:92878,total:128997},
        ]

        this.$refs.myEchart2.initEchart(arr)
        this.$refs.myEchart22.initEchart(arr2)

    },
    components:{
        EchartBar
    }
}
</script>
<style lang='less' scoped>
.assetLease{
    height: calc(100% - 20px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    .assetBar{
        height: 100%;
        width: 46%;
    }
}
</style>