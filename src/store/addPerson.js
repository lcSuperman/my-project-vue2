import {message} from 'element-ui'
const addPersonOption = {
    namespaced: true,
    state: {
      filterTable:[]
    },

    getters: {
        onePersonName(state){
           return state.filterTable[0].name
        }
    },

    mutations: {
      ADDPERSON(state,person){
        state.filterTable.push(...person)
      },
      RESTPERSON(state,person){
        state.filterTable = []
        state.filterTable.push(...person)
      }
    },

    actions:{
      addPerson({commit,state},obj){
        var isHave = true
        state.filterTable.forEach( e => {
            if(e.name == obj.value)  isHave = false
        })
        if(!isHave){
            message({
                message: '人员已添加！',
                type: 'warning',
                duration:1000
            })
            return
        }
        
        var person =  obj.options.filter( item => {
          return item.name == obj.value
        })
        commit('ADDPERSON',person)
      },
      restPerson({commit,state},value){
        state.filterTable = []
        commit('ADDPERSON',value)
      }
    },

}

export default addPersonOption