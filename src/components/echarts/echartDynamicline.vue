<template>
   <div id="main"></div>
</template>
<script>
import * as echarts from 'echarts/core';
import {
  DatasetComponent,
  GraphicComponent,
  GridComponent
} from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

import {getEchartData,getEchartData1} from '@/api'

echarts.use([
  DatasetComponent,
  GraphicComponent,
  GridComponent,
  BarChart,
  CanvasRenderer
]);
export default {
    data(){
        return{
           flags:[],
           data:[]
        }
    },
    mounted(){
      this.initEchart()
    },
    methods:{
        initEchart(){
            var chartDom = document.getElementById('main');
            var myChart = echarts.init(chartDom);
            var option;
            const updateFrequency = 2000;
            const dimension = 0;
            
            const countryColors = {
                Australia: '#00008b',
                Canada: '#f00',
                China: '#ffde00',
                Cuba: '#002a8f',
                Finland: '#003580',
                France: '#ed2939',
                Germany: '#000',
                Iceland: '#003897',
                India: '#f93',
                Japan: '#bc002d',
                'North Korea': '#024fa2',
                'South Korea': '#000',
                'New Zealand': '#00247d',
                Norway: '#ef2b2d',
                Poland: '#dc143c',
                Russia: '#d52b1e',
                Turkey: '#e30a17',
                'United Kingdom': '#00247d',
                'United States': '#b22234'
            };
            getEchartData().then( res => {
                var result= res.data
                this.flags =  result
                return getEchartData1()
            }).then( res => {
                var result1= res.data
                this.data =  result1
            }).then(() => {
                const flags = this.flags;
                const data = this.data;
                const years = [];
                for (let i = 0; i < data.length; ++i) {
                    if (years.length === 0 || years[years.length - 1] !== data[i][4]) {
                    years.push(data[i][4]);
                    }
                }
                function getFlag(countryName) {
                    if (!countryName) {
                    return '';
                    }
                    return (
                    flags.find(function (item) {
                        return item.name === countryName;
                    }) || {}
                    ).emoji;
                 }

                let startIndex = 10;
                let startYear = years[startIndex];
                
                option = {
                    grid: {
                        top: 10,
                        bottom: 30,
                        left: 150,
                        right: 80
                    },
                    xAxis: {
                    max: 'dataMax',
                    axisLabel: {
                        formatter: function (n) {
                        return Math.round(n) + '';
                        }
                    }
                    },
                    dataset: {
                    source: data.slice(1).filter(function (d) {
                        return d[4] === startYear;
                    })
                    },
                    yAxis: {
                    type: 'category',
                    inverse: true,
                    max: 10,
                    axisLabel: {
                        show: true,
                        fontSize: 14,
                        formatter: function (value) {
                        return value;
                        },
                        rich: {
                        flag: {
                            fontSize: 25,
                            padding: 5
                        }
                        }
                    },
                    animationDuration: 300,
                    animationDurationUpdate: 300
                   },
                     series: [
                    {
                        realtimeSort: true,
                        seriesLayoutBy: 'column',
                        type: 'bar',
                        itemStyle: {
                        color: function (param) {
                            return countryColors[param.value[3]] || '#5470c6';
                        }
                        },
                        encode: {
                        x: dimension,
                        y: 3
                        },
                        label: {
                            show: true,
                            precision: 1,
                            position: 'right',
                            valueAnimation: true,
                            fontFamily: 'monospace'
                        },
                    }
                     ],
                    animationDuration: 0,
                    animationDurationUpdate: updateFrequency,
                    animationEasing: 'linear',
                    animationEasingUpdate: 'linear',
                    graphic: {
                    elements: [
                        {
                        type: 'text',
                        right: 160,
                        bottom: 60,
                        style: {
                            text: startYear,
                            font: 'bolder 80px monospace',
                            fill: 'rgba(100, 100, 100, 0.25)'
                        },
                        z: 100
                        }
                    ]
                    }
                };

                myChart.setOption(option);

                for (let i = startIndex; i < years.length - 1; ++i) {
                    (function (i) {
                    setTimeout(function () {
                        updateYear(years[i + 1]);
                    }, (i - startIndex) * updateFrequency);
                    })(i);
                }
                function updateYear(year) {
                    let source = data.slice(1).filter(function (d) {
                    return d[4] === year;
                    });
                    option.series[0].data = source;
                    option.graphic.elements[0].style.text = year;
                    myChart.setOption(option);
                }  

                option && myChart.setOption(option);
                //随着屏幕大小调节图表
                window.addEventListener("resize", () => {
                    myChart.resize();
                });

            })

           
        }

    }
}
</script>
<style lang='less' scoped>
#main{
    width: 100%;
    height: 100%;
}
</style>