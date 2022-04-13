<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.chart(:id="id", v-if="config.config.show", ref="id")
	.info(:style="topStyle", v-if="config.config.show")
		.title.font-num(:style="{ ...topTitleStyle, ...bottomStyle }") {{ data && data.percent }}%
		.sub-title(
			v-for="(item, index) in config.config.title.split(',')",
			:key="index",
			:style="subTitleStyle"
		) {{ item }}
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import options from './options'

@Component({ components: { widgetNormal } })
export default class OPie3 extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	topStyle = {}
	bottomStyle = {}
	topTitleStyle = {
		// 'font-size': `${this.config.config.fontSize.split(',')[0]}px`,
	}
	subTitleStyle = {
		// 'font-size': `${this.config.config.fontSize.split(',')[1]}px`,
	}

	@Watch('data', { deep: true, immediate: true })
	onDataChange(val) {
		if (this.id) {
			const data = { ...val }
			this.$nextTick(() => {
				this.instance = echarts.init(this.$refs.id)
				this.setOption(data, this.config.config)
			})
		}
	}
	@Watch('config.config.show')
	setOptions() {
		this.instance = null
		this.$nextTick(() => {
			this.instance = echarts.init(this.$refs.id)
			console.log(this.$refs.id, this.data, this.config.config)
			this.setOption(this.data, this.config.config)
		})
	}
	mounted() {
		this.formatStyle()
	}
	setOption(data, config) {
		const o = options(data, config)
		this.instance && this.instance.setOption(o)
	}
	formatStyle() {
		const formatOptions = {
			topStyle: {
				keyMap: {
					'margin-top': 'titleTop',
				},
			},
			bottomStyle: {
				keyMap: {
					height: 'bottom',
				},
			},
			topTitleStyle: {
				keyMap: {
					'font-size': 'fontSize1',
				},
			},
			subTitleStyle: {
				keyMap: {
					'font-size': 'fontSize2',
					'margin-top': 'subBottom',
					height: 'bottom',
				},
			},
		}

		for (let keys in formatOptions) {
			Object.entries(formatOptions[keys].keyMap).forEach(
				([key, key2]) => {
					this[keys][key] = `${this.config.config[key2 as string]}px`
				},
			)
		}
		// this.topStyle = {
		// 	'margin-top': `${this.config.config.top}px`,
		// }
		// this.bottomStyle = {
		// 	'margin-bottom': `${this.config.config.bottom}px`,
		// }
		// ......
	}
}
</script>
<style lang="scss" scoped>
.chart {
	height: 100%;
}
.info {
	height: 100%;
	position: relative;
	transform: translateY(-100%);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.title {
		margin-bottom: 5px;
		margin-top: 10px;
		font-size: 32px;
		font-weight: bold;
		text-align: center;
		color: #fff;
	}
	.sub-title {
		text-align: center;
		font-size: 18px;
		color: rgba(255, 255, 255, 0.75);
	}
}
</style>
