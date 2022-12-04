<template>
   <div id="china_map"></div>
</template>

<script>
import * as echarts from 'echarts';
import china from '@/utils/china.json'
import gaoji from '@/assets/images/gaoji.png'
import chache from '@/assets/images/chache.png'
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
  
  methods: {
   

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

    initChina(echartData){
      let mapDiv = document.getElementById('china_map');
      let myChart = echarts.init(mapDiv);
      var dataValue = echartData;
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
                            offset: 1, color: 'rgba(8,13,255,1)'
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
            symbol: function(value,param){
               console.log(value,param)
               if(param.data.type == 0){
                  return "image://" + chache;
               }else{
                   return "image://" + gaoji;
               }
              
            },
            symbolSize: 20,
            hoverSymbolSize: 20,
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
              color: "#e0eb40"
            },
            emphasis: {
              label: {
                show: false
              }
            }
          },
         
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
