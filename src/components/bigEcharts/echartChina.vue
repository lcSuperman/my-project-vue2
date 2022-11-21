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
          triggerOn: "mousemove",   //mousemove、click
          padding:8,
          borderWidth:1,
          borderColor:'#409eff',
          backgroundColor:'rgba(255,255,255,1)',
          textStyle:{
            color:'#000',
            fontSize:12
          },
          formatter: function(e) {
             return  `
               <div>
                   <p><b style="font-size:15px;">${e.data.name}</b>(2022年第二季度)</p>
                   <p class="tooltip_style"><span class="tooltip_left">季度GDP为:</span><span class="tooltip_right">${e.data.value}万亿</span></p>
               </div>
            `
          }
        },
        visualMap: {
          show:true,
          left: 20,
          bottom: 30,
          showLabel:true,
          textStyle:{
           color:'#fff',
          },
          pieces: [
            {
              gte: 2500,
              label: "汽车租赁",
              color: "#040182"
            },
            {
              gte: 2000,
              lt: 2500,
              label: "工程机械",
              color: "#1727b1"
            },
            {
              gte: 1500,
              lt:2000,
              label: "船舶",
              color: "#1669de"
            },
            {
              gte: 1000,
              lt: 1500,
              label: "户用光伏",
              color: "#5ea2e4"
            },
            {
              lt:1000,
              label:'产业集群',
              color: "#a8d9ee"
            }
          ]
        },
        geo: {
          show:true,
          map: "china", //引入的中国地图
          aspectScale:0.80,
          scaleLimit: {
            min: 1,
            max: 2
          },
          zoom: 1.6, //地图大小
          top:'31%',
          label: {//地图省份名称
            normal: {
              show:false,
              fontSize: "12",
              color: "rgba(0,0,0,0.7)"
            }
          },
          itemStyle: {
            normal: {
              // shadowBlur: 30,
              // shadowColor: 'rgba(0, 0, 0, 0.4)',
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: "#f2d5ad",
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0
            }
          }
        },
        series:[
           {
            name: "季度GDP",
            type: "map",
            geoIndex: 0,
            data:[],
          
          }
        ]
      },
      //echart data
      dataList: [
        {
          name: "南海诸岛",
          value: 400,
        },
        {
          name: "北京市",
          value: 4000
        },
        {
          name: "天津市",
          value: 3300
        },
        {
          name: "上海市",
          value: 3900
        },
        {
          name: "重庆市",
          value: 2500
        },
        {
          name: "河北省",
          value: 1300
        },
        {
          name: "河南省",
          value: 2300
        },
        {
          name: "云南省",
          value: 1100
        },
        {
          name: "辽宁省",
          value:3300
        },
        {
          name: "黑龙江省",
          value: 2300
        },
        {
          name: "湖南省",
          value: 1900
        },
        {
          name: "安徽省",
          value: 1600
        },
        {
          name: "山东省",
          value: 1390
        },
        {
          name: "新疆维吾尔自治区",
          value: 1400
        },
        {
          name: "江苏省",
          value: 2310
        },
        {
          name: "浙江省",
          value: 2900
        },
        {
          name: "江西省",
          value: 1880
        },
        {
          name: "湖北省",
          value: 1990
        },
        {
          name: "广西壮族自治区",
          value: 1630
        },
        {
          name: "甘肃省",
          value: 1900
        },
        {
          name: "山西省",
          value: 500
        },
        {
          name: "内蒙古自治区",
          value: 1778
        },
        {
          name: "陕西省",
          value: 1440
        },
        {
          name: "吉林省",
          value: 400
        },
        {
          name: "福建省",
          value: 3100
        },
        {
          name: "贵州省",
          value: 1900
        },
        {
          name: "广东省",
          value: 1300
        },
        {
          name: "青海省",
          value: 900
        },
        {
          name: "西藏自治区",
          value: 600
        },
        {
          name: "四川省",
          value: 890
        },
        {
          name: "宁夏回族自治区",
          value: 1400
        },
        {
          name: "海南省",
          value: 1999
        },
        {
          name: "台湾省",
          value: 1800
        },
        {
          name: "香港特别行政区",
          value: 1888
        },
        {
          name: "澳门特别行政区",
          value: 1555
        }
      ]
    };
  },
  created() {
    this.setEchartOption();
  },
  mounted() {
      this.$nextTick(()=>{
          this.initEchartMap();
      })
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
    //修改echart配制
    setEchartOption(){
       this.options.series[0].data = this.dataList;
    }
  }
 
};
</script>

<style scoped>
   #china_map{
        height: 100%;
    }
</style>
