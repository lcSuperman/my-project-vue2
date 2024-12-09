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
    <ul class="btns" >
      <li :class="clickTitle == btn.title ? 'active' : ''" v-for="(btn , index) in btns" :key="index">
        <img :src="btn.image" :alt="btn.title"  @click="clickImg">
        <div class="btnTitle" @click="clickBtns">
           <span class="title">{{btn.title}}</span>
        </div>
       
      </li>
     
    </ul>
    <div class="threeBtns">
      <EchartBtns :btns ="chinaBtns"/>
    </div>
  </div>
</template>
<script>
import EchartChina from '@/components/bigEcharts/echartChina'
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
          {title:'客户总数',count:'27890'}
         ],
         btns:[
          {image:car,title:'全部'},
          {image:car,title:'汽车租赁'},
          {image:car,title:'工程机械'},
          {image:computer,title:'办公设备'},
          {image:car,title:'产业集群'},
          {image:car,title:'网约车'},
          {image:boat,title:'风车吊装'},
          {image:computer,title:'户用光伏'},
          {image:boat,title:'船舶'}
         ],
         newGeoCoordMap:{
          哈尔滨:{name:'工程机械',coordinate:[126.63, 45.75],assetNum:36,assetValue:10,receivableRent:18,rentRate:99,customerNumber:2438,addCustomwe:1800,stockQuantity:56}
         },
         geoCoordMap:{
          哈尔滨: [126.63, 45.75],
          北京: [116.46, 39.92],
          广州: [113.23, 23.16],
          上海: [121.48, 31.22],
          郑州: [113.65, 34.76],
          厦门: [118.1, 24.46],
          杭州: [120.19, 30.26],
          攀枝花: [101.718637, 26.582347],
          东莞: [113.75, 23.04],
          广州: [113.23, 23.16],
          太原: [112.53, 37.87],
          拉萨: [91.11, 29.97],
          昆明: [102.73, 25.04],
          深圳: [114.07, 22.62],
          宿迁: [118.3, 33.96],
          佛山: [113.11, 23.05],
          海口: [110.35, 20.02],
          江门: [113.06, 22.61],
          大连: [121.62, 38.92],
          沈阳: [123.38, 41.8],
          长春: [125.35, 43.88],
          吉林: [126.57, 43.87],
          宜宾: [104.56, 29.77],
          呼和浩特: [111.65, 40.82],
          成都: [104.06, 30.67],
          桂林: [110.28, 25.29],
          齐齐哈尔: [123.97, 47.33],
          张家界: [110.479191, 29.117096],
          宜兴: [119.82, 31.36],
          西安: [108.95, 34.27],
          遵义: [106.9, 27.7],
          鄂尔多斯: [109.781327, 39.608266],
          潍坊: [119.1, 36.62],
          徐州: [117.2, 34.26],
          衡水: [115.72, 37.72],
          乌鲁木齐: [87.68, 43.77],
          开封: [114.35, 34.79],
          济南: [117, 36.65],
          南充: [106.110698, 30.837793],
          天津: [117.2, 39.13],
          聊城: [115.97, 36.45],
          芜湖: [118.38, 31.33],
          唐山: [118.02, 39.63],
          丽水: [119.92, 28.45],
          洛阳: [112.44, 34.7],
          秦皇岛: [119.57, 39.95],
          株洲: [113.16, 27.83],
          石家庄: [114.48, 38.03],
          长沙: [113, 28.21],
          衢州: [118.88, 28.97],
          合肥: [117.27, 31.86],
          武汉: [114.31, 30.52],
          大庆: [125.03, 46.58]
         },
         geoCoordMap1:{
            哈尔滨: [126.63, 45.75],
            北京: [116.46, 39.92],
            广州: [113.23, 23.16],
            上海: [121.48, 31.22],
            郑州: [113.65, 34.76],
            厦门: [118.1, 24.46],
            杭州: [120.19, 30.26],
            攀枝花: [101.718637, 26.582347],
            东莞: [113.75, 23.04],
            广州: [113.23, 23.16],
            太原: [112.53, 37.87],
            拉萨: [91.11, 29.97],
            昆明: [102.73, 25.04],
            深圳: [114.07, 22.62],
            宿迁: [118.3, 33.96],
            佛山: [113.11, 23.05],
            海口: [110.35, 20.02],
         },
         geoCoordMap2:{
            江门: [113.06, 22.61],
            大连: [121.62, 38.92],
            沈阳: [123.38, 41.8],
            长春: [125.35, 43.88],
            吉林: [126.57, 43.87],
            宜宾: [104.56, 29.77],
            呼和浩特: [111.65, 40.82],
            成都: [104.06, 30.67],
            桂林: [110.28, 25.29],
            齐齐哈尔: [123.97, 47.33],
            张家界: [110.479191, 29.117096],
            宜兴: [119.82, 31.36],
            西安: [108.95, 34.27],
            遵义: [106.9, 27.7],
            鄂尔多斯: [109.781327, 39.608266],
            潍坊: [119.1, 36.62],
            徐州: [117.2, 34.26],
         },
         geoCoordMap3:{
            衡水: [115.72, 37.72],
            乌鲁木齐: [87.68, 43.77],
            开封: [114.35, 34.79],
            济南: [117, 36.65],
            南充: [106.110698, 30.837793],
            天津: [117.2, 39.13],
            聊城: [115.97, 36.45],
            芜湖: [118.38, 31.33],
            唐山: [118.02, 39.63],
            丽水: [119.92, 28.45],
            洛阳: [112.44, 34.7],
            秦皇岛: [119.57, 39.95],
            株洲: [113.16, 27.83],
            石家庄: [114.48, 38.03],
            长沙: [113, 28.21],
            衢州: [118.88, 28.97],
            合肥: [117.27, 31.86],
            武汉: [114.31, 30.52],
            大庆: [125.03, 46.58]
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
            }else if(value == '汽车租赁'){
              this.initChinaMap(geoCoordMap1)
            }else if(value == '工程机械'){
              this.initChinaMap(geoCoordMap2)
            }else if(value == '办公设备'){
              this.initChinaMap(geoCoordMap3)
            }else{
              this.initChinaMap(geoCoordMap2)
            }
      },
      clickImg(e){
          var value =  e.target.alt
           if(value == '工程机械'){
               this.$router.push({ path: '/echarts2'})
            }

      },
      dealWithData(geoCoordMap) {
        var mapData = geoCoordMap
        var data = [];
        for (var key in mapData) {
          data.push({ name: key, value: mapData[key] });
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
      height: 15%;
      width: 70%;
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
          width: 30%;
          height: 100%;
          border-radius:10px ;
          color: #cecece;
          background:rgba(10, 48, 122, .5);
          box-sizing: border-box;
          padding: 1% 0;
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
            font-size: 30px;
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
    .threeBtns{
      width: 210px;
      height: 40px;
      position: absolute;
      left:50%;
      top:16%;
      transform: translateX(-50%);
      text-align: center;
      display: flex;
      justify-content: space-around;
    }
}
</style>