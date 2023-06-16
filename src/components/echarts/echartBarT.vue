<template>
    <div id="myEchartT"></div>
</template>

<script>
  import * as echarts from 'echarts'; 
  export default {
    mounted(){
        this.initEchart()
    },
    methods:{
        initEchart(){
            var chartDom = document.getElementById('myEchartT');
            var myChart = echarts.init(chartDom);
            var option;

            option = {
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['楼层', '栏杆','砌体']
                },
                toolbox: {
                    show: true,
                    feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    }
                },
                calculable: true,
                xAxis: [
                    {
                    type: 'category',
                    // prettier-ignore
                    data: ['二月', '三月', '四月', '五月']
                    }
                ],
                yAxis: [
                    {
                    type: 'value',
                    name:'楼层',
                    nameLocation:'end',
                    position:'left',
                    max:26,
                    splitNumber:13
                    }
                ],
                series: [
                    {
                    name: '楼层',
                    type: 'bar',
                    label: {
                       show: true,
                       position: 'insideBottom',
                       rotate: 90,
                       verticalAlign: 'middle',
                       distance: 50,
                       formatter: '主体 {c}层 ',
                    },
                    barGap:0.1,
                    barWidth : 25,//柱图宽度
                    data: [
                        20,20,22,24
                    ],
                    },
                    {
                    name: '栏杆',
                    type: 'bar',
                    label: {
                       show: true,
                       position: 'insideBottom',
                       rotate: 90,
                       verticalAlign: 'middle',
                       distance: 50,
                       formatter: '{a} {c}层 ',
                    },
                    barGap:0.1,
                    barWidth :25,//柱图宽度
                    data: [
                     13,15,18,18
                    ],
                    },
                    {
                    name: '砌体',
                    type: 'bar',
                    label: {
                       show:true,
                       position: 'insideBottom',
                       rotate: 90,
                       verticalAlign: 'middle',
                       distance: 50,
                       formatter: '{a} {c}层 ',
                    },
                    barGap:0.1,
                    barWidth :25,//柱图宽度
                    data: [
                     0,0,2,5
                    ],
                    }
                ]
            };

            option && myChart.setOption(option);
        }
    }

  }
</script>

<style lang='less' scoped>
#myEchartT{
    height: 100%;
    width: 100%;
}
</style>