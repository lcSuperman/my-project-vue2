import {compare} from '../utils/tools'
export default {
    namespaced: true,
    state:{
        isCollapse:false, //菜单是否展开
        editableTabs:[{
            title:'首页',
            name:'home',
            number:0
        }], // tabs标签
        editableTabsValue: 'home', //当前打开的nameValue
        lastClickTab:'' //最后一次点击tabs
    },
    mutations: {
       CHANGECOLLAPE(state){ //改变菜单展开的状态
          state.isCollapse = !state.isCollapse
       },
       ADDTABS(state,tab){  //添加tabs
         state.editableTabs.push(tab)
         state.editableTabs.sort(compare('number'));
       },
       CHANGETABSVALUE(state,value){ //改变tabsValue的值
        state.editableTabsValue = value
       },
       REMOVETABS(state,name){ //删除tabs
        state.editableTabs = state.editableTabs.filter( tab => {
            return tab.name !== name
        })
       },
       REMOVEALLTABS(state,obj){ //关闭全部tabs
        state.editableTabs = state.editableTabs.filter( tab => {
            if(!obj.name2){
                return tab.name == obj.name
            }else{
                return tab.name == obj.name ||  tab.name == obj.name2
            }  
        })
       },
       CLICKTABS(state,value){ //保存最后一次点击的tabsValue
          state.lastClickTab = value
       }

    }
}