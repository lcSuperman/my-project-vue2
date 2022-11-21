<template>
   <div id="myEchartBigB"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    mounted(){
      this.initEchart()
    },
    methods:{
        initEchart(){
            var chartDom = document.getElementById('myEchartBigB');
            var myChartB = echarts.init(chartDom);
            var option;

            option = {
                grid:{//设置图表距离容器位置配置
                  top:'10%',
                  bottom:'25%',
                  left:'10%',
                  right:10
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
                        name: '剩余租金',
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
                    backgroundColor:'rgba(0,0,0,0.3)',
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

                      }
                    }
                ],
                series: [
                    {
                        name: '应收租金',
                        data: [889, 1000, 999, 1211, 1233, 1321, 1451,1378, 1456, 1578, 1678, 1800],
                        type: 'line',
                        symbol: "none",
                        lineStyle: {
                            color: "#5092e2"
                        },
                       
                    },
                    {
                        name: '实收租金',
                        data: [600, 800, 777, 1000, 1100, 1200, 1300,1200, 1321, 1560, 1560, 1680],
                        type: 'line',
                        symbol: "none",
                      
                        
                    },
                  
                    {
                        name: '剩余租金',
                        data: [121, 132, 110, 178, 145, 124, 123,99, 100, 120, 154, 132],
                        type: 'line',
                        symbol: "none",
                        
                        
                    },
                     {
                        name: '逾期租金',
                        data: [11, 22, 13, 21, 15, 16, 22,30, 40, 32, 23, 43],
                        type: 'line',
                        symbol: "none",
                       
                        
                    },
                    
                    
                ]
            };

            option && myChartB.setOption(option);
            window.addEventListener("resize", () => {
                myChartB.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchartBigB{
    height:calc(100% - 20px);;
    width: 100%;
}
</style>