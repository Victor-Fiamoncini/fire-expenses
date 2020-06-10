import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
	faSignOutAlt,
	faDollarSign,
	faHome,
	faList,
	faWallet,
	faSignInAlt,
	faSpinner,
	faPaperclip,
	faTrashAlt,
} from '@fortawesome/free-solid-svg-icons'

library.add(
	faSignOutAlt,
	faDollarSign,
	faHome,
	faList,
	faWallet,
	faSignInAlt,
	faSpinner,
	faPaperclip,
	faTrashAlt
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
