<template>
    <div class="headerNavigation">
        <!--使用默认插槽 和具名插槽-->
        <span>
            <slot name="left"></slot>
        </span> 
        <slot></slot>
        <span>
            <slot name="right"></slot>
        </span> 
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
    background-color: rgb(226, 222, 141);
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