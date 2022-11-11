import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import './plugin.js'

import './global.css'; //公共样式

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
