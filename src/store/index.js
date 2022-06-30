import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import countOptions  from './count'
import addPersonOption from './addPerson'
import collapse  from './collapse'

const store =  new Vuex.Store({
  modules:{
    countOptions,
    addPersonOption,
    collapse
  }
})

export default store