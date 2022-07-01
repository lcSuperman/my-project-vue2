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