<template>
  <div class="leaseRate">
      <EchartPieGG ref="myEchart22" />
  </div>
</template>
<script>
import EchartPieGG from '@/components/bigEcharts2/echartPieGG'
export default {
    data(){
       return {
         echartData:[
              { value: 10,total:50, name: '4米' },
              { value: 20,total:60, name: '6米' },
              { value: 30, total:50,name: '8米' },
              { value: 22, total:50,name: '10米' },
              { value: 40, total:60,name: '12米' },
              { value: 44, total:44,name: '13米' },
              { value: 48, total:50,name: '14米' },
              { value: 33, total:40,name: '15米' },
              { value: 44, total:50,name: '16米' },
              { value: 33, total:50,name: '18米' },
              { value: 70, total:80,name: '20米' },
              { value: 45, total:50,name: '22米' },
              { value: 60, total:90,name: '24米' },
              { value: 44, total:50,name: '26米' },
              { value: 20, total:40,name: '28米' },
              { value: 33, total:50,name: '30米' },
              { value: 22, total:30,name: '32米' },
              { value: 55,total:60, name: '38米' }
          ]
       }
    },
    mounted(){
       this.getStatisData()
    },
    components:{
        EchartPieGG
    },
    methods:{
       getStatisData(){
            const {echartData} =  this
            this.$refs.myEchart22.initEchart(echartData)
       },
    }
}
</script>
<style lang='less' scoped>
@import '~@/assets/less/echart.less';
.leaseRate{
    height: calc(100% - 20px);
    width: 100%;
}
</style>