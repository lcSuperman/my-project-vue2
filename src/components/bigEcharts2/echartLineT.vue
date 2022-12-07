<template>
   <div id="myEchart13"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    methods:{
        initEchart(echartData){
            var chartDom = document.getElementById('myEchart13');
            var myChart13 = echarts.init(chartDom);
            var option;
        
            option = {
                grid:{//设置图表距离容器位置配置
                  top:'10%',
                  bottom:'26%',
                  left:'10%',
                  right:'1%'
                },
                legend:{//设置图例配置
                    bottom:0,
                    type: 'scroll',
                    pageIconSize:[10,10],
                    pageIconColor:'#cfd5db',
                    pageIconInactiveColor: '#444444',
                    pageTextStyle:{
                      color:'#cfd5db'
                    },
                    textStyle:{
                       color: "#cfd5db",
                       fontSize:10
                    },
                    data: [
                        {
                        name: '应收租金',
                        icon: 'rect', // 用矩形替换
                        },
                        {
                        name: '实收租金',
                        icon: 'rect',
                        },
                        {
                        name: '未来应收租金',
                        icon: 'rect',
                        },
                         {
                        name: '逾期租金',
                        icon: 'rect', // 用矩形替换
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
                         color: '#cfd5db',
                         fontSize:9,
                        },
                        formatter: function (params) {
                            var date = new Date()
                            const Y = date.getFullYear()
                            var temp
                            if(params == '1月'){
                              temp = params + "\n" + Y;
                            }else{
                              temp = params
                            }
                            return temp
                        },
                    },
                   
                },
                yAxis: [
                    {
                      nameTextStyle:{
                         fontSize:10,
                         color:'#cfd5db' 
                      },
                      type: 'value',
                      position: 'left',
                      alignTicks: true,
                      axisLine: {
                        show: false,
                        lineStyle: {
                         color: '#FFF',
                        },
                      },
                      axisLabel:{
                         textStyle: {
                           fontSize: 10,
                           color:'#cfd5db'
                         }

                      },
                      splitLine :{ //网格线
                       lineStyle:{
                         type:'dashed' //设置网格线类型 dotted：虚线 solid:实线
                        },
                      },
                    }
                ],
                series: [
                    {
                        name: '应收租金',
                        type: 'bar',
                        barGap:0,
                        barWidth : 8,//柱图宽度
                        stack: 'one',
                        data:echartData.data1,
                        symbol: "none",
                        lineStyle: {
                            color: "#5092e2"
                        },
                       
                    },
                    {
                        name: '实收租金',
                        type: 'bar',
                        barGap:0,
                        barWidth : 8,//柱图宽度
                        stack: 'two',
                        data: echartData.data2,
                        symbol: "none",
                      
                        
                    },
                  
                    {
                        name: '未来应收租金',
                        data: echartData.data3,
                        type: 'line',
                        symbol: "none",
                        
                        
                    },
                     {
                        name: '逾期租金',
                        type: 'bar',
                        barGap:0,
                        barWidth : 8,//柱图宽度
                        stack: 'two',
                        data: echartData.data4,
                        symbol: "none",
                       
                        
                    },
                    
                    
                ]
            };

            option && myChart13.setOption(option);
            window.addEventListener("resize", () => {
                myChart13.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchart13{
    height:100%;;
    width: 100%;
}
</style>