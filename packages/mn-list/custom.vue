<template lang="pug">
widget-normal.b-title-2.fn-flex(:value="value", :customConfig="customConfig")
	.mn-list
		.list-item(
			v-for="(item, index) in data",
			:key="index",
			:style="{ marginTop: `${config.config.marginTop}px` }")
			.site {{ item.label }}
			.number 
				.text {{ item.value.toLocaleString() }}
				.unit {{ item.unit }}
			.bottom-line
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
}
</script>
<style lang="scss" scoped>
.mn-list {
	width: 100%;
	height: 100%;
	font-weight: 600;
	font-size: 24px;
	color: #ffffff;
	.list-item {
		// width: 100%;
		height: 45px;
		padding-right: 38px;
		padding-left: 3px;
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		.site,
		.unit {
			font-size: 20px;
			line-height: 28px;
			color: #5ee2fd;
		}
		.number {
			.text {
				font-family: 'font-num';
				font-weight: bold;
				font-size: 32px;
				line-height: 37px;
			}
			.unit {
				position: absolute;
				bottom: 1px;
				right: 4px;
				color: #ffffff;
			}
		}
		.bottom-line {
			position: absolute;
			width: 100%;
			height: 1px;
			bottom: -1px;
			left: 0;
			background: #0057a9;
			&::before {
				position: absolute;
				content: '';
				width: 3px;
				height: 3px;
				top: -1px;
				left: -1px;
				background: #00ddff;
			}
			&::after {
				position: absolute;
				content: '';
				width: 3px;
				height: 3px;
				top: -1px;
				right: -1px;
				background: #00ddff;
			}
		}
	}
}
</style>
