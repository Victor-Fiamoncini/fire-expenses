import Vue from 'vue'

Vue.directive('money-format', (el, { value = 0 }) => {
	el.innerHTML = new Intl.NumberFormat('pt-br', {
		currency: 'BRL',
		style: 'currency',
		minimumFractionDigits: 2,
	}).format(value)
})
