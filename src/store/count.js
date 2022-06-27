const countOptions = {
    namespaced: true,
    
    state: {
      count:0,
    },

    getters:{
      multipleCount(state){
        return state.count * 10
      }
    },

    mutations: {
      JIA(state,count){
        state.count += count
      },
      JIAN(state,count){
        state.count -= count
        if(state.count <= 0) state.count = 0
      },
    },

    actions:{
      asyncJia(context,value){
        return new Promise((resolve,reject) => {
          setTimeout(() => {
            context.commit('JIA',value)
            resolve()
          },1000)
        })  
      },
      oddJia({commit,state},value){
        if(state.count%2 !== 0){
          commit('JIA',value)
        }
      },
    },

}

export default countOptions