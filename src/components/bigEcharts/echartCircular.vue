<template>
  <div class="circ">
     <div class="echartsCirc" :id="echartsId"></div>
     <div class="title">{{pieData.title}}</div>
  </div>
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
            var myChartC = echarts.init(chartDom);
            const {title,count,color,num} =this.pieData
            const count2 = 100-count
            const isShow = num ? true : false
            var option;
            option = {
                title:[//标题组件，数组里的一个对象表示一个标题组件
                    {
                        text:count+ '%',
                        left:'center',
                        top:'center',
                        textStyle:{
                            color:"#fff",
                            fontSize:10,
                            fontWeight:'normal'
                        },
                    }
                ],
              
                series: [//系列
                    {
                        name: title,
                        type: 'pie',//pie类型的图实现环形图
                        radius:isShow ?  ['30%','50%'] : ['45%','75%'],//数组的话，表示内圆和外圆的半径大小，相对于宽高中较小的那一个。
                        center:['50%','50%'],//圆心坐标
                        avoidLabelOverlap: false,//是否启用防止标签重叠策略
                        startAngle:150,//第一个数据开始绘制的角度，以正交直角坐标系为标准
                        label: {//每个数据的标签
                            show: true,//设置为true则显示第一个数据
                            color:'#FFF',
                            fontSize:10,
                        },
                        color:[color,'#0a2749'],//系列的颜色
                        emphasis: {
                            scale:false,//表示不放大item
                        },
                        labelLine: {
                            show: isShow,
                            length: 5,
                            length2: 0,
                        },
                        data: [
                            {value: count,name: num},
                            {value: count2}
                        ]
                    }
                ]
            };

            option && myChartC.setOption(option);
            window.addEventListener("resize", () => {
                myChartC.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
.circ{
    height:100%;;
    width: 100%;
    display: flex;
    flex-direction: column;
    .echartsCirc{
        height:75%;;
        width: 100%;
    }
    .title{
      width: 100%;
      font-size: 10px;
      text-align: center;
     
    }

}

</style>