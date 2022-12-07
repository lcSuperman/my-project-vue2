<template>
   <div id="myEchartBig22"></div>
</template>
<script>
import * as echarts from 'echarts';

export default {
    
    methods:{
        initEchart(echartData){
            var chartDom = document.getElementById('myEchartBig22');
            var myChart22= echarts.init(chartDom);
           
            var width = myChart22.getWidth()
            var data = echartData
            var total = 0
            data && data.forEach(item => {
              total += item.value
            })
            var option;
          
          option = {
            tooltip: {
                trigger: 'item',
                backgroundColor:'rgba(0,0,0,0.6)',
                borderWidth:0,
                textStyle:{
                    color:'#fff',
                    fontSize:10
                },
                formatter:function (params) {
                   
                    var percent = ((params.data.value/params.data.total)*100).toFixed(0)
                    return `
                    <div>
                        <div style="display:flex;justify-content:space-between;align-items:center;">
                            <span style="padding-right:20px;">${params.marker}${params.name}</span>
                            ${params.data.value}/${params.data.total} ${percent}%
                        </div>
                    </div>
                    `
                }
            
            },
            series: [
                {
                type: 'pie',
                radius: ['0', '80%'],
                center:['50%','45%'],//圆心坐标
                avoidLabelOverlap: true,
                width:width,
                label: {
                    color:'#FFF',
                    fontSize:10,
                    alignTo: 'edge',
                    formatter:function(params){
                      
                       var percent = ((params.data.value/params.data.total)*100).toFixed(0)
                       return `${params.data.name}：${params.data.value}/${params.data.total} ${percent}%\n`
                    },
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
  
            option && myChart22.setOption(option);
             window.addEventListener("resize", () => {
                myChart22.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchartBig22{
    height:100%;;
    width: 100%;
}
</style>