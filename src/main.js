import Vue from 'vue'

import FirebaseVue from './plugins/firebase'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/app.scss'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(FirebaseVue)
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
