<template>
   <div id="myEchartBig16"></div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    
    methods:{
        initEchart(echartData){
            var chartDom = document.getElementById('myEchartBig16');
            var myChart16= echarts.init(chartDom);
           
            var width = myChart16.getWidth()
            var data = echartData
            var total = 0
            data && data.forEach(item => {
              total += item.value
            })
            var option;
          
          option = {
            title: {
                text: `${total}`,
                subtext:'预警总数',
                left: 'center',
                top:'35%',
                itemGap:5,
                textStyle: {
                color: '#26effe',
                fontWeight: 'bold',
                fontSize: 12
                },
                subtextStyle:{
                    color: '#cecece',
                    fontWeight: 'normal',
                    fontSize: 10
                }
            },
          
            legend: {
                bottom: '1%',
                left: 'center',
                type: 'scroll',
                itemWidth: 10, //矩形宽度
                itemHeight: 10, //矩形高度
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
                    {name: '低电压',icon: 'circle'},
                    {name: '在库超出基地围栏',icon: 'circle'},
                    {name: '滞留客户现场',icon: 'circle'},
                    {name: '再租超出客户现场围栏',icon: 'circle'},
                    {name: '报停违规开工',icon: 'circle'},
                    {name: '离线',icon: 'circle'},
                    {name: '其他',icon: 'circle'}
                ],
            },
            series: [
                {
                name: 'Access From',
                type: 'pie',
                radius: ['30%', '50%'],
                center:['50%','43%'],//圆心坐标
                avoidLabelOverlap: false,
                width:width,
                label: {
                    color:'#FFF',
                    fontSize:10,
                    alignTo: 'edge',
                    formatter: '{name|{c}}（{d}%）\n',
                    minMargin: 5,
                    edgeDistance: 10,
                    lineHeight: 15,
                    rich: {
                    time: {
                        fontSize: 10,
                        color: '#999'
                    }
                    }
                },
                labelLine: {
                    length: 10,
                    length2: 0,
                    maxSurfaceAngle: 80
                },
                emphasis: {
                    scale:false,//表示不放大item
                },
                labelLayout: function (params) {
                    const isLeft = params.labelRect.x < width / 2;
                    const points = params.labelLinePoints;
                    // Update the end point.
                    points[2][0] = isLeft
                    ? params.labelRect.x
                    : params.labelRect.x + params.labelRect.width;
                    return {
                    labelLinePoints: points
                    };
                },
                data: data
                }
            ]
            };
  
            option && myChart16.setOption(option);
             window.addEventListener("resize", () => {
                myChart16.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchartBig16{
    height:100%;;
    width: 100%;
}
</style>