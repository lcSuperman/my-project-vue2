<template>
   <div  id="myEchartY"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
   
    mounted(){
      this.initEchart()
    },
    methods:{
        initEchart(){
            var chartDom = document.getElementById('myEchartY');
            var myChartY = echarts.init(chartDom);
            var option;
         
            let xAxisData = ['广商租赁','普通融资租赁','汽车租赁','产品集群','工程机械','户用光伏','船舶','办公设备','网约车','风车吊装'];
            let data3 = [0,23,34,45,56,67,43,0,87,50];
            var emphasisStyle = {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(255,255,255,0.5)'
                }
            };
            option = {
                legend: {
                    show:false,
                    data: [
                        {
                        name: '预警',
                        icon: 'rect',
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
                    backgroundColor:'rgba(0,0,0,0.6)',
                    borderWidth:0,
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
                    axisLabel: {  
                        interval:0,
                        rotate:30 , //倾斜的程度
                        textStyle: {
                         color: '#cecece',
                         fontSize:10,
                        }
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
                    splitLine :{ //网格线
                       lineStyle:{
                         type:'dashed' //设置网格线类型 dotted：虚线 solid:实线
                        },
                      },
                    
                },
                grid: {
                    top:'15%',
                    right:'0%',
                    bottom: '24%',
                    left:'10%'
                },
                series: [
                    {
                    name: '预警',
                    type: "pictorialBar",
                    emphasis: emphasisStyle,
                    data: data3,
                    barWidth : 20,//柱图宽度
                    symbol:"path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
                    itemStyle: {
                        normal: {
                           color:function(params) { 
                                var colorList = ['#0066CC','#00CCFF','#FF9900','#990000' ]; 
                                return    new echarts.graphic.LinearGradient(0,0,0,1,
                                    [  
                                        {
                                        offset: 0,
                                        color: params.value > 50 ? '#00CCFF' : '#FF9900'
                                        },
                                        {
                                        offset: 1,
                                        color: params.value > 50 ? '#0066CC' : '#990000'
                                        },
                                    ],
                                    false
                                    )
                            }

                         }
                     }

                    },
                ]
            };
            option && myChartY.setOption(option);
            window.addEventListener("resize", () => {
                myChartY.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchartY{
    height:100%;
    width: 100%;
}
</style>