<template>
   <div id="myEchartBig17"></div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    
    methods:{
        initEchart(echartData){
            var chartDom = document.getElementById('myEchartBig17');
            var myChart17= echarts.init(chartDom);
           
            var width = myChart17.getWidth()
            var data = echartData
           
            // data && data.forEach(item => {
            //    if(item.name == '出租'){
            //       item.selected = true
            //    }
            // })
          var option
          
          option = {
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
                    {name: '出租',icon: 'circle'},
                    {name: '在库',icon: 'circle'},
                    {name: '滞留客户现场',icon: 'circle'}
                ],
            },
            series: [
                {
                name: 'Access From',
                type: 'pie',
                radius: ['0%', '50%'],
                center:['50%','43%'],//圆心坐标
                avoidLabelOverlap: true,
                width:width,
                selectedMode: 'multiple',
                selectedOffset:6,
              
                label: {
                    color:'#FFF',
                    fontSize:10,
                    alignTo: 'edge',
                    formatter: '{b} {c}\n{d}%',
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
  
            option && myChart17.setOption(option);
             window.addEventListener("resize", () => {
                myChart17.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchartBig17{
    height:100%;;
    width: 65%;
}
</style>