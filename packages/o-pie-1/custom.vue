<template lang="pug">
.widget-part(:style="styles")
	.chart(:id="id")
	.unit(:style="{[config.config.unitPosition]: 0}") {{ config.config.unit }}
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component.ts'
import { widgetMixin } from 'eslinkv-sdk'
import options from './options'

@Component
export default class OLine1 extends mixins(widgetMixin) {
	@Watch('data', { deep: true, immediate: true })
	onDataChange(val) {
		if (this.id) {
			const data = { ...val }
			this.$nextTick(() => {
				this.instance = echarts.init(document.getElementById(this.id))
				this.setOption(data, this.config.config)
				this.instance.off('click')
				this.instance.on('click', params => {
					this.__handleClick__(params.data)
				})
			})
		}
	}

	setOption(data, config) {
		const o = options(data, config)
		this.instance && this.instance.setOption(o)
	}

	created() {
		this.configValue = this.parseConfigValue(value, customConfig, true)
	}
}
</script>
<style lang="scss" scoped>
.chart {
	height: 100%;
	background-image: url('./loop-bg.svg');
	background-repeat: no-repeat;
	background-size: 44% 44%;
	background-position: 50% 50%;
}
.unit {
	position: absolute;
	right: 0;
	color: #fff;
}
</style>
