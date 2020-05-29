import Vue from 'vue'
import FirebaseVue from './plugins/firebase'
import router from './router'
import store from './store'

import App from './App.vue'

Vue.use(FirebaseVue)
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
