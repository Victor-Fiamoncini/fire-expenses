<template>
	<form>
		<div class="card">
			<h1>VFinances</h1>
			<div class="card-body">
				<div class="form-group">
					<input type="text" class="form-control" placeholder="E-mail">
				</div>
				<div class="form-group">
					<input type="password" class="form-control" placeholder="Senha">
				</div>
				<button class="btn btn-primary btn-block">
					Entrar
				</button>
			</div>
		</div>
	</form>
</template>

<script>
export default {
	name: 'Logon',
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';

form {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	.card {
		width: 50%;
		padding-top: 18px;
		h1 {
			text-align: center;
			color: $darker;
		}
	}
}
</style>
