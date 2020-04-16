import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state(){ //类似 vue 中 data
    return{
      value:5,
      num:0
    }
  },
  getters:{ //类似 vue 中 computed
    getStateValue(state){
      return state.value + 1
    }
  },
  mutations:{
    add(state, n){
      state.value = state.value + n
    },
    reduction(state){
      state.value = state.value - 1
    },
    add1(state){
      state.num = state.num + 1
    },
    minus(state){
      state.num = state.num -1
    }
  }
})
