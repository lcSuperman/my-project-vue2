<template>
    <div class="headerNavigation">
        <span>退出</span> 
          <!--使用默认插槽-->
        <slot>默认展示</slot>
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
    background-color: rgb(255, 203, 147);
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