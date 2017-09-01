import Vue from 'vue'
import Electron from 'vue-electron'
import Resource from 'vue-resource'
import Router from 'vue-router'
import Swiper from 'swiper'

import App from './App'
import routes from './routes'

Vue.use(Electron)
Vue.use(Resource)
Vue.use(Router)
Vue.config.debug = true

// Vue.http.interceptors.push(function(request, next) {
// 	let token = window.localStorage.getItem('token');
// 	if (token) {
//   	request.headers.set('Authorization', 'Bearer ' + token);
// 	}
//   next();
// });

Vue.directive('swiper', {
	update: function (el, binding) {
		var mySwiper = new Swiper(binding.value.className, binding.value)
	}
})


const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
