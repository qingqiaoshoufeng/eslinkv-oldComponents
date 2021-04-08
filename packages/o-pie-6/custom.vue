<template lang="pug">
.widget-part(:style="styles" v-if="data")
	.chart(:id="id")
	ul.legend
		li(v-for="(k, i) in data.value" :key="i")
			.legend-color(:style="{borderColor: config.config.colorTheme.colorDisk[i]}")
			.legend-name {{ k.name }}
			.legend-num.font-num {{ k.value.toLocaleString() }}
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetMixin } from 'eslinkv-sdk'
import options from './options'

@Component
export default class OLine2 extends mixins(widgetMixin) {
	@Watch('data', { deep: true, immediate: true })
	onDataChange(val) {
		if (this.id) {
			const data = { ...val }
			this.$nextTick(() => {
				this.instance = echarts.init(document.getElementById(this.id))
				this.setOption(data, this.config.config)
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
.widget-part {
	display: flex;
	align-items: center;
	.legend {
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin-bottom: 12px;
		margin-left: 50px;
		li {
			display: flex;
			align-items: center;
		}
		.legend-color {
			width: 12px;
			height: 12px;
			margin-right: 8px;
			background: transparent;
			border: 2px solid #2c99ff;
			border-radius: 50%;
		}
		.legend-name {
			flex: none;
			width: 100px;
			text-align: left;
			font-size: 16px;
			color: #fff;
		}
		.legend-num {
			font-weight: bold;
			font-size: 16px;
			color: #fff;
		}
	}
}
.chart {
	width: 160px;
	height: 160px;
}
</style>
