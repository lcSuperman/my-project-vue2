<template>
   <div id="GaugeChart"></div>
</template>
<script>
import * as echarts from 'echarts/core';
import { GaugeChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GaugeChart, CanvasRenderer]);
export default {
    mounted(){
       this.initEchart()
    },
    methods:{
       initEchart(){
            var chartDom = document.getElementById('GaugeChart');
            var myChart = echarts.init(chartDom);
            var option;
            option = {
                series: [
                    {
                    type: 'gauge',
                    center:['50%','55%'],
                    radius:'100%',//仪表盘半径
                    axisLine: {
                        lineStyle: {
                        width: 20,
                        color: [
                            [0.3, '#67e0e3'],
                            [0.7, '#37a2da'],
                            [1, '#fd666d']
                        ]
                        }
                    },
                    pointer: {
                        itemStyle: {
                        color: 'auto'
                        }
                    },
                    axisTick: {
                        distance: -30,
                        length: 8,
                        lineStyle: {
                        color: '#fff',
                        width: 2
                        }
                    },
                    splitLine: {
                        distance: -30,
                        length: 30,
                        lineStyle: {
                        color: '#fff',
                        width: 4
                        }
                    },
                    axisLabel: {
                        color: 'auto',
                        distance: 40,
                        fontSize: 18
                    },
                    detail: {
                        valueAnimation: true,
                        formatter: '{value} km/h',
                        color: 'auto',
                        fontSize:20,
                    },
                    data: [
                        {
                        value: 70
                        }
                    ]
                    }
                ]
                };
              this.timer = setInterval(function () {
                 myChart.setOption({
                    series: [
                    {
                        data: [
                        {
                            value: +(Math.random() * 100).toFixed(2)
                        }
                        ]
                    }
                    ]
                 });
                }, 2000);

        option && myChart.setOption(option);
           //随着屏幕大小调节图表
        window.addEventListener("resize", () => {
            myChart.resize();
        });
       }
    },
    beforeDestroy(){
       clearInterval(this.timer)
    }
}
</script>
<style lang='less' scoped>
#GaugeChart{
    height: 100%;
    width: 100%;
}
</style>