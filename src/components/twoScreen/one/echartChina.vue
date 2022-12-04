<template>
  <div class="echartChina">
    <EchartChina ref="myEchart4"/>
    <div class="sumNumber">
      <ul class="container">
         <li v-for="(item ,index ) in sum" :key="index">
           <span class="title">{{item.title}}</span>
           <span class="count">{{item.count}}</span>
         </li>
      </ul>
    </div>
    <ul class="btns"  @click="clickBtns">
      <li :class="clickTitle == btn.title ? 'active' : ''" v-for="(btn , index) in btns" :key="index">
        <img :src="btn.image" :alt="btn.title">
        <div class="btnTitle">
           <span class="title">{{btn.title}}</span>
        </div>
       
      </li>
     
    </ul>
  </div>
</template>
<script>
import EchartChina from '@/components/bigEcharts2/echartChina'
import car from '@/assets/images/car.jpg'
import boat from '@/assets/images/boat.jpg'
import computer from '@/assets/images/computer.jpg'
import EchartBtns from '@/components/echartBtns'
export default {
    data(){
      return {
         chinaBtns:{all:6,finance:7,manage:8},
         clickTitle:'全部',
         sum:[
          {title:'资产规模 (亿元)',count:'1328'},
          {title:'资产数量',count:'238797'},
          {title:'客户总数',count:'27890'},
          {title:'租金回收率',count:'98%'}
         ],
         btns:[
          {image:car,title:'全部'},
          {image:boat,title:'高机'},
          {image:car,title:'叉车'},
          {image:computer,title:'其他'},
         ],
         geoCoordMap:{
          哈尔滨:{coordi:[126.63, 45.75],type:0},
          北京: {coordi:[116.46, 39.92],type:1},
          广州: {coordi:[113.23, 23.16],type:0},
          上海: {coordi:[121.48, 31.22],type:1},
          郑州: {coordi:[113.65, 34.76],type:1},
          厦门: {coordi:[118.1, 24.46],type:0},
          杭州: {coordi:[120.19, 30.26],type:0},
          攀枝花: {coordi:[101.718637, 26.582347],type:1},
          东莞: {coordi:[113.75, 23.04],type:0},
          广州: {coordi:[113.23, 23.16],type:1},
          太原:{coordi: [112.53, 37.87],type:1},
          拉萨: {coordi:[91.11, 29.97],type:0},
          昆明: {coordi:[102.73, 25.04],type:0},
          深圳: {coordi:[114.07, 22.62],type:1},
          宿迁: {coordi:[118.3, 33.96],type:0},
          佛山: {coordi:[113.11, 23.05],type:1},
          海口: {coordi:[110.35, 20.02],type:0},
          江门: {coordi:[113.06, 22.61],type:1},
          大连: {coordi:[121.62, 38.92],type:0},
          沈阳: {coordi:[123.38, 41.8],type:1},
          长春: {coordi:[125.35, 43.88],type:0},
          吉林: {coordi:[126.57, 43.87],type:1},
          宜宾: {coordi:[104.56, 29.77],type:0},
          呼和浩特: {coordi:[111.65, 40.82],type:1},
          成都: {coordi:[104.06, 30.67],type:0},
          桂林: {coordi:[110.28, 25.29],type:1},
          齐齐哈尔: {coordi:[123.97, 47.33],type:0},
          张家界: {coordi:[110.479191, 29.117096],type:1},
          宜兴: {coordi:[119.82, 31.36],type:1},
          西安: {coordi:[108.95, 34.27],type:0},
          遵义: {coordi:[106.9, 27.7],type:1},
          鄂尔多斯: {coordi:[109.781327, 39.608266],type:1},
          潍坊: {coordi:[119.1, 36.62],type:0},
          徐州: {coordi:[117.2, 34.26],type:1},
          衡水: {coordi:[115.72, 37.72],type:0},
          乌鲁木齐:{coordi: [87.68, 43.77],type:0},
          开封: {coordi:[114.35, 34.79],type:1},
          济南:{coordi: [117, 36.65],type:0},
          南充: {coordi:[106.110698, 30.837793],type:1},
          天津: {coordi:[117.2, 39.13],type:1},
          聊城: {coordi:[115.97, 36.45],type:0},
          芜湖: {coordi:[118.38, 31.33],type:1},
          唐山: {coordi:[118.02, 39.63],type:1},
          丽水: {coordi:[119.92, 28.45],type:0},
          洛阳: {coordi:[112.44, 34.7],type:1},
          秦皇岛: {coordi:[119.57, 39.95],type:1},
          株洲: {coordi:[113.16, 27.83],type:0},
          石家庄: {coordi:[114.48, 38.03],type:1},
          长沙:{coordi: [113, 28.21],type:0},
          衢州: {coordi:[118.88, 28.97],type:1},
          合肥: {coordi:[117.27, 31.86],type:0},
          武汉: {coordi:[114.31, 30.52],type:1},
          大庆:{coordi: [125.03, 46.58],type:0}
         },
         geoCoordMap1:{
            哈尔滨:{coordi:[126.63, 45.75],type:0},
            北京: {coordi:[116.46, 39.92],type:1},
            广州: {coordi:[113.23, 23.16],type:0},
            上海: {coordi:[121.48, 31.22],type:1},
            郑州: {coordi:[113.65, 34.76],type:1},
            厦门: {coordi:[118.1, 24.46],type:0},
            杭州: {coordi:[120.19, 30.26],type:0},
            攀枝花: {coordi:[101.718637, 26.582347],type:1},
            东莞: {coordi:[113.75, 23.04],type:0},
            广州: {coordi:[113.23, 23.16],type:1},
            太原:{coordi: [112.53, 37.87],type:1},
            拉萨: {coordi:[91.11, 29.97],type:0},
            昆明: {coordi:[102.73, 25.04],type:0},
            深圳: {coordi:[114.07, 22.62],type:1},
            宿迁: {coordi:[118.3, 33.96],type:0},
            佛山: {coordi:[113.11, 23.05],type:1},
            海口: {coordi:[110.35, 20.02],type:0},
         },
         geoCoordMap2:{
            江门: {coordi:[113.06, 22.61],type:1},
            大连: {coordi:[121.62, 38.92],type:0},
            沈阳: {coordi:[123.38, 41.8],type:1},
            长春: {coordi:[125.35, 43.88],type:0},
            吉林: {coordi:[126.57, 43.87],type:1},
            宜宾: {coordi:[104.56, 29.77],type:0},
            呼和浩特: {coordi:[111.65, 40.82],type:1},
            成都: {coordi:[104.06, 30.67],type:0},
            桂林: {coordi:[110.28, 25.29],type:1},
            齐齐哈尔: {coordi:[123.97, 47.33],type:0},
            张家界: {coordi:[110.479191, 29.117096],type:1},
            宜兴: {coordi:[119.82, 31.36],type:1},
            西安: {coordi:[108.95, 34.27],type:0},
            遵义: {coordi:[106.9, 27.7],type:1},
            鄂尔多斯: {coordi:[109.781327, 39.608266],type:1},
            潍坊: {coordi:[119.1, 36.62],type:0},
            徐州: {coordi:[117.2, 34.26],type:1},
         },
         geoCoordMap3:{
            衡水: {coordi:[115.72, 37.72],type:0},
            乌鲁木齐:{coordi: [87.68, 43.77],type:0},
            开封: {coordi:[114.35, 34.79],type:1},
            济南:{coordi: [117, 36.65],type:0},
            南充: {coordi:[106.110698, 30.837793],type:1},
            天津: {coordi:[117.2, 39.13],type:1},
            聊城: {coordi:[115.97, 36.45],type:0},
            芜湖: {coordi:[118.38, 31.33],type:1},
            唐山: {coordi:[118.02, 39.63],type:1},
            丽水: {coordi:[119.92, 28.45],type:0},
            洛阳: {coordi:[112.44, 34.7],type:1},
            秦皇岛: {coordi:[119.57, 39.95],type:1},
            株洲: {coordi:[113.16, 27.83],type:0},
            石家庄: {coordi:[114.48, 38.03],type:1},
            长沙:{coordi: [113, 28.21],type:0},
            衢州: {coordi:[118.88, 28.97],type:1},
            合肥: {coordi:[117.27, 31.86],type:0},
            武汉: {coordi:[114.31, 30.52],type:1},
            大庆:{coordi: [125.03, 46.58],type:0}
          },
      }
    },
    components:{
        EchartChina,
        EchartBtns
    },
    mounted(){
       const {geoCoordMap,geoCoordMap1,geoCoordMap2} = this
       this.initChinaMap(geoCoordMap)
       this.$bus.$on('clickThreeBtns',(value) => {
          if(value == 6){
              this.initChinaMap(geoCoordMap)
          }else if(value == 7){
              this.initChinaMap(geoCoordMap1)
          }else if(value == 8){
               this.initChinaMap(geoCoordMap2)
          }else{

          }
       })
    },
    methods:{
      clickBtns(e){
           const {geoCoordMap,geoCoordMap1,geoCoordMap2,geoCoordMap3} = this
           this.clickTitle = e.target.innerText
           var value =  e.target.innerText
           if(value == '全部'){
              this.initChinaMap(geoCoordMap)
            }else if(value == '高机'){
              this.initChinaMap(geoCoordMap1)
            }else if(value == '叉车'){
              this.initChinaMap(geoCoordMap2)
            }else if(value == '其他'){
              this.initChinaMap(geoCoordMap3)
            }else{
              
            }
      },
      dealWithData(geoCoordMap) {
        var mapData = geoCoordMap
        var data = [];
        for (var key in mapData) {
          data.push({ name: key, value: mapData[key].coordi,type:mapData[key].type});
        }
        return data;
      },
      initChinaMap(geoCoordMap){
         var chinaData = this.dealWithData(geoCoordMap)
         this.$nextTick(() => {
           this.$refs.myEchart4.initEchartMap()
           this.$refs.myEchart4.initChina(chinaData)
         })
      }
    }
}
</script>
<style lang='less' scoped>
.echartChina{
    height:100%;
    width: 100%;
    position: relative;
    .sumNumber{
      height: 16%;
      width: 90%;
      position: absolute;
      top:0;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-around;
      .container{
         height: 100%;
         width: 100%;
         display: flex;
         justify-content: space-around;
        li{
          width: 23%;
          height: 100%;
          border-radius:10px ;
          color: #cecece;
          background:rgba(10, 48, 122, .5);
          box-sizing: border-box;
          padding: 2% 0;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          .title{
            font-weight: 700;
            font-size: 20px;
          }
          .count{
            color: #b08d54;
            font-size: 40px;
            font-weight: 700;
          }
        }
      }
      
    }
    .btns{
      position: absolute;
      left:2%;
      bottom: 3%;
      li{
        width: 105px;
        height: 35px;
        background: rgba(255, 255, 255, .1);
        border: 1px solid #1984fe;
        border-radius: 5px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 0 5px 0 8px;
        cursor: pointer;
        img{
          width: 20px;
          height: 20px;
          border-radius:50% ;
        }
        .btnTitle{
           width: 100%;
           text-align: center;
           .title{
              font-size: 10px;
              color: #cecece;
            }
        }
       
      }
      li:hover{
          background: rgba(25, 132, 254, .7);
      }
      .active{
          background: rgba(25, 132, 254, 1);
      }
    }
}
</style>