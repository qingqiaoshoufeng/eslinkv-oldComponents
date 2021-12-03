<template lang="pug">
widget-normal(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes"
)
	.legend(v-if="data.percent && config.config.colorTheme")
		.item(v-for="(k, i) in data.value")
			.color(:style="{ background: config.config.colorTheme.colorDisk[i] }")
			span {{ k.name }}
		.item
			.colorline(:style="{ background: config.config.lineColor }")
			span {{ data.percent.name }}
	.o-zhuxing-1(:id="id")
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { value, customConfig } from './index.component.ts'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import options from './options'

@Component({ components: { widgetNormal } })
export default class extends widgetNormalMixin {
	value = value
	customConfig = customConfig
	eventTypes = [{ key: 'click', label: '点击事件' }]
	@Watch('data', { deep: true, immediate: true })
	onDataChange(val) {
		if (this.id) {
			const data = { ...val }
			this.$nextTick(() => {
				this.instance = echarts.init(document.getElementById(this.id))
				this.setOption(data, this.config.config)
				this.instance.off('click')
				this.instance.on('click', params => {
					this.__handleEvent__('click', {
						bar: data.value
							? data.value.map(v => v.list[params.dataIndex])[0]
							: null,
						percent: data.percent
							? data.percent.list[params.dataIndex]
							: null,
					})
				})
			})
		}
	}

	setOption(data, config) {
		const o = options(data, config)
		this.instance && this.instance.setOption(o)
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
	color: #ffffff;
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
