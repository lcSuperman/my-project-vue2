<template>
   <div id="myEchartBig12"></div>
</template>
<script>
import * as echarts from 'echarts';

export default {
  
    methods:{
        initEchart(echartData){
            var chartDom = document.getElementById('myEchartBig12');
            var myChart12= echarts.init(chartDom);
            var option;
  
            option = {
                grid:{//设置图表距离容器位置配置
                  top:'20%',
                  bottom:'26%',
                  left:'8%',
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
                       fontSize:11
                    },
                    data: [
                        
                        {
                        name: '本月新增个人客户',
                        icon: 'rect',
                        itemStyle:{
                           color:'#fcc30a'
                        }
                        },
          
                        {
                        name: '本月新增企业客户',
                        icon: 'rect',
                         itemStyle:{
                           color:'#5092e2'
                        }
                        },
                        {
                        name: '客户总数',
                        icon: 'rect', // 用矩形替换
                        itemStyle:{
                           color:'#d75046'
                        }
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
                        var marker = `<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#fcc30a;\"></span>`
                        var marker1 = `<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#5092e2;\"></span>`
                        var marker2 = `<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#d75046;\"></span>`
                     
                        return `
                          <div>
                              <div style="display:flex;justify-content:space-between;"><span style="padding-right:20px;">${marker}${params[0].seriesName}</span>${params[0].value}</div>
                              <div style="padding:5px 0;display:flex;justify-content:space-between"><span>${marker1}${params[1].seriesName}</span>${params[1].value}</div>
                              <div style="display:flex;justify-content:space-between;"><span style="padding-right:20px;">${marker2}${params[2].seriesName}</span>${params[2].value}</div>
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
                      name:'新增客户数',
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
                    },
                    {
                      name:'客户总数',
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

                      },
                      splitLine :{ //网格线
                       lineStyle:{
                         type:'dashed' //设置网格线类型 dotted：虚线 solid:实线
                        },
                      },
                    },
                ],
                series: [
                   
                    {
                        name: '本月新增个人客户',
                        data: echartData.data2,
                        type: 'bar',
                        barGap:0,
                        barWidth : 6,//柱图宽度
                        symbol: "none",
                        itemStyle: {
                            normal: {
                            color:'#fcc30a'
                            }
                        },
                        tooltip:{
                           valueFormatter:function(value){
                            return value + '个'
                           }
                        }
                        
                    },
                     {
                        name: '本月新增企业客户',
                        data:echartData.data3,
                        type: 'bar',
                        barGap:0,
                        barWidth : 6,//柱图宽度
                        symbol: "none",
                        itemStyle: {
                            normal: {
                            color:'#5092e2'
                            }
                        },
                        tooltip:{
                           valueFormatter:function(value){
                            return value + '个'
                           }
                        }
                        
                    },
                     {
                        name: '客户总数',
                        data: echartData.data1,
                        type: 'line',
                        yAxisIndex:'1',
                        symbol: "none",
                        lineStyle: {
                            color: "#d75046"
                        },
                        tooltip:{
                           valueFormatter:function(value){
                            return value + '个'
                           }
                        }
                    },
                ]
            };

            option && myChart12.setOption(option);
             window.addEventListener("resize", () => {
                myChart12.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchartBig12{
    height:100%;;
    width: 100%;
}
</style>