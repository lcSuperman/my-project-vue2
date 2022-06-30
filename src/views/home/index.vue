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
          <div class="main">
              <div class="tabs">
                 <el-tabs v-model="editableTabsValue" type="card"  @tab-remove="removeTab">
                    <el-tab-pane
                      v-for="(item) in editableTabs"
                      :key="item.name"
                      :closable="item.title !== '首页' ? true : false"
                      :label="item.title"
                      :name="item.name"
                    >
                    </el-tab-pane>
                 </el-tabs>
                 <el-dropdown v-show="this.editableTabs.length > 5" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                      全部关闭<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="0">关闭所有</el-dropdown-item>
                      <el-dropdown-item command="1">关闭其他</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
              </div>
              <router-view />
          </div>
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

import {mapState} from 'vuex'

export default {
  computed:{
      ...mapState('collapse',['isCollapse','editableTabs','lastClickTab']),
      editableTabsValue:{
        get(){
          return this.$store.state.collapse.editableTabsValue
        },
        set(value){
          return this.$store.commit('collapse/CHANGETABSVALUE',value)
        }
      }
  },
  components:{
    Header,
    Logo,
    Menus,
    Home
  },
  mounted(){
    this.addTabs(this.$route)
  },
  watch:{
    //监控route变化，把导航路由添加到tabs中
    $route(newRoute){
      this.addTabs(newRoute)
    },
    //监控editableTabsValue变化，跳转路由
    editableTabsValue(newValue){
       this.$router.push({name:newValue})
    }
  },
  methods: {
      addTabs(route){
          var tab = {
            title:route.meta.title,
            name:route.name,
            number:route.meta.number
          }
          this.$store.commit('collapse/CLICKTABS',tab.name)
          var isHas = true
          this.editableTabs.forEach(item => {
            if(item.title == tab.title)  isHas = false
          });
          if(isHas){
            this.$store.commit('collapse/ADDTABS',tab)
          }
          if(this.editableTabsValue !== tab.name){
            this.$store.commit('collapse/CHANGETABSVALUE',tab.name)
          }   
      },

      removeTab(tabValue) {
        this.$store.commit('collapse/REMOVETABS',tabValue)
        var isHas = true
        var name
         this.editableTabs.forEach(item => {
            if(item.name == this.lastClickTab)  isHas = false
          });
        if(isHas){
            name = this.editableTabs[this.editableTabs.length -1].name
            this.$store.commit('collapse/CHANGETABSVALUE',name)
        }
      },
      handleCommand(command){
          if(command == '0'){
              var obj = {name:'home'} 
              this.$store.commit('collapse/CHANGETABSVALUE',obj.name)
          }else{
              var obj = {name:this.editableTabsValue,name2:'home'} 
          }
          this.$store.commit('collapse/REMOVEALLTABS',obj)
        
      }
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
    padding-top: 10px;
    .main{
      height: 100%;
      width: 100%;
      // background-color: rgb(245, 245, 245);
      .tabs{
         position: relative;
         .el-dropdown{
            position: absolute;
            right: 5px;
            bottom: 23px;
            .el-dropdown-link {
                cursor: pointer;
                color: #409EFF;
              }
              .el-icon-arrow-down {
                font-size: 12px;
              }

          }

      }
     
    
    }
  }
}

}
 
  
</style>