<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.mn-data-index
		.data-box
			.text {{ config.config.title }}
			.number {{ data.value.toLocaleString() }}{{ config.config.unit ? config.config.unit : '' }}
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
.mn-data-index {
	width: 100%;
	height: 100%;
	padding: 1px;
	// padding-right: 2px;
	border-radius: 2px;
	background: linear-gradient(
		to bottom,
		#01d3f9,
		#002191 30%,
		#002191 60%,
		#01d3f9
	);
	.data-box {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: linear-gradient(180deg, #000d7d 0%, #003aaa 100%);
		border-radius: 2px;
		padding: 0 16px;
	}
	.text {
		font-family: PingFang SC;
		font-weight: 600;
		font-size: 18px;
		line-height: 25px;
		color: #00ddff;
	}
	.number {
		font-family: 'font-num';
		font-weight: bold;
		font-size: 32px;
		line-height: 37px;
		color: #ffffff;
	}
}
</style>
