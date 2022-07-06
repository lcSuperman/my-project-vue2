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
                top: 'center',
                width: '100%',
                height: '100%',
                right: null,
                bottom: null,
                sizeRange: [12, 60],
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
                    focus: 'self',
                    textStyle: {
                        textShadowBlur: 5,
                        textShadowColor: '#333'
                    }
                },
                data:[]
            }]
           },
           value: [
                {name: 'Farrah',value: 10},
                {name: "汽车",value: 2},
                {name: "视频",value: 3},
                {name: "电视",value: 1},
                {name: "Lover Boy",value: 1},
                {name: "动漫",value: 5},
                {name: "音乐",value: 1},
                {name: "直播",value: 3},
                {name: "广播电台",value: 2},
                {name: "路飞",value: 5},
                {name: "海贼王",value: 4},
                {name: "女帝",value: 2},
                {name: "索隆",value: 3},
                {name: "漩涡鸣人",value: 2},
                {name: "佐助",value: 5},
                {name: "直播",value: 3},
                {name: "广播电台",value: 4},
                {name: "戏曲曲艺",value: 5},
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