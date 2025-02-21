<template>
   <div id="myEchart1_1"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    methods:{
        initEchart(echartData){
            var chartDom = document.getElementById('myEchart1_1');
            var myEchart1_1 = echarts.init(chartDom);
            var option;
        
            option = {
                grid:{//设置图表距离容器位置配置
                  top:'50px',
                  bottom:'20px',
                  left:'50px',
                  right:'20px'
                },
                legend:{//设置图例配置
                    top:'10px',
                    right:'10px',
                    pageIconSize:[10,10],
                    pageIconColor:'#cfd5db',
                    pageIconInactiveColor: '#444444',
                    pageTextStyle:{
                      color:'#cfd5db'
                    },
                    textStyle:{
                       color: "#000",
                       fontSize:10
                    },
                    data: [
                        {
                        name: '小于90天',
                        icon: 'rect', // 用矩形替换
                        },
                        {
                        name: '大于等于90天',
                        icon: 'rect',
                        },
                    ],
                    itemWidth: 12, //矩形宽度
                    itemHeight: 4, //矩形高度

                },
                tooltip: {
                    trigger: 'axis',
                    backgroundColor:'rgba(0,0,0,0.6)',
                    borderWidth:0,
                    textStyle:{
                      color:'#fff',
                      fontSize:10
                    },
                    
                    valueFormatter:function(value){
                        return value + '万元'
                    },

                    
                    axisPointer: {
                        type: 'cross',
                        animation: false,
                        label: {
                            backgroundColor: '#505765'
                        }
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap:true,
                    axisTick: {
                        show: false,    // 是否显示坐标轴刻度
                    },
                    data:echartData.dataX,
                    axisLabel: {  
                        textStyle: {
                         color: '#000',
                         fontSize:9,
                        },
                    },
                   
                },
                yAxis:{
                    name:'金额（万元）',
                    nameTextStyle:{
                        fontSize:10,
                        color:'#000' 
                    },
                    type: 'value',
                    position: 'left',
                    alignTicks: true,
                    axisLine: {
                    show: false,
                    // lineStyle: {
                    //     color: '#000',
                    // },
                    },
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
                        name: '小于90天',
                        type: 'bar',
                        barGap:0,
                        barWidth : 15,//柱图宽度
                        stack: 'two',
                        data: echartData.data2,
                        itemStyle:{
                            color:'#67d987'
                        }
                        
                    },
                    {
                        name: '大于等于90天',
                        type: 'bar',
                        barGap:0,
                        barWidth : 15,//柱图宽度
                        stack: 'two',
                        data: echartData.data4,
                        symbol: "none",
                        itemStyle:{
                            color:'red'
                        }
                        
                    },
                    
                ]
            };

            option && myEchart1_1.setOption(option);
            window.addEventListener("resize", () => {
                myEchart1_1.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchart1_1{
    height:100%;;
    width: 100%;
}
</style>