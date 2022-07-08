<template>
    <div id="myEchart5"></div>
</template>
<script>
import * as echarts from 'echarts';
import 'echarts-wordcloud';

export default {
    data(){
        return{
           options:{
                series: [{
                type: 'wordCloud',
                shape: 'circle',
                keepAspect: false,
                maskImage: '',
                left: 'center',
                top: '-15px',
                width: '98%',
                height: '100%',
                right: null,
                bottom: null,
                sizeRange: [18, 60],
                rotationRange: [-90, 90],
                rotationStep: 45,
                gridSize: 8,
                drawOutOfBound: false,
                layoutAnimation: true,
                textStyle: {
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    // focus: 'self',
                    textStyle: {
                        textShadowBlur: 5,
                        textShadowColor: '#333'
                    }
                },
                data:[]
            }]
           },
           value: [
                {name: 'Far',value: 10},
                {name: "汽车",value: 2},
                {name: "视频",value: 3},
                {name: "电视",value: 1},
                {name: "Lover",value: 1},
                {name: "BGY",value: 2},
                {name: "IJG",value: 3},
                {name: "电R",value: 1},
                {name: "Lover",value: 1},
                {name: "boy",value: 2},
                {name: "电视",value: 1},
                {name: "Lover",value: 1},
                 {name: "watch",value: 1},
                {name: "grils",value: 2},
                {name: "电视",value: 1},
                {name: "Lover",value: 1},
                {name: "H",value: 5},
                {name: "音乐",value: 1},
                {name: "直播",value: 3},
                {name: "ABC",value: 2},
                {name: "路飞",value: 5},
                {name: "海",value: 4},
                {name: "女帝",value: 2},
                {name: "索隆",value: 3},
                {name: "鸣人",value: 2},
                {name: "佐",value: 5},
                {name: "直播",value: 3},
                {name: "boy",value: 2},
                {name: "电视",value: 1},
                {name: "Lover",value: 1},
                {name: "动",value: 5},
                {name: "音乐",value: 1},
                {name: "直播",value: 3},
                {name: "ABC",value: 2},
                {name: "漫",value: 4},
                {name: "单身",value: 5},
                {name: "贼",value: 4},
                {name: "学生",value: 2},
                {name: "索隆",value: 3},
                {name: "鸣人",value: 2},
                {name: "助",value: 5},
                {name: "直播",value: 3},
                {name: "广台",value: 4},
                {name: "曲艺",value: 3},
                {name: "HR",value: 5},
                {name: "音乐",value: 1},
                {name: "直播",value: 3},
                {name: "广电台",value: 1},
                {name: "路",value: 3},
                {name: "海王",value: 4},
                {name: "女帝",value: 2},
                {name: "索隆",value: 3},
           ], 
           image:"data:image/png;base64,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"
        }

    },
    created(){
       this.setEchartOption()
    },
    mounted(){
        this.$nextTick(()=>{
           this. initEchart()
       })
    },
    methods:{
        
        initEchart(){
           const echartDom = document.getElementById('myEchart5')
           const myChart = echarts.init(echartDom)
           myChart.setOption(this.options)

           //随着屏幕大小调节图表
            window.addEventListener("resize", () => {
                myChart.resize();
            });
        },
        
         //修改echart配制
        setEchartOption(){
             var maskImage = new Image();
             maskImage.src = this.image
             this.options.series[0].maskImage = maskImage;
            this.options.series[0].data = this.value
        }
    }
}
</script>
<style lang='less' scoped>
#myEchart5{
    height: 100%;
    width: 100%;
}
</style>