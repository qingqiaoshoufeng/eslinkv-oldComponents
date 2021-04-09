<template lang="pug">
.widget-part(:style="styles")
	.chart(:id="id")
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetMixin } from 'eslinkv-sdk'
import options from './options'

@Component
export default class O3DPie1 extends mixins(widgetMixin) {
	@Watch('data', { deep: true, immediate: true })
	onDataChange(val) {
		if (this.id) {
			this.$nextTick(() => {
				options(this.id, val, this.config.config)
			})
		}
	}

	created() {
		this.configValue = this.parseConfigValue(value, customConfig, true)
	}
}
</script>
<style lang="scss" scoped>
.chart{
	height: 100%;
}
</style>
