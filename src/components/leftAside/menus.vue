<template>
    <el-menu
    class="el-menu-vertical-demo"
    router
    :collapse="isCollapse"
    @select="handleSelect"
    :style="{width:collapseWidth}"
    :default-active="defaultactive"
    text-color="#fff"
    active-text-color="#000"
    >
        <div v-for="item in menusData" :key="item.id">  
        <el-submenu v-if="item.children"  :index="item.router">
            <template slot="title">
                <i class="iconfont" :class="item.icon"></i>
                <!-- 这里用v-show是解决收起时一级菜单文字不隐藏问题 -->
                <span v-show="!isCollapse">{{item.label}}</span>
            </template>
            <el-menu-item v-for="ite in item.children" :key="ite.id" :index="ite.router"> 
                <span>{{ite.label}}</span>
            </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.router" >
            <i class="iconfont" :class="item.icon"></i>
            <template slot="title">{{item.label}}</template>
        </el-menu-item>
        </div>    
    </el-menu>
</template>
<script>
import { getMenus} from '@/api'
import {mapState} from 'vuex'
export default {
    data(){
        return{
            defaultactive:null,
            menusData:[],
        }
    },
    props:['collapseWidth'],
    computed:{
       ...mapState('collapse',['isCollapse'])
    },
    mounted(){
        this.getMenusData()

        //浏览器刷新后，从sessionStorage中获取之前保存的菜单index
        this.defaultactive =  sessionStorage.getItem('activeMenu')
        
        //利用事件中心机制触发activeMeus事件设置被点击的菜单，回显点击样式
        this.$bus.$on('activeMeus',value => {
          this.defaultactive = value
        })

        this.$bus.$on('tabName',value => {
           this.handleSelect(value)
        }) 
    },
  
    methods:{
        getMenusData(){
            getMenus().then( response => {
                this.menusData = response.data
            })
        },
        handleSelect(index){
            this.defaultactive = index
            //把目前点击的菜单index存到sessionStorage中，保证浏览器刷新时还是之前触发的菜单
            sessionStorage.setItem('activeMenu',index)
        }
    }
}
</script>
<style lang="less">
@import '~@/assets/less/styles.less';
.el-menu{
  border-right:none;
  background-color:@left-aside;
  transition: width .35s;
  .el-menu-item{
    font-size:15px; 
    color: @left-saide-text;
  }
  .el-menu-item:hover{
     background-color:@menus-hover;
  }
  .el-submenu__title:hover{
    background-color:@menus-hover;
  }
  li.el-menu-item.is-active{
    background-color: #fff;
    
  }
  li.el-submenu.is-active .el-submenu__title{
     color: #000 !important;
    i{
      color: #000;
    }
  }

 
  .el-submenu__icon-arrow{
    color: @left-saide-text;
  }
  
  .iconfont{
   padding-right: 8px;
   color: @left-saide-text;
   
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
   transition: width .5s;
   min-height: 400px;
  }
  .el-icon-arrow-right{
    display: none;
  }
  .el-submenu{
    background-color:@left-aside;
  }
 

}

 

</style>