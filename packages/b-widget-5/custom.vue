<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.row(v-show="config.config.show == 1")
		.block
			.icon-img 
				img(:src="config.config.text2")
			.cell
				.font-num {{ data.num1 }}
				.label {{ config.config.text1 }}
		.block
			.icon-img 
				img(:src="config.config.text5")
			.cell
				.font-num {{ data.num2 }}
				.label {{ config.config.text4 }}
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
}
</script>
<style lang="scss" scoped>
.row {
	display: flex;
	justify-content: space-between;
	text-align: left;
	height: 100%;
	width: 100%;
	.block {
		width: 100%;
		min-width: 300px;
		height: 100%;
		padding: 48px 68px 48px 68px;
		background: linear-gradient(
			180deg,
			#285066 0%,
			rgba(40, 80, 102, 0) 100%
		);
		margin-right: 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.icon-img {
			background: #103a52;
			/* style1/主色 */
			border: 1px solid #74fff2;
			box-sizing: border-box;
			border-radius: 8px;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 138px;
			height: 138px;
			flex-shrink: 0;
		}
		.cell {
		}
		.font-num {
			font-family: 'DIN Alternate';
			font-style: normal;
			font-weight: 700;
			font-size: 96px;
			line-height: 112px;
			color: #ffffff;
			margin-top: 49px;
		}
		.label {
			font-family: 'PingFang SC';
			font-style: normal;
			font-weight: 500;
			font-size: 48px;
			line-height: 67px;
			color: rgba(255, 255, 255, 0.75);
			white-space: nowrap;
		}
	}
	.block:last-child {
		margin-right: 0;
	}
}
</style>
