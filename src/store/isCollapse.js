export default {
    namespaced: true,
    state:{
        isCollapse:false
    },
    mutations: {
       CHANGECOLLAPE(state){
          state.isCollapse = !state.isCollapse
       } 
    }
}