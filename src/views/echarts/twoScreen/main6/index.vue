<template>
    <div class="childrenFour">
     <div class="echarts_content">
          <ul class="echarts_ul">
             <li>
                <div class="carts_content">
                    <div class="carts" v-for="(item,index) in cartsData" :key="index">
                        <div class="cart_li"  @click="onclickTabs(item)">
                            <div class="img_box" :style="{'backgroundColor':item.bgColor,}">
                                <img :src="item.img" :alt="item.title">
                            </div>
                            <div class="title_count">
                                <div class="count">
                                    <span class="nums" :style="{'color':item.color,}">{{ item.count }}</span>
                                    <div class="icon_unit">
                                        <span>万元</span>
                                        <div class="RMBicon">￥</div>
                                    </div>
                                    
                                </div>
                                <span>{{ item.title }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="echarts_contanier">
                    <span class="echart_title">{{ echart_title_tab }}</span>
                    <Five :active_data="active_tab_echart_item"></Five>
                </div>
             </li>
             <li>
                <div class="carts_content">
                    <div class="carts carts6" v-for="(item,index) in cartsData6" :key="index">
                        <div class="cart_li"  @click="onclickTabs6(item)">
                            <div class="img_box" :style="{'backgroundColor':item.bgColor,}">
                                <img :src="item.img" :alt="item.title">
                            </div>
                            <div class="title_count">
                                <div class="count">
                                    <span class="nums" :style="{'color':item.color,}">{{ item.count }}</span>
                                    <div class="icon_unit">
                                        <span>万元</span>
                                        <div class="RMBicon">￥</div>
                                    </div>
                                    
                                </div>
                                <span>{{ item.title }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="echarts_contanier">
                    <span class="echart_title">{{ echart6_title_tab }}</span>
                    <Six :active_data="active_tab_echart6_item"></Six>
                </div>
                
             </li>
          </ul>
     </div>
    </div>
</template>
<script>
import Five from '@/components/twoScreen/four/one_five'
import Six from '@/components/twoScreen/four/one_six'
import caigou from './imgs/caigou.png'
import chuku from './imgs/chuku.png'
import installed from './imgs/installed.png'
import noinstall from './imgs/noinstall.png'
import zancunkucun from './imgs/zancunkucun.png'
import zhanyongkucun from './imgs/zhanyongkucun.png'
import zancun from './imgs/zancun.png'
 export default{
   data(){
     return {
        cartsData:[
            {
                img:caigou,
                count:'1234.5',
                echart_title:'全省采购金额',
                title:'采购',
                color:'#FF9C6E',
                bgColor:'rgba(255,156,110,.2)',
                echartData:{
                    dataX: ['省公司', '南充', '凉山', '宜宾', '成都', '天府新区', '德阳','巴中','达州','内江','乐山','阿坝','广安','资阳','甘孜','绵阳','泸州','攀枝花','遂宁','眉山','雅安','广元','自贡'],
                    dataY: [52484.3, 17579.3, 11947.2, 9525.7, 8995.6, 4382.1, 4025.0,3889.4,3232.0,3117.1,3062.5,2646.0,2590.2,2340.2,2133.0,1998.3,1134.5,999.5,938.4,838.5,799.4,708.9,600],
                    maxData:60000,
                },
            },
            {
                img:zhanyongkucun,
                count:'3333.0',
                echart_title:'全省专用库金额',
                title:'专用库库存',
                color:'#60B5F2',
                bgColor:'rgba(96,181,242,.2)',
                echartData:{
                    dataX: ['省公司', '南充', '凉山', '宜宾', '成都', '天府新区', '德阳','巴中','达州','内江','乐山','阿坝','广安','资阳','甘孜','绵阳','泸州','攀枝花','遂宁','眉山','雅安','广元','自贡'],
                    dataY: [52484.3, 17579.3, 11947.2, 9525.7, 8995.6, 4382.1, 4025.0,3889.4,3232.0,3117.1,3062.5,2646.0,2590.2,2340.2,2133.0,1998.3,1134.5,999.5,938.4,838.5,799.4,708.9,600],
                    maxData:60000,
                },
            },
            {
                img:chuku,
                count:'56789.0',
                echart_title:'全省出库金额',
                title:'出库',
                color:'#7FD65E',
                bgColor:'rgba(127,214,94,.3)',
                echartData:{
                    dataX: ['省公司', '南充', '凉山', '宜宾', '成都', '天府新区', '德阳','巴中','达州','内江','乐山','阿坝','广安','资阳','甘孜','绵阳','泸州','攀枝花','遂宁','眉山','雅安','广元','自贡'],
                    dataY: [64484.3, 47579.3, 31947.2, 20525.7, 10995.6, 8382.1, 6025.0,3889.4,3232.0,3117.1,3062.5,2646.0,2590.2,2340.2,2133.0,1998.3,1134.5,999.5,938.4,838.5,799.4,708.9,600],
                    maxData:65000,
                },
            },
            {
                img:zancunkucun,
                count:'12356.0',
                echart_title:'全省暂存库库存金额',
                title:'暂存库库存',
                color:'#FFD666',
                bgColor:'rgba(255,214,102,.2)',
                echartData:{
                    dataX: ['省公司', '南充', '凉山', '宜宾', '成都', '天府新区', '德阳','巴中','达州','内江','乐山','阿坝','广安','资阳','甘孜','绵阳','泸州','攀枝花','遂宁','眉山','雅安','广元','自贡'],
                    dataY: [74484.3, 47579.3, 33947.2, 10525.7, 9995.6, 4382.1, 4025.0,3889.4,3232.0,3117.1,3062.5,2646.0,2590.2,2340.2,2133.0,1998.3,1134.5,999.5,938.4,838.5,799.4,708.9,600],
                    maxData:75000.3,
                }
            },
            {
                img:installed,
                count:'123747.0',
                echart_title:'全省站点（已安装）金额',
                title:'已安装',
                color:'#5CDBD3',
                bgColor:'rgba(92,219,211,.2)',
                echartData:{
                    dataX: ['省公司', '南充', '凉山', '宜宾', '成都', '天府新区', '德阳','巴中','达州','内江','乐山','阿坝','广安','资阳','甘孜','绵阳','泸州','攀枝花','遂宁','眉山','雅安','广元','自贡'],
                    dataY: [52484.3, 17579.3, 11947.2, 9525.7, 8995.6, 4382.1, 4025.0,3889.4,3232.0,3117.1,3062.5,2646.0,2590.2,2340.2,2133.0,1998.3,1134.5,999.5,938.4,838.5,799.4,708.9,600],
                    maxData:55000,
                }
            },   
            {
                img:noinstall,
                count:'87653.0',
                echart_title:'全省站点（未安装）金额',
                title:'未安装',
                color:'#FC8383',
                bgColor:'rgba(252,131,131,.2)',
                echartData:{
                    dataX: ['省公司', '南充', '凉山', '宜宾', '成都', '天府新区', '德阳','巴中','达州','内江','乐山','阿坝','广安','资阳','甘孜','绵阳','泸州','攀枝花','遂宁','眉山','雅安','广元','自贡'],
                    dataY: [52484.3, 17579.3, 11947.2, 9525.7, 8995.6, 4382.1, 4025.0,3889.4,3232.0,3117.1,3062.5,2646.0,2590.2,2340.2,2133.0,1998.3,1134.5,999.5,938.4,838.5,799.4,708.9,600],
                    maxData:55000,
                }
            },
        ],
        cartsData6:[
            {
                img:zancun,
                count:'12356.0',
                echart_title:'全省分施工单位暂存库库存金额',
                title:'暂存',
                color:'#63A8E4',
                bgColor:'rgba(99,168,228,.2)',
                echartData:{
                    dataX: ['华为技术服务股份有限公司', '四川益明电信工程总承包有限公司2', '四川益明电信工程总承包有限公司3', '四川益明电信工程总承包有限公司4', '四川益明电信工程总承包有限公司5', '四川益明电信工程总承包有限公司6', '四川益明电信工程总承包有限公司7','四川益明电信工程总承包有限公司8','四川益明电信工程总承包有限公司9','四川益明电信工程总承包有限公司10','四川益明电信工程总承包有限公司11','四川益明电信工程总承包有限公司12','四川益明电信工程总承包有限公司13','四川益明电信工程总承包有限公司14','四川益明电信工程总承包有限公司15','四川益明电信工程总承包有限公司16','四川益明电信工程总承包有限公司17','四川益明电信工程总承包有限公司18','四川益明电信工程总承包有限公司19','四川益明电信工程总承包有限公司20','四川益明电信工程总承包有限公司21','四川益明电信工程总承包有限公司22','四川益明电信工程总承包有限公司23'],
                    dataY: [74484.3, 74000.9, 74000, 74000.7, 73000.6, 63000.1, 60000.0,60000.4,60000.0,60000.1,60000.5,60000.0,60000.2,59000.2,55000.0,55000.3,55000.5,55000.5,50000.4,50000,500000.4,50000.9,40000],
                    maxData:80000,
                }
            },
            {
                img:installed,
                count:'123747.0',
                echart_title:'全省分施工单位站点（已安装）金额',
                title:'已安装',
                color:'#5CDBD3',
                bgColor:'rgba(92,219,211,.2)',
                echartData:{
                    dataX: ['华为技术服务股份有限公司', '四川益明电信工程总承包有限公司2', '四川益明电信工程总承包有限公司3', '四川益明电信工程总承包有限公司4', '四川益明电信工程总承包有限公司5', '四川益明电信工程总承包有限公司6', '四川益明电信工程总承包有限公司7','四川益明电信工程总承包有限公司8','四川益明电信工程总承包有限公司9','四川益明电信工程总承包有限公司10','四川益明电信工程总承包有限公司11','四川益明电信工程总承包有限公司12','四川益明电信工程总承包有限公司13','四川益明电信工程总承包有限公司14','四川益明电信工程总承包有限公司15','四川益明电信工程总承包有限公司16','四川益明电信工程总承包有限公司17','四川益明电信工程总承包有限公司18','四川益明电信工程总承包有限公司19','四川益明电信工程总承包有限公司20','四川益明电信工程总承包有限公司21','四川益明电信工程总承包有限公司22','四川益明电信工程总承包有限公司23'],
                    dataY: [74484.3, 74000.9, 74000, 74000.7, 73000.6, 63000.1, 60000.0,60000.4,60000.0,60000.1,60000.5,60000.0,60000.2,59000.2,55000.0,55000.3,55000.5,55000.5,50000.4,50000,500000.4,50000.9,40000],
                    maxData:80000,
                }
            },   
            {
                img:noinstall,
                count:'87653.0',
                echart_title:'全省分施工单位站点（未安装）金额',
                title:'未安装',
                color:'#FC8383',
                bgColor:'rgba(252,131,131,.2)',
                echartData:{
                    dataX: ['华为技术服务股份有限公司', '四川益明电信工程总承包有限公司2', '四川益明电信工程总承包有限公司3', '四川益明电信工程总承包有限公司4', '四川益明电信工程总承包有限公司5', '四川益明电信工程总承包有限公司6', '四川益明电信工程总承包有限公司7','四川益明电信工程总承包有限公司8','四川益明电信工程总承包有限公司9','四川益明电信工程总承包有限公司10','四川益明电信工程总承包有限公司11','四川益明电信工程总承包有限公司12','四川益明电信工程总承包有限公司13','四川益明电信工程总承包有限公司14','四川益明电信工程总承包有限公司15','四川益明电信工程总承包有限公司16','四川益明电信工程总承包有限公司17','四川益明电信工程总承包有限公司18','四川益明电信工程总承包有限公司19','四川益明电信工程总承包有限公司20','四川益明电信工程总承包有限公司21','四川益明电信工程总承包有限公司22','四川益明电信工程总承包有限公司23'],
                    dataY: [74484.3, 74000.9, 74000, 74000.7, 73000.6, 63000.1, 60000.0,60000.4,60000.0,60000.1,60000.5,60000.0,60000.2,59000.2,55000.0,55000.3,55000.5,55000.5,50000.4,50000,500000.4,50000.9,40000],
                    maxData:80000,
                }
            },
        ],
        echart_title_tab:'全省采购金额',
        echart6_title_tab:'全省分施工单位暂存库库存金额',
        active_tab_echart_item:{},
        active_tab_echart6_item:{},
     }
   },
   components:{
    Five,
    Six
   },
   mounted(){
     this.active_tab_echart_item = this.cartsData[0]
     this.active_tab_echart6_item = this.cartsData6[0]
   },
   methods:{
    onclickTabs(item){
        this.active_tab_echart_item = item
        this.echart_title_tab = item.echart_title
    },
    onclickTabs6(item){
        this.active_tab_echart6_item = item
        this.echart6_title_tab = item.echart_title
    }
   }
 }

</script>

<style  lang='less' scoped>
@import '~@/assets/less/echart.less';
.childrenFour{
    height: 100%;
    width: 100%;
    .echarts_content{
        height: calc(100%);
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        padding:20px 20px 10px 20px;
        background-color: #e3e3e3;
        .echarts_ul{
            height: 100%;
            width: 100%;
            li{
                width: 100%;
                height: 48.5%;
                .carts_content{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    .carts{
                      width: 16.3%;
                      box-sizing: border-box;
                      background-color: #fff;
                      border-radius: 10px;
                      display: flex;
                      justify-content: space-around;
                      align-items: center;
                      .cart_li{
                        padding: 25px 10px;
                        border-radius: 10px;
                        display: flex;
                        cursor: pointer;
                        .img_box{
                            height: 70px;
                            width: 70px;
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            img{
                                height: 60%;
                            }
                        }
                        .title_count{
                            color:#000;
                            margin-left: 10px;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-around;
                            padding-bottom: 5px;
                            .count{
                                display: flex;
                                align-items:flex-end;
                                .nums{
                                    font-size: 30px;
                                    font-weight: 700;
                                }
                                .icon_unit{
                                    display: flex;
                                    align-items: center;
                                    margin-left: 2px;
                                    margin-bottom: 4px;
                                    span{
                                        white-space: nowrap;
                                    }
                                    .RMBicon{
                                        height: 18px;
                                        width: 18px;
                                        background-color: #000;
                                        color:#fff;
                                        border-radius:50%;
                                        text-align: center;
                                        line-height: 18px;
                                        margin-left: 3px;
                                    } 
                                }
                               
                            }
                           
                        }

                      }
                    
                      
                    }
                    .carts6{
                        width: 33%;
                    }
                }
                .echarts_contanier{
                    background-color: #fff;
                    padding: 10px;
                    height: calc(100% - 170px);
                    .echart_title{
                        font-weight: 700;
                        font-size: 18px;
                        display: flex;
                        align-items: center;
                        color:#000;
                    }
                    .echart_title::before{
                        content: "";
                        height: 22px;
                        width: 6px;
                        background-color: #148bed;
                        display: inline-block;
                        margin-right: 5px;
                        margin-left: 10px;
                    }

                }
               
            }
            li:first-child{
                margin-bottom: 10px;
            }
        }
    }
}
</style>