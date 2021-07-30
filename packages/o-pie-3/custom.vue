<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.chart(:id="id")
	.title.font-num {{ data && data.percent }}%
	.sub-title {{ config.config.title }}
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

	
}
</script>
<style lang="scss" scoped>
.chart {
	height: 100%;
}
.title {
	font-size: 32px;
	font-weight: bold;
	position: absolute;
	top: 40%;
	left: 0;
	right: 0;
	text-align: center;
	color: #fff;
}
.sub-title {
	position: absolute;
	top: 60%;
	left: 0;
	right: 0;
	text-align: center;
	font-size: 18px;
	color: rgba(255, 255, 255, 0.75);
}
</style>
