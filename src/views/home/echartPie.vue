<template>
  <div id="myEchart1"></div>
</template>
<script>
import * as echarts from 'echarts/core';
import { ToolboxComponent, LegendComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  ToolboxComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);

export default {
    mounted(){
       this.initEchart()
    },
    methods:{
        initEchart(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('myEchart1'));
            var option = {
                tooltip: {
                  trigger: 'item'
                },
                legend: {
                    bottom: '10%',
                   
                },
                series: [
                    {
                        name: 'Nightingale Chart',
                        type: 'pie',
                        radius: [40, 150],
                        center: ['50%', '45%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 8
                        },
                        data: [
                            { value: 40, name: 'rose 1'},
                            { value: 38, name: 'rose 2' },
                            { value: 32, name: 'rose 3' },
                            { value: 30, name: 'rose 4' },
                            { value: 28, name: 'rose 5' },
                            { value: 26, name: 'rose 6' },
                            { value: 22, name: 'rose 7' },
                            { value: 18, name: 'rose 8' }
                        ],
                        label:{
                           show:true,
                        }
                    }
                ]
            };

            option && myChart.setOption(option)
            //随着屏幕大小调节图表
            window.addEventListener("resize", () => {
                myChart.resize();
            });

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