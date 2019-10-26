import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state={
  isdpshow:true,
  showBottomNav:true,
}
import juyuan from "./juyuan";
import home from "./home"
export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  getters:{},
  modules:{
    juyuan,
    home
  },
})
