<template>
   <div id="myEchartBig19"></div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    
    methods:{
        initEchart(echartData){
            var chartDom = document.getElementById('myEchartBig19');
            var myChart19= echarts.init(chartDom);
            var option;
            
  
            option = {
                grid:{//设置图表距离容器位置配置
                  top:'10%',
                  bottom:'18%',
                  left:'8%',
                  right:'1%'
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
                   
                },
                xAxis: {
                    type: 'category',
                    boundaryGap:true,
                    axisTick: {
                        show: false,    // 是否显示坐标轴刻度
                    },
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
                    data:echartData.dataX,
                   
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
                        show: true,
                        lineStyle: {
                         color: '#cfd5db',
                        },
                      },
                      splitLine :{ //网格线
                       lineStyle:{
                         type:'dashed' //设置网格线类型 dotted：虚线 solid:实线
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
                        name: '签约数量',
                        data: echartData.data1,
                        type: 'bar',
                        barGap:0,
                        barWidth : 10,//柱图宽度
                        symbol: "none",
                        itemStyle: {
                            normal: {
                            color:'#61a5e8'
                            }
                        },
                        tooltip:{
                           valueFormatter:function(value){
                            return value + '个'
                           }
                        }
                        
                    },
                ]
            };

            option && myChart19.setOption(option);
             window.addEventListener("resize", () => {
                myChart19.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchartBig19{
    height:100%;;
    width: 100%;
}
</style>