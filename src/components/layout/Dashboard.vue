<template>
	<b-container fluid>
		<b-row>
			<Sidebar />
			<b-col>
				<router-view />
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
import Sidebar from './Sidebar'

export default {
	name: 'Dashboard',
	components: {
		Sidebar,
	},
}
</script>

<style lang="scss" scoped>
</style>
