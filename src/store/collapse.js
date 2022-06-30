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
       ADDTABS(state,tab){
         state.editableTabs.push(tab)
         state.editableTabs.sort(compare('number'));
       },
       CHANGETABSVALUE(state,value){
        state.editableTabsValue = value
       },
       REMOVETABS(state,name){
        state.editableTabs = state.editableTabs.filter( tab => {
            return tab.name !== name
        })
       },
       CLICKTABS(state,value){
          state.lastClickTab = value
       }

    }
}