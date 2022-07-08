<template>
    <div class="headerNavigation">
        <!--使用具名插槽 和 作用域插槽-->
        <span>
            <slot :headerData="headerData" name="left">{{headerData.leftTitle}}</slot>
        </span> 
        <el-input :style="{width:'60%'}" size="mini" placeholder="请输入内容"></el-input>
        <span> 
            <slot name="right">{{headerData.tightTitle}}</slot>
        </span> 
   </div>
</template>
<script>
export default {
    data(){
        return{
           headerData:{
             leftTitle:'退出',
             back:'返回',
             tightTitle:'首页'
           }
        }
    }
   
}
</script>
<style lang='less' scoped>
 .headerNavigation{
    margin-top: 20px;
    height: 50px;
    width: 100%;
    background-color: rgb(159, 203, 250);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 20px;
    span{
        color: #fff;
    }
}
</style>