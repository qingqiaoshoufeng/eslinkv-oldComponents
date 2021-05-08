<template lang="pug">
.widget-part(:style="styles" v-if="data")
	.legend(v-if="data.percent")
		.item(v-for="(k, i) in data.value")
			.color(:style="{background: config.config.colorTheme.colorDisk[i]}")
			span {{k.name}}
		.item
			.colorline(:style="{background: config.config.lineColor}")
			span {{data.percent.name}}
	.o-zhuxing-1(:id="id")
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component.ts'
import { widgetMixin } from 'eslinkv-sdk'
import options from './options'

@Component
export default class OZhuxing1 extends mixins(widgetMixin) {
	@Watch('data', { deep: true, immediate: true })
	onDataChange(val) {
		if (this.id) {
			const data = { ...val }
			this.$nextTick(() => {
				this.instance = echarts.init(document.getElementById(this.id))
				this.setOption(data, this.config.config)
				this.instance.off('click')
				this.instance.on('click', params => {
					this.__handleClick__(params)
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
.o-zhuxing-1 {
	height: 100%;
}
.legend {
	position: absolute;
	left: 0;
	right: 0;
	top: 10px;
	display: flex;
	justify-content: center;
	font-size: 16px;
	line-height: 16px;
	color: #FFFFFF;
	.item {
		display: flex;
		align-items: center;
		margin-right: 16px;
		.color {
			width: 16px;
			height: 6px;
			margin-right: 4px;
		}
		.colorline {
			width: 16px;
			height: 2px;
			margin-right: 4px;
		}
	}
}
</style>
