<template>
   <div id="henan_map"></div>
</template>

<script>
import * as echarts from 'echarts';
import henan from'../../utils/henan.json'
echarts.registerMap('henan', henan)

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
            color:'#000000',
            fontSize:13
          },
          formatter:`{b}:<br />确诊病例： {c}`
        },
        visualMap: {
          show:true,
          left: 20,
          bottom: 40,
          showLabel:true,
          pieces: [
            {
              gte: 100,
              label: "高风险区（>=100）",
              color: "#6f83db"
            },
            {
              gte: 50,
              lt: 100,
              label: "中风险区（50-100）",
              color: "#9face7"
            },
            {
              gte: 0,
              lt:50,
              label: "低风险区（0-50）",
              color: "#bcc5ee"
            }
          ]
        },
        geo: {
          map: "henan",
          scaleLimit: {
            min: 1,
            max: 2
          },
          zoom: 1.1,
          top:45,
          label: {
            normal: {
              show:true,
              fontSize: "12",
              color: "rgba(0,0,0,0.7)"
            }
          },
          itemStyle: {
            normal: {
              shadowBlur: 20,
              shadowColor: 'rgba(0, 0, 0, 0.3)',
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
            name: "突发事件",
            type: "map",
            geoIndex: 0,
            data:[]
          }
        ]
      },
      //echart data
      dataList: [
        {
          name: "郑州市",
          value: 100,
          eventTotal:100,
          specialImportant:10,
          import:10,
          compare:10,
          common:40,
          specail:20
        },
        {
          name: "新乡市",
          value: 67
        },
        {
          name: "安阳市",
          value: 130
        },
        {
          name: "濮阳市",
          value: 400
        },
        {
          name: "驻马店市",
          value: 50
        },
        {
          name: "鹤壁市",
          value: 130
        },
        {
          name: "焦作市",
          value: 8
        },
        {
          name: "济源市",
          value: 110
        },
        {
          name: "三门峡市",
          value: 19
        },
        {
          name: "漯河市",
          value: 150
        },
        {
          name: "周口市",
          value: 120
        },
        {
          name: "南阳市",
          value: 60
        },
        {
          name: "平顶山市",
          value: 39
        },
        {
          name: "信阳市",
          value: 4
        },
        {
          name: "商丘市",
          value: 31
        },
        {
          name: "开封市",
          value: 55
        },
        {
          name: "许昌市",
          value: 36
        },
        {
          name: "洛阳市",
          value: 36
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
    //初始化河南省地图
    initEchartMap() {
      let mapDiv = document.getElementById('henan_map');
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
   #henan_map{
        height: 100%;
    }
</style>

