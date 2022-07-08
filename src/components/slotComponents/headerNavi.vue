<template>
    <div class="headerNavigation">
        <!--未使用插槽-->
        <span>退出</span> 
        <el-input :style="{width:'60%'}" size="mini" placeholder="请输入内容"></el-input>
        <span>首页</span>
   </div>
</template>
<script>
export default {
}
</script>
<style lang='less' scoped>
 .headerNavigation{
    margin-top: 20px;
    height: 50px;
    width: 100%;
    background-color: rgb(151, 172, 255);
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