<template>
   <div class="myEchartP" :id="echartsId"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    props:{
      echartsId:{
         type: String,
         required: true
      },
      pieData:{
        type:Object,
        required: true
      }
    },
    mounted(){
      this.initEchart()
    },
    methods:{
        initEchart(){
            var chartDom = document.getElementById(this.echartsId);
            var myChartP = echarts.init(chartDom);
            var option;
            var data = this.pieData.pieData
            var title = this.pieData.title
            var num = this.pieData.num
            var num2 = this.pieData.num2
            console.log((97/100)*0.95)
            data.forEach(item => {
                if(item.name !== '正常'){
                    if(item.realValue !== 0){
                     item.value = ((item.total -  Math.round(((item.nomal/item.total)*0.95) * 100) )/4)*item.realValue
                    }else{
                     item.value = num2/num 
                    }
                    
                }else{
                    item.value = 92
                } 
            })
            console.log(data)
           option = {
                title: {
                    text: title,
                    left: 'center',
                    bottom:'2%',
                    textStyle:{
                        color:'#24c0ff',
                        fontSize:12
                    }
                },


                series: [
                    {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    startAngle:110,//第一个数据开始绘制的角度，以正交直角坐标系为标准
                    data: data,
                    label: {
                        color:'#FFF',
                        fontSize:10,
                        alignTo: 'edge',
                        formatter: function(params){
                            var a
                            if(params.data.name !== '正常'){
                                 //a =params.data.realValue !=0 ?  ((params.data.realValue/(params.data.total - params.data.nomal))*0.05*100).toFixed(2) : 0.00
                                 a =params.data.realValue !=0 ?  ((params.data.realValue/params.data.total )*100).toFixed(2) : 0.00
                            }else{
                                // a = params.data.total - params.data.nomal > 0 ? 95 : 100
                                 a = ((params.data.realValue/params.data.total)*100).toFixed(2)
                            }
                            
                             return `{name|${params.data.name} ${params.data.realValue}\n ${a}%}`
                        },
                        minMargin: 5,
                        edgeDistance: 10,
                        lineHeight: 15,
                        rich: {
                           value: { fontSize: 10, color: '#999999' }
                        }
                    },
                    labelLine: {
                        length: 10,
                        length2: 0,
                        maxSurfaceAngle: 80
                    },
                    labelLayout: function (params) {
                        const isLeft = params.labelRect.x < myChartP.getWidth() / 2;
                        const points = params.labelLinePoints;
                        // Update the end point.
                        points[2][0] = isLeft
                        ? params.labelRect.x
                        : params.labelRect.x + params.labelRect.width;
                         return params;
                    },
                   
                    emphasis: {
                        scale:false,//表示不放大item
                        itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                    }
                ]
            };
            option && myChartP.setOption(option);
            window.addEventListener("resize", () => {
                myChartP.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
.myEchartP{
    height:100%;
    width: 100%;
}
</style>