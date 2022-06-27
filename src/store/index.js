import Vue from 'vue'
import Vuex from 'vuex'
import {message} from 'element-ui'
Vue.use(Vuex)

import countOptions  from './count'
import addPersonOption from './addPerson'

const store =  new Vuex.Store({
  modules:{
    countOptions,
    addPersonOption
  }
})

export default store