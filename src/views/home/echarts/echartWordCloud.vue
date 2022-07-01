<template>
    <div id="myEchart4"></div>
</template>
<script>
import * as echarts from 'echarts';
import 'echarts-wordcloud';

export default {
    mounted(){
       this. initEchart()
    },
    methods:{
        initEchart(){
           const echartDom = document.getElementById('myEchart4')
           const myChart = echarts.init(echartDom)
           const option  = {
                series: [{
                type: 'wordCloud',
                shape: 'circle',
                keepAspect: false,
               // maskImage: maskImage,
                left: 'center',
                top: 'center',
                width: '98%',
                height: '90%',
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
                    // focus: 'self',
                    textStyle: {
                        textShadowBlur: 3,
                        textShadowColor: '#333'
                    }
                },
                data: [
                    {name: 'Farrah',value: 366},
                    {name: "汽车",value: 900},
                    {name: "视频",value: 606},
                    {name: "电视",value: 525},
                    {name: "Lover Boy",value: 520},
                    {name: "动漫",value: 450},
                    {name: "音乐",value: 253},
                    {name: "直播",value: 363},
                    {name: "广播电台",value: 286},
                    {name: "路飞",value: 550},
                    {name: "海贼王",value: 490},
                    {name: "女帝",value: 763},
                    {name: "索隆",value: 486},
                    {name: "漩涡鸣人",value: 680},
                    {name: "佐助",value: 550},
                    {name: "直播",value: 163},
                    {name: "广播电台",value: 86},
                    {name: "戏曲曲艺",value: 117},
                    {name: "演出票务",value: 58},
                    {name: "直播",value: 263},
                    {name: "广播电台",value: 186},
                    {name: "戏曲曲艺",value: 173},
                    {name: "演出票",value:499},
                    {name: "直播",value: 163},
                    {name: "广播电台",value: 186},
                    {name: "戏曲艺",value: 175},
                    {name: "演票务",value:199},
                    {name: "广播台",value: 86},
                    {name: "戏曲曲艺",value: 117},
                    {name: "演出",value: 58},
                    {name: "直播",value: 263},
                    {name: "广播电台",value: 186},
                    {name: "戏曲",value: 173},
                    {name: "演出务",value:195},
                    {name: "直播",value: 163},
                    {name: "广电台",value: 86},
                    {name: "戏艺",value: 175},
                    {name: "票务",value:29},
                     {name: "戏曲艺",value: 175},
                    {name: "大数据",value:199},
                    {name: "广播台",value: 86},
                    {name: "李超",value: 800},
                    {name: "喜欢",value: 158},
                    {name: "直播",value: 263},
                    {name: "ABOUT",value: 186},
                    {name: "c++",value: 173},
                    {name: "前端开发",value:195},
                    {name: "SDF",value: 163},
                    {name: "SUPERMAN",value: 86},
                    {name: "后端",value: 175},
                    {name: "大数据",value:29}
                ]
            }]

           }
           option && myChart.setOption(option)

           //随着屏幕大小调节图表
            window.addEventListener("resize", () => {
                myChart.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchart4{
    height: 100%;
    width: 100%;
}
</style>