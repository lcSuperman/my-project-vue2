<template>
   <div id="myEchartBig"></div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    mounted(){
      this.initEchart()
    },
    methods:{
        initEchart(){
            var chartDom = document.getElementById('myEchartBig');
            var myChartA= echarts.init(chartDom);
            var option;
            var dataX = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            option = {
                grid:{//设置图表距离容器位置配置
                  top:'20%',
                  bottom:'25%',
                  left:'8%',
                },
                legend:{//设置图例配置
                    bottom:'2%',
                    type: 'scroll',
                    pageIconSize:[10,10],
                    pageIconColor:'#cfd5db',
                    pageIconInactiveColor: '#444444',
                    pageTextStyle:{
                      color:'#cfd5db'
                    },
                    textStyle:{
                       color: "#cfd5db",
                       fontSize:11
                    },
                    data: [
                        {
                        name: '总资产',
                        icon: 'rect', // 用矩形替换
                        },
                        {
                        name: '总合同',
                        icon: 'rect',
                        },
          
                        {
                        name: '当月到期合同',
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
                    axisPointer: {
                        type: 'cross',
                        animation: false,
                        label: {
                            backgroundColor: '#505765'
                        }
                    },
                    formatter:function (params) {
                        return `
                          <div>
                            <div>${params[0].marker}${params[0].seriesName}：${params[1].value}个/${params[0].value}亿元</div>
                            <div style="padding:5px 0;">${params[2].marker}${params[2].seriesName}：${params[3].value}个/${params[2].value}亿元</div>
                            <div>${params[4].marker}${params[4].seriesName}：${params[5].value}个/${params[4].value}亿元</div>
                          </div>
                        `
                        
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap:true,
                    axisTick: {
                        show: false,    // 是否显示坐标轴刻度
                    },
                    axisLabel: {  
                        textStyle: {
                         color: '#fff',
                         fontSize:9,
                        }
                    },
                    data:dataX,
                   
                },
                yAxis: [
                    {
                      name:'数量：个',
                      nameTextStyle:{
                         fontSize:10,
                         color:'#cfd5db' 
                      },
                      type: 'value',
                      position: 'left',
                      alignTicks: true,
                      axisLine: {
                        show: true,
                        lineStyle: {
                         color: '#FFF',
                        },
                      },
                      axisLabel:{
                         textStyle: {
                           fontSize: 10,
                           color:'#cfd5db'
                         }

                      }
                    },
                    {
                      name:'金额：千万元',
                      nameTextStyle:{
                         fontSize:10,
                         color:'#cfd5db' 
                      },
                      type: 'value',
                      position: 'right',
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

                      }
                    },
                ],
                series: [
                    {
                        name: '总资产',
                        data: [12, 23, 34, 45, 56, 67, 77,89, 99, 123, 134, 156],
                        type: 'line',
                        yAxisIndex:'0',
                        symbol: "none",
                        lineStyle: {
                            color: "#5092e2"
                        },
                        tooltip:{
                           valueFormatter:function(value){
                            return value + '个'
                           }
                        }
                    },
                    {
                        name: '总资产',
                        data: [230, 330, 340, 450, 560, 670, 770,800, 900, 800, 600, 789],
                        type: 'bar',
                        barGap:0,
                        barWidth : 10,//柱图宽度
                        stack: 'two',
                        yAxisIndex:'1',
                        symbol: "none",
                        tooltip:{
                           valueFormatter:function(value){
                            return value + '千万元'
                           }
                        }
                        
                    },
                  
                    {
                        name: '总合同',
                        data: [24, 57, 78, 35, 56, 78, 89,67, 76, 88, 99, 78],
                        type: 'line',
                        symbol: "none",
                        tooltip:{
                           valueFormatter:function(value){
                            return value + '个'
                           }
                        }
                        
                    },
                     {
                        name: '总合同',
                        data: [115, 210, 124, 118, 155, 247, 280,150, 230, 224, 218, 135],
                        type: 'bar',
                        barGap:0,
                        barWidth : 10,//柱图宽度
                        stack: 'two',
                        yAxisIndex:'1',
                        symbol: "none",
                        tooltip:{
                           valueFormatter:function(value){
                            return value + '千万元'
                           }
                        }
                        
                    },
                     {
                        name: '当月到期合同',
                        data: [100, 200, 124, 168, 135, 147, 180,150, 230, 124, 118, 195],
                        type: 'line',
                        symbol: "none",
                        tooltip:{
                           valueFormatter:function(value){
                            return value + '个'
                           }
                        }
                        
                    },
                    {
                        name: '当月到期合同',
                        data: [100, 200, 124, 168, 135, 147, 180,150, 230, 124, 118, 195],
                        type: 'bar',
                        barGap:0,
                        barWidth : 10,//柱图宽度
                        stack: 'two',
                        yAxisIndex:'1',
                        symbol: "none",
                        tooltip:{
                           valueFormatter:function(value){
                            return value + '千万元'
                           }
                        }
                        
                    },
                    
                    
                ]
            };

            option && myChartA.setOption(option);
             window.addEventListener("resize", () => {
                myChartA.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchartBig{
    height:calc(100% - 20px);;
    width: 100%;
}
</style>