<template>
    <div id="myEchart1_5"></div>
 </template>

<script>
import * as echarts from 'echarts';
export default {
    methods:{
        initEchart(echartData){
            var chartDom = document.getElementById('myEchart1_5');
            var myEchart1_5 = echarts.init(chartDom);
            var option;
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    type: 'shadow'
                    }
                },
                grid:{//设置图表距离容器位置配置
                  top:'40px',
                  bottom:'25px',
                  left:'60px',
                  right:'20px',
                },
                xAxis: [
                    {
                        type: 'category',
                        data: echartData.dataX,
                        axisTick: {
                            show:false,
                        },
                        axisLabel:{
                            interval:0,
                        }
                    }
                ],
                yAxis:{
                     name:'金额(万元)',
                     nameTextStyle:{
                        fontSize:10,
                        align:'right',
                     },
                    nameGap:15,
                     type: 'value',
                     max:Math.ceil((echartData.maxData)/5)*5,
                     interval:Math.ceil((echartData.maxData)/5),
                     splitNumber:5,
                },
                
                series: [
                    {
                        type: 'bar',
                        barWidth: '15px',
                        data:echartData.dataY ,
                        itemStyle:{
                            color:'#2db7f5'
                        },
                        label: {
                            show: true, // 开启显示
                            position: 'top', // 位置设为上方
                            formatter: '{c}' // 数据值格式化，{c} 表示数据值
                        }
                    }
                ]
            };
            option && myEchart1_5.setOption(option);
            window.addEventListener("resize", () => {
                myEchart1_5.resize();
            })
        }
    }
}
</script>

<style lang='less' scoped>
#myEchart1_5{
    height:100%;;
    width: 100%;
}
</style>
