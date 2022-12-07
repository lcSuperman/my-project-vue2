<template>
   <div class="myEchartG" :id="echartId"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    props:{
      echartId:{
         type: String,
         required: true
      }
    },
    methods:{
        initEchart(echartData){
            var chartDom = document.getElementById(this.echartId);
            var myChartG = echarts.init(chartDom);
            var option;
            var data = echartData
            var barWidth = 12;
            var maxNum = 0;
            for (var i = 0; i < data.length; i++) {
                if (data[i].total > maxNum) {
                    maxNum = data[i].total;
                }
            }
            option = {
                grid: {
                    top: '10%',
                    left: '35%',
                    right: '25%',
                    bottom: '10%',
                },
                 tooltip: {
                    backgroundColor:'rgba(0,0,0,0.6)',
                    borderWidth:0,
                    textStyle:{
                        color:'#cecece',
                        fontSize:10
                    },
                    formatter:function(params){
                        var percent = Number((params.data.realValue / params.data.total));
                        var virtualValue = Number((maxNum * percent)).toFixed(0);
                        var percent = Number((virtualValue / maxNum) * 100).toFixed(0) + '%';
                        return `
                          <div>
                            <h3>${params.name}</h3>
                            <div style="margin:10px 0;">
                               <span style="padding:0 5px 0 0;">${params.marker}</span><span>出租率：</span> <span>${percent}</span>
                            </div>
                            <div>
                               <span style="padding:0 5px 0 0;">${params.marker}</span><span>出租数：</span> <span>${params.data.realValue}</span>
                            </div>
                          </div>
                        `
                    }
                   
                },
                
                xAxis: {
                    show: false,
                },
                yAxis: {
                    data: data.map((item, index) => `${item.title}`),
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: { fontSize: 10, color: '#cfd5db' },
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: false,
                    splitLine :{ //网格线
                       lineStyle:{
                         type:'dashed' //设置网格线类型 dotted：虚线 solid:实线
                        },
                      },
                },
                series: [
                    {
                        type: 'bar',
                        barWidth: barWidth,
                        zlevel: 2,
                        data: data.map(function (item) {
                             var percent = Number((item.count / item.total));
                             var virtualValue = Number((maxNum * percent)).toFixed(0);
                            return {
                                realValue:item.count,
                                value: virtualValue,
                                maxNum: maxNum,
                                total:item.total
                            };
                        }),
                        label: {
                            show: true,
                            position: 'inside',
                            // distance: 80,
                            align: 'center',
                            formatter: function (params) {
                                // return params.data.realValue;
                                var percent = Number((params.data.value / params.data.maxNum) * 100).toFixed(0) + '%';
                                return percent;
                            },
                            color: '#cfd5db',
                            fontSize: 8,
                        },
                        itemStyle: {
                            borderRadius: 10,
                            color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [
                                { offset: 0, color: '#051e46' },
                                { offset: 1, color: '#23b9f8' },
                            ]),
                        },
                    },
                    {
                        type: 'bar',
                        barWidth: barWidth,
                        barGap: '-100%',
                        data: data.map(function (item) {
                            return {
                                realValue: item.count,
                                value: maxNum,
                                total:item.total
                            };
                        }),
                        label: {
                            show: true,
                            position: 'right',
                            distance: 40,
                            align: 'right',
                            formatter: function (params) {
                                return params.data.realValue;
                            },
                            color: '#cfd5db',
                            fontSize: 12,
                        },
                        itemStyle: {
                            borderRadius: 10,
                            color: 'rgba(7,32,135, 1)',
                        },
                    },
                ],
            };
          

            option && myChartG.setOption(option);
            window.addEventListener("resize", () => {
                myChartG.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
.myEchartG{
    height:100%;
    width: 100%;
}
</style>