<template lang="pug">
widget-normal.b-title-2.fn-flex(:value="value", :customConfig="customConfig")
	.mn-ratio
		.mn-ratio-item(
			v-for="(item, index) in data",
			:key="index",
			:style="{ marginTop: `${config.config.marginTop}px` }")
			.text {{ item.label }}
			.ratio 
				.ratio-bar
					.color-bar(:style="{ width: `${barWidth(item.value)}px` }")
					.hide
						.bar-hide(v-for="item in 24", :key="item") 
				.number {{ item.value }}%
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { Editor } from '@eslinkv/core'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	editor = Editor.Instance()
	barWidth(value) {
		let barWidth = 0
		if (value == 0) {
			return 0
		} else if (value == 100) {
			return 388
		}
		barWidth =
			Math.floor(Number(value) / 4) * 15.8 +
			(8.8 / 4) * (Number(value) % 4)
		return barWidth
	}
}
</script>
<style lang="scss" scoped>
.mn-ratio {
	width: 100%;
	height: 100%;
	font-size: 18px;
	.text {
		height: 25px;
		line-height: 25px;
		text-align: left;
		font-family: PingFang SC;
		font-weight: 600;
		color: #5ee2fd;
	}
	.ratio {
		margin-top: 8px;
		height: 22px;
		line-height: 22px;
		padding-right: 35px;
		position: relative;
		display: flex;
		justify-content: space-between;
		.ratio-bar {
			height: 100%;
			width: 388px;
			position: relative;
			background: #002092;
			overflow: hidden;
			.color-bar {
				height: 100%;
				background: linear-gradient(
					270deg,
					#00ddff 0%,
					rgba(0, 221, 255, 0) 100%
				);
			}
			.hide {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: space-evenly;
				.bar-hide {
					height: 100%;
					width: 7px;
					background-color: #010975;
				}
			}
		}
		.number {
			position: absolute;
			top: 1px;
			right: 0;
			text-align: right;
			font-family: 'font-num';
			color: #ffffff;
		}
	}
}
</style>
