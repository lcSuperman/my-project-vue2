<template>
   <div class="myEchartBig23" :id="echartsId"></div>
</template>
<script>
import * as echarts from 'echarts';
import {BLUE,RED} from '@/utils/colors'
export default {
   props:{
      echartsId:{
         type: String,
         required: true
      },
    },
    methods:{
        initEchart(echartData){
            var chartDom = document.getElementById(this.echartsId);
            var myChart23 = echarts.init(chartDom);
            var option;
            var black1 = 'rgba(255, 255, 255, .3)'
  
            option = {
                grid:{//设置图表距离容器位置配置
                  top:'15%',
                  bottom:'10%',
                  left:'10%',
                  right:'10%'
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
                        var marker = `<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${BLUE};\"></span>`
                        var marker1 = `<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${black1};\"></span>`
                        var marker2 = `<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${RED};\"></span>`
                     
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
                        name: '资产总数',
                        data: echartData.data2,
                        type: 'bar',
                        barGap:0,
                        barWidth : 15,//柱图宽度
                        symbol: "none",
                        stack: 'two',
                        itemStyle: {
                            borderColor:BLUE,
                            borderWidth:1,
                            color:BLUE
                            
                        },
                        tooltip:{
                           valueFormatter:function(value){
                            return value 
                           }
                        }
                        
                    },
                     {
                        name: '出租数量',
                        data:echartData.data3,
                        type: 'bar',
                        barGap:0,
                        barWidth : 15,//柱图宽度
                        symbol: "none",
                        stack: 'two',
                        itemStyle: {
                            borderColor:BLUE,
                            borderWidth:1,
                            color:'rgba(255, 255, 255, .1)'
                            
                        },
                        tooltip:{
                           valueFormatter:function(value){
                            return value
                           }
                        }
                        
                    },
                     {
                        name: '出租率',
                        data: echartData.data1,
                        type: 'line',
                        yAxisIndex:'1',
                        symbol: "none",
                        lineStyle: {
                            color: RED
                        },
                        tooltip:{
                           valueFormatter:function(value){
                            return value + '%'
                           }
                        }
                    },
                ]
            };

            option && myChart23.setOption(option);
             window.addEventListener("resize", () => {
                myChart23.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
.myEchartBig23{
    height:100%;;
    width: 100%;
}
</style>