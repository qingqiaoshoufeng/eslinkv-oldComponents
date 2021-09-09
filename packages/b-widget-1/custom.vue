<template lang="pug">
widget-normal.main(
	:value="value",
	:customConfig="customConfig")
	.board
		.item
			.label {{ config.config.title1 }}
			.num {{ data.num1 }}
		.item
			.label {{ config.config.title2 }}
			.num {{ data.num2 }}
		.item
			.label {{ config.config.title3 }}
			.num.color {{ data.num3 }}
	.deal
		.deal-item
			.font-num {{ data.num4 }}
			.label {{ config.config.title4 }}
		.center(ref="chart")
		.deal-item
			.font-num.yellow {{ data.num6 }}
			.label {{ config.config.title4 }}
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import getOption from './options'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	
	@Watch('data', { immediate: true, deep: true })
	dataChange (val) {
		if (this.id) {
			this.$nextTick(() => {
				this.instance = echarts.init(this.$refs.chart)
				this.instance.setOption(
					getOption(this.data.num5, this.config.config),
				)
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.board {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 60px;
	background: #285066;
	border-radius: 16px;
	height: 218px;
	margin-bottom: 46px;
	.item {
		text-align: center;
	}
	.label {
		font-size: 36px;
		color: #FFFFFF;
		line-height: 16px;
		margin-bottom: 72px;
	}
	.num {
		font-weight: 500;
		font-size: 64px;
		line-height: 16px;
		color: #FFFFFF;
		font-family: font-num;
		&.color {
			color: #74FFF2;
		}
	}
}
.deal {
	display: flex;
	align-items: center;
	justify-content: space-between;
	.deal-item {
		.font-num {
			font-weight: 500;
			font-size: 64px;
			line-height: 1;
			color: #74FFF2;
			margin-bottom: 20px;
			&.yellow { color: #F3DB72; }
		}
		.label {
			line-height: 1;
			font-size: 36px;
			color: #FFFFFF;
		}
	}
	.center {
		width: 324px;
		height: 164px;
	}
}
</style>
