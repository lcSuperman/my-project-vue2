<template>
 <div id="main"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
    mounted(){
      this.inintEchart()
    },
    methods:{
       inintEchart(){

           // 测试数据
	       var newArr = [
                {
                    "cdate": "2016",
                    "cname": "苹果,梨子,香蕉,菠萝,栗子,石榴",
                    "cut": "20.9,13.82,3.6,0.56,1.49,9.48"
                },
                {
                    "cdate": "2017",
                    "cname": "苹果,梨子,香蕉,菠萝,栗子,石榴",
                    "cut": "18.7,12.82,13.6,9.56,12.49,13.48"
                },
                {
                    "cdate": "2018",
                    "cname": "苹果,梨子,香蕉,菠萝,栗子,石榴",
                    "cut": "14.9,18.82,7.6,19.56,13.49,17.48"
                },
                {
                    "cdate": "2019",
                    "cname": "苹果,梨子,香蕉,菠萝,栗子,石榴",
                    "cut": "16.9,3.82,13.6,15.56,12.49,14.48"
                },
                {
                    "cdate": "2020",
                    "cname": "苹果,梨子,香蕉,菠萝,栗子,石榴",
                    "cut": "3.8,8.82,13.6,21.56,15.49,19.2"
                },{
                    "cdate": "2021",
                    "cname": "苹果,梨子,香蕉,菠萝,栗子,石榴",
                    "cut": "23.9,16.82,13.6,17.56,14.49,19.98"
                }
            ]

            // 柱形颜色
	       const countryColors = {
                苹果: '#88008b',
                梨子: '#f00',
                香蕉: '#ffde00',
                菠萝: '#002a8f',
                栗子: '#0035ff',
                石榴: '#edff39'		
            };
            var echartDom = document.getElementById('main')
            var myChart = echarts.init(echartDom)

            var updateFrequency = 2000;	// 数据更新速度
            var years = [];
            var startIndex = 0;
            for (var i = 0; i < newArr.length; ++i) {
                years.push(newArr[i])
            }

            // 获取第一条数据
            var startYear = years[startIndex].cdate;
            var startName = years[startIndex].cname.split(',');
            var startCut = years[startIndex].cut.split(',');


            var option ={
                // 图标的上下左右边界
                grid: {
                    top: 10,
                    bottom: 30,
                    left: 120,
                    right: 120
                },
                 // x 轴相关
                xAxis: {
                    max: 'dataMax',
                    splitLine: {
                        show: true,  	
                        lineStyle: {
                            color: 'rgba(100,100,100, 0.4)',	
                            type: 'dashed'
                        }
                    },
                    
                    axisLabel: {
                        // 圆整 X 轴 参数
                        formatter: function (n) {
                        return Math.round(n) + '';
                        }
                    }
                },
                dataset: {
                    source: newArr
                },
                 // y 轴数据
                yAxis: {
                    type: 'category',
                    inverse: true, 	// 大在上面，小在下面排序
                    max: 5,			// 最多显示个数
                    data: startName,
                    axisLabel: {
                        show: true,
                        textStyle: {
                            fontSize: 14
                        },
                        rich: {
                            flag: {
                                fontSize: 25,
                                padding: 5
                            }
                        }
                    },
                    animationDuration: 300,
                    animationDurationUpdate: 300
                },
                 series: [{
                    realtimeSort: true,
                    seriesLayoutBy: 'column',
                    type: 'bar',
                    itemStyle: {
                        /* color: 'rgb(13,208,229)' */
                        color:function (param) {
            
                            return  countryColors[param.name];
                        }
                    },
                    encode: {
                        x: 0,
                        y: 3
                    },
                    label: {
                        show: true,
                        precision: 1,
                        position: 'right',
                        valueAnimation: true,
                        fontFamily: 'monospace',
                        /* formatter: function (data) {
                            return startCut[data.dataIndex] + "%";
                        } */
                    },
                    data: startCut
                }],
                animationDuration: 0,
                animationDurationUpdate: 1000,
                animationEasing: 'linear',
                animationEasingUpdate: 'linear',
                graphic: {
                    // 年代的文字 Text
                    elements: [{
                        type: 'text',
                        right: 120,
                        bottom: 60,
                        style: {
                            text: startYear,
                            font: 'bolder 40px monospace',
                            fill: 'rgba(100, 100, 100, 0.25)'
                        },
                        z: 100
                    }]
                }
            }


            myChart.setOption(option)
             for (var i = startIndex; i < newArr.length - 1; ++i) {
                (function (i) {
                    setTimeout(function () {
                        updateYear(years[i + 1]);
                    }, (i + 1) * updateFrequency);
                })(i);
            }
    
            // 更新数据
            function updateYear(year) {
                option.yAxis.data = year.cname.split(',');
                option.series[0].data = year.cut.split(',');
                option.graphic.elements[0].style.text = year.cdate;
                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }

            //随着屏幕大小调节图表
            window.addEventListener("resize", () => {
                myChart.resize();
            });

       }
    }

}
</script>
<style lang='less' scoped>
#main{
    height: 100%;
    width: 100%;
}
</style>