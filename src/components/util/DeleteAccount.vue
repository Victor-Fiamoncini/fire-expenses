<template>
	<div>
		<b-modal
			id="delete-account"
			size="md"
			title="Excluír conta"
			hide-footer
			v-model="show"
		>
			<b-row>
				<b-col>
					<p>
						Isso irá apagar todos os seus registros, bem como seus dados
						pessoais
					</p>
				</b-col>
				<div class="modal-footer w-100 px-3 pb-0">
					<b-button
						class="mr-2"
						type="submit"
						variant="primary"
						:disabled="loading"
						@click="doDeleteAccount"
					>
						<template v-if="loading">
							<font-awesome-icon icon="spinner" class="fa-spin" />
							Excluíndo...
						</template>
						<template v-else>
							Sim, excluír
						</template>
					</b-button>
					<b-button
						class="mr-0"
						variant="secondary"
						type="button"
						@click="doCloseModal"
					>
						Cancelar
					</b-button>
				</div>
			</b-row>
		</b-modal>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'DeleteAccount',
	data: () => ({
		show: false,
	}),
	computed: {
		...mapGetters('auth', ['loading']),
	},
	methods: {
		...mapActions('auth', ['actionDeleteAccount']),

		doCloseModal() {
			this.show = false
		},
		async doDeleteAccount() {
			if (await this.actionDeleteAccount()) {
				this.doCloseModal()
			}
		},
	},
}
</script>
