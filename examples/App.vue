<template lang="pug">
.home-container
	d-detail
	d-screen
</template>
<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import {
	dScreen,
	platform,
	commonConfigValue,
	configMerge,
	dDetail,
} from 'eslinkv-sdk'
import custom from '../packages/o-zhuxing-2/custom.vue'
import {
	value,
	customConfig,
	version,
	type,
} from '../packages/o-zhuxing-2/index.component'

@Component({ components: { dScreen, dDetail } })
export default class App extends Vue {
	platform = platform.state

	@Provide('kanboardEditor') kanboardEditor = this

	created() {
		Vue.component(`market-${type}-${version}`, custom)
		setTimeout(() => {
			const id = +new Date()
			const config = configMerge(value, commonConfigValue())
			config.layout.position.left = 500
			config.layout.position.top = 500
			config.customConfig = customConfig
			platform.state.widgetAdded = {
				[id]: {
					id,
					type,
					config,
					scene: 0,
					market: true,
				},
			}
		}, 2000)
	}
}
</script>
<style lang="scss">
.home-container {
	height: 100%;
	overflow: hidden;
}
</style>
