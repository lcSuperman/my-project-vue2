<template>
   <div id="myEchartBig11"></div>
</template>
<script>
import * as echarts from 'echarts';

export default {
  
    methods:{
        initEchart(echartData){
            var chartDom = document.getElementById('myEchartBig11');
            var myChart11= echarts.init(chartDom);
            var option;
  
            option = {
                grid:{//设置图表距离容器位置配置
                  top:'20%',
                  bottom:'20%',
                  left:'10%',
                  right:'1%'
                },
                legend:{//设置图例配置
                    top:0,
                    right:0,
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
                        name: '叉车',
                        icon: 'circle', 
                        itemStyle:{
                           color:'#6fc940'
                        }
                        },
                        {
                        name: '高机',
                        icon: 'circle',
                        itemStyle:{
                           color:'#e84e53'
                        }
                        },
          
                    ],
                    itemWidth: 10, 
                    itemHeight: 10, 

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
                        var percent =  ((params[0].data.value/params[0].data.total)*100).toFixed(0)
                        var percent2 =  ((params[1].data.value/params[1].data.total)*100).toFixed(0)
                        var marker = `<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#6fc940;\"></span>`
                        var marker2 = `<span style=\"display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:#e84e53;\"></span>`
                        return `
                          <div>
                              <div style="display:flex;justify-content:space-between;"><span style="padding-right:20px;">${marker}叉车出租数量</span>${params[0].value}个</div>
                              <div style="padding:5px 0;display:flex;justify-content:space-between"><span>${marker}叉车出租率</span>${percent}%</div>
                              <div style="display:flex;justify-content:space-between;"><span style="padding-right:20px;">${marker2}叉车出租数量</span>${params[1].value}个</div>
                              <div style="padding:5px 0 0 0;display:flex;justify-content:space-between"><span>${marker2}叉车出租率</span>${percent2}%</div>
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
                ],
                series: [
                    {
                        name: '叉车',
                        data: echartData.data1,
                        type: 'line',
                        yAxisIndex:'0',
                        symbol: "none",
                        lineStyle: {
                            color: "#6fc940"
                        },
                        tooltip:{
                           valueFormatter:function(value){
                            return value + '个'
                           }
                        }
                    },
                  
                    {
                        name: '高机',
                        data: echartData.data3,
                        type: 'line',
                        symbol: "none",
                        lineStyle: {
                            color: "#e84e53"
                        },
                        tooltip:{
                           valueFormatter:function(value){
                            return value + '个'
                           }
                        }
                        
                    },
                    
                ]
            };

            option && myChart11.setOption(option);
             window.addEventListener("resize", () => {
                myChart11.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchartBig11{
    height:100%;;
    width: 100%;
}
</style>