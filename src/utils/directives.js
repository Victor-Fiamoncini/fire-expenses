import Vue from 'vue'
import moment from 'moment'

Vue.directive('money-format', (el, { value = 0 }) => {
	el.innerHTML = new Intl.NumberFormat('pt-br', {
		currency: 'BRL',
		style: 'currency',
		minimumFractionDigits: 2,
	}).format(value)
})

Vue.directive('date-format', (el, { value = 0 }) => {
	el.innerHTML = moment(value).format('DD/MM/YYYY [às] HH:mm:ss')
})
