<template>
  <div id="myEchart"></div>
</template>
<script>
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, BarChart, CanvasRenderer]);

export default {
    mounted(){
       this.initEchart()
    },
    methods:{
        initEchart(){
            // 基于准备好的dom，初始化echarts实例
            var myChartDom = document.getElementById('myEchart')
            var myChart = echarts.init(myChartDom);
            var option = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                        data: [
                            120,
                            {
                            value: 200,
                            itemStyle: {
                                color: '#a90000'
                            }
                            },
                            150,80,70,110,130
                        ],
                        type: 'bar',
                        label:{
                            show:true,
                            position: 'top'
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
#myEchart{
    height: 100%;
    width: 100%;
}
</style>