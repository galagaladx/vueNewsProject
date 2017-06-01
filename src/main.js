import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Loading from './components/loading'
import filters from './filters'
// console.log(filters);
// Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]));
Vue.filter('normalTime', filters.normalTime.normalTime);

Vue.use(Loading)
// axios配置
axios.interceptors.request.use((config) => { //发送请求
  store.dispatch('showLoading');
  return config;
}, (err) => {
  return Promise.reject(err);
});

axios.interceptors.response.use(function(response) { //请求回来
	store.dispatch('hideLoading')
	return response;
}, function(error) {
	return Promise.reject(error);
});
// //axios.defaults.baseURL='http://localhost:8082/'; //配置请求根路径
// //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios;
require('./assets/css/base.css');

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
