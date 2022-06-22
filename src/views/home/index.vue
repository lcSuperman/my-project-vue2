<template>
  <div class="homeContainer">
     <el-container>
      <el-aside :width="isCollapse ? '64px' : '165px'">
        <Logo></Logo>
        <Menus :collapseWidth="isCollapse ? '64px' : '165px'"></Menus>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
           <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from "@/components/header"
import Logo from "@/components/leftAside/logo"
import Menus from "@/components/leftAside/menus"
import Home from "./home"


export default {
  data(){
    return{
      isCollapse:false
    }
  },
  mounted(){
   //利用事件中心机制触发isCollapse事件，判断菜单是否展开来设置左侧菜单的宽
      this.$bus.$on('isCollapse',value => {
        this.isCollapse = value
      })
  },
  components:{
    Header,
    Logo,
    Menus,
    Home
  }
}
</script>
<style lang='less' scoped>
 @import '~@/assets/less/styles.less';
.homeContainer{
  height: 100%;
  .el-container {
  height: 100%;
  .el-aside {
    background-color: @left-aside;
    transition: width .4s;
    overflow: hidden;
  }
  .el-header{
     background-color:@header-color;
  }
  .el-main{
    background-color: #fff;
    .main{
      width: 100%;
      height:100%;
      background-color: #f6f6f6;    
    }
  }
}

}
 
  
</style>