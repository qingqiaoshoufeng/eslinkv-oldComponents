<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.show-number
		.bot.one
		.bot.two
		.bot.three
		.bot.four
		.number-box 
			.number 
				span {{ data.value.toLocaleString() }}
				span.unit {{ config.config.unit }}
			.label {{ config.config.title }}
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
@Component({
	components: {
		widgetNormal,
	},
})
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
}
</script>
<style lang="scss" scoped>
.show-number {
	width: 100%;
	height: 100%;
	padding-left: 14px;
	padding-top: 10px;
	text-align: left;
	position: relative;
	.bot {
		position: absolute;
		width: 3px;
		height: 3px;
		background: #00ddff;
		&::before {
			position: absolute;
			content: '';
			bottom: -20px;
			left: 1px;
			width: 1px;
			height: 20px;
			background: #0057a9;
		}
		&::after {
			position: absolute;
			content: '';
			top: 1px;
			left: 3px;
			width: 20px;
			height: 1px;
			background: #0057a9;
		}
	}
	.one {
		top: 0;
		left: 0;
	}
	.two {
		transform: rotate(90deg);
		top: 0;
		right: 0;
	}
	.three {
		transform: rotate(180deg);
		bottom: 0;
		right: 0;
	}
	.four {
		transform: rotate(-90deg);
		bottom: 0;
		left: 0;
	}

	.number-box {
		.number {
			font-family: 'font-num';
			font-weight: bold;
			font-size: 36px;
			line-height: 42px;
			color: #ffffff;
			.unit {
				margin-left: 8px;
				font-size: 20px;
				line-height: 28px;
			}
		}
		.label {
			font-family: PingFang SC;
			font-size: 18px;
			line-height: 25px;
			margin-top: 8px;
			color: #5ee2fd;
		}
	}
}
</style>
