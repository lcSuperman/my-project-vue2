<template>
   <div id="myEchartBig31"></div>
</template>
<script>
import * as echarts from 'echarts';
import {GRENN,BLUE,YELLO,RED,VIOLET} from '@/utils/colors'
export default {
  
    methods:{
        initEchart(echartData){
            var chartDom = document.getElementById('myEchartBig31');
            var myChart31= echarts.init(chartDom);
          
            var option;
            option = {
                grid:{//设置图表距离容器位置配置
                  top:'20%',
                  bottom:'15%',
                  left:'2.5%',
                  right:'2%'
                },
                legend:{//设置图例配置
                    top:0,
                    right:'0',
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
                          name: '实收预付款',
                          icon: 'rect',
                          itemStyle:{
                            color:VIOLET,
                          }
                        },
                         {
                          name: '实收押金',
                          icon: 'rect',
                          itemStyle:{
                            color:BLUE
                          }
                        },
                        {
                          name: '应收组件',
                          icon: 'rect',
                          itemStyle:{
                            color:GRENN
                          }
                        },
          
                       
                        {
                        name: '实收租金',
                        icon: 'rect',
                         itemStyle:{
                           color:YELLO
                        }
                        },
                        {
                        name: '租金回收率',
                        icon: 'rect', // 用矩形替换
                        itemStyle:{
                           color:RED
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
                        var marker = `<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${VIOLET};\"></span>`
                        var marker0 = `<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${BLUE};\"></span>`
                        var marker1 = `<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${GRENN};\"></span>`
                        var marker2 = `<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${YELLO};\"></span>`
                        var marker3 = `<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${RED};\"></span>`
                        return `
                          <div>
                              <div style="display:flex;justify-content:space-between;"><span style="padding-right:20px;">${marker}${params[0].seriesName}</span>${params[0].value}</div>
                              <div style="padding:5px 0;display:flex;justify-content:space-between"><span>${marker0}${params[1].seriesName}</span>${params[1].value}</div>
                              <div style="display:flex;justify-content:space-between"><span>${marker1}${params[2].seriesName}</span>${params[2].value}</div>
                              <div style="padding:5px 0;display:flex;justify-content:space-between;"><span style="padding-right:20px;">${marker2}${params[3].seriesName}</span>${params[3].value}</div>
                              <div style="display:flex;justify-content:space-between;"><span style="padding-right:20px;">${marker3}${params[4].seriesName}</span>${params[4].value}%</div>
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
                        interval:0,
                        rotate:30 , //倾斜的程度
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
                      name:'数量',
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
                      name:'出租率（%）',
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
                        name: '实收预付款',
                        data: echartData.data5,
                        type: 'bar',
                        barGap:0,
                        barWidth : 8,//柱图宽度
                        symbol: "none",
                        itemStyle: {
                            normal: {
                            color:VIOLET,
                            }
                        },
                    },
                      {
                        name: '实收押金',
                        data:echartData.data3,
                        type: 'bar',
                        barGap:0,
                        barWidth : 8,//柱图宽度
                        symbol: "none",
                        itemStyle: {
                            normal: {
                            color:BLUE
                            }
                        },  
                    },
                    {
                        name: '应收租金',
                        data: echartData.data2,
                        type: 'bar',
                        barGap:0,
                        barWidth : 8,//柱图宽度
                        symbol: "none",
                        stack: 'two',
                        itemStyle: {
                            normal: {
                            color:GRENN
                            }
                        },  
                    },
                   
                     {
                        name: '实收租金',
                        data:echartData.data4,
                        type: 'bar',
                        barGap:0,
                        barWidth : 8,//柱图宽度
                        symbol: "none",
                        stack: 'two',
                        itemStyle: {
                            normal: {
                            color:YELLO
                            }
                        }, 
                    },
                     {
                        name: '租金回收率',
                        data: echartData.data1,
                        type: 'line',
                        yAxisIndex:'1',
                        symbol: "none",
                        lineStyle: {
                            color: RED
                        },
                        
                    },
                ]
            };

            option && myChart31.setOption(option);
             window.addEventListener("resize", () => {
                myChart31.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchartBig31{
    height:100%;;
    width: 100%;
}
</style>