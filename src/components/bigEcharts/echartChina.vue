<template>
   <div id="china_map"></div>
</template>

<script>
import * as echarts from 'echarts';
import china from '@/utils/china.json'
echarts.registerMap('china', china)

export default {
  data() {
    return {
      //echart 配制option  
      options: {
        tooltip: {
          show:false,
          triggerOn: "mousemove",   //mousemove、click
          padding:8,
          backgroundColor:'rgba(0,0,0,0.6)',
          borderWidth:0,
          textStyle:{
            color:'#fff',
            fontSize:12
          },
        },
       
       geo: {
          map: "china",
          roam: false,// 一定要关闭拖拽
          zoom: 1.6,
          center: [102, 37], // 调整地图位置
          aspectScale: 0.80, //长宽比
          label: {
            normal: {
              show: false, //关闭省份名展示
              fontSize: "10",
              color: "rgba(0,0,0,0.7)"
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: "#0d0059",
              borderColor: "#389dff",
              borderWidth: 1, //设置外层边框
              shadowBlur: 6,
              shadowOffsetY: 12,
              shadowOffsetX: -5,
              shadowColor: "#01012a"
            },
            emphasis: {
              areaColor: "#184cff",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 5,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        },
        series:[
          {
            type: "map",
            map: "china",
            roam: false,
            zoom: 1.6,
            center: [102, 37],
            data:[],
            // geoIndex: 1,
            aspectScale: 0.80, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              }
            },
            itemStyle: {
              normal: {
                areaColor: "#0d0059",
                borderColor: "#389dff",
                borderWidth: 0.5
              },
              emphasis: {
                areaColor: "#17008d",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 5,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      },
      
    };
  },
  
  mounted() {
      this.$nextTick(()=>{
         this.initEchartMap()
         this.initChina();
      })
  },
  methods: {
    dealWithData() {
      var geoCoordMap = {
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
      };
      var data = [];
      for (var key in geoCoordMap) {
        data.push({ name: key, value: geoCoordMap[key] });
      }
      return data;
    },

    //初始化中国地图
    initEchartMap() {
      let mapDiv = document.getElementById('china_map');
      let myChart = echarts.init(mapDiv);
      myChart.setOption(this.options);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
          myChart.resize();
      });

    },

    initChina(){
      let mapDiv = document.getElementById('china_map');
      let myChart = echarts.init(mapDiv);
      var dataValue = this.dealWithData();
      var data1 = dataValue.splice(0, 4);
      var option = {
        series: [
          {
            type: "map",
            map: "china",
            roam: false,
            zoom: 1.6,
            center: [102, 37],
            aspectScale: 0.80, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                areaColor: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(15,66,255,1)'
                        }, {
                            offset: 1, color: 'rgba(10,29,255,1)'
                        }],
                        global: false
                    },
                borderColor: "#389dff",
                borderWidth: 0.5
              },
              emphasis: {
                areaColor: "#17008d",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 5,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          },
          {
            name: "",
            type: "scatter",
            coordinateSystem: "geo",
            data: dataValue,
            symbol: "circle",
            symbolSize: 8,
            hoverSymbolSize: 10,
            tooltip: {
              formatter(value) {
                return value.data.name + "<br/>" + "设备数：" + "22";
              },
              show: true
            },
            encode: {
              value: 2
            },
            label: {
              formatter: "{b}",
              position: "right",
              show: false
            },
            itemStyle: {
              color: "#0efacc"
            },
            emphasis: {
              label: {
                show: false
              }
            }
          },
          {
            name: "Top 5",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: data1,
            symbolSize: 12,
            tooltip: {
              formatter(value) {
                return value.data.name + "<br/>" + "设备数：" + "22";
              },
              show: true
            },
            encode: {
              value: 2
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke",
              color: "#0efacc",
              period: 9,
              scale: 5
            },
            hoverAnimation: true,
            label: {
              formatter: "{b}",
              position: "right",
              show: true
            },
            itemStyle: {
              color: "#0efacc",
              shadowBlur: 2,
              shadowColor: "#333"
            },
            zlevel: 1
          }
        ]
      };
      myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
          myChart.resize();
      });
    }


  }
 
};
</script>

<style scoped>
   #china_map{
        height: 100%;
    }
</style>
