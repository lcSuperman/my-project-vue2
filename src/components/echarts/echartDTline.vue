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

           // 测试数据([ {包括时间，y轴分类，x轴数值}... ])
	       var newArr = [
                {
                    "cdate": "2000",
                    "cname": "俄罗斯,中国,美国,日本,韩国,英国,法国",
                    "cut": "80,20,100,40,33,35,40"
                },
                {
                    "cdate": "2001",
                    "cname": "俄罗斯,中国,美国,日本,韩国,英国,法国",
                    "cut": "90,30,120,50,43,45,45"
                },
                {
                    "cdate": "2002",
                    "cname": "俄罗斯,中国,美国,日本,韩国,英国,法国",
                    "cut": "100,50,130,60,53,55,65"
                },
                 {
                    "cdate": "2003",
                    "cname": "俄罗斯,中国,美国,日本,韩国,英国,法国",
                    "cut": "110,65,140,75,60,65,60"
                },
                {
                    "cdate": "2004",
                    "cname": "俄罗斯,中国,美国,日本,韩国,英国,法国",
                    "cut": "120,85,150,80,90,75,70"
                },
                 {
                    "cdate": "2005",
                    "cname": "俄罗斯,中国,美国,日本,韩国,英国,法国",
                    "cut": "125,105,140,90,80,100,70"
                },
                 {
                    "cdate": "2006",
                    "cname": "俄罗斯,中国,美国,日本,韩国,英国,法国",
                    "cut": "130,120,140,100,90,80,90"
                },
                  {
                    "cdate": "2007",
                    "cname": "俄罗斯,中国,美国,日本,韩国,英国,法国",
                    "cut": "135,130,145,110,100,90,80"
                },
                {
                    "cdate": "2008",
                    "cname": "俄罗斯,中国,美国,日本,韩国,英国,法国",
                    "cut": "140,145,150,100,110,100,90"
                },
                {
                    "cdate": "2009",
                    "cname": "俄罗斯,中国,美国,日本,韩国,英国,法国",
                    "cut": "160,165,155,110,100,110,100"
                },
                {
                    "cdate": "2010",
                    "cname": "俄罗斯,中国,美国,日本,韩国,英国,法国",
                    "cut": "166,170,160,120,115,104,109"
                },
                {
                    "cdate": "2011",
                    "cname": "俄罗斯,中国,美国,日本,韩国,英国,法国",
                    "cut": "170,175,185,124,140,120,110"
                },
                   {
                    "cdate": "2012",
                    "cname": "俄罗斯,中国,美国,日本,韩国,英国,法国",
                    "cut": "180,210,190,135,150,140,129"
                },
                {
                    "cdate": "2013",
                    "cname": "俄罗斯,中国,美国,日本,韩国,英国,法国",
                    "cut": "210,240,200,170,160,150,155"
                },
            ]

          // y轴分类柱形颜色
	       const countryColors = {
                俄罗斯: '#88008b',
                中国: '#f00',
                美国: '#136399',
                日本: '#002a8f',
                韩国: '#0035ff',
                英国: '#22a7bf',
                法国: '#f4943a',			
            };

            var echartDom = document.getElementById('main')
            var myChart = echarts.init(echartDom)

            var updateFrequency = 1100;	// 数据更新速度时间
            var years = [];
            var startIndex = 0;
            for (var i = 0; i < newArr.length; ++i) {
                years.push(newArr[i])
            }
         
            // years == newArr

            // 获取第一条数据
            var startYear = years[startIndex].cdate; //获取years第一条数据的年份
            var startName = years[startIndex].cname.split(',');//获取years第一条数据的分类，并且转换为数组
            var startCut = years[startIndex].cut.split(',');//获取years第一条数据的数值，并且转换为数组

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
                    max: 'dataMax', //坐标轴刻度最大值。可以设置成特殊值 'dataMax'，此时取数据在该轴上的最大值作为最大刻度。
                    splitLine: {
                        show: true,  //是否显示分隔线。默认数值轴显示，类目轴不显示。	
                        lineStyle: {
                            color: 'rgba(100,100,100, 0.4)',	//分隔线颜色，
                            type: 'dashed' //线的类型。'solid' 'dashed' 'dotted'
                        }
                    },
                    
                    axisLabel: {
                        //设置x轴数值显示模板
                        formatter: function (n) {
                          return Math.round(n) + '';
                        }
                    }
                },
                dataset: {
                    source: newArr //原始数据
                },
                 // y 轴数据
                yAxis: {
                    type: 'category',
                    inverse: true, 	// 大在上面，小在下面排序
                    max: 6,			// 显示类目的话，显示的是下标值，这里最多显示7个分类
                    data: startName,
                    axisLabel: {
                        show: true, //是否显示y轴分类名称
                        textStyle: {
                            fontSize: 14 //y轴分类名称的样式大小
                        },
                    },
                    animationDuration: 300, //图例翻页时的动画时长
                    animationDurationUpdate: 300 //更新数据时图例翻页时的动画时长
                },
                 series: [{
                    realtimeSort: true, //是否开启实时排序，用来实现动态排序图效果
                    seriesLayoutBy: 'column', //默认，dataset 的列对应于系列，从而 dataset 中每一列是一个维度（dimension）。
                    type: 'bar', // 为柱状图
                    itemStyle: {
                        color:function (param) { //设置每个分类对应的柱状颜色
                            return  countryColors[param.name];
                        }
                    },
                    encode: {
                        x: 0,
                        y: 3
                    },
                    label: { //控制y轴数值显示
                        show: true,  //是否显示
                        precision: 2, //文本标签中数值的小数点精度，表示保留两位小数
                        position: 'right',
                        valueAnimation: true,
                        fontFamily: 'monospace',
                        formatter: `{c}万亿` 
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