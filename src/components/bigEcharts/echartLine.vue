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
                        name: '即将到期合同',
                        icon: 'rect',
                        },
          
                    ],
                    itemWidth: 12, //矩形宽度
                    itemHeight: 4, //矩形高度

                },
                tooltip: {
                    trigger: 'axis',
                    backgroundColor:'rgba(0,0,0,0.3)',
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
                },
                xAxis: {
                    type: 'category',
                    boundaryGap:false,
                    axisTick: {
                        show: false,    // 是否显示坐标轴刻度
                    },
                    data:[
                      {
                        value:'1月',
                        textStyle: {
                            fontSize: 9,
                            color: '#FFF'
                        }
                      },
                      {
                        value:'2月',
                        textStyle: {
                            fontSize: 9,
                            color: '#FFF'
                        }
                      },
                      {
                        value:'3月',
                        textStyle: {
                            fontSize: 9,
                            color: '#FFF'
                        }
                      },
                      {
                        value:'4月',
                        textStyle: {
                            fontSize: 9,
                            color: '#FFF'
                        }
                      },
                      {
                        value:'5月',
                        textStyle: {
                            fontSize: 9,
                            color: '#FFF'
                        }
                      },
                      {
                        value:'6月',
                        textStyle: {
                            fontSize: 9,
                            color: '#FFF'
                        }
                      },
                      {
                        value:'7月',
                        textStyle: {
                            fontSize: 9,
                            color: '#FFF'
                        }
                      },
                      {
                        value:'8月',
                        textStyle: {
                            fontSize: 9,
                            color: '#FFF'
                        }
                      },
                      {
                        value:'9月',
                        textStyle: {
                            fontSize: 9,
                            color: '#FFF'
                        }
                      },
                      {
                        value:'10月',
                        textStyle: {
                            fontSize: 9,
                            color: '#FFF'
                        }
                      },
                      {
                        value:'11月',
                        textStyle: {
                            fontSize: 9,
                            color: '#FFF'
                        }
                      },
                      {
                        value:'12月',
                        textStyle: {
                            fontSize: 9,
                            color: '#FFF'
                        }
                      }
                    ]
                   
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
                        type: 'line',
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
                        type: 'line',
                        yAxisIndex:'1',
                        symbol: "none",
                        tooltip:{
                           valueFormatter:function(value){
                            return value + '千万元'
                           }
                        }
                        
                    },
                     {
                        name: '即将到期合同',
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
                        name: '即将到期合同',
                        data: [100, 200, 124, 168, 135, 147, 180,150, 230, 124, 118, 195],
                        type: 'line',
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