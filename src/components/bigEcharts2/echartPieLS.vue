<template>
  
   <div id="myEchartBig18"></div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    
    methods:{
        initEchart(echartData){
            var chartDom = document.getElementById('myEchartBig18');
            var myChart18= echarts.init(chartDom);
           
            var width = myChart18.getWidth()
            var data = echartData
            var total = 0
            data && data.forEach(item => {
              total += item.value
            })
            var option;
            total = total.toFixed(2)
            option = {
                title: {
                    text: `${total}亿元`,
                    subtext:'总租金',
                    left: 'center',
                    top:'40%',
                    itemGap:5,
                    textStyle: {
                     color: '#26effe',
                     fontWeight: 'bold',
                     fontSize: 14
                    },
                    subtextStyle:{
                      color: '#cecece',
                      fontWeight: 'normal',
                      fontSize: 12
                    }
                },
                 legend:{//设置图例配置
                    top:0,
                    right:0,
                    textStyle:{
                       color: "#cfd5db",
                       fontSize:11
                    },
                    data: [
                        {
                        name: '直租',
                        icon: 'rect', // 用矩形替换
                        },
                        {
                        name: '转租',
                        icon: 'rect',
                        },
          
                    ],
                    itemWidth: 14, //矩形宽度
                    itemHeight: 6, //矩形高度

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
                       // formatter: '{b} {c}\n{d}%',
                        formatter: function(params){
                            
                             return `${params.data.name} \n${params.percent}% \n 数量 ${params.data.count}\n 价值 ${params.data.value}`
                        },
                        minMargin: 0,
                        edgeDistance: '10%',
                        lineHeight: 16,
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
  
            option && myChart18.setOption(option);
             window.addEventListener("resize", () => {
                myChart18.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchartBig18{
    height:100%;;
    width: 100%;
}
</style>