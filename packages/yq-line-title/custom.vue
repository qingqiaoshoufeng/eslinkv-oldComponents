<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.yq-line-title(:style="style")
		.title {{ config.config.name }}
		.chart(:id="id")
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import options from './options'
import { config } from 'vue/types/umd'

@Component({ components: { widgetNormal } })
export default class OLine2 extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	style = {}

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
	mounted() {
		this.style = {
			'padding-top': this.config.config.padding.split(',')[0] + 'px',
			'padding-right': this.config.config.padding.split(',')[1] + 'px',
			'padding-bottom': this.config.config.padding.split(',')[2] + 'px',
			'padding-left': this.config.config.padding.split(',')[3] + 'px',
		}
	}
	@Watch('config.config', { deep: true, immediate: true })
	onConfigChange(val) {
		if (this.id) {
			this.$nextTick(() => {
				this.instance = echarts.init(document.getElementById(this.id))
				this.setOption(this.data, this.config.config)
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
.yq-line-title {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	background: linear-gradient(
		90deg,
		rgba(40, 80, 102, 0.5) 0%,
		rgba(40, 80, 102, 0) 100%
	);
	.title {
		text-align: left;
		font-family: PingFang SC;
		font-style: normal;
		font-weight: normal;
		font-size: 40px;
		line-height: 56px;
		/* identical to box height */
		/* 白色0.75 */

		color: rgba(255, 255, 255, 0.75);
	}
	.chart {
		// height: 100%;
		width: 100%;
		height: 100%;
	}
}
</style>
