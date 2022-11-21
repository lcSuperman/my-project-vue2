<template>
   <div class="myEchartG" :id="echartId"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    props:{
      echartId:{
         type: String,
         required: true
      },
      echartData:{
         type: Array,
         required: true
      }
    },
    mounted(){
      this.initEchart()
    },
    methods:{
        initEchart(){
            var chartDom = document.getElementById(this.echartId);
            var myChartG = echarts.init(chartDom);
            var option;
            var data = this.echartData
            var barWidth = 12;
            var maxNum = 0;
            for (var i = 0; i < data.length; i++) {
                if (data[i].total > maxNum) {
                    maxNum = data[i].total;
                }
            }
            option = {
                grid: {
                    top: '10%',
                    left: '35%',
                    right: '25%',
                    bottom: '10%',
                },
                xAxis: {
                    show: false,
                },
                yAxis: {
                    data: data.map((item, index) => `${item.title}`),
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: { fontSize: 10, color: '#cfd5db' },
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: false,
                },
                series: [
                    {
                        type: 'bar',
                        barWidth: barWidth,
                        zlevel: 2,
                        data: data.map(function (item) {
                             var percent = Number((item.count / item.total));
                             var virtualValue = Number((maxNum * percent)).toFixed(0);
                            return {
                                value: virtualValue,
                                maxNum: maxNum,
                            };
                        }),
                        label: {
                            show: true,
                            position: 'inside',
                            // distance: 80,
                            align: 'center',
                            formatter: function (params) {
                                // return params.data.realValue;
                                var percent = Number((params.data.value / params.data.maxNum) * 100).toFixed(0) + '%';
                                return percent;
                            },
                            color: '#cfd5db',
                            fontSize: 8,
                        },
                        itemStyle: {
                            borderRadius: 10,
                            color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [
                                { offset: 0, color: '#051e46' },
                                { offset: 1, color: '#23b9f8' },
                            ]),
                        },
                    },
                    {
                        type: 'bar',
                        barWidth: barWidth,
                        barGap: '-100%',
                        data: data.map(function (item) {
                            return {
                                realValue: item.count,
                                value: maxNum,
                            };
                        }),
                        label: {
                            show: true,
                            position: 'right',
                            distance: 40,
                            align: 'right',
                            formatter: function (params) {
                                return params.data.realValue;
                            },
                            color: '#cfd5db',
                            fontSize: 12,
                        },
                        itemStyle: {
                            borderRadius: 10,
                            color: 'rgba(7,32,135, 1)',
                        },
                    },
                ],
            };
          

            option && myChartG.setOption(option);
            window.addEventListener("resize", () => {
                myChartG.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
.myEchartG{
    height:100%;
    width: 100%;
}
</style>