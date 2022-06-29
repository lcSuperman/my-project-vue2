<template>
  <div id="myEchart1"></div>
</template>
<script>
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TooltipComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  MarkPointComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);


export default {
    mounted(){
       this.initEchart()
    },
    methods:{
        initEchart(){
            // 基于准备好的dom，初始化echarts实例
            var myChartDom = document.getElementById('myEchart1')
            var myChart = echarts.init(myChartDom);
            var option = {
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        top: '4%', 
                    },
                    grid:{
                       bottom:'15%'
                    },

                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel: {
                        formatter: '{value} °C'
                        }
                    },
                    series: [
                        {
                        name: 'Highest',
                        type: 'line',
                        data: [10, 11, 13, 11, 12, 12, 9],
                        markPoint: {
                            data: [
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                            ]
                        },
                        markLine: {
                            data: [{ type: 'average', name: 'Avg' }]
                        }
                        },
                        {
                        name: 'Lowest',
                        type: 'line',
                        data: [1, -2, 2, 5, 3, 2, 0],
                        markPoint: {
                            data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
                        },
                        markLine: {
                            data: [
                            { type: 'average', name: 'Avg' },
                            [
                                {
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                                },
                                {
                                symbol: 'circle',
                                label: {
                                    position: 'start',
                                    formatter: 'Max'
                                },
                                type: 'max',
                                name: '最高点'
                                }
                            ]
                            ]
                        }
                        }
                    ]
             };

            option && myChart.setOption(option)
            //随着屏幕大小调节图表
            window.addEventListener("resize", () => {
                myChart.resize();
            });

            //echart图表随容器大小变化而调节大小
            // let ro = new ResizeObserver(() => {
            //     myChart.resize();
            // });
            // ro.observe(myChartDom);

        }
    }
}
</script>
<style lang='less' scoped>
#myEchart1{
    height: 100%;
    width: 100%;
}
</style>