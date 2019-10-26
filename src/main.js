import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import "./assets/style/reset.css"
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import components from '@/components';
import MyLoading from '@/bus/loging.js';
import echarts from 'echarts';

import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueAxios,axios);
Vue.use(ElementUI);
Vue.use(components);
Vue.prototype.$echarts = echarts 
let loadingInstance=new MyLoading();
axios.interceptors.request.use(config=>{
//  new Vue().openLoading();
loadingInstance.open()
  return config;
})
axios.interceptors.response.use((data)=>{
  loadingInstance.close();
  return data;
})

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
