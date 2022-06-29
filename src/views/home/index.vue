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
               <el-tabs v-model="editableTabsValue" type="card" @tab-click="clickTab(editableTabsValue)" closable @tab-remove="removeTab(editableTabsValue)">
                  <el-tab-pane
                    v-for="(item) in editableTabs"
                    :key="item.name"
                    :label="item.title"
                    :name="item.name"
                  >
                  </el-tab-pane>
              </el-tabs>
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
  data() {
      return {
        editableTabsValue: '/home',
        editableTabs: []
      }
  },
  computed:{
        ...mapState('collapse',['isCollapse'])
  },
  components:{
    Header,
    Logo,
    Menus,
    Home
  },
  mounted(){
    this.addTab(this.$route)
  },
  watch:{
    //监控路由变化，把新路由信息添加到标签页
    $route(newRoute){
      var isAddTab = true
       this.editableTabs.forEach( tab => {
         if(tab.title == newRoute.name) isAddTab = false
       })

       if(isAddTab){
           this.editableTabs.push({
              title: newRoute.name,
              name: newRoute.path,
              number:newRoute.meta.number
           });
       }
      this.editableTabs.sort(this.compare('number'));
      this.editableTabsValue = newRoute.path;
    }

  },
  methods: {
      //数组内根据对象属性排序的方法
      compare(property) {
        return function (obj1, obj2) {
          let value1 = obj1[property];
          let value2 = obj2[property];
          return value1 - value2;     // 升序
        }
      },

      addTab(route) {
         this.editableTabs.push({
              title: route.name,
              name: route.path,
              number:route.meta.number
          });
        this.editableTabsValue = route.path;
      },

      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue; //当前打开的tab
        if (activeName === targetName) { //点击关闭的tab == 当前打开的tab
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.$bus.$emit('tabName',activeName)
        this.$router.push(activeName)
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      },

      clickTab(targetName){
         const arr = this.editableTabs.filter( tab =>{
            return tab.name == targetName
         })
         this.$bus.$emit('tabName',arr[0].name)
         this.$router.push(arr[0].name)
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
      .el-tabs__header{
        margin-bottom: 10px;
      }
    }
  }
}

}
 
  
</style>