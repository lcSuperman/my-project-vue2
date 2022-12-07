<template>
  
   <div id="myEchartBig15"></div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    
    methods:{
        initEchart(echartData){
            var chartDom = document.getElementById('myEchartBig15');
            var myChart15= echarts.init(chartDom);
           
            var width = myChart15.getWidth()
            var data = echartData
            var total = 0
            data && data.forEach(item => {
              total += item.value
            })
            var option;
          
            option = {
                title: {
                    text: `${total}`,
                    subtext:'资产总数',
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
             
                series: {
                    type: 'pie',
                    radius: ['90%', '150%'],
                    center:['50%','50%'],//圆心坐标
                    top:'center',
                    left: 'center',
                    width:width,
                    minAngle: 5,
                    startAngle:150,//第一个数据开始绘制的角度，以正交直角坐标系为标准
                    avoidLabelOverlap:true,
                    label: {
                        color:'#FFF',
                        fontSize:10,
                        alignTo: 'edge',
                        formatter: '{b} {c}\n{d}%',
                        minMargin: 5,
                        edgeDistance: '10%',
                        lineHeight: 14,
                        fontSize: 10, //字体大小
                        rich: {
                           value: { fontSize: 10, color: '#999999' }
                        }
                    },
                    labelLine: {
                        length: 6,
                        length2: 5,
                        maxSurfaceAngle:90
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
            };
  
            option && myChart15.setOption(option);
             window.addEventListener("resize", () => {
                myChart15.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchartBig15{
    height:75%;;
    width: 100%;
}
</style>