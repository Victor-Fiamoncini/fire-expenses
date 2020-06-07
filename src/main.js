import Vue from 'vue'
import Toasted from 'vue-toasted'
import { BootstrapVue, ModalPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './libs/icons'
import './utils/directives'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(ModalPlugin)
Vue.use(Toasted)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
