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
    //刷新页面或者初始化还定位显示改路由组件的editableTabs
    this.addTabs(this.$route)
  },
  watch:{
    //监控route变化，点击导航时把导航路由添加到editableTabs中
    $route(newRoute){
      //判断当前editableTabsValue（标签tab）是否等于 该路由的anme，等于的话就不再添加了
       if(this.editableTabsValue !== newRoute.name){
          this.addTabs(newRoute)
       } 
    },
    //点击标签就会改变editableTabsValue，监控editableTabsValue变化，随着editableTabsValue跳转对应路由
    editableTabsValue(newValue){
       this.$router.push({name:newValue})
    }
  },
  methods: {
     //添加单个标签信息tab到editableTabs中
      addTabs(route){
          var tab = {
            title:route.meta.title,
            name:route.name,
            number:route.meta.number
          }
          //每次添加都是最后一次点击，所以把点击的name（editableTabsValue）存起来
          this.$store.commit('collapse/CLICKTABS',tab.name)
          //这里做判断是否添加的导航tab已经存在
          var isHas = true
          this.editableTabs.forEach(item => {
            if(item.title == tab.title)  isHas = false
          });
          //导航tab不存在就添加editableTabs中
          if(isHas){
            this.$store.commit('collapse/ADDTABS',tab)
          }
          this.$store.commit('collapse/CHANGETABSVALUE',tab.name)  
      },
      // 删除单个tab
      removeTab(tabValue) {
        //把点击删除的tab过滤掉
        this.$store.commit('collapse/REMOVETABS',tabValue)
        
        var isHas = true
        var name
         this.editableTabs.forEach(item => {
            if(item.name == this.lastClickTab)  isHas = false
          });
          //这里做判断，如果删除的是当前标签tab,就显示最后一个标签tab,如果删除的是其他，就不用操作，只过滤标签就行
        if(isHas){
            name = this.editableTabs[this.editableTabs.length -1].name
            this.$store.commit('collapse/CHANGETABSVALUE',name)
        }
      },
      //全部关闭
      handleCommand(command){
          if(command == '0'){
              var obj = {name:'home'} 
              //只保留home,并且editableTabsValue该为home,跳转到home组件
              this.$store.commit('collapse/CHANGETABSVALUE',obj.name)
          }else{
             //保留当前标签和home
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