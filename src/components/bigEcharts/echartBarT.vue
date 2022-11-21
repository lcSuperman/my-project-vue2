<template>
   <div  id="myEchartW"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
   
    mounted(){
      this.initEchart()
    },
    methods:{
        initEchart(){
            var chartDom = document.getElementById('myEchartW');
            var myChartG = echarts.init(chartDom);
            var option;
         
            var data1 =[
                {
                name: "汽车租赁",
                value: 89,
                sum: 100,
                },
                {
                name: "工程机械",
                value: 28,
                sum: 90,
                },
                {
                name: "船舶",
                value: 10,
                sum: 100,
                },
                {
                name: "户用光伏",
                value: 76,
                sum: 100,
                },
                {
                name: "产业集群",
                value: 106,
                sum: 120,
                },
                {
                name: "网约车",
                value: 98,
                sum: 130,
                },
                {
                name: "办公设备",
                value: 128,
                sum: 130,
                },
                {
                name: "风车吊装",
                value: 20,
                sum: 100,
                },
                {
                name: "冷库",
                value: 53,
                sum: 100,
                },
            ]
            var data2 = [
                {
                name: "汽车租赁",
                value: 89,
                sum: 100,
                },
                {
                name: "工程机械",
                value: 28,
                sum: 90,
                },
                {
                name: "船舶",
                value: 10,
                sum: 100,
                },
                {
                name: "户用光伏",
                value: 76,
                sum: 100,
                },
                {
                name: "产业集群",
                value: 106,
                sum: 120,
                },
                {
                name: "网约车",
                value: 98,
                sum: 130,
                },
                {
                name: "办公设备",
                value: 128,
                sum: 130,
                },
                {
                name: "风车吊装",
                value: 20,
                sum: 100,
                },
                {
                name: "冷库",
                value: 53,
                sum: 100,
                },
            ]
            let getArrByKey = (data, k) => {
                let key = k || "value";
                let res = [];
                if (data) {
                data.forEach(function (t) {
                    res.push(t[key]);
                });
                }
                return res;
            }
            // [起始最深颜色,结束的浅颜色]
            let colorLeft = ["#2ceefd", "#072662"];
            let colorRight = [ "#072662","#f80008"];


            option={
                 grid: [
                    {
                        show: false,
                        left: "5%",
                        top: "8%",
                        bottom: "4%",
                        width: "36%",
                    },
                    {
                        show: false,
                        left: "52.5%",
                        top: "8%",
                        bottom: "4%",
                        width: "0%",
                    },
                    {
                        show: false,
                        right: "5%",
                        top: "8%",
                        bottom: "4%",
                        width: "36%",
                    },
                ],
                xAxis: [
                    {
                        type: "value",
                        inverse: true,
                        axisLine: {
                         show: false,
                        },
                        axisTick: {
                         show: false,
                        },
                        position: "bottom",
                        axisLabel: {
                         show: false,
                        },
                        splitLine: {
                         show: false,
                        },
                    },
                    {
                        gridIndex: 1,
                        show: false,
                    },
                    {
                        gridIndex: 2,
                        show: true,
                        type: "value",
                        inverse: false,
                        axisLine: {
                         show: false,
                        },
                        axisTick: {
                         show: false,
                        },
                        position: "bottom",
                        axisLabel: {
                         show: false,
                        textStyle: {
                            color: "white",
                        },
                        },
                        splitLine: {
                          show: false,
                        },
                    }

                ],
                 yAxis: [
                    {
                        gridIndex: 0,
                        triggerEvent: true,
                        show: true,
                        inverse: true,
                        data: getArrByKey(data1, "name"),
                        axisLine: {
                         show: false,
                        },
                        splitLine: {
                         show: false,
                        },
                        axisTick: {
                         show: false,
                        },
                        axisLabel: {
                         show: false,
                        },
                    },
                     {
                        gridIndex: 1,
                        type: "category",
                        inverse: true,
                        position: "left",
                        axisLine: {
                         show: false,
                        },
                        axisTick: {
                         show: false,
                        },
                        axisLabel: {
                        show: true,
                        interval: 0,
                        align: "auto",
                        verticalAlign: "middle",
                        textStyle: {
                            color: "#cecece",
                            fontSize: 10,
                            align: "center",
                        },
                        },
                        data: getArrByKey(data1, "name"),
                    },
                    {
                        gridIndex: 2,
                        triggerEvent: true,
                        show: true,
                        inverse: true,
                        data: getArrByKey(data2, "name"),
                        axisLine: {
                        show: false,
                        },
                        splitLine: {
                        show: false,
                        },
                        axisTick: {
                        show: false,
                        },
                        axisLabel: {
                        show: false,
                        },
                    }

                 ],
                 series: [
                    {
                        type: "bar",
                        gridIndex: 0,
                        backgroundStyle: {
                         barBorderRadius: 30,
                        },
                        xAxisIndex: 0,
                        yAxisIndex: 0,
                        data: data1,
                        barWidth: 6,
                        itemStyle: {
                        normal: {
                            show: true,
                            color: new echarts.graphic.LinearGradient(0,0,1,0,
                            [
                                {
                                offset: 0,
                                color: colorLeft[0], //指0%处的颜色
                                },
                                {
                                offset: 1,
                                color: colorLeft[1], //指100%处的颜色
                                },
                            ],
                            false
                            ),
                            barBorderRadius: [10, 0, 0, 10],
                        },
                        },

                        label: {
                        normal: {
                            show: true,
                            position: "left",
                            textStyle: {
                            color: "#cecece",
                            fontSize: "10",
                            },
                        },
                        },
                    },
                    {
                        type: "bar",
                        xAxisIndex: 2,
                        yAxisIndex: 2,
                        gridIndex: 2,
                        showBackground: false,
                        backgroundStyle: {
                        barBorderRadius: 30,
                        },
                        data: data2,
                        barWidth: 6,
                        itemStyle: {
                            normal: {
                                show: true,
                                color: new echarts.graphic.LinearGradient(0,0,1,0,
                                [
                                    {
                                    offset: 0,
                                    color: colorRight[0], //指0%处的颜色
                                    },
                                    {
                                    offset: 1,
                                    color: colorRight[1], //指100%处的颜色
                                    },
                                ],
                                false
                                ),
                                barBorderRadius: [0, 10, 10, 0],
                            },
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'right', //在上方显示
                                textStyle: {
                                 color: "#cecece",
                                 fontSize: "10",
                                },
                            },
                        },
                    }

                 ],


            }
            option && myChartG.setOption(option);
            window.addEventListener("resize", () => {
                myChartG.resize();
            });
        }
    }
}
</script>
<style lang='less' scoped>
#myEchartW{
    height:100%;
    width: 100%;
}
</style>