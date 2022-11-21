<template>
   <div  id="myEchartO"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
   
    mounted(){
      this.initEchart()
    },
    methods:{
        initEchart(){
            var chartDom = document.getElementById('myEchartO');
            var myChartO = echarts.init(chartDom);
            var option;
         
            let xAxisData = ['汽车租赁','工程机械','船舶','户用光伏','产品集群','网约车','办公设备','风车吊装','冷库'];
            let data3 = [100,23,34,45,56,67,43,121,87];
            let data4 = [30,40,56,20,12,57,50,41,87];
            var emphasisStyle = {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(255,255,255,0.5)'
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
                yAxis: {
                    alignTicks: true,
                    axisLine: {
                        show: true,
                        lineStyle: {
                        color: '#cecece',
                        },
                    },
                    
                },
                grid: {
                    top:'20%',
                    right:'0%',
                    bottom: '15%',
                    left:'10%'
                },
                series: [
                    {
                    name: '融资性',
                    type: 'bar',
                    stack: 'two',
                    emphasis: emphasisStyle,
                    data: data3,
                    barWidth : 20,//柱图宽度
                    itemStyle: {
                        normal: {
                           color: '#5092e2'
                         }
                     }

                    },
                    {
                    name: '经营性',
                    type: 'bar',
                    stack: 'two',
                    barWidth : 20,//柱图宽度
                    emphasis: emphasisStyle,
                    data: data4,
                    itemStyle: {
                        normal: {
                           color: '#fcc30a'
                         }
                     }
                    }
                ]
            };
            option && myChartO.setOption(option);
            window.addEventListener("resize", () => {
                myChartO.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchartO{
    height:100%;
    width: 100%;
}
</style>