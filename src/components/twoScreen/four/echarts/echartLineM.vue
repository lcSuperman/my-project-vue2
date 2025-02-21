<template>
    <div id="myEchart1_2"></div>
 </template>
<script>
import * as echarts from 'echarts';
export default {
    methods:{
        initEchart(echartData){
            var chartDom = document.getElementById('myEchart1_2');
            var myEchart1_2 = echarts.init(chartDom); 
            var option;
            option = {
                grid:{//设置图表距离容器位置配置
                  top:'20px',
                  bottom:'25px',
                  left:'50px',
                  right:'20px',
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: echartData.dataX,
                    boundaryGap:['2%', '2%'],
                    axisTick:{
                      show:false,
                    },
                    axisLabel: {  
                        textStyle: {
                         color: '#000',
                         fontSize:9,
                        },
                        formatter: function (params) {
                            var date = new Date()
                            const Y = date.getFullYear()
                            var temp
                            if(params == '1月'){
                              temp =Y + params;
                            }else{
                              temp = params
                            }
                            return temp
                        },
                    },
                },
                yAxis: {
                    type: 'value',
                    // lineStyle: {
                    //     color: '#FFF',
                    // },
                    axisLabel:{
                        textStyle: {
                          fontSize: 10,
                          color:'#000'
                        }
                    },
                    max:Math.ceil((echartData.maxData)/5)*5,
                    interval:Math.ceil((echartData.maxData)/5),
                    splitNumber:5,
                    splitLine :{ //网格线
                        lineStyle:{
                            type:'dashed' //设置网格线类型 dotted：虚线 solid:实线
                        },
                    },
                },
                series: [
                    {
                     data:echartData.dataY,
                     type: 'line',
                     areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(20, 196, 163, .8)' //半透明
                        }, {
                            offset: 1,
                            color: 'rgba(20, 196, 163, 0)' //完全透明
                        }])
                     },
                     itemStyle:{
                       normal:{
                         color:'rgba(20, 196, 163, .8)'
                       }
                     },
                     lineStyle:{
                        color:'rgba(20, 196, 163, .8)'
                     }
                    },
                    {
                     data:echartData.dataY2,
                     type: 'line',
                     areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(37, 114, 194, .8)' //半透明
                        }, {
                            offset: 1,
                            color: 'rgba(37, 114, 194, 0)' //完全透明
                        }])
                     },
                     itemStyle:{
                       normal:{
                         color:'rgba(37, 114, 194, .8)'
                       }
                     },
                     lineStyle:{
                        color:'rgba(37, 114, 194, .8)'
                     }
                    }
                ]
            };
            option && myEchart1_2.setOption(option);
            window.addEventListener("resize", () => {
                myEchart1_2.resize();
            })
        }
    }
}
</script>

<style lang='less' scoped>
#myEchart1_2{
    height:100%;;
    width: 100%;
}
</style>