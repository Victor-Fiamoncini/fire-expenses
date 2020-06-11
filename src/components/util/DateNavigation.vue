<template>
	<nav id="date-navigation">Date Navigation</nav>
</template>

<script>
export default {
	name: 'DateNavigation',
	props: ['dates'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/app';

#date-navigation {
	width: 100%;
	background: $featured;
}
</style>
