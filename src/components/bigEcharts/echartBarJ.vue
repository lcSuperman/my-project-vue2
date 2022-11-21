<template>
   <div  id="myEchartJ"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
   
    mounted(){
      this.initEchart()
    },
    methods:{
        initEchart(){
            var chartDom = document.getElementById('myEchartJ');
            var myChartJ = echarts.init(chartDom);
            var option;
         
            let xAxisData = ['汽车租赁','工程机械','船舶','户用光伏','产品集群','网约车','办公设备','风车吊装','冷库'];
            let data1 = [40,60,56,40,22,50,60,81,47];
            let data2 = [50,70,66,60,32,50,80,101,77];
            let data3 = [100,23,34,45,56,67,43,121,87];
            let data4 = [30,40,56,20,12,57,50,41,87];
           
            var emphasisStyle = {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(255,255,255,0.6)'
                }
            };
            option = {
                legend: {
                    data: [
                        {
                        name: '融资性',
                        icon: 'rect',
                        },
                        {
                        name: '经营性',
                        icon: 'rect', // 用矩形替换
                        },
                    ],
                    itemWidth: 12, //矩形宽度
                    itemHeight: 4, //矩形高度
                    textStyle:{
                        color:'#cecece'
                    },
                    right:'0%',
                },
                tooltip: {
                    trigger: 'axis',
                    backgroundColor:'rgba(0,0,0,0.3)',
                    textStyle:{
                        color:'#cecece',
                        fontSize:10
                    },
                    axisPointer: {
                        type: 'cross',
                        animation: false,
                        label: {
                            backgroundColor: '#505765'
                        }
                    },
                },
                xAxis: {
                    data: xAxisData,
                    axisLine: { 
                        onZero: true,
                        lineStyle: {
                         color: '#cecece',
                        },
                    },
                    splitLine: { show: false },
                    splitArea: { show: false }
                },
                yAxis:[
                    {
                    type: 'value',
                    position: 'left',
                    alignTicks: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                        color: '#cecece',
                        },
                    },
                    
                   },
                    {
                      type: 'value',
                      position: 'right',
                      alignTicks: true,
                      axisLine: {
                        show: true,
                        lineStyle: {
                         color: '#cecece',
                        },     
                      },
                      axisLabel:{
                         textStyle: {
                           fontSize: 10,
                           color:'#cfd5db'
                         }

                      }
                    },

                ], 
                grid: {
                    top:'20%',
                    right:'10%',
                    bottom: '15%',
                    left:'10%'
                },
                series: [
                    {
                    name: '融资性',
                    type: 'bar',
                    emphasis: emphasisStyle,
                    data: data3,
                    barGap:0,
                    barWidth : 10,//柱图宽度
                    itemStyle: {
                        normal: {
                           color: new echarts.graphic.LinearGradient(0,0,0,1,
                                [  
                                    {
                                    offset: 0,
                                    color: '#23befe', //指0%处的颜色
                                    },
                                    {
                                    offset: 1,
                                    color: '#1052c2', //指100%处的颜色
                                    },
                                ],
                                false
                                ),
                           barBorderRadius: [10, 10, 0, 0],
                         }
                     }

                    },
                    {
                        name: '融资性',
                        type: 'line',
                        emphasis: emphasisStyle,
                        yAxisIndex:'1',
                        data: data2,
                        itemStyle: {
                            normal: {
                            color: '#1052c2', 
                            }
                        }
                    },
                    {
                    name: '经营性',
                    type: 'bar',
                    barGap:0,
                    barWidth : 10,//柱图宽度
                    emphasis: emphasisStyle,
                    data: data4,
                    itemStyle: {
                        normal: {
                           color: new echarts.graphic.LinearGradient(0,0,0,1,
                                [  
                                    {
                                    offset: 0,
                                    color: '#ffff0b', //指0%处的颜色
                                    },
                                    {
                                    offset: 1,
                                    color: '#996908', //指100%处的颜色
                                    },
                                ],
                                false
                                ),
                           barBorderRadius: [10, 10, 0, 0],
                         }
                     }
                    },
                     {
                    name: '经营性',
                    type: 'line',
                    emphasis: emphasisStyle,
                    yAxisIndex:'1',
                    data: data1,
                    itemStyle: {
                        normal: {
                           color: '#ffff0b', 
                         }
                     }
                    },
                    
                ]
            };
            option && myChartJ.setOption(option);
            window.addEventListener("resize", () => {
                myChartJ.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchartJ{
    height:100%;
    width: 100%;
}
</style>