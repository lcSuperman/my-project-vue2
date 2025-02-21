<template>
    <div class="childrenFour">
     <div class="echarts_content">
          <ul class="echarts_ul">
             <li>
                <span class="echart_title">暂存库物资存量（分地市分析）</span>
                <One></One>
             </li>
             <li>
                <span class="echart_title">全省暂存库库存趋势对比分析</span>
                <Two></Two>
             </li>
          </ul>
     </div>
    </div>
</template>
<script>
import One from '@/components/twoScreen/four/one_one'
import Two from '@/components/twoScreen/four/one_two'
 export default{
   components:{
     One,
     Two
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
        .echarts_ul{
            height: 100%;
            width: 100%;
            li{
                width: 100%;
                height: 48%;
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
            li:first-child{
                margin-bottom: 30px;
            }
        }
    }
}
</style>