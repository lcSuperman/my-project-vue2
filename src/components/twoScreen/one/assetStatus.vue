<template>
  <div class="assetStatus">
      <EchartPieAS ref="myEchart17" />
      <ul class="counts">
        <li v-for="(item ,index) in echartData1" :key="index">
                <div class="investment" v-if="!item.echartId">
                    <div class="count">
                        <span>{{item.count}}</span>
                    </div>
                    <span>{{item.title}}</span>
                </div>
                <EchartCircular  :echartsId="item.echartId" :pieData="item" v-else/>
          </li>
       
      </ul>
  </div>
</template>
<script>
import EchartPieAS from '@/components/bigEcharts2/echartPieAS'
import EchartCircular from '@/components/bigEcharts/echartCircular'
export default {
     data(){
       return {
         echartData:[
              { value: 1048, name: '出租' },
              { value: 100, name: '在库' },
              { value: 30, name: '滞留客户现场' }
          ],
          echartData1:[
             {title:'0租约情况',count:9,echartId:'echart17',color:'#be1f27'},
            {title:'0租约数量',count:336},
            {title:'资产总数量',count:9737}  
        ]
       }
    },
    mounted(){
       this.getStatisData()
    },
    components:{
        EchartPieAS,
        EchartCircular
    },
    methods:{
       getStatisData(){
            const {echartData} =  this
            this.$refs.myEchart17.initEchart(echartData)
       },
    }
}
</script>
<style lang='less' scoped>
@import '~@/assets/less/echart.less';
.assetStatus{
    height: calc(100% - 20px);
    width: 100%;
    display: flex;
    justify-content: space-between;
    .counts{
      height: 100%;
      width: 35%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      li{
          width: 100%;
          height: 40%; 
          display: flex;
          color: #cecece;
          justify-content: space-around;
          align-items: center;
          .investment{
              height: 50%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              font-size: 10px;
              .count{
                  color: #24c0fe;
                  font-weight: 700;
                  font-size: 20px;
              }
              .yuan{
                  font-size: 10px;
                  color:#677c9b;
                
              }

          }
          
      }
      li:nth-child(2){
        height:25%;
      }
      li:nth-child(3){
        height:25%;
      }
    }
    
}
</style>