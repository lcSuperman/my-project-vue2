<template>
   <div class="sevenContainer">
        <ul class="slot">
           <li class="slotContainer">
               <h3>未使用插槽</h3>
                <!--子组件未定义插槽时，若在组件内分发内容，将不会显示，后台也不会报错-->
               <HeaderNavi>
                    <span>11111111</span>
               </HeaderNavi>
           </li>
           <li class="slotContainer">
                <h3>默认插槽</h3>
                 <!--组件内的模板都会被插入到该组件内，组件内部模板样式写在该组件和子组件都可以-->
                <HeaderNavi1>
                    <el-input :style="{width:'60%'}" size="mini" placeholder="请输入内容"></el-input>
                    <span>首页</span>
                </HeaderNavi1>
           </li>
       </ul>
       <ul class="slot">
           <li class="slotContainer">
               <h3>具名插槽</h3>
                 <!--通过命名把模板内容分发到子组件相应的位置显示，未命名的就显示在默认插槽中-->
               <HeaderNavi2>
                    <template v-slot:left>
                        <span>退出</span>
                    </template>
                    <el-input :style="{width:'60%'}" size="mini" placeholder="请输入内容"></el-input>
                    <template v-slot:right>
                        <span>首页</span>
                    </template>
               </HeaderNavi2>
           </li>
           <li class="slotContainer">
                <h3>作用域插槽</h3>
                 <!--作用域插槽就是子组件通过sloat标签绑定属性传值（称为插槽 prop），父组件通过slotProps接受，可以使父组件访问到子组件的数据-->
                <HeaderNavi3>
                     <template v-slot:left="slotProps">
                        {{ slotProps.headerData.back }}
                    </template>
                </HeaderNavi3>
           </li>
       </ul>
      
   </div>
</template>
<script>
import HeaderNavi from '@/components/slotComponents/headerNavi'
import HeaderNavi1 from '@/components/slotComponents/headerNavi1'
import HeaderNavi2 from '@/components/slotComponents/headerNavi2'
import HeaderNavi3 from '@/components/slotComponents/headerNavi3'
export default {
   components:{
       HeaderNavi,
       HeaderNavi1,
       HeaderNavi2,
       HeaderNavi3
   }
}
</script>
<style lang='less' scoped>
.sevenContainer{
    .slot{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .slotContainer{
            width: 49%;
            height: 150px;
            box-sizing: border-box;
            padding: 10px 20px;
            background-color: rgb(245, 245, 245);
            
          
        }
    }
    
}
</style>